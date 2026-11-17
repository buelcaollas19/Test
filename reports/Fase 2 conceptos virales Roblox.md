# Fase 2 — Cinco conceptos originales con potencial viral para Roblox

*Documento de diseño, 17 de noviembre de 2026. Se apoya en el informe de la Fase 1 («Anatomía del éxito en Roblox»).*

## Cómo leer estas fichas

Los cinco conceptos son hipótesis de diseño, no productos probados. Cada uno aplica la misma receta que la Fase 1 identificó en todos los mega-hits de 2025–2026: **un loop base familiar + un sistema prestado de otro género + un reloj de retorno + un tema con alcance propio**. Todos cumplen además las condiciones que dejó el informe:

- La primera acción ocurre sin texto antes de 60 segundos, porque el algoritmo mide el rebote a los 60 y a los 180 segundos.
- Hay algo que madura entre sesiones y un motivo distinto para volver en el Día 1, los Días 2–7 y los Días 8–28, que son las ventanas que mide «Recommended for You» desde junio de 2026.
- El juego en grupo funciona sin chat (el chat depende de la verificación de edad).
- La monetización empieza por compras pequeñas y repetibles (39–99 R$) y termina en un bien de estatus (4,999+ R$).
- Ningún concepto necesita ítems aleatorios de pago para ser completo o rentable. Donde aparecen son opcionales, con probabilidades visibles, y se sustituyen por compras de resultado fijo en los países y edades restringidos.
- El contenido es de madurez Minimal o Mild, para no perder el alcance de las cuentas Kids/Select.

**Sobre los precios.** Todos los precios en Robux («R$») son propuestas de partida alineadas con la escalera observada en la Fase 1. Deben ajustarse con las herramientas de precio de Roblox una vez haya volumen de transacciones.

**Sobre la originalidad.** Hice una búsqueda rápida por cada concepto para ver si ya existe un juego igual. No encontré ninguno que combine los mismos elementos, pero sí títulos vecinos, que cito en cada ficha. La búsqueda fue superficial (un intento por concepto, sin abrir las páginas), así que antes de producir conviene revisar el catálogo de Roblox a fondo.

| # | Título | Familia | Loop base | Sistema prestado | Reloj de retorno |
|---|---|---|---|---|---|
| 1 | Turbo Critters Derby | Simulator | Criar y entrenar mascotas | Carreras con público de todo el servidor | Entrenamiento offline; derby cada 6 min |
| 2 | Kaiju o Ciudad | Tycoon | Tycoon de construcción | PvP asimétrico de destrucción | Grúas offline; sirena cada 8 min |
| 3 | Meteor Rush | RNG | Tirada de rareza «1 en X» | Evento de mapa compartido y minería en equipo | Telescopio que se recarga offline; meteorito cada 4 min |
| 4 | Última Luz | Horror / Survival | Supervivencia co-op por noches | Puerto persistente tipo tycoon | Carga de barcos offline; parte meteorológico diario |
| 5 | Guardería de Mímicos | Roleplay / Social | Cuidado de mascotas | Deducción social con disfraz | Rondas de 6 min; mascotas que crecen offline |

---

## Concepto 1 — Turbo Critters Derby

### 1. Título gancho y high concept

**«Turbo Critters Derby 🏁 ¡Cría, entrena y corre!»**

Crías criaturas absurdas que entrenan solas mientras estás desconectado, y cada 6 minutos todo el servidor se detiene a ver el Gran Derby en el estadio central. No pilotas la carrera: preparas al corredor y sufres el final de foto con público.

### 2. Nicho e hibridación

- **Loop base:** pet simulator (eclosionar, alimentar, mejorar estadísticas).
- **Sistema prestado:** gestión deportiva con carrera como espectáculo. La carrera se ve, no se conduce, y por eso cualquier jugador de móvil compite en igualdad.
- **Por qué funcionaría ahora:** Simulation concentra el 36.7 % de las plays (Dubit, ago–sep 2026), pero sus hits decaen más del 95 % porque su progreso es solitario y AFK. Aquí el progreso idle desemboca en un evento social programado, que es lo que da audiencia estable a los evergreens.
- **Títulos vecinos encontrados:** Fish Race, Dinosaur Racing y Brainrot Training tienen «entrena y corre». Los resultados de búsqueda no mencionan en ninguno entrenamiento offline ni carrera vista por todo el servidor.

### 3. Core loop y meta-game

**Primeros 30 segundos.** Apareces en la grada del estadio con una carrera en marcha o a punto de empezar. Un rastro luminoso te lleva a un huevo gratuito a diez pasos. Lo tocas, eclosiona y sale tu primer critter con una forma de correr aleatoria (patas, ruedas, saltos). Tus monedas iniciales equivalen justo al precio del primer snack de entrenamiento.

