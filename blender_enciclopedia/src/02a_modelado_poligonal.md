# Módulo 2 — Modelado poligonal, curvas y superficies

Este módulo cubre la geometría que se construye a mano: mallas, curvas, superficies NURBS y metaballs. Los modificadores, la escultura y Geometry Nodes tienen módulos propios; aquí aparecen solo cuando una técnica de modelado depende de ellos.

## 2.1 Estructura de una malla

Una malla de Blender tiene cuatro dominios, y cada dato se guarda en uno de ellos:

| Dominio | Qué es | Datos típicos |
|---|---|---|
| Vértice (*point*) | Posición en el espacio | Posición, grupos de vértices, *crease* de vértice |
| Arista (*edge*) | Par de vértices | *Crease*, *bevel weight*, *seam*, *sharp* |
| Cara (*face*) | Polígono de tres o más esquinas | Índice de material, suavizado, *face sets* |
| Esquina (*corner* o *loop*) | Un vértice visto desde una cara | UV, color por esquina, normal personalizada |

La distinción entre vértice y esquina explica por qué un vértice puede tener varias coordenadas UV o varias normales: tiene una por cada cara que lo usa. En *Edit Mode* la malla se edita en una estructura temporal (BMesh) que permite cambios de topología; al salir del modo se vuelca de nuevo al formato de arrays. Por eso los scripts que leen `mesh.vertices` desde *Edit Mode* ven datos desactualizados.

## 2.2 Topología limpia

### 2.2.1 Reglas que importan y por qué

- **Quads para lo que se subdivide o se deforma.** El algoritmo Catmull-Clark produce una superficie predecible sobre cuadriláteros. Triángulos y n-gons generan pellizcos al subdividir y pliegues al deformar.
- **Polos colocados con intención.** Un polo es un vértice donde no confluyen cuatro aristas. El polo N tiene tres aristas y el polo E tiene cinco. Son necesarios para cambiar la dirección de los bucles, pero alteran la curvatura: van en zonas planas o de poca deformación, nunca en una arista viva ni en un pliegue de articulación.
- **Flujo de bucles según la forma.** Los *edge loops* deben seguir las líneas de curvatura en superficie dura y las líneas de deformación en orgánico (alrededor de ojos, boca y articulaciones).
- **Densidad uniforme.** Quads de proporción cercana al cuadrado y tamaño parecido. Los polígonos muy alargados producen sombreado irregular y mal reparto de detalle al esculpir o subdividir.
- **Malla *manifold*.** Cada arista pertenece a una o dos caras, sin caras interiores ni vértices duplicados. Es requisito para booleanas fiables, simulación, impresión 3D y Solidify.
- **Normales coherentes.** Todas las caras miran hacia fuera. Una normal invertida rompe el sombreado, las booleanas y el *bake*.

Triángulos y n-gons no están prohibidos. Son correctos en caras planas de piezas rígidas que no se subdividen, y los triángulos son inevitables en mallas para motor de juego. Lo que hay que evitar es no saber dónde están.

### 2.2.2 Bucles de soporte y aristas vivas

Con Subdivision Surface, la dureza de una arista depende de lo cerca que estén sus bucles vecinos. Hay tres formas de controlarla:

| Método | Cómo funciona | Ventaja | Coste |
|---|---|---|---|
| Bucles de soporte | Bucles paralelos próximos a la arista | Se exporta a cualquier programa; controla el radio | Más geometría; los bucles recorren toda la pieza |
| *Edge Crease* (`Shift+E`) | Peso de 0 a 1 por arista que el subdivisor respeta | Sin geometría adicional | No todos los programas lo interpretan igual; radio poco controlable |
| Bevel + Weighted Normal sin subdividir | Bisel real con normales ponderadas por área | Aspecto de superficie dura con pocos polígonos | No sirve para formas de doble curvatura |

### 2.2.3 Diagnóstico

#### Select All by Trait

- **Ubicación:** `Select > Select All by Trait` en *Edit Mode*.
- **Función técnica:** selecciona elementos que cumplen una condición topológica.
- **Parámetros críticos:** *Non Manifold* (`Ctrl+Shift+Alt+M`, con casillas para bordes, aristas con más de dos caras y vértices sueltos); *Loose Geometry*; *Interior Faces*; *Faces by Sides* (número de lados y comparación); *Poles by Count* (número de aristas del polo); *Ungrouped Vertices*.
- **Pro-tip:** antes de dar por terminada una malla, ejecuta *Faces by Sides* con «mayor que 4» y con «igual a 3», y *Poles by Count* con seis o más aristas. En menos de un minuto tienes localizado todo lo que puede fallar al subdividir.
- **Trampa común:** usar *Non Manifold* con la casilla *Boundaries* activa en una malla que tiene bordes abiertos a propósito (una prenda, un plano). Selecciona todos los bordes y oculta los errores reales; desactívala para ver solo los defectos.

#### Overlays de análisis

- **Ubicación:** desplegable *Overlays* del viewport en *Edit Mode*.
- **Función técnica:** dibuja información calculada sobre la malla sin modificarla.
- **Parámetros críticos:** *Statistics*; *Face Orientation* (azul hacia fuera, rojo hacia dentro); *Edge Length*, *Face Area* y *Face Angle*; visualización de normales de vértice, de esquina y de cara; *Mesh Analysis* (*Overhang*, *Thickness*, *Intersect*, *Distortion*, *Sharp*); *Retopology* (dibuja la malla en edición por delante de la referencia).
- **Pro-tip:** deja *Face Orientation* activo mientras haces booleanas o unes piezas importadas. Una sola cara roja basta para que el resultado salga invertido.
- **Trampa común:** mantener *Edge Length* o *Mesh Analysis* activos en mallas densas. Recalculan en cada cambio y hunden el rendimiento del viewport.

## 2.3 Selección en Edit Mode

#### Modos de selección

- **Ubicación:** botones de la cabecera; teclas `1`, `2`, `3` (vértice, arista, cara). `Shift` añade un modo; `Ctrl` al cambiar convierte la selección expandiéndola.
- **Función técnica:** determina sobre qué dominio actúan la selección y muchos operadores (Bevel, Extrude y Delete se comportan distinto según el modo).
- **Parámetros críticos:** *X-Ray* (`Alt+Z`) decide si la selección de caja atraviesa la malla; herramientas *Tweak*, *Box*, *Circle* y *Lasso* (se alternan con `W`).
- **Pro-tip:** trabaja con vértice y arista activos a la vez (`1`, luego `Shift+2`): seleccionas bucles con `Alt+clic` sin perder la capacidad de tocar vértices sueltos.
- **Trampa común:** seleccionar con caja sin *X-Ray* y suponer que has cogido también la cara posterior. Sin rayos X solo se selecciona lo visible.

#### Edge Loops y Edge Rings

