# Módulo 1 — Arquitectura, interfaz y gestión de datos

Blender no guarda «objetos en una escena»: guarda una base de datos de bloques independientes que se referencian entre sí. Casi todos los problemas de producción de este módulo (archivos que pesan demasiado, materiales que desaparecen, enlaces rotos, escenas lentas) se explican por esa base de datos. Por eso el módulo empieza por ella y deja la interfaz y los atajos para el final.

## 1.1 El archivo .blend y el sistema de data-blocks

### 1.1.1 Modelo de datos

Un archivo `.blend` es un volcado de la memoria de Blender junto con la descripción de sus propias estructuras (el «DNA»). Gracias a esa descripción, una versión nueva puede leer archivos antiguos. La compatibilidad hacia atrás es más limitada: los archivos guardados en la serie 5.x no se abren en versiones anteriores a la 4.5 LTS.

Al abrir un archivo, todo su contenido se carga en una base de datos llamada *Main*, accesible desde Python como `bpy.data`. Esa base contiene listas de **data-blocks** (bloques de tipo ID). Cada data-block tiene nombre, tipo, contador de usuarios y, si viene de otro archivo, una referencia a su biblioteca.

| Familia | Tipos de data-block (código interno) |
|---|---|
| Organización | Scene (SC), Collection (GR), Object (OB), World (WO), Library (LI), WorkSpace (WS), Screen (SR), WindowManager (WM) |
| Geometría (*object data*) | Mesh (ME), Curve heredada (CU), Curves (CV), Metaball (MB), Lattice (LT), PointCloud (PT), Volume (VO), Grease Pencil (GP), Armature (AR) |
| Apariencia | Material (MA), Texture (TE), Image (IM), NodeTree (NT), LineStyle (LS), Palette (PL), Brush (BR) |
| Luz y cámara | Light (LA), Camera (CA), LightProbe (LP) |
| Animación | Action (AC), Key —shape keys— (KE), CacheFile (CF), PaintCurve (PC) |
| Medios y otros | Sound (SO), Speaker (SK), MovieClip (MC), Mask (MS), VFont (VF), Text (TX), ParticleSettings (PA) |

La lista procede del código fuente de Blender 5.3 (`DNA_ID_enums.h`).

### 1.1.2 Objeto frente a datos de objeto

Un **Object** solo contiene transformación, visibilidad, modificadores, restricciones y ranuras de material. La geometría vive en otro data-block (Mesh, Curve, etc.) al que el objeto apunta. Varios objetos pueden apuntar a la misma malla; ese es el fundamento del instanciado (sección 1.4).

La cadena típica de referencias es: Scene → Collection → Object → Mesh → Material → NodeTree → Image.

### 1.1.3 Usuarios, Fake User y datos huérfanos

Cada data-block cuenta cuántos otros bloques lo usan. Las reglas son tres:

- Un bloque con **cero usuarios no se escribe en disco** al guardar. Sigue en memoria hasta que cierras o recargas el archivo.
- **Fake User** (icono de escudo) añade un usuario artificial para que el bloque sobreviva aunque nada lo use.
- Los nombres son únicos por tipo y por biblioteca. Si hay colisión, Blender añade `.001`, `.002`… El nombre admite hasta 255 bytes en la serie 5.x (63 en versiones anteriores).

#### Selector de data-block (ID template)

- **Ubicación:** en cualquier campo que apunta a un data-block: material activo, malla en la pestaña *Data*, acción, mundo, árbol de nodos.
- **Función técnica:** cambia el puntero del propietario hacia otro bloque del mismo tipo y ajusta los contadores de usuarios de ambos.
- **Parámetros críticos:** desplegable (elige un bloque existente); número de usuarios (al pulsarlo crea una copia de usuario único); escudo (*Fake User*); *New* (duplica el bloque actual, no crea uno vacío); `X` (desenlaza, no borra).
- **Pro-tip:** el número junto al nombre es el diagnóstico más rápido de por qué «al editar este material cambian otros objetos»: lo comparten. Pulsa el número para independizarlo solo donde lo necesitas.
- **Trampa común:** desenlazar un material o una acción con `X` y guardar. Si queda con cero usuarios y sin Fake User, se pierde al cerrar. Activa el escudo antes de desenlazar algo que quieras conservar.

#### Purga de datos sin uso

- **Ubicación:** `File > Clean Up > Purge Unused Data…` y `Manage Unused Data…`; también el modo *Unused Data* del Outliner.
- **Función técnica:** elimina de la memoria los bloques con cero usuarios reales.
- **Parámetros críticos:** *Local* / *Linked* (qué datos considerar) y *Recursive* (repite la purga hasta agotar las cadenas: borrar un material puede dejar huérfanas sus imágenes).
- **Pro-tip:** ejecuta la purga recursiva antes de entregar un archivo o de medir su tamaño. Es habitual recuperar cientos de megabytes de imágenes de pruebas descartadas.
- **Trampa común:** purgar con recursividad un archivo de biblioteca donde hay recursos «en reserva» sin Fake User ni marca de asset. Revisa la lista en *Manage Unused Data* antes de confirmar.

### 1.1.4 Datos originales y datos evaluados