**Primeros 5 minutos.** Le das tres snacks y ves subir tres estadísticas: Velocidad, Aguante y Caos. Entras en un «Sprint de novatos» de 20 segundos contra rivales de tu nivel, con podio garantizado la primera vez. Con el premio compras tu primera máquina de entrenamiento para el establo.

**Primeros 30 minutos.** Clasificas para el Derby del servidor (ocho carriles, entra el mejor tiempo de prueba de cada jugador). Desbloqueas el segundo hueco de critter y haces tu primera cría: dos critters dan un huevo que hereda piezas de ambos, con una pequeña probabilidad de mutación. Antes de salir dejas programada la cola de entrenamiento offline.

**Meta-game (cientos de horas).**

- **Genética:** cinco ranuras de piezas por critter, cada una con rareza. La cría es azar gratuito con contador de garantía (por ejemplo, mutación rara asegurada tras 40 crías sin ninguna).
- **Variantes apilables:** Dorado, Neón y Glitch multiplican el valor sin exigir modelos nuevos.
- **Ligas semanales:** de Bronce a Leyenda, con ascensos y descensos.
- **Prestigio:** «retirar a un campeón» lo convierte en estatua del Salón de la Fama y da un bono permanente a su linaje. Se reinicia ese critter; persiste la línea de sangre.
- **Pistas rotativas:** barro, hielo y obstáculos premian estadísticas distintas, de modo que no hay un único critter óptimo.
- **Clubes:** establos de hasta 20 jugadores con relevos semanales.

**Economía.** Tres capas: Monedas (blanda; se drenan en entrenamiento, mejoras de establo y una tarifa de cría que sube ~×1.6 por generación), Trofeos (moneda de liga que caduca cada temporada y compra cosméticos) y Boletos (moneda de intercambio, con una comisión del 10 % por trade).

### 4. Gancho viral

- **Final de foto con repetición.** Al cruzar la meta, la cámara de todo el servidor pasa a cámara lenta sobre los dos primeros.
- **La estadística Caos.** Cada critter tiene una pequeña probabilidad de hacer algo ridículo en plena carrera: tropezar, echarse una siesta o salir disparado hacia atrás. Produce remontadas y derrotas absurdas que se entienden en 15 segundos sin contexto.
- **Formato para creadores:** «copas» en servidor privado donde el creador corre contra los critters de sus espectadores, y series del tipo «crié al critter más feo y ganó la liga».
- **Ceremonia de rareza:** eclosionar una mutación Leyenda se anuncia a todo el servidor, y ese critter estrena animación de entrada al estadio.

### 5. Estrategia de retención

- **Día 1:** la cola de entrenamiento offline termina en 4–8 horas y tiene tope. Volver significa recoger un critter más fuerte y reprogramar, lo que favorece dos o tres sesiones cortas al día en lugar de una larga AFK.
- **Días 2–7:** Liga de Novatos de siete días con ascenso el séptimo, y una pista distinta cada día.
- **Días 8–28:** temporada de cuatro semanas con relevos de club. Criar un linaje Leyenda exige unas tres generaciones, es decir, dos o tres semanas.
- **Co-play sin chat:** animar al critter de un amigo (un toque) da un pequeño impulso a su corredor y un sello de amistad a ambos.
- **Avisos:** notificación opcional (13+) cuando el critter termina de entrenar.

### 6. Plan de monetización

| Gamepass | Precio | Qué da |
|---|---|---|
| Segundo Entrenador | 399 R$ | Dos colas de entrenamiento simultáneas |
| Palco VIP | 449 R$ | 2× monedas por carrera, asiento VIP y etiqueta |
| Comedero Automático | 299 R$ | Alimenta y recoge entrenamientos solo mientras estás conectado |
| Establo Ampliado | 249 R$ | +10 huecos de critter |
| Lupa del Criador | 799 R$ | Muestra las probabilidades de herencia antes de cruzar |

| Developer product | Precio | Qué da |
|---|---|---|
| Terminar entrenamiento ya | 39 R$ | Salta el temporizador en curso |
| Pack de 5 snacks potenciados | 79 R$ | Entrenamiento acelerado para una sesión |
| Starter Pack (una vez, primeros 3 días) | 99 R$ | Un critter raro a elegir entre tres, snacks y montura exclusiva |
| Fiesta de Confeti | 199 R$ | 2× monedas para todo el servidor durante 15 min, con el nombre del comprador |
| Pase de temporada premium | 749 R$ | Diez niveles en cuatro semanas |
| Patrocinar una Copa | 4,999 R$ | Una copa del servidor lleva tu nombre; trofeo dorado y premios para todos los participantes |

Regla de justicia: el dinero compra tiempo y comodidad, nunca estadísticas de carrera directas.

---

## Concepto 2 — Kaiju o Ciudad

### 1. Título gancho y high concept

**«Kaiju o Ciudad 🦖 ¡Construye, que te aplasten y sube de nivel!»**

