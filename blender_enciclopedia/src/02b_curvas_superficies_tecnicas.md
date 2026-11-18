## 2.11 Curvas

Blender tiene dos tipos de objeto de curva, y conviene no confundirlos:

| | Curve (heredada) | Curves (nueva) |
|---|---|---|
| Se crea con | `Add > Curve > Bézier`, *Circle*, *Nurbs Curve*, *Nurbs Circle*, *Path* | `Add > Curve > Empty Hair`, *Fur*; o como salida de Geometry Nodes |
| Grosor y relleno | Panel *Geometry* propio: *Extrude*, *Bevel*, *Taper* | No tiene panel; se construye con Geometry Nodes (*Curve to Mesh*) |
| Uso principal | Modelado de perfiles, tubos, logotipos, trayectorias | Pelo, y base de datos de curvas para Geometry Nodes |
| Tipos de spline | Poly, Bézier, NURBS | Catmull-Rom, Poly, Bézier, NURBS |
| Atributos genéricos | No | Sí |

El objeto *Curve* heredado sigue siendo el estándar para modelar y es el que documenta esta sección. El objeto *Curves* se describe al final y vuelve a aparecer en los módulos de Geometry Nodes y de pelo.

### 2.11.1 Anatomía de una curva

Un objeto de curva contiene una o varias *splines*. Cada punto de control guarda posición, **radio** (escala el bisel o el objeto de bisel en ese punto), **inclinación** (*tilt*, giro del perfil alrededor de la curva) y, en NURBS, **peso**. La curva se muestrea con la resolución U para producir la geometría que ves; esa geometría es evaluada, y no existe como malla hasta que conviertes el objeto.

#### Tipos de manejador Bézier

- **Ubicación:** `V` en *Edit Mode*; `Control Points > Set Handle Type`.
- **Función técnica:** cada punto Bézier tiene dos manejadores que definen la tangente de entrada y de salida.
- **Parámetros críticos:** *Automatic* (tangente calculada y suave), *Vector* (apunta al punto vecino: tramo recto), *Aligned* (los dos manejadores se mantienen en línea), *Free* (independientes: esquina), *Toggle Free/Align*.
- **Pro-tip:** un contorno técnico se traza más rápido con todos los puntos en *Vector* y cambiando a *Aligned* solo los que deben ser curvos. Tramos rectos exactos y curvas donde tocan.
- **Trampa común:** mover un manejador *Automatic* lo convierte en *Aligned* sin avisar. Si después quieres que vuelva a calcularse solo, hay que restablecer el tipo o usar *Recalculate Handles* (`Shift+N`).

#### Herramientas de edición de curva

- **Ubicación:** barra de herramientas de *Edit Mode* de curva: *Draw*, *Curve Pen*, *Extrude*, *Extrude to Cursor*, *Radius*, *Tilt*, *Shear*, *Randomize*. Atajos: `E` extruye, `Ctrl+clic derecho` añade un punto, `F` une dos extremos, `Alt+C` abre o cierra la spline, `Y` divide, `P` separa, `X` borra, `Ctrl+X` disuelve, `Alt+S` radio, `Ctrl+T` inclinación, `Alt+T` borra la inclinación.
- **Función técnica:** crean y modifican puntos de control y sus datos por punto.
- **Parámetros críticos:** *Segments > Subdivide* y *Switch Direction*; `Curve > Set Spline Type` (*Poly*, *Bézier*, *NURBS*); *Smooth*, *Smooth Curve Tilt*, *Smooth Curve Radius* y *Smooth Curve Weight*; `Curve > Clean Up > Decimate Curve`.
- **Pro-tip:** *Dissolve* (`Ctrl+X`) elimina un punto y ajusta los manejadores vecinos para conservar la forma; *Delete* la aplana. *Decimate Curve* hace lo mismo en lote para curvas con demasiados puntos.
- **Trampa común:** ignorar la dirección de la curva. Determina el sentido del *Taper*, de los modificadores Array y Curve, y de la restricción Follow Path. Si algo sale al revés, usa *Switch Direction* en lugar de rotar objetos.