Lo que editas son los datos **originales**. Para dibujar o renderizar, el *dependency graph* crea copias **evaluadas** con modificadores, animación, drivers y restricciones ya aplicados. Dos consecuencias prácticas:

- Las estadísticas, la exportación y el render usan la versión evaluada. La malla que ves en *Edit Mode* es la original.
- Blender comparte internamente los arrays de atributos entre copias mientras no se modifiquen (compartición implícita). Duplicar una malla pesada no duplica de inmediato su memoria; la copia real ocurre al editar.

## 1.2 Outliner

El Outliner es el explorador de la base de datos. Su utilidad depende del modo de visualización elegido.

| Modo | Qué muestra | Uso en producción |
|---|---|---|
| View Layer | Colecciones y objetos de la capa de vista activa | Organización diaria, visibilidad, selección |
| Scenes | Todas las escenas con su contenido | Archivos con varias escenas |
| Video Sequencer | Bloques usados por el secuenciador | Montaje |
| Blender File | Todos los data-blocks por tipo, locales y enlazados | Auditoría, renombrado, bibliotecas |
| Data API | Árbol completo de propiedades RNA | Encontrar rutas para drivers y scripts |
| Library Overrides | Overrides por propiedades o por jerarquías | Diagnóstico de personajes enlazados |
| Unused Data | Bloques con cero usuarios | Rescate o purga |

#### Outliner: navegación y organización

- **Ubicación:** editor *Outliner* (por defecto arriba a la derecha). Con el cursor encima: `F2` renombra, `Ctrl+F` filtra, `Numpad .` muestra el objeto activo, `Numpad +` / `Numpad -` expande o contrae un nivel, `Shift+A` expande o contrae todo.
- **Función técnica:** refleja las relaciones entre bloques y permite cambiarlas arrastrando: mover objetos entre colecciones, emparentar, enlazar datos.
- **Parámetros críticos:** `C` crea una colección; `M` mueve a colección; `Shift+M` enlaza a una colección adicional; arrastrar un objeto sobre otro lo emparenta; `Ctrl` al arrastrar enlaza en lugar de mover; menú *Filter* (qué tipos y qué columnas de restricción se ven).
- **Pro-tip:** activa en *Filter* las columnas que no vienen por defecto (*Selectable*, *Disable in Viewports*, *Holdout*, *Indirect Only*). Sin ellas no puedes ver por qué un objeto no se selecciona o no aparece.
- **Trampa común:** borrar una colección con `X` creyendo que borra su contenido. La opción por defecto elimina solo la colección y sube los objetos al nivel padre; para borrar todo usa *Delete Hierarchy* en el menú contextual.

#### Restricciones de visibilidad (columnas del Outliner)

- **Ubicación:** columnas a la derecha de cada fila; se eligen en *Filter*.
- **Función técnica:** cada icono controla un nivel distinto de evaluación del objeto o la colección.
- **Parámetros críticos:**
    - **Casilla (Exclude):** saca la colección de la capa de vista. Sus objetos no se evalúan; es la que más memoria y tiempo ahorra. `E` excluye y `Alt+E` incluye.
    - **Ojo (Hide in Viewport):** ocultación temporal, propia de cada capa de vista. Es la que usa `H`.
    - **Monitor (Disable in Viewports):** desactiva en todos los viewports y capas; se guarda y se respeta al enlazar.
    - **Cámara (Disable in Renders):** excluye del render final.
    - **Flecha (Selectable):** impide la selección en el viewport.
    - **Holdout** e **Indirect Only:** por colección y capa de vista (sección 1.3).
- **Pro-tip:** `Ctrl+clic` sobre un icono aísla esa colección; `Shift+clic` propaga el cambio a los hijos.
- **Trampa común:** confundir el ojo con la cámara. Un objeto oculto con el ojo **sí se renderiza** si su cámara está activa. Para que algo no salga en el render hay que desactivar la cámara o excluir la colección.

## 1.3 Escenas, colecciones y View Layers

#### Scene

- **Ubicación:** selector de escena en la barra superior, a la derecha.
- **Función técnica:** data-block que agrupa una colección raíz (*Scene Collection*), ajustes de render, unidades, rango de fotogramas, mundo, cámara activa, capas de vista y árbol de composición.
- **Parámetros críticos:** al crear una escena: *New* (vacía), *Copy Settings* (vacía con los mismos ajustes), *Linked Copy* (comparte los objetos; solo cambia la organización) y *Full Copy* (duplica todo). *Background Scene* en las propiedades de escena muestra otra escena detrás.
- **Pro-tip:** usa *Linked Copy* para variantes de iluminación o de cámara del mismo set: la geometría existe una sola vez y cada escena lleva su propio mundo y sus ajustes de render.
- **Trampa común:** *Full Copy* sobre una escena pesada duplica mallas, materiales y acciones, con sufijos `.001`. El archivo crece y aparecen dos versiones de cada recurso que divergen sin que nadie lo note.

#### Collection