- **Ubicación:** `Alt+clic` (bucle), `Ctrl+Alt+clic` (anillo), doble clic (bucle); `Select > Select Loops`.
- **Función técnica:** el bucle recorre aristas consecutivas a través de vértices de cuatro aristas; el anillo recorre aristas paralelas a través de quads. Ambos se detienen en polos, triángulos y n-gons.
- **Parámetros críticos:** `Shift` añade; *Boundary Loops* selecciona el contorno de un borde abierto; *Loop Inner-Region* convierte un bucle cerrado en las caras que encierra; *Boundary of Selected* hace lo contrario.
- **Pro-tip:** si un bucle se detiene antes de lo esperado, el punto de parada es un polo o un triángulo. Seleccionar bucles es la forma más rápida de leer el flujo de una malla ajena.
- **Trampa común:** en modo cara, `Alt+clic` selecciona un bucle de caras cuya dirección depende de la arista más cercana al cursor. Pulsar en el centro de la cara da resultados impredecibles; pulsa cerca de la arista que cruza el bucle.

#### Select Linked y Shortest Path

- **Ubicación:** `L` (bajo el cursor), `Ctrl+L` (desde la selección), `Shift+L` (deseleccionar bajo el cursor); `Ctrl+clic` (camino más corto).
- **Función técnica:** *Linked* recorre la conectividad hasta un delimitador; *Shortest Path* calcula la ruta más corta entre el elemento activo y el pulsado.
- **Parámetros críticos:** delimitadores de *Linked*: *Normal*, *Material*, *Seam*, *Sharp*, *UVs*. En *Shortest Path*: *Fill Region* (`Ctrl+Shift+clic` rellena el área entre ambos), *Checker Deselect* (*Nth*, *Skip*, *Offset*), *Topology Distance*, *Face Stepping*.
- **Pro-tip:** `L` con el delimitador *Seam* selecciona una isla UV completa desde el viewport. Con *Material*, todas las caras contiguas de un mismo material.
- **Trampa común:** usar `Ctrl+L` sin nada seleccionado y concluir que no funciona. `Ctrl+L` parte de la selección existente; `L` parte del elemento bajo el cursor.

#### Select Similar, More/Less y patrones

- **Ubicación:** `Shift+G` (*Similar*); `Ctrl+Numpad +` y `Ctrl+Numpad -` (*More/Less*); menú `Select`.
- **Función técnica:** amplía la selección por propiedad compartida, por vecindad o por patrón.
- **Parámetros críticos:** *Similar* cambia según el modo (normal, área, perímetro, material, número de lados, *crease*, longitud, grupos de vértices y más) y tiene un umbral; *Checker Deselect* (`Select > Checker Deselect`); *Select Random* (proporción y semilla); *Select Mirror* (`Ctrl+Shift+M`); *Side of Active*; *Sharp Edges* (por ángulo); *By Attribute*; *Linked Flat Faces* (`Ctrl+Shift+Alt+F`).
- **Pro-tip:** *Linked Flat Faces* selecciona una superficie plana completa a partir de una cara, con un ángulo límite. Sirve para asignar materiales o hacer *inset* en piezas importadas de CAD ya trianguladas.
- **Trampa común:** aplicar *Select Similar > Normal* con el umbral por defecto en una malla curva: selecciona casi todo o casi nada. Ajusta el umbral en el panel `F9`.

## 2.4 Herramientas de creación y extrusión

#### Extrude Region

- **Ubicación:** `E`; barra de herramientas *Extrude Region*; `Alt+E` abre el menú de extrusiones.
- **Función técnica:** duplica el contorno de la selección, crea caras que lo unen con el original y mueve la selección. En caras, el movimiento va por defecto sobre la normal media.
- **Parámetros críticos:** *Flip Normals*; *Dissolve Orthogonal Edges*; restricción de eje durante el movimiento.
- **Pro-tip:** `Ctrl+clic derecho` (*Extrude to Cursor*) extruye hacia el cursor del ratón, y con `Shift` añadido no rota la sección. Es la forma más rápida de trazar perfiles o tiras de retopología.
- **Trampa común:** pulsar `E` y cancelar con clic derecho o `Esc`. La extrusión ya ocurrió; solo se canceló el movimiento, y quedan vértices duplicados encima de los originales. Deshaz con `Ctrl+Z` o suelda con *Merge by Distance*.

#### Extrude Manifold

- **Ubicación:** `Alt+E > Extrude Manifold`; barra de herramientas.
- **Función técnica:** extruye hacia dentro o hacia fuera disolviendo las aristas ortogonales y reutilizando las caras adyacentes, de modo que no deja caras interiores.
- **Parámetros críticos:** dirección sobre la normal; equivale a *Extrude Region* con *Dissolve Orthogonal Edges* activo.
- **Pro-tip:** es la herramienta adecuada para hundir una cara hasta el borde de una pieza o para reducir un saliente: la malla sigue siendo *manifold* sin limpieza posterior.
- **Trampa común:** usarla sobre superficies curvas esperando el resultado de una extrusión normal. La disolución de aristas puede colapsar caras vecinas.

#### Extrude Along Normals y Extrude Individual

- **Ubicación:** `Alt+E`; barra de herramientas.
- **Función técnica:** *Along Normals* extruye y desplaza cada vértice sobre su propia normal (como *Shrink/Fatten*); *Individual* extruye cada cara por separado sobre su normal.
- **Parámetros críticos:** *Offset Even* en *Along Normals* (casilla en el panel `F9`) mantiene el grosor uniforme en las esquinas.
- **Pro-tip:** *Along Normals* con *Offset Even* es la manera correcta de dar grosor a un panel curvo. Una extrusión seguida de escalado deforma el espesor.
- **Trampa común:** aplicar *Extrude Individual* a caras contiguas y encontrarse huecos entre ellas. Es el comportamiento previsto; si querías un bloque continuo, la herramienta es *Along Normals*.

#### Extrude Repeat y Extrude Vertices / Edges

- **Ubicación:** `Alt+E`; menús `Vertex` y `Edge`.
- **Función técnica:** *Repeat* extruye varias veces con un desplazamiento fijo; las variantes de vértice y arista extruyen sin crear caras de cierre.
- **Parámetros críticos:** *Steps*, *Offset* y *Scale Offset* en *Repeat*.
- **Pro-tip:** extruir aristas de borde con `E` y encadenar con `F` es la base del modelado «polígono a polígono» para caras y retopología.
- **Trampa común:** extruir un vértice aislado crea aristas sin cara. Si no se rellenan después, quedan como geometría suelta que rompe la subdivisión y la exportación.

#### Inset Faces