#### Draw

- **Ubicación:** barra de herramientas, *Draw*.
- **Función técnica:** convierte un trazo a mano alzada en una spline ajustada.
- **Parámetros críticos:** *Curve Type* (*Poly* o *Bézier*); *Tolerance* (cuanto más alta, menos puntos); *Method* (*Refit* o *Split*); *Detect Corners* y *Corner Angle*; radio mínimo y máximo con presión de tableta; *Taper Start* y *Taper End*; *Projection Depth* (*Cursor* o *Surface*), con *Offset* y *Only First*.
- **Pro-tip:** con *Projection Depth > Surface* dibujas directamente sobre otro modelo. Con un bisel activo en la curva obtienes cables, costuras, correas y venas apoyados sobre la superficie.
- **Trampa común:** dibujar con una tolerancia baja. Genera decenas de puntos por trazo, imposibles de editar a mano. Sube *Tolerance* hasta quedarte con los puntos que realmente definen la forma.

#### Curve Pen

- **Ubicación:** barra de herramientas, *Curve Pen*.
- **Función técnica:** herramienta de pluma al estilo de los programas vectoriales: clic añade un punto, arrastrar define manejadores, `Ctrl+clic` inserta o elimina un punto sobre la curva, doble clic alterna el tipo de manejador.
- **Parámetros críticos:** en los ajustes de la herramienta: *Extrude Point*, *Extrude Handle*, *Insert Point*, *Delete Point*, *Move Segment*, *Close Spline* y *Toggle Vector*.
- **Pro-tip:** *Move Segment* permite arrastrar un tramo de la curva directamente, y Blender recoloca los manejadores. Es la forma más rápida de ajustar una silueta a una imagen de referencia.
- **Trampa común:** trazar un logotipo en una curva 3D y encontrarlo alabeado al rotar la vista. Pon la curva en modo *2D* (panel *Shape*) antes de empezar si la forma es plana.

### 2.11.2 Propiedades del objeto de curva

#### Shape

- **Ubicación:** `Object Data Properties > Shape`.
- **Función técnica:** controla cómo se evalúa y se rellena la curva.
- **Parámetros críticos:** *2D* / *3D*; *Resolution Preview U* y *Render U* (segmentos por tramo; con *Render U* en 0 se usa la de previsualización); *Twist Method* (*Minimum*, *Tangent*, *Z-Up*) y *Smooth*; *Fill Mode* (en 3D: *Full*, *Back*, *Front*, *Half*; en 2D: *None*, *Back*, *Front*, *Both*); en curvas 2D, *Fill Solver* y *Fill Rule*; opciones de deformación para el modificador Curve: *Radius*, *Stretch*, *Bounds Clamp*.
- **Pro-tip:** si un tubo aparece retorcido en una curva con muchos giros, cambia *Twist Method* a *Z-Up* (estable cuando la curva no pasa por la vertical) o corrige con *Tilt* por punto. *Minimum* es el más estable en general, pero acumula giro en hélices.
- **Trampa común:** dejar la resolución por defecto (12) en curvas que van a convertirse en malla. Cada tramo genera doce segmentos y el resultado es innecesariamente denso. Para tubos, entre 3 y 6 suele bastar.

#### Geometry: Extrude, Offset y Taper

- **Ubicación:** `Object Data Properties > Geometry`.
- **Función técnica:** da volumen a la curva sin convertirla en malla.
- **Parámetros críticos:** *Offset* (desplaza el contorno en paralelo), *Extrude* (extruye en el eje local Z, a ambos lados), *Taper Object* (otra curva cuya altura define el radio a lo largo del recorrido), *Taper Radius* (*Override*, *Multiply*, *Add*) y *Map Taper*.
- **Pro-tip:** un contorno 2D con *Extrude* y un bisel pequeño produce placas y logotipos con canto biselado en segundos, y siguen siendo editables como curva.
- **Trampa común:** escalar el objeto de curva para cambiar su grosor. *Extrude* y *Bevel* están en unidades locales y se deforman con la escala no uniforme. Ajusta los valores del panel o aplica la escala.