- **Ubicación:** Outliner; en el viewport `M` (mover), `Shift+M` (enlazar) y `Ctrl+G` (crear colección con la selección).
- **Función técnica:** contenedor de objetos y de otras colecciones. No tiene transformación propia. Un objeto puede pertenecer a varias colecciones y una colección puede colgar de varios padres.
- **Parámetros críticos:** restricciones (*Selectable*, *Disable in Renders*); *Instancing Offset* (el origen que usará la colección cuando se instancie); *Exporters* (exportadores por colección: glTF, FBX, USD, Alembic y otros, con ajustes guardados); etiqueta de color.
- **Pro-tip:** define un exportador en cada colección de entrega (por ejemplo `EXPORT_prop_silla`). El botón *Export All* repite todas las exportaciones con los mismos ajustes y elimina el error humano del diálogo de exportación.
- **Trampa común:** usar colecciones como si fueran grupos con pivote. No se pueden mover ni animar. Si necesitas transformar un conjunto, emparéntalo a un Empty o instancia la colección.

#### Collection Instance

- **Ubicación:** `Add > Collection Instance`, o arrastrar una colección desde el Asset Browser.
- **Función técnica:** crea un Empty que dibuja la colección completa en su posición. La geometría no se duplica.
- **Parámetros críticos:** *Instancing Offset* de la colección de origen; tamaño de visualización del Empty; `Ctrl+Shift+A` (*Make Instances Real*) convierte la instancia en objetos reales.
- **Pro-tip:** guarda la colección de origen en una colección excluida de la capa de vista (una «biblioteca» interna). Las instancias siguen funcionando y el original no estorba ni se renderiza dos veces.
- **Trampa común:** olvidar el *Instancing Offset*. Si los objetos se modelaron lejos del origen del mundo, la instancia aparece desplazada respecto al Empty y es difícil de colocar.

#### View Layer

- **Ubicación:** selector junto al de escena; ajustes en la pestaña *View Layer* del editor de propiedades.
- **Función técnica:** subconjunto renderizable de la escena. Cada capa decide qué colecciones incluye y cómo, y qué pases genera.
- **Parámetros críticos:** *Exclude* por colección; *Holdout* (la colección recorta con alfa cero); *Indirect Only* (invisible a cámara, pero aporta sombras, reflejos y rebotes); pases, AOV y Cryptomatte; *Material Override*; *Samples* (Cycles); *Light Groups*; filtros (*Environment*, *Surfaces*, *Curves*, *Volumes*, *Motion Blur*).
- **Pro-tip:** separa personaje y entorno en dos capas. En la capa del personaje, pon el entorno en *Indirect Only*: el personaje recibe la luz rebotada y las sombras correctas, pero el fondo no se renderiza otra vez.
- **Trampa común:** creer que cada capa tiene su propio estado de «cámara». *Disable in Renders* es global. Lo que cambia de una capa a otra es *Exclude*, *Holdout*, *Indirect Only* y el ojo.

## 1.4 Duplicados, instancias y optimización de memoria

| Método | Atajo | Qué se comparte | Coste en memoria | Cuándo usarlo |
|---|---|---|---|---|
| Duplicate | `Shift+D` | Nada de geometría (según preferencias) | Completo | Variantes que se editarán por separado |
| Duplicate Linked | `Alt+D` | Los datos de objeto (malla); materiales si están en los datos | Solo el objeto | Repeticiones idénticas colocadas a mano |
| Collection Instance | `Add > Collection Instance` | La colección entera | Un Empty | Conjuntos repetidos, assets enlazados |
| Instancias de Geometry Nodes | *Instance on Points* | Geometría de referencia | Mínimo por instancia | Miles o millones de copias (vegetación, escombros) |
| Array / Mirror | Modificador | Nada: genera geometría real | Completo | Piezas que deben soldarse o deformarse |

#### Duplicate (Shift+D)

- **Ubicación:** `Object > Duplicate Objects`, `Shift+D`.
- **Función técnica:** crea un objeto nuevo y copia los data-blocks marcados en `Preferences > Editing > Duplicate Data`.
- **Parámetros críticos:** la lista *Duplicate Data*. Por defecto la malla se duplica y el material no.
- **Pro-tip:** si un equipo trabaja con variaciones de material por objeto, activa *Material* en *Duplicate Data* para que cada duplicado nazca independiente.
- **Trampa común:** editar el material de un duplicado y descubrir que cambió también el original. Con los ajustes por defecto el material sigue compartido.

#### Duplicate Linked (Alt+D)

- **Ubicación:** `Object > Duplicate Linked`, `Alt+D`.
- **Función técnica:** crea un objeto nuevo que apunta a los mismos datos de objeto. La transformación, los modificadores y las restricciones son de cada objeto.
- **Parámetros críticos:** ninguno en el operador. Para deshacer el vínculo: tecla `U` (*Make Single User*) con las opciones *Object*, *Object & Data*, *Object & Data & Materials*, *Materials*, *Object Animation* y *Object Data Animation*.
- **Pro-tip:** para que una ranura de material sea distinta en cada duplicado enlazado, cambia su vínculo de *Data* a *Object* en el desplegable junto al nombre del material. Así compartes malla y varías material.
- **Trampa común:** aplicar la escala o un modificador en un objeto con datos compartidos. Blender lo impide («multi-user data») o lo independiza, y el instanciado se pierde. Además, los modificadores no se comparten: cambiar el Bevel de uno no cambia el de los demás.

#### Link/Transfer Data (Ctrl+L)