- **Ubicación:** `I`; menú `Face`; barra de herramientas.
- **Función técnica:** crea un borde de caras hacia dentro (o hacia fuera) de la selección.
- **Parámetros críticos:** *Thickness*; *Depth* (`Ctrl` durante la operación); *Individual* (`I` de nuevo); *Outset* (`O`); *Boundary* (`B`, si se incluyen los bordes abiertos); *Offset Even*; *Offset Relative*; *Edge Rail*.
- **Pro-tip:** un *inset* antes de extruir crea el bucle de soporte de la base del saliente en el mismo gesto. Con *Depth* obtienes paneles hundidos en una sola operación.
- **Trampa común:** hacer *inset* en una pieza con Mirror sin desactivar *Boundary*: aparece una pared de caras en el plano de simetría. Pulsa `B` durante la operación.

#### Bevel

- **Ubicación:** `Ctrl+B` (aristas), `Ctrl+Shift+B` (vértices); menús `Edge` y `Vertex`; barra de herramientas.
- **Función técnica:** sustituye aristas o vértices por caras nuevas con un perfil configurable.
- **Parámetros críticos:** *Width Type* (*Offset*, *Width*, *Depth*, *Percent*, *Absolute*); *Segments* (rueda o `S`); *Shape* (perfil, `P`; 0.5 es circular); *Clamp Overlap* (`C`); *Loop Slide*; *Harden Normals* (`H`); *Mark Seams* (`U`) y *Mark Sharp* (`K`); *Miter Outer* e *Inner* (`O`, `I`: *Sharp*, *Patch*, *Arc*); *Intersection Type* (`N`: *Grid Fill* o *Cutoff*); *Profile Type* (`Z`: *Superellipse* o *Custom*); modo de ancho (`M`); alternar aristas o vértices (`V`).

| Segmentos | Uso |
|---|---|
| 1 | Chaflán; base para modelos de motor de juego |
| 2 | Bisel con bucle central; prepara bucles de soporte para subdividir |
| 3 o más | Redondeo real sin subdividir |

- **Pro-tip:** para superficie dura en tiempo real: bisel de uno o dos segmentos, *Harden Normals* activo y sombreado suave. Las caras planas conservan su normal y todo el gradiente se concentra en el bisel.
- **Trampa común:** biselar con la escala del objeto sin aplicar. El ancho se deforma según el eje. Comprueba que la escala sea 1 en los tres ejes (`Ctrl+A > Scale`) antes de cualquier Bevel, Inset o Solidify.

#### Loop Cut and Slide

- **Ubicación:** `Ctrl+R`; barra de herramientas.
- **Función técnica:** inserta uno o varios bucles que cortan un anillo de quads y permite deslizarlos.
- **Parámetros críticos:** número de cortes (rueda o cifra); *Smoothness* (curva el corte según la superficie); *Factor*; durante el deslizamiento, `E` (*Even*, distancia constante a un borde), `F` (cambia el borde de referencia) y `C` (permite sobrepasar los límites); clic derecho deja el corte centrado.
- **Pro-tip:** `Ctrl+R`, clic para confirmar el número de cortes y clic derecho para dejarlo exactamente en el centro. En una forma curva, añade *Smoothness* para que el bucle nuevo no aplane la silueta.
- **Trampa común:** intentar cortar donde el anillo pasa por triángulos o n-gons. El corte se detiene ahí y deja la topología a medias. Revisa el recorrido con `Ctrl+Alt+clic` antes de cortar.

#### Offset Edge Loop Cut

- **Ubicación:** `Ctrl+Shift+R`; barra de herramientas.
- **Función técnica:** añade un bucle a cada lado del bucle seleccionado y los desliza de forma simétrica.
- **Parámetros críticos:** *Factor*; *Even*; *Cap Endpoint* (cierra los extremos en bucles abiertos).
- **Pro-tip:** es la forma más rápida de poner bucles de soporte: selecciona la arista viva con `Alt+clic` y pulsa `Ctrl+Shift+R`.
- **Trampa común:** usarlo sobre un bucle que atraviesa un polo. Los bucles nuevos se cruzan o crean triángulos en ese punto.

#### Knife

- **Ubicación:** `K`; `Shift+K` corta solo la geometría seleccionada; barra de herramientas.
- **Función técnica:** dibuja cortes libres sobre las caras y crea vértices y aristas donde cruza la malla.
- **Parámetros críticos (teclas durante el corte):** `Shift` ajusta al punto medio de la arista; `Ctrl` ignora el ajuste; `A` restricción de ángulo; `R` cambia la arista de referencia del ángulo; `X`, `Y`, `Z` restringen a un eje; `C` atraviesa toda la malla (*Cut Through*); `V` alterna la prueba de profundidad; `S` muestra distancias y ángulos; clic derecho inicia otro corte; doble clic cierra el corte; `Enter` o `Space` confirman.
- **Pro-tip:** `K`, luego `C` y un corte recto con `A` equivale a un plano de corte dirigido a mano. Es más rápido que *Bisect* para dividir una pieza siguiendo una referencia.
- **Trampa común:** cortar caras a mano y dejar n-gons o vértices unidos a una sola arista. Tras cada corte, comprueba con *Faces by Sides* y cierra con `J` hacia vértices existentes.

#### Bisect

- **Ubicación:** `Mesh > Bisect`; barra de herramientas (junto a Knife).
- **Función técnica:** corta la selección con un plano definido por una línea trazada en la vista.
- **Parámetros críticos:** *Plane Point* y *Plane Normal* (editables numéricamente); *Fill* (tapa el corte); *Clear Inner* y *Clear Outer* (elimina uno de los lados).
- **Pro-tip:** con *Clear Inner* y *Fill* obtienes secciones limpias. Escribiendo la normal exacta (por ejemplo `0, 0, 1`) el corte queda alineado a un eje del mundo con precisión.
- **Trampa común:** ejecutarlo sin selección. Solo corta lo seleccionado; pulsa `A` antes.

#### Knife Project

- **Ubicación:** `Mesh > Knife Project`.
- **Función técnica:** proyecta el contorno de otros objetos, vistos desde la cámara del viewport, y corta con él la malla en edición.
- **Parámetros críticos:** *Cut Through* (corta también las caras posteriores). Los objetos de corte son los seleccionados además del que está en *Edit Mode*.
- **Pro-tip:** un texto o una curva convertidos en contorno graban logotipos o tipografía en una superficie sin booleanas. Usa una vista ortográfica alineada para que la proyección no se deforme.
- **Trampa común:** proyectar desde una vista en perspectiva. El corte se deforma con el punto de fuga; alinea la vista con `Numpad 1`, `3` o `7` y pasa a ortográfica con `Numpad 5`.

#### Poly Build