Construyes un barrio tycoon junto a tus vecinos, y cada 8 minutos un jugador se convierte en un monstruo gigante que lo arrasa. Los escombros son el único material para mejorar: necesitas que te destruyan para progresar.

### 2. Nicho e hibridación

- **Loop base:** tycoon de parcela (edificios que generan ingreso pasivo).
- **Sistema prestado:** PvP asimétrico de uno contra todos, con destrucción física.
- **Por qué funcionaría ahora:** el robo entre bases fue el motor de los récords de 2025–2026, pero se apoya en la pérdida, que es justo lo que citan las demandas por diseño adictivo y lo que Roblox dice querer dejar atrás. Este concepto conserva el drama de «alguien ataca mi base» e invierte el resultado: ser atacado es una ganancia.
- **Títulos vecinos encontrados:** Kaiju Universe y Kaiju Evolution son juegos de ser monstruo y destruir; Smash the City es destrucción por monedas. Los resultados no describen ninguno como tycoon ni con escombros como recurso de mejora.

### 3. Core loop y meta-game

**Primeros 30 segundos.** Apareces en tu parcela vacía frente a una plataforma que brilla. Tu dinero inicial es exactamente el precio del primer edificio. Lo colocas y empiezan a saltar monedas. En el cielo se ve la cuenta atrás de la sirena.

**Primeros 5 minutos.** Construyes cuatro o cinco edificios. Antes del minuto tres, un mini-kaiju controlado por el juego aplasta uno solo de ellos y deja una lluvia de escombros. Los recoges, se ilumina el botón de mejora y el edificio se reconstruye en nivel 2. Has aprendido la regla central sin leer nada.

**Primeros 30 minutos.** Llega el primer ataque de un jugador. Tu «medidor de furia» se llena cuando construyes y cuando te destruyen; quien lo tiene más alto es el siguiente kaiju, así que todos acaban teniendo turno (el primero, garantizado en la primera media hora). Tu furia dura 90 segundos y lo que destruyes se convierte en puntos para mejorar a tu monstruo.

**Por qué la destrucción no frustra.** Los planos persisten y los edificios se reconstruyen solos en 60 segundos al mismo nivel. Solo se pierde el ingreso sin recoger, lo que te da un motivo para estar atento antes de la sirena. Quien no quiera ser atacado puede activar un escudo, pero entonces no recibe escombros.

**Meta-game (cientos de horas).**

- **Doble progresión:** la ciudad (edificios de nivel 1 a 10) y tu kaiju (tamaño, habilidades, aspectos).
- **Prestigio «Refundar»:** cambia la era de tu ciudad (aldea, medieval, moderna, neón, colonia espacial). Cada era multiplica el ingreso, cuesta unas cuatro veces más que la anterior y hace evolucionar a tu kaiju.
- **Alianzas:** cuatro parcelas comparten un monumento que solo puede romper un Titán, el jefe del evento semanal.
- **Colecciones y rankings:** piezas de kaiju, aspectos de edificios, mayor destrozo en un solo turno, torre más alta.

**Economía.** Dinero (blanda; la inflación se absorbe con los costes exponenciales y los cambios de era), Escombros (solo se obtienen por destrucción, en tipos que rotan a diario) y Fichas de intercambio para aspectos.

### 4. Gancho viral

- **El contraste de escala.** Un amigo de 60 metros pisando tu casa, grabado desde el suelo o desde los ojos del monstruo. Se entiende sin sonido ni contexto.
- **La paradoja.** «Me destruyó la ciudad y gracias a eso construí el rascacielos» es un titular natural para un vídeo.
- **Duelo de kaijus.** Cuando dos medidores se llenan a la vez, cosa poco frecuente, el servidor entero presencia una pelea de monstruos.
- **Series de progresión:** «me convertí en el kaiju más grande del servidor».

### 5. Estrategia de retención

- **Día 1:** las grúas terminan edificios mientras estás fuera (4–8 horas) y la caja fuerte acumula ingreso hasta un tope.
- **Días 2–7:** el «kaiju del día» deja un tipo de escombro distinto (hielo, fuego, cristal) y ciertas mejoras piden tipos concretos, así que hacen falta varios días. La segunda era se alcanza hacia el tercer día.
- **Días 8–28:** temporada de monumentos de alianza de cuatro semanas, eras cuarta y quinta, y árbol de evolución del kaiju.
- **Evento semanal sostenible:** la «Noche del Titán» la genera el sistema, sin contenido hecho a mano cada semana.
- **Co-play sin chat:** las alianzas defienden juntas con torretas y señuelos; no hace falta hablar.

### 6. Plan de monetización

| Gamepass | Precio | Qué da |
|---|---|---|
| 2× Dinero | 399 R$ | Duplica el ingreso de los edificios |
| Cobro Automático | 299 R$ | Recoge el ingreso antes de cada sirena |
| Grúas Rápidas | 599 R$ | Temporizadores de construcción a la mitad |
| Planta Extra | 349 R$ | Más huecos de edificio en la parcela |
| Llamador de Titanes | 4,999 R$ | Una vez por hora invoca un evento de Titán con 2× escombros para todo el servidor |