- **Ubicación:** `Object > Link/Transfer Data`, `Ctrl+L`.
- **Función técnica:** hace que los objetos seleccionados compartan datos con el objeto activo, o copia datos desde él.
- **Parámetros críticos:** *Link Object Data*, *Link Materials*, *Link Animation Data*, *Link Collections*, *Link Instance Collection*, *Copy Modifiers*, *Copy UV Maps*, *Transfer Mesh Data*, *Transfer Mesh Data Layout*, *Link Objects to Scene*.
- **Pro-tip:** *Link Object Data* convierte a posteriori cien copias hechas con `Shift+D` en instancias reales. Es la corrección estándar cuando alguien pobló la escena con duplicados completos.
- **Trampa común:** olvidar que la fuente es el objeto **activo** (el último seleccionado). Con el orden equivocado sobrescribes la malla buena con la mala.

#### Make Instances Real y Make Single User

- **Ubicación:** `Object > Apply > Make Instances Real` (`Ctrl+Shift+A`); `Object > Relations > Make Single User` (`U`).
- **Función técnica:** el primero convierte instancias (de colección, de Geometry Nodes, de partículas) en objetos; el segundo duplica datos compartidos para independizarlos.
- **Parámetros críticos:** en *Make Instances Real*: *Parent* y *Keep Hierarchy*. Los objetos resultantes siguen compartiendo malla.
- **Pro-tip:** tras *Make Instances Real* tienes objetos con malla compartida, que es justo lo que los exportadores a motores de juego convierten en instancias. No ejecutes *Make Single User* después salvo que necesites editarlos.
- **Trampa común:** realizar un sistema de dispersión completo «para ajustar dos piedras». Obtienes decenas de miles de objetos y el viewport se arrastra, porque Blender escala mal con el número de objetos. Realiza solo la parte que vayas a tocar.

### 1.4.1 Palancas de optimización de memoria y rendimiento

- **Excluir colecciones** de la capa de vista en lugar de ocultarlas: lo excluido no se evalúa.
- **Simplify** (`Render Properties > Simplify`): limita la subdivisión máxima, el tamaño de textura, las partículas hijas y la resolución de volúmenes, por separado para viewport y render. En Cycles añade *Camera Culling* y *Distance Culling*.
- **Modificadores:** cada modificador tiene interruptores de viewport, render y *Edit Mode*. Desactiva en viewport los caros (Subdivision alto, Boolean, Remesh) mientras modelas.
- **Imágenes:** una textura 8K RGBA de 8 bits ocupa unos 256 MB sin comprimir en memoria, aunque el archivo pese mucho menos. Usa la resolución que la toma necesita y limita el tamaño en el viewport desde `Preferences > Viewport > Textures`.
- **Deshacer:** `Preferences > System > Memory & Limits` controla *Undo Steps* y *Undo Memory Limit*. En escenas de escultura pesadas, bajar los pasos libera gigabytes.
- **Compresión al guardar:** la casilla *Compress* del diálogo *Save As* reduce el tamaño en disco a cambio de algo de tiempo de guardado.
- **Estadísticas:** activa `Overlays > Statistics` y, en la barra de estado (clic derecho), la memoria de sistema y de vídeo. Mide antes y después de cada cambio.

## 1.5 Link, Append y gestión de bibliotecas

| Operación | Resultado | Editable | Se actualiza con el origen |
|---|---|---|---|
| Append | Copia local independiente | Sí | No |
| Append (Reuse Data) | Copia local que reutiliza dependencias ya importadas | Sí | No |
| Link | Referencia a un archivo externo | No, salvo con overrides | Sí, al recargar |
| Pack (método de importación de assets) | Dato enlazado y empaquetado dentro del archivo actual | No | No depende de la ruta externa |

#### Append

- **Ubicación:** `File > Append…` (`Shift+F1`).
- **Función técnica:** copia en el archivo actual los data-blocks elegidos y todas sus dependencias.
- **Parámetros críticos:** *Localize All* (también vuelve locales las dependencias indirectas), *Active Collection*, *Instance Collections*, *Fake User*.
- **Pro-tip:** para traer un personaje completo, haz Append de su **colección**, no de los objetos sueltos. Llegan juntos la jerarquía, las restricciones y los drivers.
- **Trampa común:** hacer Append varias veces del mismo recurso. Cada vez entra otra copia de sus materiales e imágenes (`.001`, `.002`). Usa *Append (Reuse Data)* desde el Asset Browser, o Link.

#### Link

- **Ubicación:** `File > Link…` (`Ctrl+Alt+O`).
- **Función técnica:** crea un data-block *Library* que apunta al archivo externo y carga desde él, en modo solo lectura, los bloques elegidos.
- **Parámetros críticos:** *Relative Path* (rutas que empiezan por `//`, relativas al archivo actual), *Instance Collections* (crea un Empty que instancia la colección), *Active Collection*.
- **Pro-tip:** estructura los archivos de asset con una colección raíz por asset y enlaza esa colección. Es la unidad que después admite *Library Override* limpio.
- **Trampa común:** mover o renombrar carpetas sin rutas relativas. Los enlaces se rompen y los objetos aparecen como marcadores vacíos. Corrígelo en el Outliner, modo *Blender File*: clic derecho sobre la biblioteca y *Relocate*.