- **Ubicación:** barra de herramientas de *Edit Mode*.
- **Función técnica:** construye caras de una en una: `Ctrl+clic` añade un vértice o una cara desde la arista más cercana, arrastrar mueve vértices y `Shift+clic` borra.
- **Parámetros críticos:** *Create Quads*; ajuste a caras (*Snap > Face*, con *Project Individual Elements* o *Face Nearest*).
- **Pro-tip:** combínalo con el overlay *Retopology* y el ajuste a caras para retopología manual sin add-ons (el flujo completo está en el Módulo 4).
- **Trampa común:** usarlo sin ajuste a caras sobre un modelo esculpido. Los vértices quedan flotando a la profundidad de la vista y no sobre la superficie.

#### Spin

- **Ubicación:** `Alt+R`; barra de herramientas; `Alt+E > Spin`.
- **Función técnica:** extruye la selección girándola alrededor de un eje que pasa por el cursor 3D.
- **Parámetros críticos:** *Steps*; *Angle*; *Axis* y *Center*; *Use Duplicates* (copia en lugar de extruir); *Auto Merge* (suelda el primer y el último paso en un giro de 360°); *Flip Normals*.
- **Pro-tip:** para codos de tubería: coloca el cursor en el centro de giro con `Shift+S > Cursor to Selected` sobre una arista auxiliar y gira 90° con ocho o doce pasos.
- **Trampa común:** hacer un giro de 360° y olvidar soldar. Queda una costura de vértices duplicados que aparece como una línea oscura al suavizar. Activa *Auto Merge* o ejecuta *Merge by Distance*.

#### Screw

- **Ubicación:** `Edge > Screw`.
- **Función técnica:** extruye un perfil en hélice alrededor del cursor 3D. El paso lo define un segundo perfil abierto incluido en la selección.
- **Parámetros críticos:** *Steps*, *Turns*, *Center*, *Axis*.
- **Pro-tip:** para roscas y muelles es preferible el **modificador** Screw: es paramétrico, tiene el paso como valor explícito y no destruye el perfil.
- **Trampa común:** lanzarlo con un perfil cerrado como única selección: no hay línea que defina el avance y Blender devuelve un error.

## 2.5 Herramientas de deformación

#### Smooth Vertices y Laplacian Smooth

- **Ubicación:** menú `Vertex`; barra de herramientas *Smooth*.
- **Función técnica:** *Smooth* mueve cada vértice hacia la media de sus vecinos. La versión laplaciana usa pesos por geometría y conserva mejor el volumen.
- **Parámetros críticos:** *Smoothing* y *Repeat*; ejes afectados; en la laplaciana, *Lambda Factor*, *Lambda Border* y *Preserve Volume*.
- **Pro-tip:** tras una retopología o un *Grid Fill*, unas pocas repeticiones de *Smooth* con *Snap > Face Nearest* activo reparten los vértices sin separarlos de la superficie de referencia.
- **Trampa común:** repetir *Smooth* muchas veces sobre una malla cerrada. Cada pasada encoge el volumen. Usa la versión laplaciana o el pincel *Relax* de escultura.

#### Randomize Vertices

- **Ubicación:** `Mesh > Transform > Randomize`; barra de herramientas.
- **Función técnica:** desplaza los vértices seleccionados en direcciones pseudoaleatorias.
- **Parámetros críticos:** *Amount*, *Uniform*, *Normal* (cuánto del desplazamiento va sobre la normal), *Random Seed*.
- **Pro-tip:** un valor bajo con *Normal* en 1 rompe la perfección de piedras o tablones sin cruzar caras.
- **Trampa común:** usarlo como paso final en un asset que necesita variantes. Es destructivo; para variación repetible, usa Displace o Geometry Nodes.

#### Edge Slide y Vertex Slide

- **Ubicación:** `G` dos veces; `Shift+V` (vértice); menús `Edge` y `Vertex`.
- **Función técnica:** desplaza aristas o vértices sobre la geometría adyacente, de modo que la silueta no cambia.
- **Parámetros críticos:** `E` (*Even*), `F` (*Flipped*), `C` o `Alt` (sin límite); *Correct UVs* para que las UV acompañen el movimiento.
- **Pro-tip:** deslizar un bucle hacia una arista viva ajusta su dureza bajo subdivisión sin alterar la forma. Es el control fino del radio de un borde.
- **Trampa común:** mover con `G` simple un bucle de una superficie curva. Lo sacas de la superficie y aparece una abolladura. En superficies curvas, desliza siempre.

#### Shrink/Fatten y Push/Pull

- **Ubicación:** `Alt+S`; barra de herramientas.
- **Función técnica:** *Shrink/Fatten* mueve cada vértice sobre su normal; *Push/Pull* lo acerca o lo aleja del pivote.
- **Parámetros críticos:** *Offset Even* (casilla en el panel `F9`) mantiene un grosor uniforme.
- **Pro-tip:** *Shrink/Fatten* es la forma correcta de «escalar» una pieza con forma de tubo o de L: conserva el espesor de las paredes, cosa que `S` no hace.
- **Trampa común:** aplicarlo a una malla con normales inconsistentes. Unas zonas se inflan y otras se hunden. Recalcula antes con `Shift+N`.

#### Shear y To Sphere

- **Ubicación:** `Ctrl+Shift+Alt+S` (*Shear*); `Shift+Alt+S` (*To Sphere*).
- **Función técnica:** *Shear* inclina la selección sobre un eje; *To Sphere* lleva los vértices a la misma distancia del pivote.
- **Parámetros críticos:** eje del *Shear*; factor de *To Sphere* (1 da un círculo o una esfera exactos).
- **Pro-tip:** *To Sphere* con factor 1 sobre un bucle cerrado lo convierte en un círculo perfecto. Es la forma manual de abrir un agujero circular en una rejilla de quads.
- **Trampa común:** *To Sphere* reparte los vértices a igual distancia del pivote, pero no iguala su separación angular. Si el bucle de partida era muy irregular, el círculo tendrá segmentos de longitud desigual.

#### Rip, Rip Fill y Rip Edge

- **Ubicación:** `V` (*Rip*), `Alt+V` (*Rip Fill*), `Alt+D` (*Rip Edge*, «rasgar y extender»).
- **Función técnica:** *Rip* separa la malla por los vértices o aristas seleccionados y abre un hueco; *Rip Fill* rellena el hueco con caras; *Rip Edge* extiende el vértice a lo largo de la arista más cercana al cursor.
- **Parámetros críticos:** la posición del cursor decide qué lado se desprende.
- **Pro-tip:** *Rip Fill* sobre un bucle crea dos bucles paralelos en un gesto: sirve para añadir una banda de caras donde solo había una arista.
- **Trampa común:** pulsar `V` en una arista de borde abierto o con el cursor mal colocado. El operador falla o separa el lado contrario. Coloca el cursor claramente hacia el lado que quieres mover.

## 2.6 Unir, dividir y rellenar

#### Merge