| Developer product | Precio | Qué da |
|---|---|---|
| ¡Llama al kaiju! | 39 R$ | Un kaiju del juego aplasta tu parcela ahora y te deja escombros |
| Terminar construcción | 49 R$ | Salta una grúa en curso |
| Pack de Era (una vez por era) | 129 R$ | Tres edificios de la nueva era y un aspecto |
| Furia llena | 149 R$ | Te pone el siguiente en la cola de kaiju (una compra por ciclo y servidor) |
| Tormenta de escombros | 199 R$ | 2× escombros para todo el servidor durante 15 min |
| Pase de temporada premium | 749 R$ | Diez niveles en cuatro semanas |

El producto de mayor frecuencia es pagar 39 R$ por ser destruido: es barato, repetible, divertido de ver y no perjudica a nadie.

---

## Concepto 3 — Meteor Rush

### 1. Título gancho y high concept

**«Meteor Rush ☄️ ¡Cayó un 1 en 10,000,000!»**

Cada 4 minutos cae un meteorito de rareza aleatoria en un mapa compartido, y todo el servidor ve en el cielo lo raro que es antes de que toque tierra. Corres, lo minas en equipo y forjas lo que lleva dentro.

### 2. Nicho e hibridación

- **Loop base:** RNG de rareza («1 en X») con ceremonia creciente.
- **Sistemas prestados:** evento de mapa que hace converger a todos los jugadores, y minería con forja.
- **Por qué funcionaría ahora:** el RNG puro es solitario y AFK (Sol's RNG cayó de ~194 K a ~35 K de CCU), y su monetización es la más expuesta a las restricciones sobre ítems aleatorios de pago. Aquí la tirada es gratuita, pública y compartida: el azar se convierte en un acontecimiento con testigos, que es lo que la Fase 1 identificó como motor de clips.
- **Títulos vecinos encontrados:** Slime RNG tiene caídas de meteoritos a nivel de servidor; Tycoon RNG, meteoritos por niveles de rareza; 99 Nights in the Forest, minería de meteoritos. La búsqueda no encontró ninguno que haga de ello el loop central con carrera y minería cooperativa.

### 3. Core loop y meta-game

**Primeros 30 segundos.** Apareces en una colina. A los ocho segundos cae un pequeño «meteorito de bienvenida» a diez metros de ti. Mantienes pulsado para picarlo, se agrieta y revela tu primer núcleo con su ceremonia. Te equipas la estela que da.

**Primeros 5 minutos.** Cae el primer meteorito del servidor: un haz de luz marca el punto y todos corren. Todo el que pica recibe fragmentos, así que no hay perdedores ni motivo para molestar a otros. Vendes los duplicados por Polvo Estelar y compras el pico de nivel 2 y unas botas.

**Primeros 30 minutos.** Forjas tu primer equipo (botas de velocidad, pico, amuleto de suerte), desbloqueas el gancho de movimiento y la segunda zona, presencias tu primer evento Raro con cambio de color del cielo y completas diez entradas del índice.

**Meta-game (cientos de horas).**

- **Dos capas de azar, ambas gratuitas:** la rareza del meteorito (la ve todo el servidor) y la tirada personal al abrir tus fragmentos (depende de tu suerte).
- **Índice:** más de 150 núcleos en nueve niveles de rareza, de Común a Cósmico.
- **Escalera de ceremonia:** mensaje en el chat desde Épico, cielo de color desde Legendario, cámara y música propias desde Mítico, anuncio entre servidores para Cósmico.
- **Forja:** los núcleos se combinan en reliquias con rasgos que se pueden volver a tirar con Polvo Estelar, con contador de garantía.
- **Prestigio «Supernova»:** reinicia equipo y zonas a cambio de suerte permanente y un planeta nuevo; cada uno cuesta unas cuatro veces más.
- **Tripulaciones:** hasta seis jugadores comparten un observatorio que da suerte extra cuando hay tres o más conectados a la vez.

**Economía.** Polvo Estelar (blanda; su gran sumidero es la forja), Fichas Estelares (intercambio de núcleos con comisión) y Esquirlas de evento, que caducan.

### 4. Gancho viral

- **El cielo cambia para todos.** Aparece «1 en 10,000,000» sobre el mapa, treinta jugadores echan a correr en la misma dirección y hay una revelación al final. Es un clip de 15 segundos con planteamiento, carrera y desenlace.
- **Reacciones de creadores** ante un Cósmico, que por diseño es rarísimo y se anuncia en todos los servidores.
- **Lluvias compradas:** quien paga una lluvia de meteoritos para todo el servidor aparece con su nombre en el cielo, lo que genera agradecimientos y más clips.

El meteorito se anuncia solo 20 segundos antes del impacto para que saltar de servidor en servidor no compense.

### 5. Estrategia de retención

- **Día 1:** el telescopio personal acumula hasta tres cargas offline (una cada cuatro horas). Cada carga invoca un meteorito privado, lo que da motivo para dos o tres sesiones diarias.
- **Cada hora en punto:** lluvia de cinco minutos con suerte mejorada, generada por el sistema.
- **Días 2–7:** calendario de «constelación» que se completa jugando siete de diez días (tolera fallos) y entrega un Legendario garantizado.
- **Días 8–28:** primera Supernova hacia el día diez, temporada de observatorio de tripulación de cuatro semanas y un bioma nuevo al mes.
- **Co-play sin chat:** minar juntos acelera la extracción y el observatorio premia coincidir con la tripulación.

### 6. Plan de monetización

| Gamepass | Precio | Qué da |
|---|---|---|
| VIP | 299 R$ | +10 % de suerte, estela y etiqueta |
| Minero Automático | 249 R$ | Pica sin mantener pulsado y vende comunes solo |
| Telescopio Pro | 399 R$ | Guarda seis cargas offline en lugar de tres |
| Fragmentos Dobles | 449 R$ | 2× fragmentos por meteorito |
| Radar de Meteoritos | 799 R$ | Marca el punto de impacto 10 segundos antes |

| Developer product | Precio | Qué da |
|---|---|---|
| Recarga de telescopio | 49 R$ | Un meteorito privado inmediato |
| Poción de suerte | 79 R$ | 2× suerte durante 15 min |
| Starter Pack (una vez) | 99 R$ | Pico de nivel 3, botas y una estela exclusiva |
| Cristales de forja ×10 | 99 R$ | Diez tiradas de rasgo, con probabilidades visibles y garantía |
| Lluvia de meteoritos | 299 R$ | Cinco meteoritos en cinco minutos para todo el servidor |
| Pase de temporada premium | 799 R$ | Diez niveles en cuatro semanas |
| Invocador de Cometas (gamepass de estatus) | 7,999 R$ | Un cometa Legendario o superior al día para todo el servidor, con tu nombre |

**Cumplimiento.** El meteorito privado y los cristales son ítems aleatorios de pago: deben mostrar todos los resultados y sus probabilidades reales, incluidas las modificadas por pociones. En países y edades restringidos se sustituyen por un «selector de núcleo» de resultado fijo. El núcleo del juego —los meteoritos del servidor— es gratuito y no cambia.

---

## Concepto 4 — Última Luz

### 1. Título gancho y high concept

**«Última Luz 🔦 ¡Que no se apague el faro!»**

Tú y hasta cinco amigos mantienen encendido un faro durante noches de diez minutos; las criaturas de la niebla solo se mueven donde no hay luz. Cada barco que salvas vuelve a tu puerto con carga mientras estás desconectado.

### 2. Nicho e hibridación

- **Loop base:** supervivencia cooperativa por noches (recoger, resistir, repetir).
- **Sistemas prestados:** gestión de zonas tipo tower defense, hecha con luz, y un puerto persistente tipo tycoon con ingreso offline.
- **Por qué funcionaría ahora:** Survival es el segundo género por plays (~14.6 %) y 99 Nights in the Forest demostró su techo (14.15 M de CCU), pero los juegos de partidas no dejan nada que madure entre sesiones. El puerto le da al género el reloj offline que solo tenían los simuladores.
- **Títulos vecinos encontrados:** Nightlight (terror en solitario con una vela) y Specter (caza de fantasmas en equipo). La búsqueda no encontró ningún co-op de Roblox con faro ni con criaturas que se congelan con la luz.
- **Madurez:** Mild. Las criaturas son siluetas de sombra, sin sangre.

### 3. Core loop y meta-game

**La regla central.** La luz es seguridad. Las criaturas se quedan inmóviles dentro de cualquier haz y avanzan en la oscuridad. Apuntar tu linterna sirve a la vez de defensa y de señal para tus compañeros.

**Primeros 30 segundos.** La primera partida empieza directamente en la escalera del faro, con la lámpara perdiendo fuerza. Giras una manivela, el haz barre la niebla y una criatura queda congelada a un palmo de la ventana. Es un susto suave y la regla queda aprendida sin texto.

**Primeros 5 minutos.** Una noche corta de tres minutos: subes dos barriles de aceite, reenciendes una baliza y guías tu primer barco manteniendo el haz sobre él cinco segundos. Recibes un cofre. De vuelta en el puerto, ese barco atraca y construyes tu primer muelle.

**Primeros 30 minutos.** Dos noches completas en grupo, elección de clase, primera mejora de linterna y el primer mini-jefe, una gran sombra que apaga balizas, en la tercera noche.

**Meta-game (cientos de horas).**

- **Profundidad:** noches 1 a 50, con punto de control cada cinco y jefe cada diez.
- **Cuatro clases con maestría:** Farero (lente), Mecánico (generador), Remero (bote de rescate) y Vigía (bengalas), con 30 niveles cada una.
- **Colección de linternas:** unas 60, con variantes (latón, dorada, espectral). Salen de jefes con tabla de botín visible y garantía.
- **Puerto persistente:** los barcos salvados traen carga; la carga construye muelles y almacenes, y estos producen el aceite y los suministros que se gastan en las partidas. La partida alimenta la base y la base alimenta la partida.
- **Prestigio «Relevo del Farero»:** reinicia la profundidad a cambio de una bendición permanente y un faro nuevo (acantilado, ártico, volcánico) con criaturas de reglas distintas.
- **Bestiario y ranking semanal** de noches sin apagón.

**Economía.** Monedas (blanda), Carga (materiales de construcción), Vidrio de Mar (moneda de intercambio para cosméticos) y fichas de evento que caducan.

### 4. Gancho viral

- **El apagón.** La luz falla, la pantalla se oscurece y, al volver, hay una criatura a centímetros de un compañero. Es el clip de reacción clásico del género.
- **La línea de congelación.** Una fila de criaturas inmóviles justo al borde del haz es una imagen propia y reconocible, ideal para miniaturas honestas.
- **El reencendido en el último segundo,** con todo el grupo celebrando.
- **Formato para creadores:** retos de «noche 50 sin apagón» y partidas con chat de voz entre mayores verificados.

### 5. Estrategia de retención

- **Día 1:** la carga de los barcos salvados llega offline con un tope de ocho horas; al volver hay algo que recoger y construir.
- **Cada día:** el «parte meteorológico» cambia las reglas de la niebla (niebla doble, relámpagos que revelan criaturas), de modo que la partida de hoy no es la de ayer.
- **Días 2–7:** las clases se desbloquean en los días 2, 3 y 5; el jefe de la noche 10 es el objetivo natural de la primera semana.
- **Días 8–28:** noches 25 a 50, primer prestigio y un faro nuevo al mes.
- **Co-play sin chat:** apuntar con la linterna es el sistema de señales. Jugar con las mismas personas en días distintos sube un bono de «tripulación» que aumenta la carga.

### 6. Plan de monetización

| Gamepass | Precio | Qué da |
|---|---|---|
| Carga Doble | 399 R$ | 2× carga de cada barco salvado |
| Gran Almacén | 299 R$ | El tope offline pasa de 8 a 16 horas |
| Farero Veterano (VIP) | 449 R$ | Empiezas cada noche con un barril, linterna exclusiva y decoración de puerto |
| Equipo Extra | 199 R$ | Un hueco adicional de linterna y accesorio |
| Faro Dorado | 4,999 R$ | Aspecto dorado visible para tu grupo y una campana diaria que regala un cofre a todo el servidor del puerto |

| Developer product | Precio | Qué da |
|---|---|---|
| Barril de emergencia | 29 R$ | Aceite inmediato en mitad de la noche |
| Revivir | 39 R$ | Vuelves a la partida (sube a 59 y 79 R$ en la misma noche) |
| Continuar desde el punto de control | 79 R$ | El grupo reintenta sin volver al puerto |
| Revivir al equipo | 99 R$ | Levanta a todos los caídos |
| Starter Pack (una vez) | 129 R$ | Linterna exclusiva, monedas y un muelle |
| Bengala de la suerte | 149 R$ | 2× carga para todo el grupo en esta partida |
| Pase de temporada premium | 749 R$ | Diez niveles en cuatro semanas |

Este concepto no tiene ningún ítem aleatorio de pago: todo el azar está en el botín gratuito de los jefes.

---

## Concepto 5 — Guardería de Mímicos

### 1. Título gancho y high concept

**«Guardería de Mímicos 🐾 ¿Cuál de estas mascotas NO es una mascota?»**

Ocho jugadores cuidan una guardería de mascotas adorables; uno de ellos es en secreto el Mímico, disfrazado de mascota, que se come a las demás cuando nadie mira. Hay que cuidar, observar y encerrar al sospechoso antes del amanecer.

### 2. Nicho e hibridación

- **Loop base:** cuidado de mascotas (alimentar, bañar, jugar).
- **Sistema prestado:** deducción social con disfraz. El Mímico es un jugador escondido entre una docena de mascotas del juego y tiene que comportarse como ellas.
- **Por qué funcionaría ahora:** los evergreens que conservan audiencia son sociales y por rondas (Murder Mystery 2 fue el que más creció en octubre de 2026; Adopt Me! sigue en el top 10). El contraste tierno/siniestro da un tema propio sin depender de memes ajenos.
- **Títulos vecinos encontrados:** Fake an Egg (te disfrazas de huevo para robar mascotas) y un juego de Roblox de «hacerse pasar por NPC». Fuera de Roblox, The Mimic en Steam usa peluches. La búsqueda no encontró ninguno ambientado en una guardería con cuidado de mascotas y colección persistente.
- **Madurez:** Mild, con humor de dibujos animados.

### 3. Core loop y meta-game

**Primeros 30 segundos.** Entras a la sala de espera con una ronda a menos de 45 segundos. Un cachorro corre hacia ti con un corazón encima; lo acaricias con un toque y te sigue: ya tienes tu primera mascota propia.

**Primeros 5 minutos.** Tu primera ronda, siempre como cuidador. Sobre las mascotas aparecen iconos de necesidad (hambre, baño, juego) y completas cuatro tareas. Al final ves la revelación del Mímico: un conejito que se desencaja en un monstruo cómico. Ganas Golosinas.

**Primeros 30 minutos.** Juegas unas cuatro rondas de seis minutos. El sistema garantiza que seas Mímico antes de la cuarta. Con tus Golosinas compras el primer huevo o accesorio en tu habitación y desbloqueas el segundo mapa.

**Cómo se deduce sin chat.** El Mímico solo puede comer cuando ningún cuidador lo tiene a la vista. Deja pistas físicas: huellas, mechones de pelo de un color, un comedero vacío. Los cuidadores acusan colocando un collar de sospecha sobre una mascota; si la mayoría coincide, esa mascota va al corralito. Si es el Mímico, ganan los cuidadores. Si no, pierden tiempo.

**Meta-game (cientos de horas).**

- **Colección de unas 120 especies** con variantes (pastel, dorada, sombra). Se obtienen por afinidad —cuidar muchas veces a una especie permite adoptarla, sin azar— o con huevos comprados con Golosinas, que son azar gratuito con probabilidades visibles.
- **Crecimiento:** tu mascota acompañante pasa de cría a campeona y da pequeñas ventajas de rol.
- **Aspectos y animaciones de revelación del Mímico,** que son el principal bien de estatus.
- **Roles avanzados:** el Veterinario, con una habilidad de inspección, se desbloquea en el nivel 10; a partir de diez jugadores aparece un Cómplice.
- **Modo clasificatorio semanal** («Noche de luna llena»), decoración de la habitación e intercambio de mascotas con doble confirmación.

**Economía.** Golosinas (blanda; se drenan en huevos, decoración y crecimiento), Fichas de adopción (intercambio, con comisión) y Lunas (moneda de temporada, caduca).

### 4. Gancho viral

- **De tierno a maldito en tres segundos.** La revelación es el clip: se entiende sin contexto y la miniatura (mitad peluche, mitad monstruo) describe el juego con exactitud.
- **El punto de vista del Mímico.** «Fingiendo ser un NPC durante seis minutos» es un formato de humor ya probado entre creadores.
- **Las acusaciones equivocadas.** Encerrar a un gatito inocente mientras el Mímico está sentado al lado produce el drama social que alimenta los directos.
- **Dúos de creadores:** uno acusa y otro miente.

### 5. Estrategia de retención

- **Rondas cortas:** seis minutos encajan con la sesión mediana de la plataforma (9.8 minutos) y favorecen varias sesiones al día.
- **Día 1:** tus mascotas crecen offline en la habitación; la primera victoria del día vale el triple de Golosinas.
- **Cada día:** tres misiones por rol y una «mascota del día» con afinidad doble.
- **Días 2–7:** calendario de cuidador novato que desbloquea al Veterinario el día 3 y entrega una mascota rara garantizada el día 7.
- **Días 8–28:** temporada clasificatoria de cuatro semanas con un aspecto de Mímico exclusivo; llevar una mascota a campeona toma dos o tres semanas.
- **Co-play sin chat:** cola en grupo y bono de Golosinas por jugar con el mismo amigo en días distintos.

### 6. Plan de monetización

| Gamepass | Precio | Qué da |
|---|---|---|
| Cuidador VIP | 399 R$ | 2× Golosinas, sala VIP y etiqueta |
| Doble Probabilidad de Mímico | 299 R$ | Duplica tu peso en el sorteo del rol |
| Pack «Actúa como NPC» | 249 R$ | Gestos exclusivos para engañar mejor |
| Mochila Ampliada | 149 R$ | +50 huecos de mascota |
| Revelación Personalizada | 799 R$ | Animación de transformación propia, vista por todo el servidor |

| Developer product | Precio | Qué da |
|---|---|---|
| Ser el Mímico en la próxima ronda | 79 R$ | Una compra por ronda y servidor |
| Starter Pack (una vez) | 99 R$ | Una mascota exclusiva fija, 500 Golosinas y un collar |
| Packs de Golosinas | 99 / 399 / 1,499 R$ | Tres tamaños; el mediano hace de ancla |
| Lluvia de premios | 149 R$ | 2× Golosinas para todo el servidor durante tres rondas |
| Aspecto de Mímico de la semana | 599–1,299 R$ | Aspecto de resultado fijo que rota cada semana |
| Pase de temporada premium | 749 R$ | Diez niveles en cuatro semanas |
| Mímico Legendario | 4,999 R$ | Aspecto con cinemática de revelación única y accesorio de avatar a juego |

Los huevos se compran con Golosinas, no con Robux. Como las Golosinas sí se venden por Robux, los huevos cuentan como ítems aleatorios de pago indirectos: llevan probabilidades visibles, y en países y edades restringidos los packs de Golosinas no pueden gastarse en huevos, solo en adopción por afinidad y en decoración.

---

## Comparación y orden de prototipado

| Concepto | Fortaleza principal | Riesgo principal | Esfuerzo de producción |
|---|---|---|---|
| Turbo Critters Derby | Convierte el progreso idle en un evento social cada 6 min | Que ver la carrera sin pilotarla resulte pasivo; hay que cuidar la emoción del final | Medio |
| Kaiju o Ciudad | El clip más fuerte de los cinco y una pérdida que se vive como ganancia | Rendimiento de la destrucción física en móviles de gama baja | Alto |
| Meteor Rush | El loop más simple y la mejor ceremonia con testigos | Es el más expuesto a la regulación del azar si se desvía hacia tiradas de pago | Bajo–medio |
| Última Luz | Regla única de luz y oscuridad, y base persistente para un género de partidas | Necesita grupos; en solitario pierde gracia y hay que rellenar con matchmaking rápido | Medio–alto |
| Guardería de Mímicos | Estructura de evergreen social con colección intercambiable | La deducción sin chat tiene que funcionar de verdad con pistas físicas | Medio |

**Mi recomendación** es prototipar primero **Meteor Rush** y **Guardería de Mímicos**. Meteor Rush es el más barato de construir y permite comprobar en pocas semanas si la ceremonia compartida retiene mejor que un RNG solitario. Guardería de Mímicos es el que mejor encaja con lo que la plataforma mide desde junio de 2026 (días de juego y co-play) y el que tiene el estado estable más defendible a seis meses. Kaiju o Ciudad tiene el mayor techo de viralidad, pero también el mayor riesgo técnico; lo dejaría para después de validar la destrucción en móvil con una demo aislada.

## Cómo validar antes de escalar

- **Instrumentar el embudo de los primeros minutos desde el primer build**, con los eventos de onboarding de Roblox, para ver en qué paso se pierde cada jugador.
- **Medir contra «experiencias similares» en el panel de Creator Hub**, no contra umbrales universales. La única referencia externa fiable es la de GameAnalytics: mediana de D1 10.3 %, D7 1.6 % y D30 0.5 %; el 1 % superior alcanza 22.2 %, 9.1 % y 4.7 %.
- **Vigilar el rebote a 60 y 180 segundos** antes que cualquier métrica de ingresos; la Fase 1 documenta la guía oficial de arreglar la retención antes de monetizar.
- **Comprobar en fuente primaria**, antes de fijar la monetización, los cuatro puntos que la Fase 1 dejó sin verificar: el umbral vigente de Kids/Select, el anuncio de mayo de 2026 sobre ítems aleatorios de pago para menores, el borrador de la UE del 12-nov-2026 y los precios actuales de referencia.

## Fuentes de la comprobación de originalidad

Resultados de búsqueda consultados el 17-nov-2026 (solo extractos; no se abrieron las páginas):

- Carreras de criaturas: [Fish Race](https://www.roblox.com/games/70829614436499), [Dinosaur Racing](https://www.roblox.com/games/17462369239), [guía de Brainrot Training](https://hindi3.sportskeeda.com/roblox-news/brainrot-training-a-beginner-s-guide), [Derby](https://www.destructoid.com/?p=1137321).
- Kaiju y destrucción: [Kaiju Universe (tier list)](https://www.pocketgamer.com/roblox/kaiju-universe-tier-list), [Kaiju Universe (Destructoid)](https://destructoid.com/?p=444585), [Smash the City](https://www.roblox.com/games/104272271029312).
- Meteoritos y RNG: [Tycoon RNG, guía de meteoritos](https://www.droidgamers.com/guides/tycoon-rng-meteors-guide/), [meteoritos en 99 Nights in the Forest](https://allthings.how/how-to-mine-meteors-in-99-nights-in-the-forest-roblox/), [Prospecting](https://deltiasgaming.com/?p=315354), [Sol's RNG y los juegos de suerte](https://rowatcher.com/news/sol-s-rng-and-the-luck-based-game-craze-why-players-keep-rolling).
- Terror con luz: [guía de Nightlight](https://www.sportskeeda.com/roblox-news/roblox-nightlight-guide), [mejores juegos de terror de Roblox 2026](https://games.gg/news/best-roblox-horror-games-2026/).
- Deducción con disfraz: [guía de Fake an Egg](https://www.rosenberryrooms.com/?p=366149), [juego de «ser un NPC»](https://jira.phpfox.com/p/roblox-game-among-us-npcs), [The Mimic en Steam](https://store.steampowered.com/app/4962400).