#### Geometry: Bevel

- **Ubicación:** `Object Data Properties > Geometry > Bevel`.
- **Función técnica:** barre un perfil a lo largo de la curva.
- **Parámetros críticos:** modo *Round* (*Depth* es el radio; *Resolution* define los lados: 0 da cuatro lados, 4 da doce), *Object* (usa otra curva como perfil) o *Profile* (perfil dibujado en un widget); *Fill Caps* (cierra los extremos).
- **Pro-tip:** el modo *Object* con un perfil cerrado y el radio por punto (`Alt+S`) permite modelar molduras, marcos, raíles y tentáculos con sección variable.
- **Trampa común:** olvidar que la sección tiene que estar en el plano XY local de la curva de perfil. Un perfil dibujado en otra orientación aparece girado 90° o aplastado.

#### Start & End Mapping

- **Ubicación:** `Object Data Properties > Geometry > Start & End Mapping`.
- **Función técnica:** recorta la geometría generada entre dos factores de 0 a 1.
- **Parámetros críticos:** *Factor Start* y *End*; *Mapping* (*Resolution*, *Segments*, *Spline*).
- **Pro-tip:** animar *Factor End* de 0 a 1 hace crecer un cable, una enredadera o un trazo a lo largo de su recorrido sin simulación ni nodos.
- **Trampa común:** con el *Mapping* por defecto (*Resolution*), la velocidad de crecimiento varía con la separación entre puntos de control. Cambia a *Spline* para que el factor sea proporcional a la longitud real.

#### Path Animation

- **Ubicación:** `Object Data Properties > Path Animation`.
- **Función técnica:** define el parámetro temporal de la curva cuando otros objetos la siguen por emparentado *Follow Path* o mediante la restricción del mismo nombre.
- **Parámetros críticos:** *Frames*, *Evaluation Time*, *Clamp* y *Follow*.
- **Pro-tip:** en producción, usa la restricción Follow Path con *Fixed Position* y anima su *Offset Factor*. Es más explícito y fácil de editar en el Graph Editor que la animación implícita de la curva.
- **Trampa común:** animar un recorrido de cámara y olvidar *Follow*: el objeto se desplaza pero no gira con la trayectoria.

### 2.11.3 NURBS

#### Curvas NURBS

- **Ubicación:** `Add > Curve > Nurbs Curve`, *Nurbs Circle*, *Path*; propiedades en `Object Data Properties > Active Spline`.
- **Función técnica:** curva definida por un polígono de control que no pasa por sus puntos, salvo en los extremos si se activa *Endpoint*. La suavidad depende del orden.
- **Parámetros críticos:** *Order U* (2 es lineal; 3 cuadrática; 4 cúbica; a mayor orden, más suave y menos control local); *Endpoint* (la curva llega hasta el primer y el último punto); *Bézier* (se comporta por tramos como una Bézier); *Cyclic*; *Resolution U*; peso por punto (`W` en la barra lateral, campo *Weight*).
- **Pro-tip:** un círculo NURBS es un círculo matemáticamente exacto gracias a los pesos de sus puntos, cosa que una Bézier solo aproxima. Úsalo cuando la precisión de la sección importa.
- **Trampa común:** crear una curva NURBS con menos puntos que el orden indicado. Blender reduce el orden efectivo y la curva cambia de forma al añadir puntos.

### 2.11.4 Objeto Curves

#### Curves (curvas nuevas)