#### Make Local

- **Ubicación:** `Object > Relations > Make Local` (tecla `L`).
- **Función técnica:** convierte bloques enlazados en locales y corta la relación con la biblioteca.
- **Parámetros críticos:** *Selected Objects*, *Selected Objects and Data*, *Selected Objects, Data and Materials*, *All*.
- **Pro-tip:** úsalo solo al final de una producción para «congelar» un plano entregado. Mientras el asset siga vivo, un override conserva las actualizaciones.
- **Trampa común:** volver local solo el objeto y dejar enlazada la malla. El objeto ya se puede mover, pero al entrar en *Edit Mode* la malla sigue bloqueada.

#### External Data: empaquetado y rutas

- **Ubicación:** `File > External Data`.
- **Función técnica:** incrusta en el `.blend` los archivos externos, o los extrae; convierte rutas; localiza archivos perdidos.
- **Parámetros críticos:** *Automatically Pack Resources*, *Pack Resources*, *Unpack Resources*, *Pack Linked Libraries*, *Unpack Linked Libraries*, *Make Paths Relative*, *Make Paths Absolute*, *Report Missing Files*, *Find Missing Files…*
- **Pro-tip:** antes de enviar una escena a una granja de render: *Make Paths Relative*, *Report Missing Files* y, si la granja lo exige, *Pack Resources*.
- **Trampa común:** empaquetar por costumbre durante el trabajo. Cada guardado reescribe todas las texturas y el archivo deja de ser manejable en control de versiones.

## 1.6 Library Overrides

Un override es una copia local de un data-block enlazado que guarda **solo las diferencias** respecto al original. Sustituye al antiguo sistema de proxies y es la base del trabajo con personajes enlazados.

#### Library Override: Make, Reset, Clear

- **Ubicación:** `Object > Library Override > Make / Reset / Clear`; también en el menú contextual del Outliner y con `Shift+clic` sobre el icono de enlace del selector de data-block.
- **Función técnica:** crea una jerarquía de overrides (colección, objetos, armature y lo que haga falta) enlazada al original y almacena, propiedad por propiedad, lo que cambias.
- **Parámetros críticos:** qué se puede sobrescribir: transformaciones, pose de huesos, propiedades de modificadores y restricciones existentes, modificadores y restricciones **añadidos**, asignación de materiales, propiedades personalizadas. No se puede editar la geometría de una malla enlazada, ni quitar o reordenar los modificadores que vienen de la biblioteca.
- **Pro-tip:** en el archivo de asset, el rigger decide qué es animable marcando las propiedades como *Library Overridable* (clic derecho sobre la propiedad). Así el animador solo puede tocar los controles.
- **Trampa común:** hacer el override de un solo objeto dentro de un rig. Las relaciones internas (padres, restricciones, drivers) quedan apuntando a los datos enlazados. Haz siempre el override sobre la colección raíz para que Blender construya la jerarquía completa.

#### Resync y diagnóstico de overrides

- **Ubicación:** Outliner, modo *Library Overrides*, con dos vistas: *Properties* (qué propiedades están sobrescritas) y *Hierarchies* (estado de cada jerarquía). Menú contextual: `Library Override > Troubleshoot > Resync` y *Resync Enforce*.
- **Función técnica:** al cambiar el archivo origen (objetos nuevos, relaciones nuevas), el resync reconstruye la jerarquía local para que coincida y reaplica las diferencias guardadas.
- **Parámetros críticos:** el resync automático ocurre al abrir el archivo. *Resync Enforce* descarta los overrides que impiden reconstruir la jerarquía. El filtro *System Overrides* muestra los que Blender crea solo para mantener punteros.
- **Pro-tip:** mantén estables los **nombres** de objetos y huesos del archivo origen. El sistema empareja por nombre; un renombrado masivo en el rig rompe la animación de todos los planos que lo enlazan.
- **Trampa común:** editar el archivo de asset con un plano abierto en otra instancia de Blender y esperar verlo actualizado. Hay que recargar la biblioteca (Outliner, *Blender File*, clic derecho, *Reload*) o reabrir el archivo.

## 1.7 Asset Browser

#### Marcar y describir assets

- **Ubicación:** clic derecho sobre un data-block y *Mark as Asset* (objetos, colecciones, materiales, mundos, grupos de nodos, acciones de pose, pinceles); `Object > Asset > Mark as Asset`.
- **Función técnica:** añade metadatos de asset al bloque y le da un usuario propio. No lo copia a ningún sitio: el asset vive en el archivo donde se marcó.
- **Parámetros críticos:** en la barra lateral del Asset Browser: descripción, autor, licencia, copyright, etiquetas y vista previa (generada, cargada desde imagen o renderizada desde el objeto activo). *Clear Asset* quita la marca; *Clear Asset (Set Fake User)* la quita sin perder el dato.
- **Pro-tip:** un grupo de Geometry Nodes marcado como asset aparece directamente en el menú *Add Modifier* y en el menú de nodos de cualquier archivo. Es la forma de repartir herramientas propias a todo el estudio sin instalar add-ons.
- **Trampa común:** marcar como asset un objeto cuya malla, materiales o texturas están enlazados desde otro archivo con rutas absolutas. Al importarlo en otro equipo llega vacío.