- **Ubicación:** `M`; menú `Mesh > Merge`.
- **Función técnica:** funde varios vértices en uno o suelda los que están a menos de una distancia.
- **Parámetros críticos:** *At Center*, *At Cursor*, *Collapse* (cada isla seleccionada se funde en su propio centro), *At First*, *At Last*; *By Distance* con *Merge Distance*, *Unselected* y *Sharp Edges*.
- **Pro-tip:** *Collapse* sobre varios pares de vértices seleccionados a la vez los funde par a par. Es mucho más rápido que soldar uno por uno al reducir bucles.
- **Trampa común:** ejecutar *By Distance* con un umbral alto sobre una malla con detalle fino. Suelda vértices que debían seguir separados y colapsa caras. Empieza con 0.0001 m y sube solo si hace falta.

#### Auto Merge

- **Ubicación:** `Tool Settings > Options > Auto Merge` en *Edit Mode*.
- **Función técnica:** suelda automáticamente los vértices que, al terminar una transformación, quedan dentro del umbral.
- **Parámetros críticos:** *Threshold*; *Split Edges & Faces* (corta las aristas y caras sobre las que cae el vértice movido).
- **Pro-tip:** combinado con *Snap > Vertex* convierte el arrastre de vértices en una herramienta de soldadura para retopología y reducción de bucles.
- **Trampa común:** dejarlo activo al mover geometría superpuesta a propósito (piezas duplicadas que se van a separar). Se sueldan sin aviso.

#### Split, Separate y Duplicate

- **Ubicación:** `Y` (*Split*); `Alt+M` (menú *Split*); `P` (*Separate*); `Shift+D` (*Duplicate*).
- **Función técnica:** *Split* desconecta la selección sin moverla ni sacarla del objeto; *Separate* la lleva a un objeto nuevo.
- **Parámetros críticos:** *Split*: *Selection*, *Faces by Edges*, *Faces & Edges by Vertices*. *Separate*: *Selection*, *By Material*, *By Loose Parts*.
- **Pro-tip:** *Separate > By Loose Parts* seguido de `Object > Set Origin > Origin to Geometry` convierte una malla importada como bloque único en piezas manejables.
- **Trampa común:** tras `Y` la geometría parece intacta, pero hay vértices duplicados en el corte. Un *Merge by Distance* posterior vuelve a soldarla.

#### New Edge/Face from Vertices (Fill con F)

- **Ubicación:** `F`; menú `Vertex`.
- **Función técnica:** crea una arista entre dos vértices o una cara a partir de tres o más vértices o de un contorno de aristas.
- **Parámetros críticos:** ninguno propio; con un solo vértice de borde seleccionado, `F` repetido rellena quads consecutivos.
- **Pro-tip:** el relleno secuencial con `F` desde un vértice de esquina es la manera más rápida de cerrar una tira entre dos bordes paralelos.
- **Trampa común:** rellenar un contorno de muchos vértices con `F` crea un único n-gon. Vale para una tapa plana rígida; para todo lo demás, usa *Grid Fill*.

#### Fill, Grid Fill y Beautify Faces

- **Ubicación:** `Alt+F` (*Fill*); `Face > Grid Fill`; `Shift+Alt+F` (*Beautify*).
- **Función técnica:** *Fill* triangula un contorno cerrado; *Grid Fill* lo rellena con una rejilla de quads; *Beautify* reorganiza triángulos para mejorar sus proporciones.
- **Parámetros críticos:** *Grid Fill*: *Span*, *Offset* y *Simple Blending*. *Fill*: *Beauty*.
- **Pro-tip:** *Grid Fill* necesita un contorno con número par de vértices. Si es impar, añade o disuelve un vértice antes. Ajusta *Offset* hasta que las líneas de la rejilla queden alineadas con el resto de la malla.
- **Trampa común:** aplicar *Grid Fill* a un contorno muy alargado o muy irregular. La rejilla sale retorcida; en esos casos conviene unir primero dos lados con *Bridge* y rellenar el resto.

#### Bridge Edge Loops

- **Ubicación:** `Edge > Bridge Edge Loops`.
- **Función técnica:** crea caras entre dos o más bucles de aristas.
- **Parámetros críticos:** *Connect Loops* (*Open Loop*, *Closed Loop*, *Loop Pairs*); *Merge* y *Merge Factor*; *Twist*; *Number of Cuts*; *Interpolation* (*Linear*, *Blend Path*, *Blend Surface*); *Smoothness*; *Profile Factor* y *Profile Shape*.
- **Pro-tip:** con caras seleccionadas en dos lados opuestos de una pieza, *Bridge* las elimina y construye un túnel entre ellas. Con *Blend Surface* y varios cortes, la unión sigue la curvatura de ambas superficies.
- **Trampa común:** unir bucles con distinto número de vértices. Blender reparte los triángulos sobrantes de forma arbitraria. Iguala el número de vértices antes, o acepta que tendrás que limpiar.

#### Connect Vertex Path y Connect Vertex Pairs

- **Ubicación:** `J`; menú `Vertex`.
- **Función técnica:** crea aristas entre los vértices seleccionados y divide las caras que atraviesan. *Path* respeta el orden de selección.
- **Parámetros críticos:** el orden en que se seleccionan los vértices.
- **Pro-tip:** `J` es la herramienta básica de limpieza de n-gons: selecciona dos vértices del n-gon y lo divides en quads sin dejar vértices sueltos.
- **Trampa común:** usar `F` en lugar de `J` entre dos vértices de una misma cara. `F` crea una arista superpuesta que no divide la cara, y deja geometría no *manifold*.

#### Subdivide, Subdivide Edge-Ring y Un-Subdivide

- **Ubicación:** menú `Edge`; menú contextual (clic derecho).
- **Función técnica:** *Subdivide* divide aristas y caras; *Subdivide Edge-Ring* añade bucles interpolados entre los anillos seleccionados; *Un-Subdivide* invierte una subdivisión regular.
- **Parámetros críticos:** *Number of Cuts*; *Smoothness*; *Create N-Gons*; *Quad Corner Type* (*Inner Vert*, *Path*, *Straight Cut*, *Fan*); *Fractal* y *Along Normal*. En *Edge-Ring*: *Interpolation* y *Profile*. En *Un-Subdivide*: *Iterations*.
- **Pro-tip:** *Un-Subdivide* recupera el nivel base de una malla a la que alguien aplicó Subdivision, siempre que no se haya editado la topología después.
- **Trampa común:** subdividir solo algunas caras con *Create N-Gons* activo. Las caras vecinas pasan a ser n-gons con vértices intermedios, que no se ven hasta que subdivides o exportas.

#### Triangulate y Tris to Quads