- **Ubicación:** `Add > Curve > Empty Hair` y *Fur*; resultado de nodos de curvas en Geometry Nodes; `Object > Convert > Curves` desde una curva heredada.
- **Función técnica:** tipo de datos basado en atributos, igual que las mallas modernas. Sus herramientas de *Edit Mode* son propias: *Draw*, *Pen*, *Radius*, *Tilt*, *Add > Bézier* y *Circle*, *Extrude*, *Subdivide*, *Switch Direction*, *Split*, *Separate*, *Set Curve Type*, *Set Handle Type*, *Toggle Cyclic* y *Set Attribute*.
- **Parámetros críticos:** tipo de curva (*Catmull Rom*, *Poly*, *Bézier*, *NURBS*); atributos por punto (`radius`, `tilt`) y por curva; para pelo, el objeto de superficie y su mapa UV de anclaje.
- **Pro-tip:** si vas a procesar las curvas con Geometry Nodes, este es el tipo nativo. Una curva heredada se convierte internamente en cada evaluación; trabajar directamente en *Curves* evita ese paso y da acceso a atributos propios.
- **Trampa común:** buscar el panel *Geometry* con *Bevel* y *Extrude*. No existe en este tipo de objeto: el volumen se genera con un modificador de nodos (*Curve to Mesh* con un perfil).

## 2.12 Texto

#### Objeto Text

- **Ubicación:** `Add > Text`; `Tab` entra en la edición del texto.
- **Función técnica:** es un objeto de la familia de las curvas. Genera contornos a partir de una fuente y comparte el panel *Geometry* (*Offset*, *Extrude*, *Bevel*, *Taper*).
- **Parámetros críticos:** panel *Font* (fuentes regular, negrita, cursiva; `Size`, `Shear`); *Paragraph* (alineación, espaciado de caracteres, palabras y líneas); *Text Boxes* (cajas de texto con desbordamiento); *Text on Curve*; *Resolution* del panel *Shape*.
- **Pro-tip:** mantén el texto como objeto Text todo lo posible: se corrige escribiendo. Para titulares con buen sombreado, usa un bisel pequeño de una o dos resoluciones y evita convertir a malla.
- **Trampa común:** convertir a malla y subdividir. El relleno de un texto es una triangulación arbitraria, llena de triángulos alargados. Si necesitas deformarlo, aplica antes un modificador Remesh o reconstruye la cara frontal con una rejilla.

## 2.13 Superficies NURBS

#### Objeto Surface

- **Ubicación:** `Add > Surface`: *Nurbs Curve*, *Nurbs Circle*, *Nurbs Surface*, *Nurbs Cylinder*, *Nurbs Sphere*, *Nurbs Torus*.
- **Función técnica:** parche definido por una rejilla de puntos de control en dos direcciones, U y V. La superficie se evalúa con la resolución indicada y no pasa por los puntos interiores.
- **Parámetros críticos:** *Order U* y *V*; *Endpoint U* y *V*; *Cyclic U* y *V*; *Resolution U* y *V*; peso por punto. En *Edit Mode*: `E` extruye una fila entera, `F` une dos bordes de superficies, `Ctrl+Shift+R` selecciona una fila de control.
- **Pro-tip:** el flujo útil es crear una curva de superficie (*Nurbs Curve* del menú *Surface*), extruirla varias veces con `E` para formar secciones y ajustar cada fila. Da cascos, carenados y carrocerías suaves con muy pocos puntos.
- **Trampa común:** esperar funciones de CAD. Las superficies de Blender no tienen recortes (*trims*), ni continuidad controlada entre parches, ni filas con distinto número de puntos. El conjunto de herramientas es mínimo; en producción se usan para generar una forma base que luego se convierte a malla.

## 2.14 Metaballs

#### Metaball

- **Ubicación:** `Add > Metaball`: *Ball*, *Capsule*, *Plane*, *Ellipsoid*, *Cube*.
- **Función técnica:** cada elemento emite un campo escalar. Blender suma los campos y genera la superficie donde el total alcanza un umbral, de modo que los elementos cercanos se funden.
- **Parámetros críticos:** en el objeto: *Resolution Viewport* y *Render* (tamaño de celda: menor valor, más detalle y más coste), *Influence Threshold* y *Update on Edit* (*Always*, *Half*, *Fast*, *Never*). En el elemento activo: *Type*, *Stiffness*, *Radius*, *Negative* (resta volumen) y tamaños X, Y, Z.
- **Pro-tip:** son un bloqueo orgánico rápido: unas cuantas bolas y cápsulas para torso y extremidades, conversión a malla y, a continuación, *Voxel Remesh* y escultura.
- **Trampa común:** no conocer la regla de las familias. Todos los objetos metaball cuyo nombre comparte la misma base (`Mball`, `Mball.001`, `Mball.002`) forman una sola superficie, y el que no lleva sufijo numérico controla la resolución, el umbral y el material de todos. Si borras o renombras ese objeto base, el conjunto cambia de aspecto. Para que dos grupos no se fundan, dales nombres base distintos.