#### Bibliotecas de assets y catálogos

- **Ubicación:** `Preferences > File Paths > Asset Libraries`; catálogos en el panel izquierdo del Asset Browser.
- **Función técnica:** una biblioteca es una carpeta. Blender indexa todos los `.blend` que contiene y lee los catálogos del archivo `blender_assets.cats.txt` de su raíz.
- **Parámetros críticos:** *Import Method* por biblioteca: *Link*, *Append*, *Append (Reuse Data)* o *Pack*; en el propio navegador se puede dejar en *Follow Preferences* o forzar otro. Bibliotecas especiales: *Current File*, *All* y *Essentials*. Desde la serie 5.2 existen además bibliotecas remotas, con un filtro de acceso (*Online and Offline*, *Online Only*) que requiere *Allow Online Access* en `Preferences > System`.
- **Pro-tip:** un asset pertenece a un catálogo por un identificador único, no por la carpeta donde está. Puedes reorganizar los `.blend` en disco sin perder la clasificación; versiona `blender_assets.cats.txt` junto a la biblioteca.
- **Trampa común:** dejar el método por defecto en *Append* para una biblioteca de entorno. Cada arrastre trae copias de mallas y materiales. Para sets usa *Link* (ligero y actualizable); para materiales, *Append (Reuse Data)*.

#### Arrastrar assets a la escena y Asset Shelf

- **Ubicación:** editor *Asset Browser*; *Asset Shelf* en la parte inferior del viewport para poses y pinceles.
- **Función técnica:** el comportamiento depende del tipo: los objetos se colocan con ajuste a la superficie bajo el cursor; los materiales se asignan al objeto o a la ranura sobre la que se sueltan; las colecciones entran como instancia si está activa la opción *Instance Collections*; los grupos de nodos se sueltan en un editor de nodos.
- **Parámetros críticos:** opciones de ajuste al soltar; *Instance Collections on Linking / Appending*; filtro por tipo de asset.
- **Pro-tip:** un archivo cuyo nombre termina en `_bundle.blend` activa `File > Copy Bundle to Asset Library`, que copia el archivo a una biblioteca y fusiona sus catálogos. Es el formato adecuado para repartir paquetes de assets.
- **Trampa común:** enlazar una colección con *Instance Collections* activo y después querer animar su armature. Una instancia no se puede posar: hay que enlazar sin instanciar y crear un *Library Override*.

#### Vistas previas en lote

- **Ubicación:** `File > Data Previews`.
- **Función técnica:** genera o borra las miniaturas guardadas en los `.blend`, en el archivo actual o en carpetas completas.
- **Parámetros críticos:** *Refresh Data-Block Previews*, *Batch-Generate Previews…*, *Clear Data-Block Previews…*, *Batch-Clear Previews…*
- **Pro-tip:** tras reorganizar una biblioteca grande, ejecuta *Batch-Generate Previews* sobre la carpeta en lugar de abrir archivo por archivo.
- **Trampa común:** olvidar que la vista previa se guarda dentro del `.blend`. Si no guardas el archivo de biblioteca después de generarla, no aparece en otros archivos.

### 1.7.1 Proyectos (Blender 5.3)

Blender 5.3 añade el menú `File > Project` con las entradas *New…*, *Open…* y *Close*. He comprobado que el menú existe en el código de la versión 5.3, pero no he podido verificar su funcionamiento ni sus ajustes, así que no lo documento aquí. Queda marcado como punto pendiente de revisar contra el manual oficial.

## 1.8 Interfaz: ventanas, áreas, editores y regiones

La jerarquía es: ventana → pantalla (*workspace*) → áreas → editor → regiones (cabecera, barra de herramientas, barra lateral, región principal, *asset shelf*).

#### Áreas y workspaces

- **Ubicación:** bordes y esquinas de cada área; pestañas de workspace en la barra superior.
- **Función técnica:** divide la ventana en áreas, cada una con un editor. Un workspace guarda una disposición de áreas, el modo de objeto asociado y los add-ons visibles.
- **Parámetros críticos:** arrastrar una esquina hacia dentro divide; arrastrarla sobre el área vecina la une o la acopla; `Ctrl+Space` maximiza el área bajo el cursor; `Ctrl+Alt+Space` la pone a pantalla completa sin cabeceras; `Shift+clic` en una esquina saca el área a una ventana nueva.
- **Pro-tip:** en un workspace, la opción *Filter Add-ons* limita los paneles de add-ons visibles. Un workspace de animación sin paneles de modelado es más rápido de leer y de dibujar.
- **Trampa común:** personalizar la disposición y no guardarla. Los workspaces viajan dentro del `.blend`. Para que sea tu punto de partida usa `File > Defaults > Save Startup File`.

#### Regiones del viewport 3D