- **Ubicación:** `Ctrl+T` (*Triangulate*); `Alt+J` (*Tris to Quads*); menú `Face`.
- **Función técnica:** convierte caras en triángulos, o une pares de triángulos en quads.
- **Parámetros críticos:** *Triangulate*: *Quad Method* (*Beauty*, *Fixed*, *Fixed Alternate*, *Shortest Diagonal*, *Longest Diagonal*) y *N-gon Method* (*Beauty*, *Clip*). *Tris to Quads*: *Max Face Angle*, *Max Shape Angle* y las casillas de comparación (*UVs*, *Vertex Colors*, *Seam*, *Sharp*, *Materials*).
- **Pro-tip:** para exportar a un motor, triangula con el **modificador** Triangulate al final de la pila y con el mismo método que se usó en el *bake*. Si Blender y el motor triangulan de forma distinta, las normales del *normal map* no coinciden.
- **Trampa común:** esperar que *Tris to Quads* devuelva buena topología a una malla escaneada o diezmada. Produce quads sin flujo de bucles; para eso hace falta retopología.

#### Poke, Solidify Faces y Wireframe

- **Ubicación:** `Alt+P` (*Poke*); menú `Face`.
- **Función técnica:** *Poke* añade un vértice central y divide la cara en abanico; *Solidify Faces* da grosor a la selección; *Wireframe* convierte las aristas en barras.
- **Parámetros críticos:** *Poke*: *Poke Offset* y *Poke Center*. *Wireframe*: *Thickness*, *Offset*, *Boundary*, *Replace*.
- **Pro-tip:** *Poke* seguido de *Bevel* de vértices sobre el punto central genera patrones de remaches o perforaciones regulares sobre una rejilla.
- **Trampa común:** usar las versiones de *Edit Mode* de Solidify y Wireframe cuando el resultado va a necesitar ajustes. Son destructivas; los modificadores equivalentes no lo son.

#### Intersect (Knife) e Intersect (Boolean)

- **Ubicación:** `Face > Intersect (Knife)` e `Intersect (Boolean)`.
- **Función técnica:** calculan la intersección entre partes de una misma malla. *Knife* solo corta; *Boolean* además elimina según la operación.
- **Parámetros críticos:** *Source* (*Self Intersect* o *Selected/Unselected*); *Separate Mode* (*All*, *Cut*, *Merge*); *Solver*; en *Boolean*: *Intersect*, *Union* o *Difference*, y *Swap*.
- **Pro-tip:** para una booleana rápida dentro de un mismo objeto: selecciona el volumen cortador con `L` y ejecuta *Intersect (Boolean) > Difference*. No hace falta separar objetos ni añadir modificadores.
- **Trampa común:** usar volúmenes abiertos o con normales invertidas. El resultado sale vacío o invertido. Ambas partes deben ser cerradas y con normales hacia fuera.

#### Weld Edges into Faces

- **Ubicación:** `Face > Weld Edges into Faces`.
- **Función técnica:** divide caras usando aristas sueltas que descansan sobre ellas.
- **Parámetros críticos:** ninguno.
- **Pro-tip:** dibuja un contorno de aristas sobre una cara plana (extruyendo vértices con ajuste a cara) y suéldalo para obtener un recorte exacto sin Knife.
- **Trampa común:** las aristas deben estar exactamente en el plano de la cara. Si flotan por encima, no ocurre nada.

#### Convex Hull

- **Ubicación:** `Mesh > Convex Hull`.
- **Función técnica:** construye la envolvente convexa de los vértices seleccionados.
- **Parámetros críticos:** *Delete Unused*, *Use Existing Faces*, *Make Holes*, *Join Triangles* con sus ángulos.
- **Pro-tip:** genera en segundos mallas de colisión para motores de juego o físicas: duplica el objeto, selecciona todo y aplica *Convex Hull*.
- **Trampa común:** esperar que respete concavidades. Por definición las tapa; para colisiones cóncavas hay que dividir el objeto en varias partes convexas.

#### Symmetrize y Snap to Symmetry

- **Ubicación:** `Mesh > Symmetrize` y `Mesh > Snap to Symmetry`.
- **Función técnica:** *Symmetrize* corta la malla por el plano de simetría y copia un lado sobre el otro; *Snap to Symmetry* mueve vértices para que cada uno tenga su pareja exacta, sin cambiar la topología.
- **Parámetros críticos:** *Direction* (por ejemplo «−X a +X»); *Threshold*; en *Snap*: *Factor* y *Center*.
- **Pro-tip:** usa *Snap to Symmetry* para reparar una malla que perdió la simetría por unas décimas. Así vuelven a funcionar la edición en espejo y el pintado de pesos simétrico sin rehacer la topología.
- **Trampa común:** aplicar *Symmetrize* a una malla con *shape keys* o UV asimétricas a propósito. Sobrescribe ese lado por completo.

## 2.7 Eliminar, disolver y limpiar

| Operación | Efecto | Deja agujero |
|---|---|---|
| Delete Vertices / Edges / Faces | Elimina el elemento y lo que depende de él | Sí |
| Only Edges & Faces / Only Faces | Elimina aristas o caras y conserva los vértices | Sí |
| Dissolve Vertices / Edges / Faces | Elimina el elemento y une las caras vecinas | No |
| Limited Dissolve | Disuelve aristas y vértices bajo un ángulo límite | No |
| Collapse Edges & Faces | Funde cada arista o cara en un vértice | No |
| Delete Edge Loops | Elimina bucles completos y une las caras a ambos lados | No |

#### Delete y Dissolve

- **Ubicación:** `X` o `Delete` (menú); `Ctrl+X` (disuelve según el modo de selección).
- **Función técnica:** *Delete* quita elementos y deja huecos; *Dissolve* los quita y fusiona las caras adyacentes.
- **Parámetros críticos:** *Dissolve Vertices*: *Face Split* y *Tear Boundary*. *Dissolve Edges*: *Dissolve Vertices* (elimina los vértices que quedan en medio de una arista).
- **Pro-tip:** `Ctrl+X` sobre un bucle seleccionado es la forma rápida de reducir densidad. Es equivalente a *Delete Edge Loops* cuando la selección es un bucle completo.
- **Trampa común:** disolver aristas con la opción *Dissolve Vertices* desactivada deja vértices de dos aristas en medio de los lados. No se ven, pero convierten los quads en n-gons.

#### Limited Dissolve

- **Ubicación:** `Mesh > Clean Up > Limited Dissolve`; menú `X`.
- **Función técnica:** une caras coplanares y elimina vértices colineales por debajo de un ángulo.
- **Parámetros críticos:** *Max Angle*; *All Boundaries*; *Delimit* (*Normal*, *Material*, *Seam*, *Sharp*, *UVs*).
- **Pro-tip:** es el primer paso para limpiar geometría importada de CAD o resultados de booleanas: reduce las caras planas trianguladas a n-gons limpios. Usa *Delimit > UVs* o *Material* para no destruir el mapeado.
- **Trampa común:** aplicarlo a superficies curvas con un ángulo generoso. Aplana la curvatura y crea n-gons no planos, que se sombrean mal.

#### Menú Clean Up