## 2.15 Conversión entre tipos de geometría

#### Convert

- **Ubicación:** `Object > Convert` (`Alt+C`) en *Object Mode*.
- **Función técnica:** crea datos de otro tipo a partir de la geometría **evaluada** del objeto, es decir, con modificadores y ajustes de curva ya aplicados.
- **Parámetros críticos:** *Keep Original* (conserva el objeto de partida) y, según el destino, opciones propias.

| Destino | Admite como origen | Qué se pierde o cambia |
|---|---|---|
| Mesh | Curve, Surface, Metaball, Text, Point Cloud | Deja de ser paramétrico; la densidad queda fijada por la resolución |
| Curve | Mesh, Text | De una malla solo se convierten las aristas sueltas y las de borde; las interiores se descartan |
| Curves | Curvas evaluadas | Pasa al tipo nuevo basado en atributos |
| Point Cloud | Mesh | Solo quedan los vértices |
| Grease Pencil | Curve, Mesh | Trazos a partir de curvas o de aristas |

- **Pro-tip:** antes de convertir una curva a malla, baja *Resolution U* y la resolución del bisel hasta el mínimo que conserve la silueta. La topología resultante es una rejilla de quads limpia si la curva no tiene relleno 2D.
- **Trampa común:** convertir a curva una malla cerrada (un cubo, por ejemplo) y obtener un objeto vacío. Solo las aristas sin caras o con una sola cara producen splines; borra las caras o deja solo el contorno antes de convertir.

#### Visual Geometry to Mesh y Visual Geometry to Objects

- **Ubicación:** `Object > Apply > Visual Geometry to Mesh` y `Visual Geometry to Objects`.
- **Función técnica:** el primero sustituye los datos del objeto por su resultado evaluado (todos los modificadores aplicados a la vez); el segundo convierte en objetos independientes los distintos componentes que produce la evaluación, como las instancias generadas por nodos.
- **Parámetros críticos:** ninguno relevante; actúan sobre la selección.
- **Pro-tip:** *Visual Geometry to Mesh* es la manera de «congelar» una pila completa, incluidos los modificadores de nodos que generan geometría de otro tipo, para exportar a formatos sin modificadores.
- **Trampa común:** aplicarlo sobre el original sin duplicar. Se pierde toda la pila paramétrica; trabaja siempre sobre una copia destinada a exportación.

#### Join y Separate entre objetos

- **Ubicación:** `Ctrl+J` (*Join*) en *Object Mode*; `P` (*Separate*) en *Edit Mode*.
- **Función técnica:** *Join* fusiona los datos de los objetos seleccionados en el objeto activo. Solo une objetos del mismo tipo.
- **Parámetros críticos:** el objeto activo aporta el origen, los modificadores y el nombre. Los materiales se añaden como ranuras nuevas y los mapas UV se fusionan por nombre.
- **Pro-tip:** antes de unir, iguala los nombres de los mapas UV y de los atributos de color en todas las piezas. Los que no coinciden quedan vacíos en la parte de la malla que no los tenía.
- **Trampa común:** unir objetos con modificadores distintos. Solo sobreviven los del objeto activo, y los de los demás se descartan sin aplicarse.

## 2.16 Técnicas avanzadas de Hard Surface

Las técnicas siguientes combinan herramientas de este módulo con modificadores que se analizan uno a uno en el Módulo 3. Aquí se describe el flujo y su justificación.

### 2.16.1 Elegir el método antes de empezar