- **Ubicación:** `T` barra de herramientas, `N` barra lateral, cabecera con modos, *shading* y *overlays*.
- **Función técnica:** separa las herramientas activas (se quedan seleccionadas y usan *gizmos*) de los operadores (se ejecutan una vez desde menús o atajos).
- **Parámetros críticos:** panel *Adjust Last Operation* (`F9`) para corregir los parámetros del último operador; *Tool Settings* en la cabecera; pestañas *Item*, *Tool* y *View* de la barra lateral.
- **Pro-tip:** el panel `F9` es paramétrico mientras no hagas otra operación: puedes cambiar segmentos, ejes o valores numéricos del último comando sin deshacer. Con `Ctrl+rueda` sobre un campo ajustas el valor sin escribir.
- **Trampa común:** mover la vista o hacer clic en otro elemento y esperar que `F9` siga disponible. Solo afecta al último operador registrado; si ya hiciste otra cosa, hay que deshacer y repetir.

#### Campos de propiedades

- **Ubicación:** cualquier campo numérico, casilla o selector de la interfaz.
- **Función técnica:** todos los controles comparten el mismo sistema de propiedades (RNA), y por eso admiten las mismas operaciones.
- **Parámetros críticos:** arrastrar en vertical sobre varios campos los edita a la vez; `Alt` al cambiar un valor lo aplica a todos los objetos seleccionados; `Backspace` restaura el valor por defecto; `Ctrl+C` / `Ctrl+V` con el cursor encima copia y pega; `I` inserta un fotograma clave; `Ctrl+D` añade un driver; `Ctrl+Shift+C` copia la ruta de datos; los campos numéricos aceptan expresiones y unidades (`2*pi`, `1m+25cm`).
- **Pro-tip:** `Alt` + cambio de valor es la edición multiobjeto: cambia el nivel de Subdivision o el interruptor de render de cincuenta objetos en un gesto.
- **Trampa común:** escribir unidades con las unidades de escena en *None*: el sufijo se ignora o da error. Y, en el sentido contrario, olvidar que con unidades métricas `10` significa 10 metros, no 10 centímetros.

## 1.9 Atajos críticos

Todos los atajos de este documento corresponden al mapa de teclado por defecto de Blender 5.3 con selección con clic izquierdo, comprobados contra el archivo `blender_default.py` del código fuente.

### 1.9.1 Globales y de archivo

| Acción | Atajo |
|---|---|
| Buscar operador | `F3` |
| Renombrar activo / renombrado en lote | `F2` / `Ctrl+F2` |
| Ajustar última operación | `F9` |
| Repetir última operación | `Shift+R` |
| Deshacer / rehacer | `Ctrl+Z` / `Ctrl+Shift+Z` |
| Guardar / guardar como | `Ctrl+S` / `Ctrl+Shift+S` |
| Abrir / enlazar / anexar | `Ctrl+O` / `Ctrl+Alt+O` / `Shift+F1` |
| Maximizar área / pantalla completa | `Ctrl+Space` / `Ctrl+Alt+Space` |
| Favoritos rápidos | `Q` |
| Salir | `Ctrl+Q` |

### 1.9.2 Navegación y visualización del viewport

| Acción | Atajo |
|---|---|
| Encuadrar selección / encuadrar todo | `Numpad .` / `Home` |
| Vista local (aislar selección) | `/` o `Numpad /` |
| Menú circular de *shading* | `Z` |
| Alternar *wireframe* / rayos X | `Shift+Z` / `Alt+Z` |
| Barra de herramientas / barra lateral | `T` / `N` |
| Menú circular de modo | `Ctrl+Tab` |
| Entrar o salir de *Edit Mode* | `Tab` |
| Ocultar / mostrar todo / ocultar no seleccionados | `H` / `Alt+H` / `Shift+H` |

### 1.9.3 Object Mode

| Acción | Atajo |
|---|---|
| Añadir | `Shift+A` |
| Duplicar / duplicar enlazado | `Shift+D` / `Alt+D` |
| Unir objetos | `Ctrl+J` |
| Aplicar transformaciones | `Ctrl+A` |
| Borrar posición / rotación / escala | `Alt+G` / `Alt+R` / `Alt+S` |
| Emparentar / desemparentar | `Ctrl+P` / `Alt+P` |
| Emparentar sin inversa | `Ctrl+Shift+P` |
| Mover a colección / enlazar a colección | `M` / `Shift+M` |
| Crear colección con la selección | `Ctrl+G` |
| Enlazar o transferir datos | `Ctrl+L` |
| Hacer usuario único | `U` |
| Hacer local | `L` |
| Convertir | `Alt+C` |
| Realizar instancias | `Ctrl+Shift+A` |
| Transferir datos de malla | `Ctrl+Shift+T` |
| Seleccionar enlazados / agrupados | `Shift+L` / `Shift+G` |
| Insertar fotograma clave / menú de claves | `I` / `K` |

### 1.9.4 Transformación (modal)

| Acción | Atajo |
|---|---|
| Mover / rotar / escalar | `G` / `R` / `S` |
| Restringir a eje / a plano | `X` `Y` `Z` / `Shift+X` `Shift+Y` `Shift+Z` |
| Rotación libre (*trackball*) | `R` dos veces |
| Deslizar vértice o arista | `G` dos veces |
| Alternar ajuste (*snap*) | `Shift+Tab`; `Ctrl` mantenido lo invierte |
| Elegir punto base del ajuste | `B` durante la transformación |
| Edición proporcional | `O`; tamaño con la rueda o `Page Up` / `Page Down` |
| Precisión | `Shift` mantenido |
| Valor numérico | escribir la cifra durante la transformación |

## 1.10 Personalización del flujo de trabajo