- **Ubicación:** `Mesh > Clean Up`.
- **Función técnica:** conjunto de reparaciones automáticas.
- **Parámetros críticos:**
    - **Delete Loose:** vértices, aristas o caras sin conexión.
    - **Decimate Geometry:** reduce polígonos por colapso de aristas, con *Ratio*, grupo de vértices y simetría.
    - **Degenerate Dissolve:** elimina aristas de longitud cero y caras sin área.
    - **Make Planar Faces:** aplana caras no planas de forma iterativa.
    - **Split Non-Planar Faces:** divide las caras cuya torsión supera un ángulo.
    - **Split Concave Faces:** divide caras cóncavas en convexas.
    - **Merge by Distance:** suelda vértices próximos.
    - **Fill Holes:** tapa agujeros de hasta un número de lados.
- **Pro-tip:** el orden de limpieza estándar para una malla importada es: *Merge by Distance*, *Delete Loose*, *Degenerate Dissolve*, recalcular normales con `Shift+N` y comprobar *Non Manifold*.
- **Trampa común:** *Fill Holes* con el límite de lados en 0 tapa **todos** los agujeros, incluidas las aberturas intencionadas (cuello, mangas, ojos).

#### Sort Mesh Elements

- **Ubicación:** `Mesh > Sort Elements`.
- **Función técnica:** reordena los índices de vértices, aristas o caras.
- **Parámetros críticos:** *View Z Axis*, *View X Axis*, *Cursor Distance*, *Material*, *Selected*, *Randomize*, *Reverse*.
- **Pro-tip:** el orden de los índices determina el orden de aparición del modificador Build y el reparto de algunos efectos de Geometry Nodes basados en índice. Ordena por distancia al cursor para animar construcciones radiales.
- **Trampa común:** reordenar una malla con *shape keys* compartidas con otro programa, o usada como destino de un caché Alembic. Esos formatos dependen del orden de los vértices y dejan de coincidir.

## 2.8 Normales y sombreado

### 2.8.1 Cómo decide Blender el sombreado

Cada cara es plana o suave (*Shade Flat* / *Shade Smooth*). Con sombreado suave, la normal se interpola entre las esquinas. Las aristas marcadas como *Sharp* interrumpen esa interpolación: a cada lado de la arista se usan normales distintas. Las **normales personalizadas** sustituyen a las calculadas y se guardan por esquina.

Desde la serie 4.1 ya no existe la casilla *Auto Smooth* en los datos de la malla. La funcionalidad equivalente se reparte entre dos herramientas:

| Herramienta | Dónde | Qué hace | Destructiva |
|---|---|---|---|
| Shade Auto Smooth | `Object > Shade Auto Smooth` | Añade el modificador de nodos *Smooth by Angle* | No |
| Set Sharpness by Angle | `Edge > Set Sharpness by Angle` (*Edit Mode*) | Marca como *Sharp* las aristas que superan un ángulo | Sí, pero editable |

#### Recalculate, Flip y Mark Sharp

- **Ubicación:** `Shift+N` (recalcular hacia fuera), `Ctrl+Shift+N` (hacia dentro); `Alt+N` (menú *Normals*); `Edge > Mark Sharp` y `Clear Sharp`.
- **Función técnica:** el recálculo orienta las caras de forma coherente tomando como referencia el volumen cerrado; *Flip* invierte las caras seleccionadas; *Mark Sharp* establece el atributo de arista que corta la interpolación.
- **Parámetros críticos:** *Mark Sharp from Vertices*; ángulo y *Extend* en *Set Sharpness by Angle*.
- **Pro-tip:** en piezas de superficie dura, marca como *Sharp* las mismas aristas que marcas como *Seam*. En el *bake* de normales, un corte de UV en cada arista dura evita los gradientes visibles.
- **Trampa común:** recalcular normales en una malla abierta o con caras interiores. El algoritmo no puede decidir qué es «fuera» y deja zonas invertidas. Corrige antes la geometría no *manifold*.

#### Normales personalizadas

- **Ubicación:** `Alt+N` en *Edit Mode*.
- **Función técnica:** edita directamente las normales por esquina.
- **Parámetros críticos:** *Set from Faces* (cada vértice toma la normal de las caras seleccionadas); *Rotate…*; *Point to Target…* (`Alt+L`); *Merge* y *Split*; *Average* (*Custom Normal*, *Face Area*, *Corner Angle*); *Copy Vector* y *Paste Vector*; *Smooth Vectors*; *Reset Vectors*; *Set Face Strength* y *Select by Face Strength* (*Weak*, *Medium*, *Strong*).
- **Pro-tip:** *Set from Faces* sobre las caras planas principales, combinado con un bisel fino, reproduce a mano el resultado del modificador Weighted Normal. Es útil para corregir puntualmente una zona que el modificador resuelve mal.
- **Trampa común:** editar la topología después de fijar normales personalizadas. Los vértices nuevos reciben normales interpoladas y aparecen manchas de sombreado. Deja las normales para el final, o usa el modificador, que se recalcula solo.

#### Edge Crease, Vertex Crease y Bevel Weight

- **Ubicación:** `Shift+E` (*Edge Crease*); `Vertex > Vertex Crease`; `Edge > Edge Bevel Weight`; también en la barra lateral, pestaña *Item*.
- **Función técnica:** atributos de 0 a 1 que leen los modificadores Subdivision Surface (*crease*) y Bevel (*bevel weight*, con el método de límite *Weight*).
- **Parámetros críticos:** el valor por elemento; en el modificador Subdivision, la casilla *Use Creases*.
- **Pro-tip:** *Bevel Weight* permite un único modificador Bevel con anchos distintos por arista: el peso multiplica el ancho del modificador.
- **Trampa común:** entregar a otro departamento una malla que depende de *creases*. Si el formato de intercambio o el programa de destino no los interpretan igual, las aristas quedan blandas. Para intercambio, convierte los *creases* en bucles de soporte.

## 2.9 Ayudas de transformación

#### Proportional Editing

- **Ubicación:** `O`; cabecera del viewport.
- **Función técnica:** extiende la transformación a los vértices cercanos con un peso que decrece con la distancia.
- **Parámetros críticos:** *Falloff* (*Smooth*, *Sphere*, *Root*, *Inverse Square*, *Sharp*, *Linear*, *Constant*, *Random*); radio (rueda, `Page Up` y `Page Down`); *Connected Only* (`Alt+O`); *Projected from View*.
- **Pro-tip:** *Connected Only* es imprescindible en personajes: mueve un dedo sin arrastrar el dedo vecino, porque mide la distancia sobre la malla y no en línea recta.
- **Trampa común:** dejar un radio enorme de una sesión anterior. Mueves un vértice y se desplaza medio modelo sin que lo notes. Mira el círculo de influencia antes de confirmar.

#### Snapping