| Método | Pila típica | Resultado | Úsalo cuando |
|---|---|---|---|
| Subdivisión con bucles de soporte | Mirror → Subdivision | Superficies continuas de calidad de cine | Formas con doble curvatura; primeros planos; piezas que se deforman |
| Bisel con normales ponderadas | Mirror → Bevel → Weighted Normal | Aristas definidas con pocos polígonos | Maquinaria, armas, props, tiempo real |
| Booleanas no destructivas | Boolean → Bevel → Weighted Normal | Iteración muy rápida de formas | Diseño conceptual; piezas rígidas |
| Alta y baja con *bake* | Modelo denso + modelo ligero | Detalle en mapa de normales | Assets para motor de juego |

### 2.16.2 Flujo de subdivisión

1. Bloquea la forma con la menor cantidad de geometría posible y con el modificador Subdivision activo desde el principio (`Ctrl+1`, `Ctrl+2`).
2. Define las aristas vivas con bucles de soporte (`Ctrl+Shift+R`) o con Bevel de dos segmentos. La distancia del bucle a la arista fija el radio del borde.
3. Lleva los polos a zonas planas. Para terminar un bucle de soporte sin que recorra toda la pieza, redúcelo dentro de una cara plana con un par de polos.
4. Para agujeros circulares en superficies curvas, usa un número de lados que encaje con la rejilla: ocho lados sobre un bloque de 2 × 2 caras, doce o dieciséis en rejillas más densas.
5. Revisa con un material muy reflectante o con un *MatCap* de franjas. Cualquier pellizco aparece como una distorsión del reflejo.

### 2.16.3 Flujo de bisel con normales ponderadas

1. Modela las formas con caras planas y n-gons, sin bucles de soporte.
2. Aplica la escala (`Ctrl+A > Scale`).
3. Añade un modificador Bevel con límite por ángulo (30° es un punto de partida) o por peso, de uno a tres segmentos, con *Harden Normals*.
4. Añade Weighted Normal al final de la pila, con *Keep Sharp* activo, y sombrea suave.
5. Marca como *Sharp* las aristas que deban seguir duras y controla anchos distintos con *Bevel Weight*.

El resultado se sostiene con una fracción de los polígonos del método de subdivisión, porque las caras grandes conservan su normal exacta y solo los biseles interpolan.

### 2.16.4 Booleanas limpias

- Mantén los cortadores como objetos visibles en modo alambre, agrupados en una colección propia, y emparentados a la pieza para que la acompañen.
- Coloca el Bevel **después** de los Boolean en la pila. Así el bisel recorre también las aristas creadas por el corte.
- Evita las caras coplanares entre cortador y pieza. Desplaza el cortador una fracción o hazlo atravesar la pieza con claridad.
- Si el bisel se rompe en la intersección, suele faltar geometría: añade un bucle cerca del corte para que el bisel tenga con qué trabajar, o reduce su ancho.
- Antes de exportar: aplica la pila sobre una copia, ejecuta *Limited Dissolve* en las caras planas, *Merge by Distance* y comprueba *Non Manifold*.

### 2.16.5 Detalle sobre superficies curvas

Cortar un panel en una superficie curva altera su sombreado, porque las caras nuevas ya no siguen la curvatura original. Hay tres soluciones habituales:

- **Shrinkwrap:** modela el detalle sobre una copia y proyéctalo contra la superficie original limpia, que actúa como referencia de forma.
- **Transferencia de normales:** el modificador Data Transfer copia las normales personalizadas de la superficie limpia a la pieza recortada, limitado por un grupo de vértices. El sombreado vuelve a ser continuo aunque la geometría no lo sea.
- **Piezas flotantes:** geometría de detalle (tornillos, rejillas, ranuras) colocada justo por encima de la superficie, sin soldar. No sirve para siluetas ni para primeros planos rasantes, pero es estándar en modelos para *bake*.

### 2.16.6 Repetición paramétrica

- Mirror con un Empty como *Mirror Object* para simetrías fuera del origen.
- Array con *Object Offset* y un Empty rotado para patrones radiales.
- Array seguido de Curve para cadenas, orugas y cables segmentados; la longitud se ajusta con *Fit Type > Fit Curve*.
- Para repeticiones masivas o con variación, sustituye Array por instancias de Geometry Nodes.