#### Keymap

- **Ubicación:** `Preferences > Keymap`.
- **Función técnica:** asigna eventos de entrada a operadores, por editor y por modo. Las preferencias superiores cambian grupos enteros de atajos.
- **Parámetros críticos:** *Select With* (izquierdo o derecho); *Spacebar Action* (*Play*, *Tools* o *Search*); *Pie Menu on Drag*; *Tab for Pie Menu*; *Extra Shading Pie Menu Items*; búsqueda por nombre o por tecla; exportar e importar el mapa.
- **Pro-tip:** para asignar un atajo no hace falta abrir las preferencias: clic derecho sobre cualquier botón o entrada de menú y *Assign Shortcut*. Exporta tu mapa y versiónalo; es lo primero que se pierde al cambiar de máquina.
- **Trampa común:** reasignar una tecla que ya usa otro modo y descubrirlo semanas después. Busca primero por tecla (*Key-Binding*) para ver todos los contextos donde está ocupada.

#### Quick Favorites y búsqueda

- **Ubicación:** `Q` abre *Quick Favorites*; `F3` abre la búsqueda de operadores.
- **Función técnica:** *Quick Favorites* es un menú propio por editor y por modo, al que añades operadores con clic derecho y *Add to Quick Favorites*.
- **Parámetros críticos:** el contenido es distinto en cada modo. La búsqueda `F3` solo muestra operadores válidos en el contexto actual.
- **Pro-tip:** coloca ahí los operadores sin atajo que usas a diario (*Bridge Edge Loops*, *Grid Fill*, *Merge by Distance*, *Set Sharpness by Angle*). Es más rápido que memorizar atajos nuevos y no entra en conflicto con ninguno.
- **Trampa común:** no encontrar un operador en `F3` y concluir que no existe. Suele estar filtrado por contexto: modo equivocado, cursor sobre otro editor o tipo de objeto distinto.

#### Archivo de inicio, plantillas y preferencias

- **Ubicación:** `File > Defaults > Save Startup File`; `File > New` (plantillas); `Preferences` (botón de guardado abajo a la izquierda).
- **Función técnica:** el archivo de inicio (`startup.blend`) define la escena y la interfaz de cada archivo nuevo; `userpref.blend` guarda las preferencias. Ambos viven en la carpeta de configuración de usuario de cada versión.
- **Parámetros críticos:** *Load Factory Settings*; *Application Templates* para arranques especializados; en `Preferences > Interface`: *Python Tooltips* y *Developer Extras*; en `Preferences > Save & Load`: *Auto Save*, *Save Versions* y *Auto Run Python Scripts*.
- **Pro-tip:** prepara el archivo de inicio del estudio con unidades, gestión de color, colecciones base, capas de vista y pases ya configurados. Activa *Python Tooltips*: cada control muestra su ruta de datos, lo que acelera escribir drivers y scripts.
- **Trampa común:** activar *Auto Run Python Scripts* de forma global para que funcionen los rigs. Cualquier `.blend` descargado podrá ejecutar código al abrirse. Déjalo desactivado y autoriza solo las carpetas de confianza.

#### Extensiones y add-ons

- **Ubicación:** `Preferences > Get Extensions` y `Preferences > Add-ons`.
- **Función técnica:** desde la serie 4.2 los add-ons y temas se distribuyen como extensiones desde repositorios. El repositorio oficial es extensions.blender.org y se pueden añadir repositorios propios, locales o remotos.
- **Parámetros críticos:** *Allow Online Access* en `Preferences > System`; repositorios; instalación desde disco; los add-ons antiguos siguen funcionando como *legacy*.
- **Pro-tip:** un estudio puede publicar un repositorio interno (una carpeta compartida con su índice) y todos los puestos reciben las mismas versiones de herramientas, sin copiar archivos a mano.
- **Trampa común:** instalar decenas de add-ons «por si acaso». Cada uno registra paneles, atajos y manejadores que se ejecutan en cada cambio de escena. Activa solo los que usa el proyecto.

## 1.11 Errores de arquitectura que más cuestan en producción

| Síntoma | Causa real | Corrección |
|---|---|---|
| El material desapareció al reabrir | Quedó con cero usuarios y sin Fake User | Activar el escudo antes de desenlazar |
| El archivo pesa gigabytes | Imágenes empaquetadas, datos huérfanos, duplicados completos | Purga recursiva, desempaquetar, *Link Object Data* |
| Bevel o Solidify deformados | Escala del objeto sin aplicar | `Ctrl+A > Scale` (antes de instanciar) |
| El objeto no sale en el render | Cámara desactivada, colección excluida o *Indirect Only* | Revisar las columnas del Outliner y la capa de vista |
| Enlaces rotos al mover el proyecto | Rutas absolutas | *Make Paths Relative* y *Relocate* |
| El rig enlazado no se puede posar | Colección instanciada o override de un solo objeto | Enlazar sin instanciar y hacer override de la colección raíz |
| Materiales `.001`, `.002` por todas partes | Append repetido o *Full Copy* de escena | *Append (Reuse Data)*, Link o remapeo de usuarios |
| Viewport lento con poca geometría | Decenas de miles de objetos reales | Instancias de colección o de Geometry Nodes |