- **Ubicación:** icono de imán en la cabecera; `Shift+Tab` lo alterna; `Ctrl+Shift+Tab` abre sus opciones; `Ctrl` mantenido invierte el estado durante una transformación.
- **Función técnica:** ajusta el elemento transformado a rejilla, geometría u otros objetos.
- **Parámetros críticos:** *Snap Base* (*Closest*, *Center*, *Median*, *Active*); *Snap Target* (*Increment*, *Grid*, *Vertex*, *Edge*, *Face*, *Volume*, *Edge Center*, *Edge Perpendicular*); elementos individuales (*Face Project*, *Face Nearest*); *Align Rotation to Target*; *Backface Culling*; *Target Selection* (incluir el objeto activo, el editado, los no editados; excluir los no seleccionables); `B` durante la transformación para elegir a mano el punto base.
- **Pro-tip:** `G`, `B`, clic en el vértice que quieres usar como punto de agarre y clic en el destino. Es el ajuste «de punto a punto» de los programas de CAD, sin mover el origen ni el cursor.
- **Trampa común:** usar *Face Project* cuando se necesita *Face Nearest*. *Project* lanza un rayo desde la vista (depende de la cámara); *Nearest* busca el punto más cercano de la superficie y es el correcto para retopología que debe seguir pegada al deslizar.

#### Pivote y orientación

- **Ubicación:** `.` (menú de pivote); `,` (menú de orientación); `Shift+S` (menú del cursor).
- **Función técnica:** el pivote define el centro de rotación y escala; la orientación define los ejes de trabajo.
- **Parámetros críticos:** pivote: *Bounding Box Center*, *3D Cursor*, *Individual Origins*, *Median Point*, *Active Element*. Orientación: *Global*, *Local*, *Normal*, *Gimbal*, *View*, *Cursor*, *Parent*, y orientaciones propias creadas desde la selección con el botón `+` del selector de orientación.
- **Pro-tip:** *Individual Origins* con `S` escala a la vez muchas caras o piezas cada una sobre su centro; con `Alt+S` en modo cara las desplaza sobre su normal. Para trabajar en una pieza inclinada, crea una orientación propia desde una de sus caras.
- **Trampa común:** olvidar el pivote en *3D Cursor* tras usarlo una vez. Las rotaciones siguientes giran alrededor de un punto lejano y la pieza «sale volando».

#### Mirror en Edit Mode

- **Ubicación:** `Tool Settings > Options`: casillas *X*, *Y*, *Z* y *Topology Mirror*; `Ctrl+M` para reflejar la selección de forma interactiva.
- **Función técnica:** replica en el lado opuesto las transformaciones de los vértices que tienen pareja simétrica.
- **Parámetros críticos:** *Topology Mirror* empareja por conectividad y no por posición, para mallas que ya no son exactamente simétricas.
- **Pro-tip:** en un personaje ya posado o con asimetrías leves, *Topology Mirror* permite seguir editando ambos lados a la vez.
- **Trampa común:** confiar en el espejo por posición en una malla con vértices desplazados unas décimas. Los que no encuentran pareja se quedan quietos sin avisar; repara primero con *Snap to Symmetry*.

#### Correct Face Attributes

- **Ubicación:** `Tool Settings > Options > Correct Face Attributes`.
- **Función técnica:** al mover vértices, reajusta las UV y los colores por esquina para que la textura no se deforme.
- **Parámetros críticos:** *Keep Connected* mantiene unidas las UV de las islas.
- **Pro-tip:** actívalo para corregir la silueta de un modelo ya texturizado sin rehacer el despliegue UV.
- **Trampa común:** dejarlo activo durante el modelado normal. Añade cálculo en cada transformación y puede desordenar UV que aún no estaban terminadas.

## 2.10 Datos de la malla relacionados con el modelado

#### Hooks y Vertex Parent

- **Ubicación:** `Ctrl+H` (menú *Hooks*); `Ctrl+P` en *Edit Mode* (*Make Vertex Parent*).
- **Función técnica:** un *hook* crea un modificador que hace que un objeto controle un grupo de vértices; *Vertex Parent* hace lo contrario: emparenta un objeto a uno o tres vértices.
- **Parámetros críticos:** *Hook to New Object*, *Hook to Selected Object*, *Hook to Selected Object Bone*; *Falloff* y *Strength* en el modificador.
- **Pro-tip:** *Vertex Parent* con tres vértices hace que un objeto siga la posición y la orientación de una superficie que se deforma (un botón sobre una tela, un remache sobre una chapa animada).
- **Trampa común:** añadir *hooks* por encima de un modificador que cambia el número de vértices. El *hook* referencia índices de la malla original y debe evaluarse antes en la pila.

#### Set Attribute y Face Data

- **Ubicación:** `Mesh > Set Attribute`; `Face > Face Data`.
- **Función técnica:** *Set Attribute* escribe un valor en el atributo activo para los elementos seleccionados; *Face Data* rota o invierte UV y colores dentro de la cara, y *Flip Quad Tessellation* cambia la diagonal interna con que se triangula un quad.
- **Parámetros críticos:** el atributo activo se elige en `Object Data Properties > Attributes`.
- **Pro-tip:** un atributo booleano de cara creado a mano y rellenado con *Set Attribute* es una máscara de selección permanente que Geometry Nodes y los *shaders* pueden leer.
- **Trampa común:** ignorar la diagonal de los quads no planos. Decide la silueta y el sombreado tras triangular; si una cara se pliega hacia el lado equivocado, usa *Flip Quad Tessellation* o gira la arista con *Rotate Edge*.

#### Rotate Edge

- **Ubicación:** `Edge > Rotate Edge CW` y `Rotate Edge CCW`.
- **Función técnica:** gira una arista dentro de las dos caras que la comparten, conectándola al siguiente par de vértices.
- **Parámetros críticos:** sentido del giro.
- **Pro-tip:** es la herramienta para redirigir el flujo sin borrar nada: mueve un polo una posición o cambia la diagonal de un par de triángulos.
- **Trampa común:** usarla en aristas de borde o que tocan n-gons grandes. El resultado es impredecible; funciona bien entre dos quads o dos triángulos.

#### Blend from Shape y Propagate to Shapes

- **Ubicación:** menú `Vertex`.
- **Función técnica:** *Blend from Shape* mezcla en los vértices seleccionados la posición que tienen en otra *shape key*; *Propagate to Shapes* copia la posición actual a todas las *shape keys*.
- **Parámetros críticos:** *Shape*, *Blend* y *Add* en *Blend from Shape*.
- **Pro-tip:** tras corregir la malla base de un personaje con expresiones, *Propagate to Shapes* sobre los vértices tocados lleva el arreglo a todas las claves.
- **Trampa común:** propagar con todos los vértices seleccionados. Borra todas las *shape keys*, porque las iguala a la forma actual.