## 2.17 Técnicas avanzadas de modelado orgánico

### 2.17.1 Tres caminos hacia una malla orgánica

| Camino | Proceso | Ventaja | Inconveniente |
|---|---|---|---|
| Modelado de caja | Cubo → extrusiones → bucles → subdivisión | Topología controlada desde el inicio | Lento para formas complejas |
| Polígono a polígono | Extruir aristas siguiendo la referencia | Flujo de bucles exacto | Exige planificar la topología |
| Escultura y retopología | Bloqueo esculpido → malla nueva encima | Libertad de forma total | Dos fases de trabajo (Módulo 4) |

### 2.17.2 Preparación

- Activa Mirror con *Clipping* y *Merge* antes de mover un solo vértice. *Clipping* impide que los vértices crucen el plano de simetría.
- Añade Subdivision en nivel 1 o 2 y activa su visualización en *Edit Mode* (*On Cage*) para editar viendo el resultado suavizado.
- Coloca referencias de frente y de perfil como imágenes (`Add > Image > Reference`) y comprueba que coinciden en altura antes de modelar.

### 2.17.3 Bucles que una cara y un cuerpo necesitan

- **Bucles concéntricos** alrededor de cada ojo y de la boca. Son los que permiten parpadear y abrir la boca sin que la malla se estire.
- **Bucle nasolabial**, que une el ala de la nariz con la comisura y separa la mejilla de la boca.
- **Bucles de la mandíbula y del cuello**, que marcan dónde cambia de dirección la superficie.
- **Polos** en las zonas de menor movimiento: pómulo, lateral de la frente, detrás de la mandíbula. Nunca en el párpado ni en la comisura.
- **Articulaciones:** al menos tres bucles en codos, rodillas y falanges (uno en el eje de giro y uno a cada lado). Con uno solo, la articulación se colapsa al doblarse.
- **Hombros y caderas:** bucles que rodean la raíz de la extremidad en lugar de cruzarla, para que el volumen se conserve al levantar el brazo.

### 2.17.4 Reducir y redirigir bucles

Pasar de una zona densa (una mano) a una ligera (el antebrazo) exige reducir bucles sin triángulos. Los patrones básicos son tres: de tres a uno, de cuatro a dos y de dos a uno con forma de diamante. Todos se construyen con `J`, *Merge > Collapse* y *Rotate Edge*, y todos generan polos, de modo que hay que situarlos donde no haya pliegue.

### 2.17.5 Herramientas que aceleran el trabajo orgánico

- **Modificador Skin:** crea una malla base a partir de un esqueleto de vértices y aristas. `Ctrl+A` en *Edit Mode* ajusta el radio de cada vértice. Con Subdivision y Mirror encima, es el bloqueo más rápido para criaturas y ramas.
- **Edición proporcional con *Connected Only*:** para ajustar volúmenes sin arrastrar partes vecinas.
- **Smooth con ajuste a superficie:** para repartir vértices sin perder la forma.
- **Lattice:** para corregir proporciones de un personaje completo con pocos puntos de control, sin tocar la topología.
- **Shrinkwrap sobre el modelo esculpido:** mantiene pegada a la referencia la malla que estás reconstruyendo.

### 2.17.6 Criterios de entrega de una malla orgánica

| Comprobación | Herramienta |
|---|---|
| Solo quads en las zonas que se deforman | *Select All by Trait > Faces by Sides* |
| Sin polos de seis o más aristas | *Poles by Count* |
| Simetría exacta | *Snap to Symmetry*, edición en espejo X |
| Normales hacia fuera | *Face Orientation*, `Shift+N` |
| Sin vértices duplicados ni geometría suelta | *Merge by Distance*, *Delete Loose* |
| Densidad acorde a la curvatura y a la deformación | Revisión visual con Subdivision activo |
| Escala aplicada y origen en el suelo, entre los pies | `Ctrl+A`, *Set Origin* |
