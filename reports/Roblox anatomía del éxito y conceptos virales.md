# Roblox: anatomía del éxito y cinco conceptos virales

*Documento completo del proyecto, 17 de noviembre de 2026. Reúne en un solo archivo los dos entregables del chat.*

## Contenido

- **Parte I — Fase 1: Informe de Anatomía del Éxito en Roblox.** Análisis del mercado en cinco pilares: nichos y tendencias, game loops, retención, economía y monetización, y algoritmo de descubrimiento. Cierra con 13 principios de diseño.
- **Parte II — Fase 2: Cinco conceptos originales con potencial viral.** Fichas de Turbo Critters Derby, Kaiju o Ciudad, Meteor Rush, Última Luz y Guardería de Mímicos, con comparación, orden de prototipado y plan de validación.

## Advertencias que aplican a todo el documento

- La investigación de la Fase 1 no pudo abrir la mayoría de las páginas web y trabajó con extractos de buscador; solo la documentación oficial de Roblox Creator Hub se leyó íntegra. Las cifras de trackers discrepan entre sí hasta 2–3×. Cada dato está etiquetado como oficial, prensa, informe de terceros, tracker, guía o inferencia.
- Los conceptos de la Fase 2 son hipótesis de diseño sin probar. La comprobación de originalidad fue superficial (una búsqueda por concepto) y los precios en Robux son propuestas de partida.

---

# PARTE I — FASE 1

## Roblox 2026 premia el hábito, no el pico

*FASE 1 — Informe de Anatomía del Éxito en Roblox. Estado del mercado al 17 de noviembre de 2026. Este documento analiza; no propone conceptos de juego (eso corresponde a la Fase 2).*

Al 17 de noviembre de 2026, el éxito en Roblox se decide menos en el pico viral que en la capacidad de convertir ese pico en hábito diario. Los mega-hits siguen naciendo como híbridos de Simulation con un core loop que cabe en una frase y un sistema social prestado de otro género: **Steal An Egg** (lanzado a finales de julio de 2026) alcanzó **~14.3 M de CCU el 19-sep-2026** según trackers, tras los récords de 2025 de Steal a Brainrot (**25,868,678 CCU**, Guinness) y Grow a Garden (22.3 M). Esos picos se evaporan —de −96 % en ocho semanas a más de −99 % en doce meses— y la audiencia duradera se queda en evergreens sociales y competitivos (Brookhaven RP, Murder Mystery 2, Blox Fruits, RIVALS, Dress to Impress). La plataforma vive un año de resaca: en el T3 de 2026 Roblox reportó **138 M de DAU (−9 % interanual)**, bookings de **US$1,697 M (−12 %)** y ~30 M de pagadores mensuales (−16 %), y desde junio de 2026 su algoritmo «Recommended for You» mide cada juego en ventanas de **Día 1, Días 2–7 y Días 8–28**, acredita como máximo 60 minutos de playtime por usuario y día y penaliza el rebote en los primeros 60–180 segundos. El listón real de retención es bajo y brutal (mediana **D1 10.3 %, D7 1.6 %, D30 0.5 %** según GameAnalytics); la monetización se construye como una escalera de 39 a 14,500 Robux sobre un reparto 70/30 del que el creador convierte aproximadamente el 21 % del gasto del jugador en dólares (cálculo de los investigadores); y la regulación —verificación de edad, cuentas Kids/Select, restricciones a los ítems aleatorios de pago— condiciona ya el alcance y el diseño. Advertencia de fiabilidad: los investigadores no pudieron abrir la mayoría de las páginas y trabajaron con extractos de buscador (salvo la documentación oficial de Creator Hub, leída íntegra); las cifras de trackers discrepan entre sí hasta 2–3×, y varios datos de finales de 2026 no se encontraron. El informe lo señala caso por caso.

### Cómo leer este informe: fuentes, etiquetas y límites

Toda la investigación se hizo el 17-nov-2026 con una restricción severa: la lectura directa de páginas estuvo bloqueada para casi todos los dominios, de modo que **la gran mayoría de los datos procede de extractos y resúmenes de buscador, no de la lectura íntegra de cada fuente**. La única excepción es la documentación oficial de Roblox Creator Hub, leída completa a través del repositorio público de Roblox en GitHub ([Roblox/creator-docs](https://github.com/Roblox/creator-docs)); es la parte más sólida del informe. Los anuncios de DevForum y Newsroom son oficiales, pero solo se vieron en extracto, por lo que sus fechas y redacción exacta deben verificarse antes de citarlos literalmente. Roblox no publica picos históricos de CCU por juego, ni ingresos por juego, ni reparto de horas o bookings por género: todo eso procede de trackers de terceros que usan modelos o muestreos distintos y que se contradicen con frecuencia.

| Etiqueta usada en el texto | Qué significa | Cómo tratarla |
|---|---|---|
| **Oficial** | Filings de Roblox ante la SEC, cartas a accionistas, Creator Hub, Newsroom, DevForum (staff), Guinness World Records | Dato firme; si se indica «en extracto», verificar redacción y fecha |
| **Prensa** | Medios reconocidos (Bloomberg, PC Gamer, GamesBeat, Tubefilter, etc.), a veces citando trackers | Fiable en lo que afirma el medio; revisar la fuente primaria que cita |
| **Informe de terceros** | Estudios con datos propios (GameAnalytics, Newzoo, Dubit, Naavik) | Buena referencia; muestras y definiciones no siempre comparables |
| **Tracker** | RoWatcher, RoStats, RoVitals, RBLXSTAT, myleafs, Profitable.app, etc. | Estimación modelada; rangos amplios y conflictos habituales |
| **Guía / wiki** | Guías de fans, wikis, revendedores | Valores in-game que cambian con cada parche y con el precio regional |
| **Inferencia** | Cálculo o reconstrucción de los investigadores | No es un hecho medido; se marca siempre como tal |

Tres límites atraviesan todo el documento. Primero, las líneas de tiempo minuto a minuto (30 segundos / 5 minutos / 30 minutos) son reconstrucciones a partir de guías, no mediciones. Segundo, no existen benchmarks públicos fiables de retención, sesión o monetización por género; los que circulan carecen de metodología declarada y contradicen a GameAnalytics. Tercero, para finales de 2026 no se encontraron: desglose regional de DAU del T3, split de dispositivos de 2026, DevEx del T3, CCU actual verificado de Anime Vanguards, Blue Lock Rivals, Fisch, Dead Rails o Plants vs Brainrots, ni confirmación de varios cambios anunciados (umbral de Kids/Select, borrador regulatorio de la UE). Convención numérica: punto decimal y coma de millares (22.3 M; 7,999 Robux), igual que los precios dentro de los juegos; «R$» significa Robux.

### 1. Nichos y tendencias: Simulation fabrica los picos, los géneros sociales conservan la audiencia

#### 1(a) Géneros con mayor CCU y rentabilidad: un híbrido viral arriba y seis evergreens detrás, en una plataforma que se contrae

2026 es el año de resaca tras el récord de 2025. Roblox cerró 2025 con bookings de US$6.8 mil M (+55 %), 127 M de DAU promedio y 124 mil M de horas ([Informe anual 2025, SEC](https://www.sec.gov/Archives/edgar/data/1315098/000110465926044380/rblx-20251231xars.pdf)), y en 2026 la curva se dobló: el T2 llegó con bookings en la parte baja de la guía y la compañía retiró su previsión anual, atribuyendo el déficit a una menor monetización por hora «sobre todo en cohortes jóvenes de EE. UU. y Canadá» y a un desplazamiento del engagement «desde los juegos virales de alta monetización de 2025 hacia experiencias nuevas y evergreen con menor monetización por hora» ([Carta a accionistas T2 2026, SEC](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm)). La acción cayó ~27 % el 31-jul-2026 ([Motley Fool](https://www.fool.com/investing/2026/07/31/roblox-guided-bookings-down-as-much-as-18-and-with/)), y la prensa recogió a directivos diciendo que quieren alejarse de juegos «clickbait-y or kind of cash-grabby» y perseguir un público mayor ([GamesRadar](https://www.gamesradar.com/games/roblox-value-tanks-72-percent-as-viral-hits-dry-up-and-execs-try-to-ditch-clickbait-y-or-kind-of-cash-grabby-type-games-for-babies-and-pursue-an-older-crowd/)). El T3 trajo la primera caída interanual de DAU de su historia, según la prensa ([GGRecon](https://www.ggrecon.com/articles/roblox-daily-players-fall-q3-2026/)), aunque mejoró frente al T2.

| Periodo | DAU | Horas | Bookings | Otros | Fiabilidad |
|---|---|---|---|---|---|
| FY2025 | 127 M (promedio) | 124 mil M | US$6.8 mil M (+55 %) | Ingresos US$4.9 mil M (+36 %) | Oficial ([ARS 2025](https://www.sec.gov/Archives/edgar/data/1315098/000110465926044380/rblx-20251231xars.pdf)) |
| T4 2025 | 144 M (+69 %) | — | US$2,222 M (+63 %) | ~37 M pagadores | Prensa citando resultados ([GamesBeat](https://gamesbeat.com/roblox-stock-rises-20-after-earnings-daily-active-users-up-69-in-q4/)) |
| T1 2026 | 132 M (+35 %) | — | — | Ingresos ~US$1.4 mil M (+39 %); «headwinds» por el age-check | DAU vía agregadores ([Tech-Insider](https://tech-insider.org/roblox-standalone-apps-dau-decline-2026/)); carta oficial ([SEC](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026028882/ex991-q12026earningsshar.htm)) |
| T2 2026 | 123 M (+10 %) | 29 mil M (+5 %) | US$1.6 mil M (+8 %) | Guía anual retirada | Oficial ([Carta T2](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm)) |
| T3 2026 | 138 M (−9 %) | ~34 mil M (−15 %)* | US$1,697 M (−12 %) | 30 M pagadores (−16 %); bookings por DAU US$12.29 (−3 %); guía T4: US$1.89–2.00 mil M (−10 % a −15 %) | Oficial ([Roblox IR](https://ir.roblox.com/news/news-details/2026/Roblox-Reports-Third-Quarter-2026-Financial-Results/default.aspx)); prensa ([Gaming.net](https://gaming.net/roblox-q3-revenue-rises-16-as-bookings-fall-12-to-1-7-billion)) |

*Un agregador lista 29 mil M de horas para el T3; la cifra de ~34 mil M es coherente con el +17 % intertrimestral reportado.

En ese contexto, la foto de noviembre de 2026 es clara en su forma aunque borrosa en sus cifras. El 16-nov-2026 un tracker contaba ~9.8 M de jugadores concurrentes en toda la plataforma repartidos en ~19 K juegos, con Steal An Egg primero con ~498 K CCU ([RoWatcher](https://rowatcher.com/roblox-player-count)). El 29-oct-2026 el orden era Steal An Egg 713 K, Murder Mystery 2 473 K, Brookhaven RP 422 K, RIVALS 153 K y 99 Nights in the Forest 146 K ([StudioKrew](https://studiokrew.com/blog/top-roblox-games-october-2026/)); Murder Mystery 2 fue el gran escalador de octubre (+146.2 %, estacionalidad de Halloween), y el top 10 del mes incluía además a Steal a Brainrot, Adopt Me!, Blox Fruits, The Hollow y Jujutsu Shenanigans ([PlayQub](https://playqub.it/blog/most-played-roblox-games/)). La concentración es extrema: un tracker titula que la mitad de los jugadores está en solo 100 juegos ([RoWatcher](https://rowatcher.com/news/half-of-all-roblox-players-are-in-just-100-games)), y Newzoo calculó que a finales de 2025 tres juegos acumulaban más del 70 % de las visitas del top 10 ([GameDev Reports / Newzoo](https://gamedevreports.substack.com/p/newzoo-top-roblox-games-in-2025)). Los récords históricos, todos de trackers o prensa salvo el de Guinness, dibujan el salto de escala de 2025: el techo previo era de 2.4–2.8 M (Blox Fruits, dic-2024) y en un año pasó a 22–26 M.

| Juego (género) | Pico de CCU y fecha | Fuente / fiabilidad | Situación oct–nov 2026 (trackers) |
|---|---|---|---|
| Plataforma Roblox | 47,296,412 (23-ago-2025, «Admin War») | Prensa ([GamesRadar](https://www.gamesradar.com/games/simulation/roblox-is-reportedly-bigger-than-the-entirety-of-steam-with-a-whopping-47-4-million-concurrent-users-almost-exclusively-thanks-to-two-games-steal-a-brainrot-and-grow-a-garden)) | ~9.8 M el 16-nov-2026 |
| Steal a Brainrot (steal/tycoon) | 25,868,678 (11-oct-2025); Wikipedia da 25.4 M | Oficial Guinness ([GWR](https://www.guinnessworldrecords.com/world-records/503322-most-concurrent-players-for-a-videogame-made-in-roblox)) | 90–205 K a inicios de octubre ([Grey Journal](https://greyjournal.net/hustle/how-much-does-steal-a-brainrot-make/)); otro tracker cita ~500–550 K de media ([van Dreunen](https://superjoost.substack.com/p/the-brainrot-economy)) |
| Grow a Garden (idle farming) | 22,346,725 (23-ago-2025) | Wikipedia / prensa ([Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden)) | 16,843 el 26-oct-2026 ([Endgame Tools](https://endgametools.com/en/roblox/players/grow-a-garden)) |
| Steal An Egg (steal + pets) | 14,313,917 (19-sep-2026); otros trackers: 14,272,591 y 12,443,225 | Tracker ([RoStats](https://rostats.io/records), [RoVitals](https://rovitals.com/records), [RBLXSTAT](https://rblxstat.com/games/10563114921)) | 498 K el 16-nov-2026; #1 |
| 99 Nights in the Forest (survival co-op) | 14,153,173 (4-oct-2025) | Prensa / wiki ([Yahoo Tech / PC Gamer](https://tech.yahoo.com/gaming/articles/peak-player-count-14-2-040313683.html)) | 146 K el 29-oct-2026 |
| Plants vs Brainrots (defensa + brainrot) | 8,654,525 (11-oct-2025) | Wiki ([EverybodyWiki](https://en.everybodywiki.com/List_of_Roblox_games_by_peak_concurrent_users)) | No encontrado |
| Blox Fruits (anime RPG) | 2.4–2.78 M (dic-2024); fuentes en conflicto | Wiki / tracker ([EverybodyWiki](https://en.everybodywiki.com/List_of_Roblox_games_by_peak_concurrent_users)) | En el top 10 |
| Adopt Me! (pet RP) | 1,920,889 (16-abr-2021) | Wiki ([Roblox Fandom](https://roblox.fandom.com/wiki/Uplift_Games/Adopt_Me!)) | En el top 10 |
| Brookhaven RP (life-sim RP) | 1,296,208 (19-dic-2025) | Tracker ([SpawnRadar](https://www.spawnradar.com/records)) | 422 K el 29-oct-2026 |
| Fisch / Forsaken | 1,273,618 (18-oct-2025) / 1,221,080 (1-nov-2025) | Wiki ([EverybodyWiki](https://en.everybodywiki.com/List_of_Roblox_games_by_peak_concurrent_users)) | Forsaken ~51 K en un chart de EE. UU. sin fecha clara |
| Dead Rails (co-op roguelike) | ~1 M (mar-2025) o 1,476,198 (19-abr-2025) | Tracker / wiki en conflicto ([RoVitals](https://rovitals.com/records)) | No encontrado |
| Sol's RNG (RNG puro) | 193,836 (12-may-2024) | Tracker ([Rolimon's](https://www.rolimons.com/game/15532962292)) | ~35–37 K a inicios de octubre |

Por género, el mejor conjunto de datos encontrado es el del tracker de Dubit, que mide *plays* (no horas) entre el 24-ago y el 20-sep-2026: **Simulation 36.7 %**, Survival ~14.6 %, Obby & Platformer ~8.5 %, Roleplay & Avatar Sim 8.4 %, Action 8.2 %, Shooter 4.7 %, RPG 3.8 % y Party & Casual 3.7 % ([Dubit](https://dubit.io/library/which-roblox-genres-get-the-most-plays)). Otro tracker estima que roleplay y avatar-sim concentran el 30–35 % de los jugadores *concurrentes* ([RoWatcher](https://rowatcher.com/news/roblox-hit-12-million-concurrent-players-where-are-they-all-playing)); las dos cifras no se contradicen necesariamente, porque el CCU premia las sesiones largas y las plays premian la frecuencia, pero ninguna es oficial. En ingresos, los modelos de terceros sitúan a Simulation como el género que más factura, seguido de Roleplay & Avatar Sim y Survival ([Profitable.app](https://profitable.app/roblox/genres)), con la salvedad de que es también el más concentrado: los dos primeros juegos de la mayoría de sub-géneros de simulador controlarían más del 80 % de los ingresos ([RoLearn](https://rolearn.dev/trend-reports/q1-2026-market-trends)). No se encontró ningún desglose oficial de horas ni de bookings por género.

Trasladado a las cinco familias que pide el encargo, el mapa queda así. La columna de «lectura» es una síntesis de los investigadores, no un dato.

| Familia | Dónde cae en la taxonomía oficial de Roblox | Títulos de referencia | Evidencia de audiencia | Evidencia de ingresos (estimaciones salvo indicación) | Lectura (inferencia) |
|---|---|---|---|---|---|
| Simulators | Simulation → Incremental Simulator, Idle | Grow a Garden, Steal An Egg, Pet Simulator 99, Bee Swarm Simulator | 36.7 % de las plays; todos los récords de 2025–2026 | Grow a Garden: ~US$12 M solo en mayo de 2025 ([Business Standard](https://www.business-standard.com/technology/tech-news/roblox-grow-a-garden-sets-record-breaking-down-the-success-of-idle-games-125080400649_1.html)); Steal An Egg: US$3.2–11 M/mes según el tracker ([myleafs](https://www.myleafs.com/app/roblox/charts/top-earning), [Blox Prices](https://www.bloxprices.com/roblox-top-earning-games/), [BloxBunny](https://bloxbunny.com/top-earning-games)) | Picos máximos y decaimiento más rápido |
| Tycoons | Simulation → Tycoon | Steal a Brainrot (tycoon de colección con robo), Restaurant Tycoon 2, Theme Park Tycoon 2 | En julio de 2026 survival y tycoon dominaban el top 20 por CCU ([ForgeGuides](https://forgeguides.com/guides/roblox-top-20-most-played-games-july-2026/)) | Steal a Brainrot: ~US$64 M en compras in-game de mayo-2025 a marzo-2026 (RoMonitor vía [Bloomberg](https://www.bloomberg.com/news/articles/2026-03-24/roblox-s-hit-game-steal-a-brainrot-battles-its-many-imitators)) | El tycoon «puro» es nicho; el tycoon con PvP/robo es el formato récord |
| Anime / RNG | RPG; Strategy → Tower Defense; Action → Battlegrounds & Fighting; (RNG sin subgénero propio) | Blox Fruits, Anime Vanguards, Blue Lock: Rivals, Sol's RNG | RPG 3.8 % de las plays; Blox Fruits en el top 10 de visitas todos los meses de 2025 ([Newzoo](https://gamedevreports.substack.com/p/newzoo-top-roblox-games-in-2025)) | Blox Fruits: US$6.0–9.5 M/mes ([Blox Prices](https://www.bloxprices.com/roblox-top-earning-games/)); sin datos para Anime Vanguards, Blue Lock Rivals ni Sol's RNG | Audiencia menor pero muy estable y con gasto alto por gacha y permanentes |
| Horror / Survival | Survival → 1 vs All, Escape; Adventure | 99 Nights in the Forest, Forsaken, Dead Rails, Doors | ~14.6 % de las plays; segundo género | 99 Nights: ingresos al alza tras el nivel del volcán de ago-2025 ([games.gg](https://games.gg/news/roblox-top-games-october-2025/)); sin cifra | Entre el pico viral y el evergreen; depende de contenido y co-op |
| Roleplay / Social | Roleplay & Avatar Sim → Life, Dress Up, Pet Care; Social | Brookhaven RP, Adopt Me!, Dress to Impress, Murder Mystery 2 | 8.4 % de las plays pero 30–35 % del CCU según un tracker | Brookhaven: US$2.1–3.5 M/mes ([Blox Prices](https://www.bloxprices.com/roblox-top-earning-games/)) o US$6–12 M/mes ([RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform)): conflicto de 3× | La retención estructural más fuerte; ARPU bajo, volumen alto |

Dos matices completan el cuadro. El primero es que CCU alto no equivale a ingresos altos: un FPS, RIVALS, con 150–400 K de CCU, encabezó la estimación de ingresos del T1 de 2026 con US$8–15 M+ al mes, por delante de Blox Fruits y Brookhaven ([RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform)), y en diciembre de 2025 el ranking estimado de ingresos lo lideraba The Forge [BETA] seguido de RIVALS, Steal a Brainrot, Blox Fruits y Adopt Me! ([games.gg](https://games.gg/news/roblox-top-games-and-trends-december-2025/)); la distancia entre trackers para un mismo juego es de 2–3×, así que estos órdenes sirven como jerarquía aproximada, no como contabilidad. El segundo es quién juega y dónde: Roblox indica que los mayores de 18 son el 29 % de los usuarios globales en el T3 de 2026 (extracto parcial de la [carta del T3](https://s27.q4cdn.com/984876518/files/content_files/Q3-2026-Earnings-Shareholder-Letter.pdf)); en el T2, entre los DAU con edad verificada, la mezcla era 18+ 27 %, 13–17 38 % y menores de 13 35 %, y por región Asia-Pacífico sumaba 41 M de DAU, Resto del Mundo 34 M, Europa 26 M y EE. UU. y Canadá 22 M ([Statroblox](https://statroblox.com/roblox-statistics)). El último split de dispositivos disponible es de 2024: móvil ≈80 % de los DAU pero ~46 % de los ingresos en Robux ([PocketGamer.biz](https://www.pocketgamer.biz/80-of-roblox-users-are-on-mobile-contributing-46-of-robux-revenue)); no se encontró el dato de 2026.

La cima, además, ya no es territorio de creadores solitarios. Voldex compró Brookhaven en febrero de 2025 ([Variety](https://variety.com/2025/gaming/news/roblox-brookhaven-game-acquired-voldex-1236295120/)); Splitting Point Studios y DoBig Studios entraron en Grow a Garden, creado por un adolescente ([Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden)); y Steal a Brainrot figura como propiedad de DoBig según Wikipedia ([Wikipedia](https://en.wikipedia.org/wiki/Steal_a_Brainrot)). En los doce meses hasta el 30-jun-2026 los creadores cobraron ~US$1.7 mil M vía DevEx, con una media de US$65.7 M para el top 10, US$1.4 M para el top 1,000 y una mediana de ~US$1,500 ([Dexerto](https://www.dexerto.com/roblox/robloxs-top-creators-average-65-7-million-a-year-but-most-make-far-less-3408675/)). Quien entra hoy a un nicho compite contra equipos de live-ops bien financiados.

#### 1(b) Cómo se satura un nicho y cómo se rompe la barrera: clones en días, un líder con el 92 % y la recombinación como única salida

La saturación en Roblox sigue una secuencia reconocible, que aquí se presenta como síntesis de los investigadores apoyada en los datos que siguen: un breakout con un loop simple y legible; decenas o miles de reskins en días con la fórmula de título «[Verbo] a [Sustantivo]»; un reparto *winner-take-most* en el que el original conserva la inmensa mayoría de los jugadores del nicho; un decaimiento del propio líder del orden de −50 % en dos meses y −95 % a −99 % en seis a doce; y la supervivencia del *tema* (por ejemplo, brainrot) migrando a otras mecánicas, no del loop original.

La evidencia de la ola de clones es abundante aunque de calidad desigual. Un tracker contó 105 juegos que clonaban «Steal a ___», con el original reteniendo el 92 % de los jugadores ([RoWatcher](https://rowatcher.com/news/105-games-cloned-steal-a-one-holds-92-of-the-players)). Bloomberg describió en marzo de 2026 cientos de títulos competidores («Cut Grass for Brainrots», «Survive LAVA for Brainrots»), copias en Fortnite y Meta Horizon Worlds, y al menos cuatro demandas de los desarrolladores de Steal a Brainrot contra presuntos impostores desde noviembre de 2025 ([Bloomberg](https://www.bloomberg.com/news/articles/2026-03-24/roblox-s-hit-game-steal-a-brainrot-battles-its-many-imitators)). En septiembre de 2026 se documentaba que, con ciclos de desarrollo acortados y herramientas de IA, los clones llegan ya antes o a la vez que el original ([Plagiarism Today](https://www.plagiarismtoday.com/2026/09/17/the-attack-of-the-roblox-clones/)); la propia carta del T3 de 2026 de Roblox menciona juegos creados casi por completo con IA que entraron en el top 20, aunque el extracto disponible es parcial y el título exacto debe verificarse ([Carta T3 2026](https://s27.q4cdn.com/984876518/files/content_files/Q3-2026-Earnings-Shareholder-Letter.pdf)).

Lo que distingue a 2026 es que ni siquiera el ganador conserva su premio. Las curvas de decaimiento, todas de trackers o prensa, son las siguientes.

| Juego | Pico | Evolución posterior | Caída aproximada |
|---|---|---|---|
| Grow a Garden | 22.3 M (23-ago-2025) | Fuera del top 10 mensual de Newzoo en dic-2025; 16,843 jugadores el 26-oct-2026 ([Endgame Tools](https://endgametools.com/en/roblox/players/grow-a-garden)). Conflicto: un analista lo sitúa aún en ~1–1.2 M en may-2026 ([van Dreunen](https://superjoost.substack.com/p/the-brainrot-economy)) frente a ~90 K de media ese mes según un tracker ([RoLearn](https://rolearn.dev/case-studies/idle-garden-zero-to-20m-ccu/)) | >99.9 % en ~14 meses |
| Steal a Brainrot | 25.87 M (11-oct-2025) | ~30 % menos visitas mensuales en dic-2025 ([Newzoo](https://gamedevreports.substack.com/p/newzoo-top-roblox-games-in-2025)); 90–205 K en oct-2026 ([Grey Journal](https://greyjournal.net/hustle/how-much-does-steal-a-brainrot-make/)) | >99 % en 12 meses, aún en el top 10 |
| Steal An Egg | ~14.3 M (19-sep-2026) | 1.6 M el 30-sep ([StudioKrew](https://studiokrew.com/blog/top-roblox-games-september-2026/)); 713–834 K a finales de octubre; 498 K el 16-nov | ~−96 % en ocho semanas, sigue #1 |
| Dead Rails | 661 K en abr-2025 (tras un pico de ~1–1.5 M en mar–abr) | 351 K en jun-2025 ([MaxPower Gaming](https://www.maxpowergaming.co/post/from-gardens-to-brainrot-the-most-popular-roblox-games-of-q2-2025)) | −47 % en dos meses |
| Escape Tsunami For Brainrots | #1 del nicho | −78.1 % en una semana ([DevForum, informe de mercado](https://devforum.roblox.com/t/market-friday-an-ml-tool-that-tracks-roblox-genre-trends-%E2%80%94-heres-this-weeks-full-market-report/4413816)) | −78 % en 7 días |
| Sol's RNG | 193,836 (12-may-2024) | ~35–37 K en oct-2026, con repunte a ~112 K por actualización en may-2026 ([Endgame Tools](https://endgametools.com/en/roblox/players/sols-rng)) | ~−81 % en 29 meses |
| Dress to Impress | >250 K de media (sep-2024) | ~120 K en un chart de EE. UU. y picos observados de 409–542 K en ago–oct 2026 ([RoVitals](https://rovitals.com/top?sort=peakAllTime)) | Mantiene o recupera audiencia dos años después |

Los picos de evento son todavía más frágiles: Grow a Garden cayó de 21.3 M a 7.6 M en una hora tras un evento de actualización ([DEV Community](https://dev.to/wlz/why-grow-a-garden-and-steal-a-brainrot-bet-on-boring-idle-tech-the-luau-loop-behind-2djf)). La regla general que propone un tracker —un viral típico toca 30–80 K, se asienta en 5–15 K en seis meses, y ~90 % de los juegos que entran al top 100 salen en un año, con simuladores y tycoons mostrando la curva post-viral más empinada y los juegos sociales y de moda una retención «estructuralmente más fuerte»— no declara metodología y debe leerse como orientación ([RoWatcher](https://rowatcher.com/news/one-year-on-the-charts-what-really-happens-after-a-roblox-game-goes-viral)). Encaja, eso sí, con el caso de Dress to Impress y con el diagnóstico oficial de Roblox sobre 2026.

A esa dinámica de mercado se suma ahora la plataforma. La documentación oficial establece que los juegos cuyos metadatos o archivos de place se parecen mucho a otros existentes «ya no se priorizan y pueden posicionarse más abajo en la búsqueda», que entre juegos indistinguibles se favorece al que añadió primero los metadatos únicos, y que el cambio de junio de 2026 favorece deliberadamente a los juegos retentivos frente a los de clic rápido ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery), [Discovery FAQ](https://create.roblox.com/docs/discovery-faq)). El clon puro tiene hoy un viento en contra estructural además de comercial.

¿Cómo rompen entonces la barrera los juegos nuevos? La respuesta que dan los datos es la hibridación: cada mega-hit de 2025–2026 tomó un core loop familiar y de baja fricción y le injertó un sistema de otro género, más un reloj de retorno y un tema con alcance viral previo.

| Breakout | Loop base (familiar) | Sistema prestado | Reloj de retorno | Tema con alcance previo | Fuente |
|---|---|---|---|---|---|
| Grow a Garden (mar-2025) | Farming idle: plantar, cosechar, vender | Trading social y mascotas; diseño idle de móvil | Crecimiento offline; eventos de admin semanales | Jardinería de baja presión | [Fortune](https://fortune.com/2025/07/30/roblox-video-game-grow-a-garden-viral-summer-hit/), [Game-Ace](https://game-ace.com/blog/roblox-trends-in-gaming/) |
| Steal a Brainrot (may-2025) | Tycoon de colección con ingreso pasivo | Robo PvP entre bases | Bloqueo de base por segundos; eventos de admin | Memes «Italian brainrot» generados por IA, sin IP | [Bloomberg](https://www.bloomberg.com/news/articles/2026-03-24/roblox-s-hit-game-steal-a-brainrot-battles-its-many-imitators) |
| 99 Nights in the Forest (2025) | Survival de recolección | Co-op con progresión de grupo | Drops de contenido (volcán, ago-2025) | Horror de campamento | [Game-Ace](https://game-ace.com/blog/roblox-trends-in-gaming/), [games.gg](https://games.gg/news/roblox-top-games-october-2025/) |
| Plants vs Brainrots (2025) | Defensa de plantas contra enemigos | El tema brainrot migrado a otra mecánica | — | Brainrot | [MaxPower Gaming](https://www.maxpowergaming.co/post/roblox-s-latest-breakout-game-is-plants-vs-brainrots) |
| Steal An Egg (jul-2026) | Robo de 2025 | Eclosión y colección de mascotas de los pet simulators | Ingreso pasivo de mascotas | Mascotas raras | [Music Ally](https://musically.com/2026/10/29/roblox-game-steal-an-egg-has-9-7bn-visits-and-now-a-jonas-brothers-concert/) |
| Fisch (2024) | Pesca y colección | Minijuego de habilidad (equilibrio del carrete) | Altar de encantamiento solo de noche | — | [MaxPower Gaming](https://www.maxpowergaming.co/post/fish-it-how-a-simplified-copycat-became-one-of-roblox-s-biggest-hitshttps:/www.maxpowergaming.co/post/fish-it-how-a-simplified-copycat-became-one-of-roblox-s-biggest-hits) |

Tres lecciones salen de esa tabla. La primera es que el siguiente mega-hit tiende a ser una recombinación de los dos anteriores, no un clon de uno: Steal An Egg fusiona el robo de Steal a Brainrot con la eclosión de huevos de los pet simulators (inferencia de los investigadores). La segunda es que un imitador solo gana cuando cambia la curva de accesibilidad: «Fish It», copia simplificada de Fisch, llegó al #3 en engagement precisamente por eliminar el exigente minijuego de carrete, que en Fisch «atrae a jugadores mayores o más comprometidos» ([MaxPower Gaming](https://www.maxpowergaming.co/post/fish-it-how-a-simplified-copycat-became-one-of-roblox-s-biggest-hitshttps:/www.maxpowergaming.co/post/fish-it-how-a-simplified-copycat-became-one-of-roblox-s-biggest-hits)). La tercera matiza la simplicidad: Newzoo concluye que los títulos más exitosos de 2025 «tienden a ser ricos en funciones y estructurados», con mecánicas complejas y actualizaciones sostenidas ([GameDev Reports / Newzoo](https://gamedevreports.substack.com/p/newzoo-top-roblox-games-in-2025)); el loop de entrada es trivial, pero lo que hay detrás no lo es. Queda sin cuantificar, por falta de fuentes citables, la ola de clones de pet simulators de 2021–22, la de RNG tras Sol's RNG en 2024 y el número de clones de «Grow a ___»; el informe las trata solo como contexto cualitativo.

### 2. Arquitectura del juego: un loop de segundos envuelto en relojes de minutos, días y meses

#### 2(a) Core loop: la primera acción llega en segundos y el primer upgrade visible cabe en una sesión mediana de 9.8 minutos

Roblox define el core loop con tres partes: la interacción minuto a minuto, el conjunto de acciones más repetido y un motor de progresión que hace que la siguiente pasada sea más grande; su ejemplo de action-RPG es Explorar → Combatir → Mejorar, y advierte que «sin un sistema de progresión, un juego se vuelve repetitivo, aburrido y superficial» ([Creator Hub: Core loops](https://create.roblox.com/docs/production/game-design/core-loops)). El loop debe ser «satisfactorio, repetible y progresivamente desafiante» ([Creator Hub: Recommended strategies](https://create.roblox.com/docs/get-started/strategies)). El contexto en que ese loop compite es hostil: la sesión mediana de los juegos grandes de Roblox dura **9.8 minutos** (percentil 75: 12; percentil 90: 14.7) y el jugador mediano hace tres sesiones y 22.4 minutos de juego al día, según el benchmark de GameAnalytics sobre más de 500 experiencias con al menos 1 M de MAU entre agosto de 2025 y julio de 2026 ([GameDev Reports / GameAnalytics](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox)). Roblox añade que una sesión típica de plataforma consiste en jugar «un puñado de juegos distintos», que el servicio se parece «más a YouTube que a la App Store» y que conviene distinguir a los «turistas» que saltan entre juegos de los «locales» que forman casi toda la base comprometida de un juego ([Creator Hub: The Roblox user base](https://create.roblox.com/docs/production/roblox-user-base), [Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)).

Los éxitos responden a ese entorno con una plantilla común, que los investigadores sintetizan así: acción (segundos) → recompensa en soft currency (inmediata) → compra que eleva la tasa de ingreso (minutos) → nueva zona, tier de rareza o slot (decenas de minutos) → reset o meta de colección (horas a semanas). La tabla siguiente responde a la pregunta de los 30 segundos, 5 minutos y 30 minutos. **Es una reconstrucción de los investigadores a partir de mecánicas descritas en guías de terceros; no existe en las fuentes ninguna medición de tiempos (por ejemplo, tiempo hasta la primera compra) y no debe leerse como dato medido.**

| Juego | Primeros 30 segundos (reconstrucción) | Primeros 5 minutos (reconstrucción) | Primeros 30 minutos (reconstrucción) | Mecánicas documentadas en que se apoya |
|---|---|---|---|---|
| Grow a Garden | Aparecer en la parcela propia, caminar a la Seed Shop, gastar los 20 Sheckles iniciales en dos semillas de zanahoria y plantarlas | Primera cosecha y venta, recompra; descubrir que el stock de la tienda cambia cada 5 minutos | Pasar a cultivos de cosecha múltiple (arándano, tomate), primer cultivo mutado, primera compra de herramienta o huevo, misiones diarias | 20 Sheckles = 2 semillas y restock cada 5 min ([BlueStacks](https://www.bluestacks.com/blog/game-guides/roblox/rl-grow-a-garden-beginners-guide-en.html)); cultivos multi-cosecha y huevos ([TheGamer](https://www.thegamer.com/roblox-grow-a-garden-beginner-tips-tricks-guide/)); crecimiento offline ([Gardening Know How](https://www.gardeningknowhow.com/garden-how-to/design/roblox-grow-a-garden-game)) |
| Steal a Brainrot | Aparecer en una base vacía frente a la cinta transportadora, comprar el Brainrot más barato; el contador de ingresos arranca | Llenar slots, primer intento de robo (propio o sufrido), aprender el bloqueo de ~60 segundos | Ciclo comprar → cobrar → bloquear → asaltar, sustituir comunes por rarezas superiores, avanzar hacia el requisito del Rebirth 1 | Cinta central con rareza, dinero por segundo y precio sobre cada modelo ([games.gg](https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/)); Lock Base ~60 s ([Deltia's Gaming](https://deltiasgaming.com/how-to-play-steal-a-brainrot-roblox/)) |
| 99 Nights in the Forest | Lobby, elegir tamaño de equipo (1–5), cargar junto a la fogata con cuenta atrás hasta la noche | Talar, alimentar el fuego, primera noche | Fogata a nivel 2–3, primeros objetos de crafteo, primer intento de rescate de un niño, varios ciclos día/noche | Matchmaking 1–5 ([Eneba](https://www.eneba.com/hub/games/game-guides/how-to-beat-99-nights-in-the-forest/)); temporizador hasta la noche ([PC Gamer](https://www.pcgamer.com/games/roblox/99-nights-in-the-forest-tips/)); niveles de fogata ([GuideSpot](https://www.guidespot.com/99-nights-in-the-forest-guide/)) |
| Pet Simulator 99 | Romper los montones de monedas del spawn y abrir el primer huevo de 90 monedas | Segundo y tercer huevo (150 y 250 monedas), primera puerta de área | Desbloqueo continuo de áreas rumbo al Área 25 y el primer rebirth | Precios de huevos 90/150/250/650/1,500 y rebirth en Área 25 ([petsimulator99-wiki.wiki](https://petsimulator99-wiki.wiki/beginner-guide/)); otra guía da 100 monedas para el primer huevo ([U7Buy](https://www.u7buy.com/blog/pet-simulator-99-beginner-guide/)) |

Lo documentado, más allá de la reconstrucción, permite describir con precisión cómo cada familia arma su loop. En los **simuladores y tycoons de progresión persistente**, la tienda suele ser un objeto físico y compartido: en Steal a Brainrot una cinta roja atraviesa el centro del mapa y cada Brainrot muestra sobre su modelo el tier de rareza (de Common a Secret), el dinero por segundo y el precio; los comprados se quedan en la base generando ingreso pasivo y otros jugadores pueden entrar y llevárselos físicamente ([games.gg](https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/)). Un análisis externo resume por qué funciona: el loop de adquirir-y-generar es simple, el riesgo de robo añade tensión y robar un Brainrot raro rinde más que farmear desde cero ([Medium](https://medium.com/@emtertoszef/steal-a-brainrot-phenomenon-6af7b49081e0)). Steal An Egg reutiliza la estructura: entrar a biomas, tomar huevos de los nidos, correr a casa antes de que un guardián u otro jugador te derribe, colocar el huevo en el corral, eclosionarlo y cobrar el ingreso de la mascota; la velocidad se entrena en una cinta de correr y da acceso a zonas con mejores huevos, y otros jugadores pueden robar tanto los huevos que llevas como las mascotas ya eclosionadas ([games.gg](https://games.gg/roblox/guides/steal-an-egg-beginner-guide/)). Janzen «Jandel» Madsen, de Splitting Point Studios (co-desarrollador de Grow a Garden), explicó su apuesta en términos casi idénticos a un principio de diseño: a todo el mundo le gusta «ver crecer algo», y lo decisivo fue «la idea del jardín creciendo offline, el mundo persistente» ([GamesBeat](https://gamesbeat.com/janzen-madsen-interview/)).

En **Anime y RNG**, el loop es más desnudo y la profundidad se traslada al azar y a las puertas de nivel. Sol's RNG consiste en pulsar para tirar, esperar el cooldown y volver a tirar; la suerte base es 1 y todo (equipo, pociones, biomas, gamepasses) la multiplica, de modo que progresar es acortar el cooldown y subir la suerte ([solrng.wiki](https://www.solrng.wiki/guides/how-to-play/)). Anime Vanguards reparte el juego en Story, Infinite con leaderboard, Dungeons y eventos limitados, y cada invocación cuesta 50 gemas (40 con VIP) ([animevanguards.org](https://animevanguards.org/guides/beginners), [seemeta](https://seemeta.com/en/anime-vanguards/summon-rates)). Blox Fruits escalona el mundo por nivel: Second Sea al nivel 700, raids al 1,100, Third Sea al 1,500, aunque las guías discrepan sobre algunos jefes de acceso ([RblxGuide](https://rblxguide.com/games/blox-fruits/updates/blox-fruits-sea-2-walkthrough-2026)). Fisch entrega una caña gratuita al aparecer en Moosewood y convierte la mejora de caña en el eje de la progresión, con un primer objetivo de C$2,000 según una guía antigua ([RblxGuide](https://rblxguide.com/games/fisch/updates/beginner-guide), [Destructoid](https://www.destructoid.com/fisch-roblox-beginners-guide/)).

En **Horror y Survival**, el loop es una partida (run) con tensión de recursos. En 99 Nights in the Forest el día se dedica a recolectar combustible; dejar morir el fuego reduce la zona segura y la visibilidad, y la decisión recurrente es explorar más lejos o volver a prepararse para la noche ([ExitLag](https://www.exitlag.com/blog/99-nights-in-the-forest-roblox/)). Dead Rails es un viaje en locomotora en el que hay que mantener el tren alimentado mientras se saquean pueblos, y las guías aconsejan comprar al menos tres piezas de carbón antes que cualquier arma ([BlueStacks](https://www.bluestacks.com/blog/game-guides/roblox/rl-dead-rails-beginners-guide-en.html)). Doors recorre de la Puerta 1 a la 100 con salas de puzles colocados al azar ([GameWith](https://gamewith.net/roblox/57458)), y Forsaken encadena rondas tras un intermedio de 50 segundos sin cola de rol: quien acumula más «Malice» es el asesino ([ForsakenHub](https://www.forsakenhub.com/roblox-forsaken-guide)).

En **Roleplay y Social**, o no hay loop mecánico o el loop es el juicio de los demás. Brookhaven RP no tiene misiones, niveles ni jefes: se entra a un servidor, se elige casa y vehículo y se empieza a rolear, con más de 24 vehículos, más de 8 tipos de casa y todos los trabajos gratis ([RoWatcher](https://rowatcher.com/news/what-is-brookhaven-rp-why-400k-players-choose-roblox-s-biggest-game)); Roblox lo lee como «jugar a las casitas», un juego que da herramientas de interacción para que esas interacciones se conviertan en «el contenido espontáneo que hace volver a los usuarios» ([Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)). Adopt Me! hace envejecer a las mascotas con «tareas» que cubren necesidades ([games.gg](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/)), y Dress to Impress comprime todo en una ronda: tema y temporizador para todo el servidor (cinco o seis minutos según la fuente), pasarela, voto de 1 a 5 estrellas y podio para los tres primeros ([RblxGuide](https://rblxguide.com/games/dress-to-impress/updates/beginners-guide)).

De ahí salen cuatro arquetipos estructurales, cada uno con su manera de resolver los tres horizontes temporales.

| Arquetipo | Ejemplos | Cómo entrega valor en segundos, minutos y media hora | Dónde vive el progreso a largo plazo |
|---|---|---|---|
| Progresión persistente | Grow a Garden, Steal a Brainrot, Steal An Egg, Pet Simulator 99, Blox Fruits, Fisch | Compra o acción inmediata; upgrades cada pocos minutos; algo queda «madurando» al salir | Base, parcela o inventario persistentes; rebirths y colecciones |
| Ronda / partida | Dress to Impress, RIVALS (gana quien llega a cinco rondas, [Bloxodes](https://bloxodes.com/articles/rivals-beginner-guide)), Forsaken, Blue Lock: Rivals (5v5, [games.gg](https://games.gg/roblox/guides/blue-lock-rivals-beginners-guide/)) | El loop completo acción → resultado → recompensa se cierra cada pocos minutos | Moneda o rango de cuenta (Stars, Player Points, ranked) |
| Run cooperativa | Doors, 99 Nights in the Forest, Dead Rails | Tensión creciente dentro de una sola sesión larga | Meta-tienda en el lobby (clases, modificadores) |
| Sandbox social | Brookhaven RP | Libertad inmediata, sin objetivos | Los propios jugadores como «fuente evergreen de contenido» ([Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)) |

Lo que une a los cuatro es la superposición de relojes. Dentro del loop hay temporizadores de segundos a minutos —el bloqueo de base de ~60 segundos en Steal a Brainrot, el restock de semillas cada 5 minutos y de huevos cada 30 en Grow a Garden ([Gamezebo](https://www.gamezebo.com/walkthroughs/grow-a-garden-pet-eggs/)), el altar de encantamientos de Fisch que solo funciona de noche ([Fandom](https://fisch.fandom.com/wiki/Enchant_Relic)), los cofres horarios de los eventos de Pet Simulator 99 ([allthings.how](https://allthings.how/lucky-block-breakout-in-pet-simulator-99-update-90/))—; por encima, una capa offline (los cultivos siguen creciendo); y encima, las capas de semanas que Roblox recomienda: season pass de alrededor de un mes y diez tiers, con al menos una semana de descanso entre temporadas ([Creator Hub: Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)), y actualizaciones menores cada 1–2 semanas y mayores cada 2–3 meses según una página oficial, o cada 2–4 semanas según otra ([Recommended strategies](https://create.roblox.com/docs/get-started/strategies), [Retention](https://create.roblox.com/docs/production/analytics/retention)). La consecuencia de diseño, formulada como inferencia: una pasada completa del loop más un upgrade visible tiene que caber con holgura dentro de 10 minutos, y el juego debe dejar algo en marcha para que el jugador mediano —que hace unas tres sesiones al día— tenga motivo para la siguiente. No se encontró ninguna medición del porcentaje de jugadores AFK ni duraciones de run o de ronda verificadas para Doors, Dead Rails, 99 Nights, Forsaken o RIVALS.

#### 2(b) Meta-game: cuatro sistemas apilables estiran un loop trivial hasta cientos de horas

La capa de largo plazo de los juegos top se construye con cuatro sistemas que se apilan: un bucle de reset a cambio de multiplicador (rebirth o prestigio), una colección con probabilidades muy empinadas, variantes multiplicativas sobre cada coleccionable y sistemas de reroll con contadores de pity. Roblox llama a esto el «ending system» —lo que queda disponible cuando el jugador ya completó los objetivos principales— y lo liga directamente al D30, recomendando contenido regular y mecánicas sociales como trading, parties, gremios, PvP, torneos y leaderboards ([Creator Hub: Retention](https://create.roblox.com/docs/production/analytics/retention)). Entre los tipos de actualización mayor que enumera están justamente «colecciones y logros», con metas completistas de corto, medio y largo plazo como mascotas coleccionables o season passes ([Creator Hub: LiveOps essentials](https://create.roblox.com/docs/production/game-design/liveops-essentials)).

| Sistema | Juego | Cifras reportadas (guías y wikis; cambian con cada parche) | Fuente |
|---|---|---|---|
| Rebirth | Steal a Brainrot | Rebirth 1: ~$1 M de cash (algunas guías, $500 K) más dos Brainrots concretos; recompensa: multiplicador de ingresos, $5 K iniciales, +10 s de bloqueo y gear nuevo. Rebirth 10: ~250 mil M y multiplicador ×9. Escalera ampliada de 16 a 18 y a 19 niveles (oct-2026). Se reinician cash y Brainrots; persisten multiplicadores, gear, slots y tiempo de bloqueo | [Beebom](https://beebom.com/steal-a-brainrot-rebirth-guide-levels-and-rewards/), [Bloxinformer](https://bloxinformer.com/wikis/steal-a-brainrot/rebirth/), [allthings.how](https://allthings.how/steal-a-brainrot-rebirth-19-guide-requirements-and-rewards/), [Eldorado](https://www.eldorado.gg/blog/steal-a-brainrot-rebirth-guide/) |
| Rebirth | Pet Simulator 99 | Estaciones en las Áreas 25, 50, 75, 99, 125, 150 y 175; el primero reinicia monedas y áreas y otorga Auto Hatch; las mascotas se conservan; Mastery exige Rebirth 4 | [petsimulator99-wiki.wiki](https://petsimulator99-wiki.wiki/beginner-guide/), [HoldToReset](https://holdtoreset.com/pet-simulator-99-mastery-list/) |
| Variantes multiplicativas | Grow a Garden | Mutaciones que multiplican el valor de venta y se apilan: Wet ×2, Frozen ×10, Gold ×20, Rainbow ×50 (0.1 % de probabilidad); en 2026 los trackers listan 158–172+ mutaciones, hasta ×365 y ×500 | [Wiki (Miraheze)](https://growagarden.miraheze.org/wiki/Mutations), [gagdata](https://www.gagdata.com/mutations) |
| Variantes multiplicativas | Steal a Brainrot | Gold 1.25× (~10 %), Diamond 1.5×, Rainbow 10× (~1 %); unas 15 mutaciones hasta 14×; la mutación no cambia la rareza | [RblxGuide](https://rblxguide.com/games/steal-a-brainrot/mutations) |
| Variantes por fusión | Adopt Me! | 4 mascotas Full Grown = 1 Neon; 4 Neon = 1 Mega Neon (16 copias); desde el 12-sep-2025, de ~25 tareas (Common) a 183 (Legendary) para crecer, antes 56–275 | [Adopt Me Wiki](https://adoptme.fandom.com/wiki/Mega_Neons), [games.gg](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/) |
| Colección con odds extremas | Sol's RNG | Rareza expresada como 1 entre N; tope reportado: 1 entre 1,200 M (Luminosity) y 1 entre 3,000 M (Monarch, con condición previa); el «más raro» cambia en cada era | [Dot Esports](https://dotesports.com/roblox/news/what-is-the-rarest-aura-in-sols-rng), [RblxGuide](https://rblxguide.com/games/sols-rng/auras/luminosity), [allthings.how](https://allthings.how/sols-rng-aura-tier-list-every-rarity-and-drop-rate-ranked/) |
| Gacha con pity | Anime Vanguards | Banner: Rare 75.496 %, Epic 20 %, Legendary 4 %, Mythic 0.5 %, Vanguard 0.005 %; pity a 50 (Legendary), 400 (Mythic), 5,000 (Secret) y 20,000–25,000 (Vanguard) invocaciones | [seemeta](https://seemeta.com/en/anime-vanguards/summon-rates) |
| Reroll | Anime Vanguards | 11 familias de traits; Monarch 0.1 % con pity a 1,500 rerolls (fuentes de 2026) | [seemeta](https://seemeta.com/en/anime-vanguards/traits) |
| Colección como puerta | Fisch | Rod of the Depths exige 100 % del bestiario de Vertigo, llave, dos reliquias y C$750,000; cañas bloqueadas a nivel 500 y 1,000; tope de nivel 2,000 | [Fischipedia](https://fischipedia.org/wiki/Rod_Of_The_Depths), [RblxGuide](https://rblxguide.com/games/fisch/updates/beginner-guide) |
| Slots y zonas | Bee Swarm Simulator | Colmena de 25 slots ampliable a 50; el último slot costaría 2,169,203,229,760 de miel según una guía | [BSS Wiki](https://bee-swarm-simulator.fandom.com/wiki/Hive_Slot), [Of Zen and Computing](https://www.ofzenandcomputing.com/bee-swarm-simulator-hive-progression-guide/) |
| Meta de cuenta en juegos de run | 99 Nights / Dead Rails | Clases compradas con diamantes (de 24 a 39 clases según la fecha de la guía) / clases compradas con Bonds, de 15 a 100 Bonds | [GamesRadar](https://www.gamesradar.com/games/simulation/99-nights-in-the-forest-classes-all), [Dead Rails Wiki](https://dead-rails-game.fandom.com/wiki/Classes) |

Las probabilidades de las mascotas Huge de Pet Simulator 99 no están publicadas oficialmente; las estimaciones comunitarias para un huevo estándar van de 1 entre 500,000 a 1 entre 2,000,000 ([TheGamer](https://www.thegamer.com/roblox-pet-simulator-99-how-to-get-huge-pets/)). En los juegos competitivos y de ronda el meta es una escalera de estatus: Dress to Impress ordena a los jugadores por Stars totales, de «New Model» a «Fashion Goddess» ([RblxGuide](https://rblxguide.com/games/dress-to-impress/updates/beginners-guide)), y RIVALS reserva el modo ranked tras un requisito de acceso sobre el que las fuentes discrepan ([allthings.how](https://allthings.how/roblox-rivals-ranked-mode-and-ranks-explained/)).

La matemática que convierte estos sistemas en «cientos de horas» es coste exponencial frente a recompensa aproximadamente lineal. La literatura clásica de idle games usa cost = base × growth^n, con ejemplos publicados de 5 × 1.1^n y de 1.15^n en Cookie Clicker ([Game Developer](https://www.gamedeveloper.com/game-platforms/the-math-of-idle-games-part-ii), [Envato Tuts+](https://code.tutsplus.com/numbers-getting-bigger-the-design-and-math-of-incremental-games--cms-24023a)); desarrolladores de Roblox describen en DevForum la fórmula típica de precio de rebirth como una exponencial (por ejemplo 10,000 → 14,000 → 19,600, es decir ×1.4 por rebirth) y advierten que una curva demasiado empinada vuelve los rebirths tardíos casi imposibles ([DevForum](https://devforum.roblox.com/t/simulator-formulas/853976)). Los cálculos que siguen son de los investigadores sobre cifras de guías que en parte se contradicen: en Steal a Brainrot, pasar de ~$1 M en el Rebirth 1 a ~$250 mil M en el Rebirth 10 implica un factor medio de ~4× por rebirth, mientras el multiplicador de ingresos sube aproximadamente +1× por nivel, de modo que cada rebirth tarda más que el anterior; en Pet Simulator 99 los primeros huevos saltan ×1.67, ×1.67, ×2.6 y ×2.3, escalones mucho más bruscos que el 1.1–1.15 clásico porque los simuladores de Roblox venden pocos pasos grandes (cada uno con arte nuevo) y no muchos pequeños; y un Legendary Mega Neon de Adopt Me! requeriría como mínimo 183 × 16 ≈ 2,900 tareas, con totales comunitarios de 3,660 a 5,500. Tres patrones adicionales, también inferidos: el rebirth funciona como pista de desbloqueo de funciones y no solo como multiplicador (Auto Hatch, Mastery, gear, tiempo de bloqueo); las capas de variantes multiplican la colección sin arte nuevo, que es exactamente lo que Roblox recomienda al sugerir «variantes simples de assets existentes» ([Creator Hub: Content updates](https://create.roblox.com/docs/production/game-design/content-updates)); y los contadores de pity transforman el RNG puro en una meta visible con techo garantizado. La recomendación de que el primer rebirth llegue a los 30–60 minutos procede de blogs sin datos ([Generalist Programmer](https://generalistprogrammer.com/tutorials/how-to-make-a-roblox-simulator-game)); no se encontró ninguna medición de tiempo hasta el primer rebirth en ningún juego, ni reglas numéricas citadas por los estudios en charlas o post-mortems.

#### 2(c) Onboarding (FTUE): el tutorial desaparece y el spawn apunta al loop, porque Roblox mide el rebote a los 60 y a los 180 segundos

La posición oficial de Roblox es explícita. El onboarding o FTUE son «los primeros minutos de juego», su éxito se juzga por la retención D1 y por tres objetivos —enseñar lo esencial, llegar rápido a la diversión y dejar al jugador con ganas de más— y los jugadores nuevos «deciden su interés en cuestión de minutos» ([Creator Hub: Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)). El presupuesto de tiempo que da la documentación es llegar a la diversión «idealmente en 5 minutos o menos» ([Creator Hub: Retention](https://create.roblox.com/docs/production/analytics/retention)), con una advertencia propia de la plataforma: como es tan fácil entrar y salir de un juego, los tutoriales largos y detallados «aburren a los usuarios y los hacen rebotar» ([Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)), y si hace falta un tutorial debe ser «corto, contextual e interactivo» ([Recommended strategies](https://create.roblox.com/docs/get-started/strategies)).

Conviene ser precisos con el horizonte de «15 segundos» que plantea el encargo: **ninguna fuente oficial habla de 15 segundos**. Lo oficial son los cinco minutos anteriores y, en el sistema de recomendación vigente, las dos franjas en que el algoritmo mide el rebote de la primera sesión: menos de 60 segundos y de 61 a 180 segundos ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery)). La regla de «onboarding en 60–90 segundos» es de terceros ([creation.dev](https://www.creation.dev/glossary/onboarding), [RoWatcher](https://rowatcher.com/news/roblox-onboarding-in-90-seconds-or-your-game-is-already-dead)). Lo que los éxitos hacen en los primeros segundos es, según la lectura de los investigadores, una solución espacial y no instructiva: el punto de aparición mira hacia la interacción central, la moneda inicial equivale al precio de la primera compra y la primera recompensa llega tras una sola acción.

| Juego | Gancho de arranque documentado | Fuente (guías) |
|---|---|---|
| Grow a Garden | 20 Sheckles iniciales que alcanzan exactamente para dos semillas de zanahoria, junto a la tienda | [BlueStacks](https://www.bluestacks.com/blog/game-guides/roblox/rl-grow-a-garden-beginners-guide-en.html) |
| Steal a Brainrot | Cash inicial suficiente para un personaje básico de la cinta que pasa frente al spawn | [Pro Game Guides](https://progameguides.com/guides/complete-steal-a-brainrot-beginners-guide/) |
| Pet Simulator 99 | Primer huevo de 90 monedas, que se obtienen rompiendo los objetos del spawn | [petsimulator99-wiki.wiki](https://petsimulator99-wiki.wiki/beginner-guide/) |
| Fisch | Caña gratuita (Flimsy Rod) al aparecer | [RblxGuide](https://rblxguide.com/games/fisch/updates/beginner-guide) |
| RIVALS | Loadout gratuito de cuatro slots, campo de tiro y «Beginner and Daily Tasks» como onboarding guiado | [Bloxodes](https://bloxodes.com/articles/rivals-beginner-guide) |
| Lumber Tycoon 2 (contraejemplo) | «Ningún tutorial digno de ese nombre»; el jugador necesita una wiki | [DungeonPath](https://dungeonpath.com/posts/pillar/roblox-tycoon-games-compared/) |

Esa práctica coincide punto por punto con la receta oficial de FTUE en tres pasos: guiar al usuario por el core loop con un tutorial breve o información contextual, entregar un «momento de alegría» al completarlo por primera vez —con recompensas, animaciones y efectos de celebración— y previsualizar el progreso que logrará si lo repite ([Retention](https://create.roblox.com/docs/production/analytics/retention), [Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)). Roblox añade tres recursos: dar ítems o moneda iniciales (y hacer A/B test de la cantidad), mantener bajos los umbrales de XP de los primeros niveles para que el jugador suba rápido, y mostrar metas de corto, medio y largo plazo —árboles de habilidad, season passes, colecciones— en lugares muy visibles ([Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)). En los juegos de servidor compartido esa previsualización es gratuita: ver los jardines, bases y mascotas de otros jugadores sustituye a cualquier pantalla de objetivos (inferencia).

El repertorio de técnicas sin texto está documentado con ejemplos nombrados por la propia Roblox, que parte de una premisa tajante: a los jugadores «generalmente no les gusta leer instrucciones» y saltan los textos, mientras que los elementos visuales no necesitan traducción y funcionan para niños que aún aprenden a leer y en pantallas pequeñas ([Creator Hub: Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)).

| Técnica oficial | Cómo opera | Ejemplo citado por Roblox |
|---|---|---|
| Elementos visuales | Flecha que rebota sobre un botón, partículas sobre un objeto, rastro luminoso hacia un destino, cartel en el mundo con el core loop | Color or Die: cartel en la línea de visión al recoger el primer cubo de pintura, «imposible de pasar por alto, pero no impide empezar» |
| Spotlight de UI | Se ilumina el botón objetivo y se atenúa el resto | Hello Kitty Cafe: contorno rosa y flecha |
| Rastro direccional | Sugiere con fuerza una acción sin obligar | Hello Kitty Cafe; Creatures of Sonaria y Winds of Fortune con flechas e iconos |
| Pistas ambientales | El jugador resuelve solo y «se siente listo» | Jailbreak: huellas que insinúan la ruta de escape |
| Feedback como enseñanza | Destellos de golpe, números de daño, monedas que saltan, contador de misión | Winds of Fortune: el combate se entiende sin tutorial explícito |
| Tutorial contextual («just in time») | Se dispara con el juego normal | Squishmallows: el tutorial de combinación aparece solo al tener dos ítems idénticos |
| Pista temporizada | Solo para quien se retrasa | Juego de referencia «Plant»: si la mayoría pulsa «PLANT CABBAGE SEED» en 10 segundos, resaltar el botón al segundo 11 |

Todas las técnicas proceden de [Creator Hub: Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques). Para la interfaz, la guía de UI añade color brillante en los botones cruciales y movimiento —partículas, botones que tiemblan, flechas animadas— ([Creator Hub: UI and UX design](https://create.roblox.com/docs/production/game-design/ui-ux-design)); las misiones funcionan como tutorial repartido en el tiempo y con recompensa ([Creator Hub: Introduction to quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)); y las convenciones del género son onboarding gratuito, porque cuanto más se parezcan los patrones a los de los juegos populares del género, «menos hay que explicar» ([Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)). Roblox pide además no aislar al jugador nuevo en instancias individuales que le impidan jugar con amigos ([Recommended strategies](https://create.roblox.com/docs/get-started/strategies)).

El FTUE se mide, no se intuye. Los pasos se registran con `AnalyticsService:LogOnboardingFunnelStepEvent` desde `PlayerAdded`, y Roblox afirma que el onboarding es probablemente donde se pierde a la mayoría de los usuarios; su ejemplo trabajado es un juego de plantar y vender —la misma estructura que Grow a Garden— cuyo mayor abandono ocurre en el paso 2, «Plant Seed», y cuyas correcciones propuestas son añadir indicadores contextuales o exigir una primera siembra antes de dejar explorar ([Creator Hub: Funnel events](https://create.roblox.com/docs/production/analytics/funnel-events)). El panel de Engagement ofrece la gráfica «New User First Session Retention», que muestra cuántos usuarios nuevos siguen jugando X minutos después de entrar ([Creator Hub: Engagement](https://create.roblox.com/docs/production/analytics/engagement)). Quedan como lagunas: no hay porcentajes públicos de finalización de funnel de ningún juego nombrado, no se pudo confirmar si los éxitos concretos usan flechas, beams o UI pulsante en el primer spawn, y no se recuperó ninguna charla de RDC o GDC ni post-mortem de estudios como BIG Games, Uplift o Grandma's Favourite Games.

### 3. Psicología y retención: el acantilado está entre el D1 y el D7, y se cruza con relojes más que con regalos

#### 3(a) Retención D1, D7 y D30: el juego mediano conserva al 10.3 %, al 1.6 % y al 0.5 %, y los éxitos responden con relojes de minutos, de días y de sábado

No existe un umbral oficial de retención «buena». El panel de Analytics de Roblox compara cada juego con experiencias de jugadores similares en el rango de percentil 50–90 —si no hay suficientes, por género, y si no, contra todas—, y la documentación usa como ejemplo ilustrativo un D1 de 12.11 % en el percentil 50 y de 18.73 % en el percentil 90 ([Creator Hub: Analytics dashboard](https://create.roblox.com/docs/production/analytics/analytics-dashboard)). El dato independiente más reciente es el de GameAnalytics, con datos de agosto de 2025 a julio de 2026 sobre más de 500 juegos con más de 1 M de MAU.

| Indicador | Mediana | Tramos superiores | Fuente / fiabilidad |
|---|---|---|---|
| D1 | 10.3 % | Distribución 8.4 / 10.3 / 12.9 / 15.9 / 18.0 % (el extracto dice «de P25 a P95»; se asume P25-P50-P75-P90-P95); top 1 %: 22.2 % | Informe de terceros ([GameAnalytics 2026](https://www.gameanalytics.com/reports/2026-roblox-report), [Benchmarks Hub](https://www.gameanalytics.com/benchmarks-hub)) |
| D7 | 1.6 % | Top 1 %: 9.1 % | Ídem |
| D30 | 0.5 % | Top 1 %: 4.7 % | Ídem |
| Duración de sesión | 9.8 min | P75: 12 min; P90: 14.7 min | Resumen secundario ([GameDev Reports](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox)) |
| Sesiones por usuario y día | ~3 (jugador mediano) | Top 10 % de juegos: 3.22; top 1 %: 8.3 (extractos distintos del mismo informe; posible diferencia de definición) | Ídem |
| D1, ejemplo del panel de Roblox | 12.11 % (P50 de «juegos similares») | 18.73 % (P90) | Oficial, ilustrativo ([Analytics dashboard](https://create.roblox.com/docs/production/analytics/analytics-dashboard)) |

GameAnalytics considera inflada la regla popular de «20 % de D1 es bueno, 40 % excelente», porque suele basarse en muestras pequeñas de juegos ya exitosos ([GameDev Reports](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox)). Los rangos por género que circulan —obby 25–35 % de D1, tycoon 20–28 %, shooters 25–40 % en un blog; simuladores 32 % / 14 % / 6.2 % y horror 22 % / 8 % / 2.8 % en otro— no declaran fuente de datos, contradicen la distribución anterior (cuyo P95 de D1 es 18 %) y **no deben usarse como benchmark** ([RoWatcher](https://rowatcher.com/news/retention-benchmarks-by-roblox-genre-what-good-actually-looks-like), [bloxg](https://bloxg.com/statistics/roblox-retention-benchmarks)). Como orientación, y solo como inferencia de los investigadores a partir de los dos conjuntos fiables: un D1 por debajo del 8 % es pobre, 10–12 % es normal, 13–16 % es bueno y 18–22 % o más es excelente; en D7 lo excelente empieza hacia el 9 % y en D30 hacia el 4–5 %. La caída de la mediana entre D1 y D7, de 10.3 % a 1.6 %, es el verdadero acantilado de Roblox.

La tendencia de fondo ayuda a entender qué premia el mercado. El informe de 2025 de GameAnalytics concluyó que el gran cambio no eran sesiones más largas sino mayor frecuencia de retorno: el percentil 90 de sesiones diarias por usuario pasó de 4.3 (2023) a 4.5 (2024) y a 6 (2025), mientras entre los usuarios más activos la mediana de sesión bajaba de 36 a 26 minutos ([GameAnalytics 2025](https://www.gameanalytics.com/reports/2025-roblox-report)). Ese patrón de «entra, recoge, sal» es el de Grow a Garden. Roblox, por su parte, asigna cada horizonte a una capa de diseño: el D1 depende del core loop, el FTUE y el rendimiento técnico; el D7, del sistema de progresión; el D30, del «ending system», es decir, contenido nuevo y mecánicas sociales ([Creator Hub: Retention](https://create.roblox.com/docs/production/analytics/retention)).

Las mecánicas exactas de retorno que usan los éxitos se ordenan por el reloj que activan.

| Reloj | Mecánica | Ejemplos y cifras | Evidencia y fiabilidad |
|---|---|---|---|
| Segundos–minutos (alargar la sesión) | Temporizadores cortos y visibles | Bloqueo de base en Steal a Brainrot: 30 s al entrar, rebloqueo de 60 s, +10 s por rebirth; restock de semillas y herramientas cada 5 min en Grow a Garden | Guías ([allthings.how](https://allthings.how/steal-a-brainrot-roblox-efficient-stealing-events-and-rebirths), [Gamezebo](https://www.gamezebo.com/walkthroughs/grow-a-garden-pet-eggs/)); sin confirmación del desarrollador |
| Minutos–horas (retorno intradía) | Progreso offline / idle; stock rotativo | Los cultivos de Grow a Garden siguen creciendo con el jugador desconectado; tienda de huevos cada 30 min; cofres horarios en eventos de Pet Simulator 99 | Guías ([booboo.cc](https://booboo.cc/blog/grow-a-garden-guide-how-to-play-mutations-pets)); declaración del co-desarrollador sobre el «jardín creciendo offline» ([GamesBeat](https://gamesbeat.com/janzen-madsen-interview/)) |
| Diario (D1–D7) | Daily rewards, rachas, recompensas por tiempo de juego, misiones diarias | Paquete oficial «Engagement Rewards» (rachas de login y tiempo de sesión); en Pet Simulator 99, logros por «free gifts» (de 100 regalos a un tramo de 1,500), regalos diarios, Daycare y calendario de Adviento; dailies oficiales: tareas cortas de 24 h con recompensa modesta | Oficial ([Engagement Rewards](https://create.roblox.com/docs/resources/feature-packages/engagement-rewards), [Quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)); guías ([Bloxodes](https://bloxodes.com/wiki/pet-simulator-99/achievements), [Pro Game Guides](https://progameguides.com/roblox/how-to-claim-advent-calendar-gifts-in-pet-simulator-99-roblox/)) |
| Semanal (D7) | Actualización con evento en vivo | Grow a Garden: actualización tradicional de sábado precedida ~1 hora por «Admin Abuse» (climas especiales, restocks, regalos exclusivos); Steal a Brainrot: Admin Abuse martes y sábados con suerte de servidor ×2–×10; Clan Battles de ~1 semana en Pet Simulator 99 | Guías y prensa ([Digital Citizen](https://www.digitalcitizen.life/grow-a-garden-admin-abuse-schedule/), [Beebom](https://beebom.com/next-steal-a-brainrot-admin-abuse-start-date-and-time), [Pet Simulator Wiki](https://pet-simulator.fandom.com/wiki/Clan_Battles_(Pet_Simulator_99))) |
| Mensual (D30) | Season pass y eventos limitados | Recomendación oficial: ~1 mes, 10 tiers, misiones diarias, misiones semanales de alta recompensa y doble XP la última semana; Pet Simulator 99 encadena eventos limitados con cadencia aproximadamente quincenal | Oficial ([Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)); blog ([RoWatcher](https://rowatcher.com/news/pet-simulator-99-inside-roblox-s-most-aggressive-monetization-machine)) |
| Reenganche de plataforma | Notificaciones, eventos y seguidores | Experience Notifications solo para 13+ con opt-in, con límite inicial comunicado de 1 cada 3 días por experiencia (2024; no se pudo confirmar el límite vigente); prompt de permiso in-game una vez cada 30 días; anuncios de actualización de 60 caracteres como máximo cada tres días; eventos con botón «Notify Me», máximo 10 activos | Oficial ([DevForum](https://devforum.roblox.com/t/introducing-experience-notifications/2826474), [Experience events](https://create.roblox.com/docs/production/promotion/experience-events), [Experience notifications](https://create.roblox.com/docs/production/promotion/experience-notifications)) |

Tres advertencias impiden leer esa tabla como receta. La primera es que la evidencia a favor de las recompensas diarias es débil: un desarrollador reportó en DevForum un test A/B en el que no aumentaron el playtime total por jugador ([DevForum](https://devforum.roblox.com/t/do-daily-rewards-actually-keep-players-retention/3556728)), y las afirmaciones de blogs —que las rachas de 7 días mejoran el D7 «un 30–50 %», o que el bono diario es un programa de intervalo fijo que «cambia D30 por D2»— son opinión sin datos ([RoWatcher](https://rowatcher.com/news/reward-schedules-in-roblox-why-daily-login-bonuses-backfire)). Tampoco se encontró el calendario exacto de recompensas por tiempo de juego de ningún título, ni datos sobre mundos AFK o auto-farm; lo único documentado en esa línea es el crecimiento offline de Grow a Garden —con reportes de prensa de que las mascotas dejaron de crecer offline para algunos jugadores, sin confirmación del estudio ([Gamepressure](https://www.gamepressure.com/newsroom/pets-dont-level-up-and-grow-offline-in-grow-a-garden-gag-anymore/z483c6))— y el Auto Hatch que Pet Simulator 99 desbloquea con el primer rebirth. Además, como el algoritmo acredita como máximo 60 minutos de playtime por usuario y día, el farmeo AFK prolongado aporta poco a la recomendación (inferencia a partir de [Creator Hub: Discovery](https://create.roblox.com/docs/discovery)).

La segunda es que la cita semanal con evento en vivo es un motor de adquisición y reactivación, no de retención estructural. La «Admin War» de agosto de 2025, promocionada por los propios desarrolladores en TikTok, X y Discord, produjo el récord de 22,346,725 CCU de Grow a Garden ([Tubefilter](https://www.tubefilter.com/2025/08/25/roblox-grow-garden-steal-brainrot-admin-war-record/)), y el concierto de Bruno Mars dentro de Steal a Brainrot reunió 12.8 M de usuarios simultáneos el 17-ene-2026 ([Guinness World Records](https://www.guinnessworldrecords.com/news/commercial/2026/2/bruno-mars-hosts-largest-concert-in-a-videogame-during-steal-a-brainrot-on-roblox)); Steal An Egg repitió la fórmula con los Jonas Brothers en octubre de 2026 ([Music Ally](https://musically.com/2026/10/29/roblox-game-steal-an-egg-has-9-7bn-visits-and-now-a-jonas-brothers-concert/)). Pero los picos no se quedan: el responsable de Grow a Garden anunció una «nueva era» porque los eventos semanales eran demasiado difíciles de mantener frescos ([PC Gamer](https://www.pcgamer.com/games/survival-crafting/robloxs-top-experience-grow-a-garden-is-shifting-into-a-new-era-and-promises-deeper-farming-after-a-series-of-disappointing-updates-i-hope-the-community-can-see-this-change-as-a-positive-attempt-to-keep-the-game-fresh-and-enjoyable-for-everyone)), Grow a Garden 2 no tenía Admin Abuse a mediados de junio de 2026 y optó por entregas pequeñas repartidas en la semana ([allthings.how](https://allthings.how/admin-abuse-in-grow-a-garden-2-what-it-is-and-whether-it-has-happened/)), y un medio sostiene que el admin abuse «puede salvar juegos moribundos pero los daña a largo plazo» ([Beebom](https://beebom.com/admin-abuse-might-save-dying-roblox-games-but-hurts-them-in-the-long-run)). El contraste es 99 Nights in the Forest, cuyo responsable atribuye su audiencia a que el juego es más sustancial y los jugadores no agotan el contenido tan rápido ([PC Gamer](https://www.pcgamer.com/games/survival-crafting/with-a-peak-player-count-of-14-2-million-99-nights-in-the-forest-has-an-audience-other-multiplayer-games-would-kill-for-to-find-these-behemoth-playerbases-you-need-to-be-on-a-platform-like-roblox/)).

La tercera es que la plataforma ha alineado dinero y descubrimiento con el hábito diario. Creator Rewards paga 5 Robux por cada «Active Spender» que pase al menos 10 minutos en el juego en un día en que este sea una de sus tres primeras experiencias ([Creator Hub: Creator Rewards](https://create.roblox.com/docs/creator-rewards)), y el algoritmo de 28 días cuenta días de juego, días de co-play y días de gasto. Como las notificaciones push están limitadas a mayores de 13 con opt-in y a baja frecuencia, el retorno depende más del diseño interno y de canales externos que de la plataforma. No hay datos públicos de retención de Grow a Garden, Steal a Brainrot, Steal An Egg ni 99 Nights: solo CCU.

#### 3(b) Bucle de dopamina y progresión: umbrales bajos al inicio, exponenciales después, y una ceremonia que crece con la rareza

La curva de dificultad que Roblox recomienda es asimétrica: umbrales de XP bajos en los primeros niveles para que el jugador «sienta la diversión de la progresión de inmediato» y una curva que luego sube de forma exponencial ([Creator Hub: Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)), vigilando que si los usuarios progresan demasiado rápido se quedan sin contenido y si lo hacen demasiado lento se frustran ([Creator Hub: Retention](https://create.roblox.com/docs/production/analytics/retention)). La progresión, dice la documentación, existe para que el contenido dure más y dé tiempo a producir más contenido, pero sin bloquear la diversión de la primera sesión ([Creator Hub: Engagement](https://create.roblox.com/docs/production/analytics/engagement)). El ajuste en vivo va en la misma dirección: Adopt Me! recortó en septiembre de 2025 las tareas necesarias para criar una mascota de 56–275 a ~25–183 ([games.gg](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/)).

Sobre esa curva se monta el escalado numérico, los «números grandes». Las cifras que reportan las guías ilustran la magnitud: requisitos de 250 mil M de cash para el Rebirth 10 de Steal a Brainrot, mutaciones de Grow a Garden que multiplican el valor por 365 o por 500, un slot de colmena de más de 2 billones de miel en Bee Swarm Simulator, y en Sol's RNG una «Godlike Potion» listada con +40,000,000 % de suerte para una tirada o una «Potion of the Dune» con +10,000 % ([solrng.wiki](https://www.solrng.wiki/en/crafting/how-to-craft/), [Sportskeeda](https://www.sportskeeda.com/roblox-news/sol-s-rng-boss-raid-beta-1-guide)). La inflación es deliberada y se administra: la suerte divide linealmente la rareza efectiva (un aura de 1 entre 6,000,000 baja a ~600,000 tiradas de media con suerte ×10, según una guía), los objetivos más raros de Sol's RNG pasaron de cientos de millones a miles de millones a medida que los multiplicadores de suerte crecían, y los desarrolladores recortan potenciadores cuando se desbordan —una guía recoge la Lucky Potion pasando de +100 % a +25 %, sin que se pudiera verificar si el cambio fue permanente— ([RblxGuide](https://rblxguide.com/games/sols-rng/auras/vital), [Sportskeeda](https://www.sportskeeda.com/roblox-news/sol-s-rng-april-fool-s-update-guide)). El meta-game es una carrera armamentista entre estadísticas de suerte y objetivos cada vez más raros (inferencia).

El *juice* tiene respaldo oficial como principio y un modelo de referencia en el mercado. Roblox pide cerrar el onboarding con un «momento de alegría» hecho de recompensas, animaciones agradables y efectos visuales de celebración, y pone como ejemplo de feedback el combate de Winds of Fortune: destellos de impacto, números de daño rojos, efecto de pantalla con poca vida y monedas que salen despedidas de los enemigos ([Onboarding](https://create.roblox.com/docs/production/game-design/onboarding), [Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)). El modelo de mercado es la «escalera de ceremonia» de Sol's RNG, donde la intensidad del feedback crece con la rareza y convierte la suerte individual en un evento social.

| Tier de rareza en Sol's RNG | Probabilidad (según guías; los límites varían) | Ceremonia asociada |
|---|---|---|
| Basic | 1 entre 1 a 1 entre 999 | Sin anuncio |
| Epic | Primer tier «ceremonial» | Cutscene propio y mensaje morado en el chat del servidor |
| Global | Por encima de 1 entre 99,999,998 | Todo el servidor recibe la notificación |
| Transcendent | 1 entre ~1,011 M a 3,800 M | Mensaje global único y música de fondo propia |
| Dimensional | 1 entre 7,500 M a 12,500 M (solo por crafteo) | — |

Los datos de la tabla proceden de una guía ([allthings.how](https://allthings.how/sols-rng-aura-tier-list-every-rarity-and-drop-rate-ranked/)); auras raras como Poseidon añaden cutscene especial y logro exclusivo ([Destructoid](https://destructoid.com/how-to-get-poseidons-aura-in-sols-rng)). No se encontraron fuentes citables sobre la notación de sufijos (K, M, B, T…), las animaciones de apertura de huevos de Pet Simulator, el screen shake, las partículas o el diseño sonoro de juegos concretos; son prácticas extendidas que este informe deja sin cita y, por tanto, sin afirmación específica.

El azar es el tercer componente y aparece en capas. Hay RNG en la tirada base (Sol's RNG), en la adquisición (banners de Anime Vanguards con Vanguard al 0.005 % y pity publicado; huevos exclusivos de Pet Simulator 99 con Titanic al 0.05 % por huevo de 400 R$, según [Sportskeeda](https://www.sportskeeda.com/roblox-news/pet-simulator-99-sad-egg-how-get-huge-pets)), en la modificación (mutaciones de Grow a Garden ligadas a eventos de clima, según [booboo.cc](https://booboo.cc/blog/grow-a-garden-guide-how-to-play-mutations-pets); traits y shinies en Anime Vanguards) y hasta en el stock de la tienda (un ítem con 0.33 % de probabilidad de aparecer). La rareza máxima se condiciona a la progresión: Pet Simulator 99 solo permite eclosionar mascotas secretas desde el Rebirth 5 ([GamerTweak](https://gamertweak.com/unlock-get-secret-pets-in-pet-simulator-99)). Mostrar «1 entre X» cumple dos funciones a la vez: hace legible el estatus y, cuando hay pago, es obligación normativa. No se hallaron fuentes sobre mecánicas de *near-miss* en juegos concretos de Roblox.

Esa obligación delimita lo que se puede diseñar. La política de Paid Random Items de Roblox exige indicar todos los resultados posibles y las probabilidades numéricas reales antes de la compra cuando el ítem aleatorio se adquiere con Robux o con moneda del juego comprable con Robux; los potenciadores de suerte deben explicarse y las probabilidades mostradas deben actualizarse dinámicamente mientras estén activos; las recompensas aleatorias obtenidas sin pago quedan fuera de la exigencia; y cuando `PolicyService.ArePaidRandomItemsRestricted` es verdadero el usuario no puede interactuar con esos generadores ni comerciar sus resultados ([Creator Hub: Paid random items](https://create.roblox.com/docs/production/monetization/paid-random-items)). Las restricciones se han ido ampliando: menores de 18 del Reino Unido desde 2024 ([DevForum](https://devforum.roblox.com/t/update-on-paid-random-items-restriction-for-uk-users-under-18/3072183)), menores de 18 de Brasil y adultos sin verificar en 2026 ([Roblox Help](https://en.help.roblox.com/hc/cs/articles/48706630819476-Brazil-Digital-ECA-Updates)), y un anuncio de mayo de 2026 que, según el extracto, restringe por defecto estos ítems a los menores con aprobación parental por juego —texto pendiente de verificar— ([DevForum](https://devforum.roblox.com/t/clarifying-requirements-for-paid-random-items/4654622)). Las demandas contra Roblox describen precisamente estas mecánicas —recompensa variable, cajas «que funcionan como billetes de lotería»— como diseño adictivo ([Fair Patterns](https://www.fairpatterns.ai/post/from-play-to-pressure-what-roblox-lawsuits-expose-about-addictive-design)). Por eso muchos juegos hacen gratuita la tirada base y monetizan suerte, velocidad y auto-roll (inferencia), aunque el potenciador comprado con Robux sigue sujeto a divulgación.

#### 3(c) Factores sociales y viralidad orgánica: el co-play ya es señal del algoritmo y el clip de 15 segundos es el canal de adquisición

El componente social dejó de ser solo una buena práctica para convertirse en una señal medida. «Intentional co-play days per user» —días únicos en que los usuarios vuelven a jugar con amigos mediante join, invitación o servidor privado— es una de las ocho señales del algoritmo de recomendación, y Roblox pide eliminar barreras a la interacción social y «diseñar para el juego en grupo donde sea posible» ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery), [Engagement](https://create.roblox.com/docs/production/analytics/engagement)). En el mercado, el juego en grupo adopta tres formas: cooperación con roles (equipos de 1 a 5 en 99 Nights, clases en Dead Rails), conflicto (el robo como bucle central en Steal a Brainrot y Steal An Egg, donde el dueño recibe una alerta y el ladrón queda ralentizado, según [allthings.how](https://allthings.how/steal-a-brainrot-roblox-efficient-stealing-events-and-rebirths)) y juicio entre pares (la votación de Dress to Impress). El conflicto tiene coste reputacional: existe una petición en Change.org para retirar Steal a Brainrot ([Change.org](https://www.change.org/p/remove-steal-a-brain-rot-from-roblox)).

El **trading** añade un meta-juego que vive en parte fuera del juego. En Adopt Me! la economía descansa en rareza y edad, las mascotas de evento tienen oferta fija y los valores los define la comunidad mediante listas externas; el sistema avisa con un temporizador de 15 segundos cuando un intercambio parece injusto ([creation.dev](https://www.creation.dev/blog/roblox-game-economies), [Gfinity](https://www.gfinityesports.com/article/adopt-me-trade-values)). Grow a Garden muestra el riesgo de improvisarlo: al principio todo se hacía por *gifting* sin garantías, con estafas frecuentes, y el sistema formal llegó con la Trading and Cooking Update del 2-ago-2025 ([GINX](https://www.ginx.tv/en/grow-a-garden-trading), [Deltia's Gaming](https://deltiasgaming.com/?p=304155)). Los **clanes** aportan la cita competitiva: las Clan Battles de Pet Simulator 99 duran alrededor de una semana y premian al clan ganador con una mascota Titanic o Huge limitada (variante rainbow para los tres mayores contribuyentes, gold para los diez primeros), con críticas por pay-to-win y macros ([Pet Simulator Wiki](https://pet-simulator.fandom.com/wiki/Clan_Battles_(Pet_Simulator_99))). Los **leaderboards** figuran en la lista oficial de palancas de D30 junto a PvP y torneos, y aparecen en el modo Infinite de Anime Vanguards o en el ranked de RIVALS, pero no se encontraron datos sobre sus recompensas ni su cadencia.

La viralidad orgánica de 2024–2026 funciona como un bucle clips → jugadores → más clips, y los investigadores distinguen tres «motores de clip», cada uno capaz de producir una emoción reconocible sin contexto.

| Motor de clip | Juego | Momento clipeable | Evidencia |
|---|---|---|---|
| Pérdida y drama | Steal a Brainrot | Reacción al perder un Brainrot raro robado; la revelación del ítem raro es «muy visual y emocionalmente legible» | Blog sin datos ([RoWatcher](https://rowatcher.com/news/from-brainrot-to-skibidi-how-roblox-became-tiktok-s-gaming-mirror)) |
| Juicio social y humor | Dress to Impress | Quedar fuera del podio; las reacciones de CaseOh se hicieron virales y luego se sumaron Kai Cenat y xQc; pico de más de 370,000 CCU | Prensa de 2024 ([The Mary Sue](https://www.themarysue.com/what-is-dress-to-impress-and-why-is-every-streamer-playing-it/)) |
| Suerte extrema | Sol's RNG | Tirada rarísima anunciada a todo el servidor con cutscene | Guía ([allthings.how](https://allthings.how/sols-rng-aura-tier-list-every-rarity-and-drop-rate-ranked/)) |

El papel de los creadores está bien documentado en lo cualitativo y nada en lo causal. Naavik atribuye el crecimiento de Grow a Garden, Steal a Brainrot y 99 Nights in the Forest en gran parte a influencers de YouTube y TikTok y al *clipping* fuera de plataforma ([Naavik](https://naavik.co/deep-dives/the-state-of-ugc-games-2026/)); GameAnalytics atribuye el arranque de Dead Rails a influencers y a las cuentas oficiales de Roblox, de cientos a más de 100,000 CCU ([GameAnalytics](https://gameanalytics.com/blog/dead-rails-and-the-hit-makers-formula)); Doors creció sobre las series de KreekCraft, Thinknoodles y Flamingo ([PCGamesN](https://www.pcgamesn.com/roblox/doors-horror-game)); y Roblox afirma que en julio y agosto de 2025 uno de cada cinco vídeos de juegos publicados en TikTok mencionaba Roblox ([Roblox Newsroom](https://about.roblox.com/newsroom/2025/12/roblox-replay-decoded-search-style)). La novedad de 2025 es el desarrollador-influencer: los responsables de Grow a Garden y Steal a Brainrot convirtieron sus eventos en espectáculo retransmitido. Ninguna fuente cuantifica el efecto de un creador sobre el CCU, y no se encontraron datos sobre creadores hispanohablantes o brasileños.

La plataforma ha internalizado el fenómeno. Brookhaven incluye una «Creator Cam» que oculta la interfaz para quienes graban vídeo, detalle que la propia Roblox destaca ([Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)). Roblox Moments, el feed de clips de hasta 30 segundos con entrada directa al juego, se anunció en septiembre de 2025 para mayores de 13 ([Roblox Newsroom](https://about.roblox.com/newsroom/2025/09/roblox-moments-user-generated-discovery)), quedó plenamente disponible en Estados Unidos en julio de 2026 y desde finales de septiembre de 2026 incorpora los vídeos de la página de detalles de cada juego ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/07/moments-new-homepage-unlocks-gaming-for-all), [RDC 2026](https://about.roblox.com/newsroom/2026/09/rdc-2026-the-world-needs-more-play)). Y Creator Rewards paga el 35 % de los primeros US$100 que gaste en 60 días un usuario nuevo o reactivado que llegue por el enlace del creador ([Creator Hub: Creator Rewards](https://create.roblox.com/docs/creator-rewards)), lo que convierte la siembra con creadores en una línea de ingresos. La relación con los creadores nativos es, sin embargo, tensa: KreekCraft abandonó el programa Video Stars en agosto de 2025 ([Gaming Amigos](https://www.gamingamigos.com/post/kreekcraft-leaves-roblox-video-stars-program)).

Un condicionante final afecta a todo el diseño social. Desde enero de 2026 chatear exige verificación de edad en todo el mundo y el chat se limita a franjas de edad similares ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/01/roblox-age-checks-required-to-chat)); al 31-ene-2026 solo el 45 % de los 144 M de DAU había completado la comprobación ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/02/moving-beyond-self-reported-age)), y el co-play y el descubrimiento por edad se lanzaron el 5-feb-2026 ([Outlook Respawn](https://respawn.outlookindia.com/gaming/gaming-news/roblox-builds-co-play-on-mandatory-age-verification)). La implicación, como inferencia: las mecánicas cooperativas no pueden asumir chat de texto libre y deben funcionar con comunicación no verbal —emotes, pings, intercambio con interfaz cerrada, objetivos compartidos automáticos—. No se encontró ninguna medición del impacto de estos cambios sobre el co-play o el engagement.

### 4. Economía y monetización: una escalera de 39 a 14,500 Robux sobre un reparto que deja al creador unos 21 centavos por dólar

#### 4(a) Estructura de monedas: soft currency inflacionaria para progresar, una moneda de trading para atesorar y monedas con fecha de caducidad para drenar

La hard currency de todo juego de Roblox es el Robux, y sus reglas las fija la plataforma. Entre 2025 y 2026 Roblox reescribió casi todas esas reglas, y conviene tenerlas a la vista antes de hablar de economías internas.

| Parámetro de plataforma | Valor al 17-nov-2026 | Fecha del cambio | Fuente / fiabilidad |
|---|---|---|---|
| Precio del Robux para el jugador (EE. UU.) | 400 R$ = US$4.99; 800 R$ = US$9.99 (una tabla de terceros da 1,000 R$ por US$9.99 en web; sin confirmación oficial) | Estable en 2026 | Guías ([Pro Game Guides](https://progameguides.com/roblox/roblox-price-guide-how-much-do-robux-cost), [GamsGo](https://www.gamsgo.com/blog/robux-prices)) |
| Reparto en passes y developer products | 70 % creador / 30 % Roblox | — | Oficial ([Creator Hub: Earn on Roblox](https://create.roblox.com/docs/production/earn-on-roblox)) |
| Tasa DevEx estándar | US$0.0038 por Robux (antes US$0.0035; +8.5 %); mínimo de cobro 30,000 Robux | 5-sep-2025 | Oficial ([BusinessWire](https://www.businesswire.com/news/home/20250905587466/en)) |
| Tasa DevEx «U.S. 18+» | US$0.0054 por Robux (+42 %) para gasto de adultos verificados de EE. UU. en juegos elegibles | 8-jun-2026 | Oficial ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/04/roblox-fuels-high-fidelity-games-over-18-players-increases-qualifying-devex-rate-42), [Creator Hub](https://create.roblox.com/docs/production/monetization/18-plus-devex-rate)) |
| Precio regional (Managed Pricing) | Activado por defecto en todos los passes; opt-in en developer products con precio mostrado por script dinámico; entre el 30 % y el 100 % del precio por defecto | 2025–2026 | Oficial ([Creator Hub: Regional pricing](https://create.roblox.com/docs/production/monetization/regional-pricing)) |
| Creator Rewards (sustituye a los Engagement-Based Payouts) | 5 Robux diarios por Active Spender con ≥10 min; 35 % de los primeros US$100 de usuarios nuevos o reactivados | 24-jul-2025 | Oficial ([Creator Hub: Creator Rewards](https://create.roblox.com/docs/creator-rewards)) |
| Roblox Plus (sustituye a Premium) | US$4.99/mes; descuentos in-game que absorbe Roblox; hasta 100 R$ por suscriptor con ≥60 min/mes en servidores privados de pago y hasta 750 R$ por suscriptor captado | 30-abr-2026 | Oficial y prensa ([Creator Hub: Roblox Plus](https://create.roblox.com/docs/en-us/production/monetization/roblox-plus.md), [Tubefilter](https://tubefilter.com/2026/04/13/roblox-plus-creator-payouts)) |
| Venta in-experience de ítems de avatar | El dueño del juego pasa del 10 % al 40 %; el creador del ítem, del 60 % al 30 % (lectura de la prensa; Roblox dice que el total repartido no cambia) | 14-jul-2026 | Oficial y prensa en conflicto de encuadre ([DevForum](https://devforum.roblox.com/t/building-stronger-protections-and-a-more-consistent-marketplace-unifying-2d-and-3d-avatar-item-publishing/4722717), [Tech-Insider](https://tech-insider.org/roblox-2d-creator-revenue-share-cut-2026/)) |

De esas cifras sale un cálculo de los investigadores que encuadra todo lo demás: el jugador paga unos US$0.0125 por Robux, el creador recibe el 70 % de los Robux y los cobra a US$0.0038, es decir ~US$0.00266 por Robux gastado, **aproximadamente el 21 % de lo que pagó el consumidor** (≈30 % con la tasa 18+). Un pass de 399 R$, que al jugador le cuesta ~US$4.98, rinde ~US$1.06 al creador. La tasa 18+ exige, según la prensa, que los personajes jugables sean avatares de plataforma durante todo el tiempo activo, lo que la cobertura interpreta como un incentivo a juegos orientados a adultos ([Tubefilter](https://www.tubefilter.com/2026/05/01/roblox-hikes-developer-earnings-by-42-but-only-if-they-make-games-aimed-at-adults/)); para un juego viral de audiencia infantil la tasa relevante sigue siendo la estándar. En la RDC 2026 Roblox anunció además «Roblox Wallet», con liquidación diaria en moneda real para creadores adultos de EE. UU. a finales de 2026 ([GamesBeat](https://gamesbeat.com/roblox-unveils-creator-wallets-and-physical-cards-rdc-2026/)).

Dentro de los juegos, los investigadores observan un patrón de tres capas en los juegos de progresión persistente (más una moneda de cuenta en los juegos de run), que presentan como síntesis y no como norma publicada por ningún estudio.

| Capa | Función | Ejemplos documentados | Fuente (guías y wikis) |
|---|---|---|---|
| Soft currency abundante | Progresión; se gasta en costes exponenciales | Sheckles (Grow a Garden), Coins por zona (Pet Simulator 99), Cash (Steal a Brainrot, Restaurant Tycoon 2), C$ (Fisch), miel (Bee Swarm Simulator) | [Bloxodes](https://bloxodes.com/wiki/grow-a-garden/currencies), [RoWatcher](https://rowatcher.com/news/pet-simulator-99-economy-explained-gems-enchants-and-the-true-cost-of-progress) |
| Moneda secundaria, de trading o premium (a veces comprable con Robux) | Unidad de cuenta entre jugadores; desplaza a la soft currency | Trade Tokens de Grow a Garden (solo sirven en el Farmers Market y solo se obtienen comerciando o con Robux); Diamonds de Pet Simulator 99 (moneda de la plaza de trading); Tickets de Bee Swarm Simulator | [Bloxodes](https://bloxodes.com/wiki/grow-a-garden/currencies), [RoWatcher](https://rowatcher.com/news/pet-simulator-99-economy-explained-gems-enchants-and-the-true-cost-of-progress), [Pro Game Guides](https://progameguides.com/roblox/all-bees-in-bee-swarm-simulator-and-how-to-get-them/) |
| Moneda de cuenta en juegos de run o ronda | Compra de clases y personajes persistentes en el lobby | Diamantes de 99 Nights in the Forest; Bonds de Dead Rails (se encuentran en las runs o se compran en el Lobby Bank); Player Points de Forsaken | [PC Gamer](https://www.pcgamer.com/roblox/99-nights-in-the-forest-classes), [Dead Rails Wiki](https://dead-rails-game.fandom.com/wiki/Classes), [ForsakenHub](https://www.forsakenhub.com/roblox-forsaken-guide) |
| Monedas temporales de evento o temporada | Sink con fecha de corte | Pass Points de Grow a Garden con tienda propia (Grow All por 1,000 Pass Points o 375 R$) | [RblxGuide](https://rblxguide.com/games/grow-a-garden/gears/grow-all-gear) |

El puente entre soft y hard currency es el **doble precio**: en Grow a Garden el Legendary Egg cuesta 3 M de Sheckles o 129 R$, y el Sprout Egg 50 M de Sheckles o 149 R$ ([Sportskeeda](https://www.sportskeeda.com/roblox-news/grow-garden-legendary-egg-guide), [Sportskeeda](https://www.sportskeeda.com/roblox-news/grow-garden-sprout-egg-how-get-pets)). Eso fija un tipo de cambio implícito que se degrada a medida que la moneda blanda se infla, razón por la cual —inferencia— los juegos acaban moviendo el contenido de pago hacia ítems que no se pueden obtener con moneda blanda: exclusivos, crates y pase.

Contra la hiperinflación, el arsenal documentado es concreto. El primer freno es estructural: los costes exponenciales y los rebirths que reinician la moneda (en Steal a Brainrot se pierden cash y Brainrots y se conservan multiplicadores, gear y slots). El segundo es fiscal: Grow a Garden desactivó por completo el intercambio de Sheckles por la inflación y, al reabrirlo en septiembre de 2025, aplicó una tasa del 10 % por operación descrita como «money sink»; una guía posterior indica que los Sheckles ya no se intercambian directamente ([Roonby](https://roonby.com/2025/09/03/shekel-trading-is-back-grow-a-garden-with-a-catch/), [TechWiser](https://techwiser.com/grow-a-garden-trade-sheckles/)). El tercero es sustituir la unidad de cuenta por una moneda controlada y darle sumideros propios: los Trade Tokens también pagan el refresco de la tienda de Año Nuevo (75 tokens o Robux) ([TechWiser](https://techwiser.com/grow-a-garden-new-years-shop-guide/)). El cuarto son los sinks de reroll y encantamiento, descritos para Pet Simulator 99 solo de forma cualitativa ([RoWatcher](https://rowatcher.com/news/pet-simulator-99-economy-explained-gems-enchants-and-the-true-cost-of-progress)). El quinto es la oferta fija: las mascotas de evento de Adopt Me! no regresan, y sus Bucks no son intercambiables ([Adopt Me Support](https://support.playadopt.me/support/solutions/articles/153000189821)).

Los *dupes* se tratan con cirugía y no con rollbacks globales. Ante el glitch de duplicación de mascotas de julio de 2025, Grow a Garden desactivó el gifting de mascotas en todos los servidores mientras reconstruía el backend e intentó retirar los duplicados de los inventarios ([Sportskeeda](https://www.sportskeeda.com/roblox-news/why-pet-gifting-disabled-grow-garden)); el precedente de BIG Games en Pet Simulator X fue rastrear y banear a los principales explotadores, revertir la mayoría de los diamantes duplicados y montar monitorización ([BIG Games](https://www.biggames.io/post/pet-simulator-x-hellish-update)). Todo valor intercambiable genera además un mercado gris de dinero real: se venden ítems de Grow a Garden pese a violar las normas de Roblox ([EGW News](https://egw.news/gaming/news/28056/grow-a-garden-becomes-a-global-sensationand-sparks-dPVJ5LEBw)), y un marketplace anuncia Brainrots desde US$0.01 hasta más de US$2,000 (fuente promocional) ([Eldorado](https://www.eldorado.gg/blog/roblox-en/sell-roblox-brainrot-pets-real-money/)). El precio regional añade un riesgo de arbitraje —comprar barato en un país y regalar o comerciar—, por lo que Roblox exige configurar la elegibilidad con la User Price Level API en juegos con trading o gifting ([Creator Hub: Regional pricing](https://create.roblox.com/docs/production/monetization/regional-pricing)). No se encontraron datos cuantitativos de inflación (evolución de precios en moneda blanda) ni un impuesto documentado en la plaza de trading de Pet Simulator 99.

#### 4(b) Conversión de F2P a pagador: pocos pagan (~1.25 % de los DAU al día) y el diseño los hace subir por una escalera de cinco peldaños

Los benchmarks fiables son escasos y no están desglosados por género. Roblox define la conversión como el porcentaje de DAU que paga y el ARPDAU como conversión por ARPPU ([Creator Hub: Monetization analytics](https://create.roblox.com/docs/en-us/production/analytics/monetization)). Newzoo sitúa la conversión diaria de la plataforma en ~1.25 % de los DAU con US$0.14 de bookings diarios por usuario en 2025 ([GameDev Reports / Newzoo](https://gamedevreports.substack.com/p/newzoo-roblox-as-a-platform-in-2025)); GameAnalytics reporta un ARPPU mediano de US$0.70, de US$2.33 en el top 10 % y de US$4.80 en el top 5 %, y que solo el 3.80 % de los jugadores gastó algo en el año, frente al 4.2 % de dos años antes ([GameDev Reports / GameAnalytics](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox)). A nivel de plataforma, el T3 de 2026 dejó ~30 M de pagadores mensuales (−16 %) con bookings medios por pagador al alza (+5 %; un resumen da US$18.69) ([Gaming.net](https://gaming.net/roblox-q3-revenue-rises-16-as-bookings-fall-12-to-1-7-billion), [WN Hub](https://wnhub.io/news/finance/item-52549)): menos pagadores que gastan más, es decir, más peso de las ballenas. El ARPDAU implícito de plataforma —US$12.29 por DAU en un trimestre de ~92 días, unos US$0.13 al día— es un cálculo de los investigadores coherente con Newzoo. **No se encontraron benchmarks públicos de conversión, ARPDAU o ARPPU por género**, ni datos de qué productos son los más vendidos en cada juego: eso solo lo ve el desarrollador en Creator Hub.

El alcance no predice el ingreso. Grow a Garden habría generado al menos US$148 M de beneficio en ocho meses según una estimación de un inversor recogida por Bloomberg ([Tubefilter](https://www.tubefilter.com/2026/03/09/kreekcraft-has-spent-over-100000-making-a-roblox-game-whats-the-roi-for-developers/)), mientras que Steal a Brainrot, con más CCU, «aún no era top earner» en junio de 2025 ([games.gg](https://games.gg/news/roblox-top-earning-games-in-june-2025/)). La profundidad de la economía pesa más que la audiencia (inferencia). Las herramientas con que se construye esa profundidad son las siguientes; **todos los precios proceden de guías, wikis y revendedores, corresponden al precio por defecto (el máximo antes del ajuste regional), cambian con cada actualización y en varios casos se contradicen entre fuentes.**

| Herramienta | Regla o definición oficial | Ejemplos con precios en Robux | Fuentes |
|---|---|---|---|
| Starter pack | «Oferta inicial de un ítem o bundle que el usuario nuevo ve en los primeros minutos» ([Monetization foundations](https://create.roblox.com/docs/production/game-design/monetization-foundations)) | Pet Simulator 99: Starter Pack 79 R$ (2 Exclusive Eggs, 2 boosts, diamantes, libro de encantamiento, hoverboard exclusivo) y Super Starter Pack 240 R$ (Dragon Egg, pociones, Magnet III, 2,000 Diamonds) | [U7Buy](https://www.u7buy.com/blog/pet-simulator-99-exclusive-shop-guide/), [Pro Game Guides](https://progameguides.com/roblox/is-the-super-starter-pack-worth-it-in-pet-simulator-99-roblox/) |
| Season pass / battle pass | ~1 mes, 10 tiers; las misiones «nunca requieren gastar hard currency» ([Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)) | Grow a Garden: pista premium 749 R$ y «saltar toda la temporada» 1,699 R$; Anime Vanguards: 799 R$; Bubble Gum Simulator Infinity: mascota secreta solo con el pase de pago | [Sportskeeda](https://www.sportskeeda.com/roblox-news/grow-garden-season-1-pass-all-tier-rewards-premium-price), [Sportskeeda](https://www.sportskeeda.com/roblox-news/anime-vanguards-neon-chrome-battle-pass-all-rewards-premium-price), [Deltia's Gaming](https://deltiasgaming.com/?p=212243) |
| Gamepass permanente de multiplicador / VIP | Compra única; 70 % al creador | Steal a Brainrot: 2x Money 299 R$ y VIP 375 R$ (otras guías: 119–139 y 499); Blox Fruits: 2x Money y 2x Mastery 450 R$ cada uno; Pet Simulator 99: VIP 400 R$, todos los passes ≈8,075 R$; Sol's RNG: VIP 299 R$; Brookhaven: VIP 399 R$ (guía) o 999 R$ (revendedor) | [Buffget](https://buffget.com/news/steal-a-brainrot-game-pass-prices-robux-2026), [Blox Fruits Wiki](https://blox-fruits.fandom.com/wiki/Shop), [U7Buy](https://www.u7buy.com/blog/pet-simulator-99-vip-pass/), [Deltia's Gaming](https://deltiasgaming.com/?p=222191) |
| Gamepass de calidad de vida | Ídem | Sol's RNG: Quick Roll 100 R$; Anime Vanguards: Extra Unit Storage 149 R$ (+slots), Display All Units 599 R$, Shiny Hunter 1,299 R$ (shiny del 1.5 % al 3 %); Blox Fruits: Fruit Notifier 2,700 R$; Brookhaven: Vehicle Speed Unlock 199 R$, Land Unlocked 500 R$ | [Guía Sol's RNG](https://parrot-spinach-nd46.squarespace.com/articles/sols-rng-codes-july-2025), [U7Buy](https://www.u7buy.com/anime-vanguards/anime-vanguards-gamepass), [Blox Fruits Wiki](https://blox-fruits.fandom.com/wiki/Shop) |
| Developer product: pay-to-skip | Recompra ilimitada | Grow a Garden: refresco instantáneo de tiendas con Robux; en Grow a Garden 2, 39 R$ la de semillas y 90 R$ la de huevos | [Gamezebo](https://www.gamezebo.com/walkthroughs/grow-a-garden-pet-eggs/), [Nerds Chalk](https://nerdschalk.com/grow-a-garden-2-shop-restock-times/) |
| Developer product: ruletas, huevos y crates (ítems aleatorios de pago) | Divulgación obligatoria de resultados y probabilidades; bloqueables por país y edad | Pet Simulator 99: Exclusive Eggs 400 / 1,200 / 3,200 R$ (x1 / x3 / x10), bundles de 240 a 14,500 R$; Steal a Brainrot: Brainrot God Lucky Block 599 R$, Secret Lucky Block 2,399 o 2,999 R$; Grow a Garden: Exotic Cosmetic Crate 199 / 575 / 1,699 R$ | [Gamer Tweak](https://gamertweak.com/how-to-get-exclusive-pets-in-pet-simulator-99), [U7Buy](https://www.u7buy.com/blog/pet-simulator-99-exclusive-shop-guide/), [Sportskeeda](https://www.sportskeeda.com/roblox-news/steal-brainrot-lucky-blocks-all-lucky-blocks-price-list), [Beebom](https://beebom.com/roblox-grow-a-garden-cosmetic-items-guide/) |
| Developer product: poder, gear y boosts de servidor | Recompra ilimitada | Steal a Brainrot: Laser Gun 999 R$, Ban Hammer 1,499 R$, suerte de servidor comprable (precio no localizado); Blox Fruits: frutas permanentes de 50 a 3,000 R$ según rareza | [Deltia's Gaming](https://deltiasgaming.com/roblox-steal-a-brainrot-all-gear-and-game-passes), [Pro Game Guides](https://progameguides.com/roblox/all-mythical-fruits-in-blox-fruits-roblox) |
| Suscripciones | In-experience: cinco tramos de precio en moneda local, y desde 2026 también pagables en Robux ([Subscriptions](https://create.roblox.com/docs/en-us/production/monetization/subscriptions.md), [DevForum](https://devforum.roblox.com/t/let-your-players-pay-for-subscriptions-within-experiences-in-robux/4552995)) | Dress to Impress: VIP de 30 días por 299 R$ o permanente por 799 R$ (producto de 30 días, no necesariamente suscripción nativa) | [Sportskeeda](https://www.sportskeeda.com/roblox-news/dress-impress-gamepasses-all-passes-price-details) |
| Servidores privados | El creador fija el precio; gratis para suscriptores de Roblox Plus | Steal a Brainrot: 79 R$, con eventos Admin Abuse también activos | [Deltia's Gaming](https://deltiasgaming.com/?p=303300) |
| Anuncios con recompensa | Requiere ≥100 K DAU medios en 28 días y madurez Minimal o Mild; prohibidos para menores de 13 | Sin ejemplos con cifras | [DevForum](https://devforum.roblox.com/t/more-creators-can-now-use-rewarded-video-ads/3838678), [The Star / Reuters](https://www.thestar.com.my/tech/tech-news/2026/03/21/roblox-to-overhaul-ad-policies-introduce-revenue-sharing-in-2027) |

Sobre los gamepasses de calidad de vida que menciona el encargo (auto-farm, teleport, +slots), la evidencia es parcial: hay precio documentado para slots de almacenamiento (149 R$ en Anime Vanguards) y para acelerar la tirada (100 R$ en Sol's RNG), pero no se obtuvieron precios verificados de los passes de Pet Simulator 99 tipo Auto Farm, Lucky o +15 Pets, ni de passes de teletransporte en ningún título; el Auto Hatch de Pet Simulator 99 se desbloquea por rebirth, no por pago, según la guía citada en el pilar 2. Tampoco hay ejemplos con precio de suscripciones nativas en los juegos top. Un blog sostiene que en juegos con buena retención los developer products tienden a generar más ingresos totales que los passes porque los jugadores recurrentes los recompran ([RoWatcher](https://rowatcher.com/news/developer-products-vs-game-passes-you-re-using-both-wrong)); no hay cifra pública que lo verifique.

Con esos precios, los investigadores reconstruyen una escalera de conversión típica de cinco peldaños: un primer pago de 39–240 R$ (saltarse un restock, Quick Roll, starter pack); un multiplicador permanente de 299–450 R$ (2x Money, VIP); un pase de temporada de 749–799 R$ que se renueva cada pocas semanas; bundles y huevos x10 de 1,699–3,200 R$; y un alto ticket de 4,999–14,500 R$. El producto de mayor frecuencia es el pay-to-skip sobre temporizadores cortos: precio bajo, recompra ilimitada y un disparador de escasez aleatoria, porque un ítem deseado con 0.33 % de probabilidad de aparecer en stock convierte cada restock en una tirada de gacha encubierta (inferencia). Esa estructura alimenta también lo que la plataforma paga y mide: compras pequeñas y repetidas generan muchos «días de gasto», y sesiones de más de 10 minutos de pagadores activan el Daily Engagement Reward.

#### 4(c) Psicología de precios: todo termina en 9, el x3 existe para vender el x10 y el FOMO opera en minutos, días y semanas

Los precios observados terminan de forma sistemática en 9 —39, 79, 99, 129, 149, 199, 299, 399, 599, 749, 799, 999, 1,299, 1,499, 1,699, 2,299, 4,999, 7,999, 9,999— y varios coinciden con los paquetes de compra de Robux. La tabla traduce la escalera a dólares al precio de lista de EE. UU. (US$4.99 por 400 R$); la conversión es un cálculo de los investigadores y no refleja el precio regional.

| Precio en Robux | ≈ US$ (lista EE. UU.) | Ejemplo documentado | Función psicológica (lectura de los investigadores) |
|---|---|---|---|
| 39 | 0.49 | Restock de semillas en Grow a Garden 2 | Micropago impulsivo, recompra ilimitada |
| 79–100 | 0.99–1.25 | Starter Pack de Pet Simulator 99 (79); servidor privado de Steal a Brainrot (79); Quick Roll de Sol's RNG (100) | Primera conversión de bajo riesgo |
| 129–240 | 1.61–2.99 | Huevos de Grow a Garden (129, 149); crate x1 (199); Super Starter Pack (240) | Compra «de capricho» con doble precio en moneda blanda como ancla |
| 299–450 | 3.73–5.61 | 2x Money de Steal a Brainrot (299); VIP (375–400); passes de Blox Fruits (450) | Un paquete de 400 R$ lo cubre o casi; el de 450 obliga al paquete siguiente |
| 599–799 | 7.47–9.97 | Lucky Block (599); pase de temporada (749–799); bundles de Fisch (799) | Un paquete de 800 R$ lo cubre justo |
| 999–1,699 | 12.46–21.19 | Laser Gun (999); Shiny Hunter (1,299); Ban Hammer (1,499); crates x10 y skip de temporada (1,699) | Ancla superior que abarata el tramo anterior |
| 2,399–3,200 | 29.93–39.92 | Secret Lucky Block (2,399–2,999); Fruit Notifier (2,700); 10 Exclusive Eggs (3,200) | Compromiso de jugador invertido |
| 4,999–14,500 | 62.36–180.89 | Admin Commands de Steal a Brainrot (7,999, lectura de catálogo del 10-nov-2026); Moonlight Bundle de Anime Vanguards (9,999, listado de eBay sin verificar); bundle de 170 huevos de Pet Simulator 99 (14,500) | Bien de estatus para ballenas |

Las fuentes de los ejemplos son las citadas en la sección anterior, más [Buffget](https://buffget.com/news/steal-a-brainrot-game-pass-prices-robux-2026) y [eBay](https://www.ebay.com/itm/388236998085) para el alto ticket. La observación de que poner un pass a 399 o 799 hace que un único paquete de Robux lo cubra, mientras que 449–499 obliga a comprar el paquete siguiente y deja un «cambio» que incentiva otra compra pequeña, es una inferencia de los investigadores, no una práctica declarada por ningún estudio.

El anclaje se construye con relaciones más que con cifras absolutas, y hay cuatro patrones documentados. El primero es la tríada x1/x3/x10: en Pet Simulator 99 tres huevos cuestan 1,200 R$, sin descuento frente a 400 × 3, y diez cuestan 3,200 R$ «en lugar de 4,000» (−20 %), de modo que el x3 actúa como señuelo que empuja al x10 ([Gamer Tweak](https://gamertweak.com/how-to-get-exclusive-pets-in-pet-simulator-99)); en Grow a Garden los crates de 199 / 575 / 1,699 R$ dan descuentos de ~3.7 % y ~14.6 % ([Beebom](https://beebom.com/roblox-grow-a-garden-cosmetic-items-guide/)). Los descuentos por volumen son modestos; el incentivo real del pack grande son los extras: el bundle de 14,500 R$ añade un Huge garantizado y eleva la probabilidad de Titanic o mejor a ~31 %, frente a ~8 % de Huge o mejor en el de 240 R$ ([U7Buy](https://www.u7buy.com/blog/pet-simulator-99-exclusive-shop-guide/)). El segundo es el ancla de temporada: junto al premium de 749 R$, «saltar toda la temporada» a 1,699 R$ (2.27×) hace parecer razonable el primero. El tercero es alquiler frente a compra: el VIP de Dress to Impress a 299 R$ por 30 días hace que el permanente de 799 R$ equivalga a 2.7 meses. El cuarto es el bien de estatus que se encarece: las guías listan el pass de comandos de admin de Steal a Brainrot a 2,299, a 4,999 y a 7,999 R$, probablemente en fechas distintas y con tendencia al alza ([TechWiser](https://techwiser.com/all-items-in-steal-a-brainrot-roblox/), [Buffget](https://buffget.com/news/steal-a-brainrot-game-pass-prices-robux-2026)); su comprador se convierte en espectáculo dentro del servidor y en contenido de vídeo, y la subida sugiere una optimización al alza (inferencia).

El FOMO se fabrica en tres escalas de tiempo, todas con ejemplos fechados.

| Escala | Mecanismo | Ejemplo | Fuente |
|---|---|---|---|
| Minutos | Stock aleatorio y restock | Grow All aparece en la Season Store con 0.33 % de probabilidad de stock (375 R$ o 1,000 Pass Points); tiendas que rotan cada 5 y 30 minutos | [RblxGuide](https://rblxguide.com/games/grow-a-garden/gears/grow-all-gear) |
| Horas–días | Ventanas ultracortas y eventos en vivo | La mascota Panda de Grow a Garden estuvo disponible solo 75 minutos tras la Pets Update (3-may-2025); suerte de servidor ×2–×10 durante los Admin Abuse | [Sportskeeda](https://www.sportskeeda.com/roblox-news/grow-garden-all-pets), [Beebom](https://beebom.com/next-steal-a-brainrot-admin-abuse-start-date-and-time) |
| Semanas | Exclusivos rotativos y pase | El huevo exclusivo de Pet Simulator 99 rota cada pocas actualizaciones y sus mascotas solo se venden un tiempo limitado; mascota secreta exclusiva del Season Pass en Bubble Gum Simulator Infinity; premios limitados de Clan Battles | [U7Buy](https://www.u7buy.com/blog/pet-simulator-99-exclusive-shop-guide/), [Deltia's Gaming](https://deltiasgaming.com/?p=212243) |
| «Primera edición» | Precio de lanzamiento y retorno más caro | Bear Bee Pack de Bee Swarm Simulator: 650 R$ el primer mes, 1,000 R$ al volver, 800 R$ actualmente | [BSS Wiki](https://bee-swarm-simulator.fandom.com/wiki/Bear_Bee) |

Sobre los ítems limitados que menciona el encargo hay que separar lo documentado de lo que no lo está. Están documentadas las mascotas exclusivas por tiempo (tabla anterior) y los exclusivos ligados a merchandising: los peluches de Pet Simulator X incluían un código canjeable por un Huge Cat exclusivo ([Pro Game Guides](https://progameguides.com/roblox/new-pet-simulator-x-plushies-with-in-game-codes-coming-soon-march-2022/)), y desde mayo de 2025 Roblox permite emparejar una compra física vía Shopify con un ítem digital exclusivo si el juego tiene al menos 100 K DAU medios y 1 M de Robux ganados en tres meses ([DevForum](https://devforum.roblox.com/t/expanding-how-commerce-can-help-you-earn-and-grow-your-communities/3651181)). **No se encontró ninguna cifra sobre ventas de UGC Limiteds dentro de experiencias ni sobre su uso ligado a eventos**; lo único firme es el cambio de reparto del 14-jul-2026, que mejora la parte del dueño del juego en la venta in-experience de ítems de avatar. Tampoco hay evidencia documental, en estas notas, de etiquetas «Best Value», cuentas atrás, bonus de primera compra o contadores de stock en juegos concretos: son prácticas conocidas que el informe no puede respaldar con fuente. El gifting sí aparece como producto: se pueden regalar gamepasses o VIP en Sol's RNG y Dress to Impress ([Destructoid](https://destructoid.com/how-to-gift-vip-dress-to-impress)).

Tres fuerzas limitan esta psicología de precios a finales de 2026. La primera es técnica: con el precio regional activado por defecto en los passes, Roblox recalcula los importes fuera de EE. UU. y debilita los precios terminados en 9, y su herramienta Price Optimization (mediana de +4 % de ganancias; más de +15 % en Slap Battles) requiere en la mayoría de los casos al menos 60,000 transacciones en 30 días ([DevForum](https://devforum.roblox.com/t/managed-pricing-one-system-for-better-pricing-and-earnings-growth/4684738), [Creator Hub: Price optimization](https://create.roblox.com/docs/en-us/production/monetization/price-optimization)). La segunda es parental: los padres pueden fijar límites de gasto mensuales y reciben avisos, por defecto cada diez transacciones tras superar US$500 ([Roblox Help](https://en.help.roblox.com/hc/articles/4409125091348), [Roblox Newsroom](https://about.roblox.com/newsroom/2025/11/how-to-set-up-spending-limits-and-notifications-on-roblox)), lo que pone un techo práctico al alto ticket entre menores. La tercera es regulatoria: además de las restricciones a ítems aleatorios de pago descritas en el pilar 3, una fuente secundaria única informa de un borrador de reglamento de la UE publicado el 12-nov-2026 que prohibiría las recompensas aleatorias de pago para menores ([FocusGN](https://focusgn.com/eu-digital-fairness-act-loot-boxes-gambling)); no se pudo verificar en fuente primaria. Si se confirmara, afectaría de lleno a huevos exclusivos, lucky blocks y gachas de unidades, que son el núcleo monetario de Pet Simulator 99, Steal a Brainrot y los tower defense de anime.

### 5. Algoritmo y descubrimiento: ocho señales por usuario en ventanas de 1, 7 y 28 días, y un creativo que no puede prometer lo que el juego no da

#### 5(a) Icono, miniaturas, título y descripción: la miniatura 16:9 es obligatoria desde octubre de 2026 y se optimiza con un bandit, no con trucos

Home es, según Roblox, donde la mayoría de los usuarios encuentra juegos ([Creator Hub: Acquisition](https://create.roblox.com/docs/production/analytics/acquisition)), y el creativo que aparece en el sort «Recommended for You» (RFY) es la miniatura 16:9, no el icono. Desde octubre de 2026 —el 19 según la datación de fuentes secundarias— **un juego que solo tenga la miniatura por defecto o autogenerada no recibe impresiones de recomendación en Home**; las imágenes generadas con IA cuentan como personalizadas ([DevForum](https://devforum.roblox.com/t/homepage-recommendation-eligibility-now-requires-a-custom-thumbnail/4945086), [Creator Hub: Discovery](https://create.roblox.com/docs/discovery)). El icono cuadrado importa sobre todo en Charts, búsqueda, Continue y actividad de amigos (lectura de los investigadores), así que ambos se optimizan por separado.

| Elemento | Especificación y reglas oficiales | Fuente |
|---|---|---|
| Icono | Cuadrado, plantilla de 512×512; puede reducirse a ~150×150, así que debe previsualizarse en pequeño; único y representativo; los «gráficos ambiguos» confunden; color según el tono (saturado para fantasía, apagado para lo sombrío, contraste fuerte para horror); un icono por idioma | [Creator Hub: Experience icons](https://create.roblox.com/docs/production/publishing/experience-icons) |
| Miniatura | 16:9, idealmente 1920×1080; hasta 10 imágenes o vídeos; evitar texto o elementos esenciales en la franja inferior, que tapa el contador de jugadores; imagen única y fiel a lo que el jugador encontrará | [Creator Hub: Thumbnails](https://create.roblox.com/docs/production/publishing/thumbnails) |
| Vídeo | Gratis, cupo de 3 subidas al mes; aparece primero en la página de detalles y puede aparecer en Home; debe mostrar gameplay real «no una versión exagerada». Prohibido: gameplay tergiversado, visuales realzados artificialmente, voz en off o letras, texto promocional o afirmaciones subjetivas («50 % off», «Free UGC!») | [Creator Hub: Thumbnails](https://create.roblox.com/docs/production/publishing/thumbnails) |
| Personalización de miniaturas | De 2 a 5 miniaturas activas; cada una se muestra primero a un conjunto aleatorio y luego la ganadora *por grupo de usuarios* recibe más impresiones; informe con impresiones, qualified plays, qPTR y «Winning Segment» | [Creator Hub: Thumbnails](https://create.roblox.com/docs/production/publishing/thumbnails) |

La herramienta nativa de experimentación es esa personalización, que según Roblox usa un *multi-armed bandit* «en lugar de A/B testing» para encontrar varias miniaturas ganadoras en horas ([DevForum](https://devforum.roblox.com/t/live-now-personalize-your-thumbnails-to-attract-more-users/3257233)). Los resultados oficiales son una mejora media de +8.5 % en qPTR durante las pruebas, con casos de +50 % ([Creator Hub: Thumbnails](https://create.roblox.com/docs/production/publishing/thumbnails)), y, según un post de staff de febrero de 2025, más de 8,000 experiencias adoptantes con una mejora relativa media de +12 % y casos de +56 % ([DevForum](https://devforum.roblox.com/t/5-tips-from-roblox-staff-to-get-the-most-out-of-thumbnail-personalization/3471689)). Las pautas de uso son tres: no reiniciar pruebas en menos de siete días porque impide al modelo identificar la mejor; mantener activo un conjunto diverso en vez de elegir una única ganadora; y probar miniaturas nuevas con cada actualización mayor y dejarlas sin tocar hasta la siguiente, porque «una miniatura fresca junto con gameplay nuevo impulsa significativamente la descubribilidad». A ello se suman, desde marzo de 2026, las previsualizaciones de vídeo en los tiles de Home, cuya prueba en el sort Standout Games arrojó +47 % de «quality plays» y +1.09 % de playtime antes de extenderse a RFY ([DevForum](https://devforum.roblox.com/t/how-we-are-improving-home-this-year/4502571)). No existe test nativo de iconos a noviembre de 2026.

Para el CTR en sí no hay benchmark oficial. Las cifras en circulación —qPTR típico de 2–2.4 % y ~3.6 % en los mejores juegos— son de un blog y no pudieron contrastarse ([qptr.io](https://qptr.io/blog/roblox-thumbnail-ctr-tips)); el panel de Roblox muestra el Play Through Rate propio frente al rango P50–P90 de juegos similares, que es la referencia utilizable. Cualquier serie histórica de PTR tiene además tres rupturas de definición: el paso de nivel de usuario a nivel de sesión en diciembre de 2025, la descomposición de señales de junio de 2026 y el cambio de medición del 12-oct-2026, tras el cual Roblox avisó de que subirían los recuentos de impresiones y plays y bajaría ligeramente el PTR sin que cambiara el ranking ([DevForum](https://devforum.roblox.com/t/improved-discovery-measurement-in-creator-analytics/4930122)). Las buenas prácticas de composición —un único punto focal, colores saturados con separación sujeto-fondo, un primer plano emocional como variante a probar, mostrar la reacción y no el desenlace, juzgar al tamaño real del tile— son de terceros ([qptr.io](https://qptr.io/blog/roblox-thumbnail-ctr-tips)), y las costumbres del top de charts (cambiar el icono en cada actualización, insignias «UPDATE», mostrar el ítem más raro) no tienen respaldo oficial ni datos controlados en las fuentes consultadas.

Lo que sí es oficial es el límite del clickbait. Roblox pide imágenes y nombres originales, evitar títulos repetitivos e imágenes ya publicadas, y advierte que los metadatos «muy desalineados» con el contenido son menos visibles en búsqueda, que los juegos indistinguibles de otros dejan de priorizarse y que liderar con regalos (su ejemplo: «Robux! Play now!») «no se prioriza» ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery)). La lógica del algoritmo lo refuerza: como el PTR es señal de primer nivel y el rebote antes de 60 segundos es señal negativa de primer nivel, un creativo que sube el clic prometiendo algo que el juego no entrega mejora una señal mientras empeora otra (inferencia).

En título y descripción, la búsqueda es hoy semántica en todos los idiomas con soporte oficial, de modo que consultas naturales como «food games» funcionan y las palabras clave irrelevantes son un factor negativo explícito ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery)). La convención dominante es de práctica, no de norma: un desarrollador que revisó los 500 juegos con más ingresos observó que el emoji entre corchetes antes del título «está en todas partes» y que las descripciones suelen abrir con «Welcome to <GAME>!» ([kye en X](https://x.com/kyexyz_/status/1975823088232042921)); no hay declaración oficial sobre corchetes o emojis, y las opiniones de foro se contradicen. Los investigadores leen esas etiquetas como copy de CTR a nivel de tile y no como palabras clave, con el límite de no prometer recompensas monetarias. El canal oficial para comunicar novedades son los anuncios de actualización (60 caracteres, como máximo uno cada tres días) ([Creator Hub: Experience events](https://create.roblox.com/docs/production/promotion/experience-events)). La traducción automática cubre nombre, descripción y textos in-game en 18 idiomas, entre ellos español y portugués ([Creator Hub: Automatic translation](https://create.roblox.com/docs/production/localization/automatic-translations)). El género y subgénero, elegibles por el creador y modificables una vez cada tres meses, determinan la colocación en los sorts por género de Charts y el grupo de benchmark de respaldo; no son factor explícito de RFY, pero Roblox advierte que las expectativas desalineadas causan rebotes ([Creator Hub: Experience genres](https://create.roblox.com/docs/production/publishing/experience-genres), [Discovery FAQ](https://create.roblox.com/docs/discovery-faq)).

El mayor multiplicador de alcance de los metadatos en 2026 no son las palabras clave sino la elegibilidad por edad (lectura de los investigadores). Con las cuentas por edad —anunciadas en abril de 2026 y disponibles en todo el mundo desde el 16-jun-2026 según Business Wire—, Roblox Kids (5–8 años) solo accede a experiencias Minimal o Mild que superen una selección adicional y Roblox Select (9–15) a experiencias hasta Moderate que pasen un proceso de selección en tres pasos ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/04/introducing-roblox-kids-and-select-accounts), [Business Wire](https://www.businesswire.com/news/home/20260616748440/en/)). La elegibilidad incluye un umbral de «Highly Engaged Players»: 500 en el lanzamiento, reducido a 250, con un listón de mantenimiento de 25 y una rebaja a 100 anunciada para noviembre de 2026 cuya entrada en vigor no se pudo confirmar; existe una revisión exprés opcional por 100,000 Robux reembolsables ([DevForum](https://devforum.roblox.com/t/highly-engaged-player-threshold-drops-to-250/4820164), [DevForum: RDC26](https://devforum.roblox.com/t/rdc26-what-we-announced/4865880)). Un juego que no supere ese filtro no aparece para los menores de 16 verificados en ninguna superficie.

#### 5(b) Qué prioriza el algoritmo: días de juego, minutos con tope y rebote temprano, medidos solo sobre los usuarios que el propio Home adquiere

Roblox describe RFY como un sistema en dos etapas. En *retrieval* se selecciona un subconjunto de juegos que cada usuario podría disfrutar a partir de señales de engagement, retención y monetización; en *ranking* se ordenan de forma personalizada. El sistema parte de todos los juegos elegibles, los reduce a unos 100 por usuario y «explora continuamente juegos nuevos con usuarios nuevos»; si la cohorte de exploración responde bien, la distribución se expande a cohortes similares ([Creator Hub: Discovery](https://create.roblox.com/docs/discovery), [Discovery FAQ](https://create.roblox.com/docs/discovery-faq)). El objetivo declarado es la retención y la monetización a largo plazo, y «ninguna señal determina por sí sola el ranking». Las ocho señales vigentes son estas.

| Nivel | Señal | Definición oficial | Ventanas y topes |
|---|---|---|---|
| Más importante | Play through rate (PTR) | Tasa a la que los usuarios juegan tras ver el juego en RFY | Primera impresión / sesión |
| Más importante | First play bounce rate (negativa) | Tasa a la que los usuarios abandonan tras una sesión corta | Dos franjas: <60 s y 61–180 s |
| Más importante | Play days per user | Media de días únicos en que los usuarios juegan | Día 1, Días 2–7, Días 8–28 |
| Más importante | Playtime per user | Media de tiempo que pasan en el juego | Mismas ventanas; **tope de 60 minutos por usuario, juego y día** |
| Importante | Intentional co-play days per user | Días únicos en que vuelven a jugar con amigos (join, invitación, servidor privado) | Mismas ventanas |
| Importante | Qualified play sessions per user | Sesiones significativas, sin clics accidentales ni rebotes rápidos | Mismas ventanas |
| Importante | Spend days per user | Días únicos en que gastan Robux | Mismas ventanas |
| Importante | Robux spent per user | Media de Robux gastados | Mismas ventanas |

Fuente de la tabla: [Creator Hub: Discovery](https://create.roblox.com/docs/discovery). Esto responde con precisión a la premisa del encargo. El «session time» entra como playtime por usuario, pero con tope diario y acompañado de la calidad de sesión. La «retención» no entra como los porcentajes clásicos D1/D7/D30 de cohorte sino como días de juego en tres ventanas, que el algoritmo considera «por separado y en conjunto». La «monetización por usuario» entra en el segundo nivel, como frecuencia (días de gasto) y profundidad (Robux por usuario); un juego fuerte solo en retención o solo en monetización sigue recibiendo impresiones, pero los fuertes en ambas «pueden obtener una distribución más amplia» ([Discovery FAQ](https://create.roblox.com/docs/discovery-faq)). La fórmula que aún circula —«qPTR + D1 + D7 + playtime a 7 días + conversión a pagador»— describe el sistema de diciembre de 2024 a 2025 y está superada.

Cinco reglas de lectura cambian cómo se diseña para estas señales, todas de la documentación oficial ([Discovery](https://create.roblox.com/docs/discovery), [Discovery FAQ](https://create.roblox.com/docs/discovery-faq)). Las señales son promedios por usuario, no totales, de modo que los juegos grandes no parten con ventaja. Solo cuentan los usuarios adquiridos orgánicamente por RFY: el comportamiento de quienes llegan por anuncios, curación, amigos, búsqueda o redes sociales queda fuera de la etapa de ranking, aunque luego vuelvan por Home. Los benchmarks del panel no afectan al algoritmo. El género no es un factor explícito. Y no hay espera de 28 días para un juego nuevo: las señales tempranas se aplican de inmediato (PTR y rebote, luego Día 1, luego Días 2–7 y 8–28), el retrieval requiere solo «un mínimo muy bajo de plays de cualquier fuente» —cifra no publicada— y un mal arranque no es una penalización permanente porque las señales usan una ventana móvil. Las impresiones dependen además de factores ajenos al juego: cambios del algoritmo, estacionalidad del tráfico (pico semanal en sábado) y rendimiento de los competidores, hasta el punto de que «una ganancia del 50 % en una señal puede dar un crecimiento mínimo de impresiones si los competidores mejoran más».

La cronología explica por qué 2026 es distinto. Las entradas de DevForum y Newsroom se conocen por extracto.

| Fecha | Cambio | Fuente |
|---|---|---|
| Mar-2024 | Roblox explica que antes solo se recomendaban en Home las ~1,000 experiencias más populares y que ahora «casi cualquier experiencia» puede serlo | [DevForum](https://devforum.roblox.com/t/discovery-on-roblox-past-present-and-future-vision/2859111) |
| Dic-2024 | RFY ordena por engagement (qPTR, retención D1/D7, playtime) y monetización (conversión a pagador, Robux gastados): descripción hoy superada | [DevForum](https://devforum.roblox.com/t/testing-improvements-to-the-%E2%80%9Crecommended-for-you%E2%80%9D-algorithms/3275201) |
| 2025 (actualizado 11-dic-2025) | Pestaña Home Recommendations en Analytics; qPTR pasa de nivel de usuario a nivel de sesión | [DevForum](https://devforum.roblox.com/t/boost-your-discovery-with-the-improved-recommended-for-you-algorithm-and-analytics-for-creators/3587441) |
| Mar-2026 | Deep play-through rate, señal de sesiones cualificadas a 7 días, feedback de «no me interesa», previsualizaciones de vídeo, anuncios etiquetados dentro de RFY | [DevForum](https://devforum.roblox.com/t/how-we-are-improving-home-this-year/4502571) |
| Jun-2026 (despliegue ~15-jun, pruebas desde ~abril) | **Ventana de 7 a 28 días**; el qPTR único se descompone en las señales de la tabla anterior | [DevForum](https://devforum.roblox.com/t/recommended-for-you-algorithm-improvements-that-better-value-long-term-retention/4684575), [Roblox Newsroom](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox) |
| Sep-2026 (RDC 2026) | Ranking «cada vez más consciente de la edad» (los jóvenes prefieren juegos más cortos, los mayores más profundos); prueba de optimizar por «crecimiento directo», es decir, por usuarios nuevos traídos a la plataforma | [Roblox Newsroom](https://about.roblox.com/newsroom/2026/09/rdc-2026-the-world-needs-more-play), [GamesBeat](https://gamesbeat.com/roblox-hits-20-and-opens-rdc-2026-to-invite-the-world-to-play-and-make-games-dave-baszucki-keynote/) |
| 12-oct-2026 | Nueva canalización de medición de impresiones, clics y plays (solo medición) | [DevForum](https://devforum.roblox.com/t/improved-discovery-measurement-in-creator-analytics/4930122) |
| Oct-2026 | Miniatura personalizada obligatoria para recibir impresiones de RFY | [DevForum](https://devforum.roblox.com/t/homepage-recommendation-eligibility-now-requires-a-custom-thumbnail/4945086) |
| Finales de 2026 (previsto) | Passes y developer products visibles en Home antes de entrar al juego; pruebas gratuitas de passes; juego en navegador sin instalación («Roblox Everywhere») | [DevForum: Creator Roadmap](https://devforum.roblox.com/t/creator-roadmap-2026-fall-update/4880208), [DevForum: RDC26](https://devforum.roblox.com/t/rdc26-what-we-announced/4865880) |

El motivo declarado del cambio de junio es que sobrevalorar el engagement a corto plazo favorecía juegos de clic rápido que desplazaban a los que los jugadores valoran a largo plazo; Roblox asumió el coste: según los extractos, su carta a accionistas afirma que el sistema da deliberadamente más impresiones a los juegos muy retentivos a expensas de la monetización a corto plazo ([Roblox Newsroom](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox), [AllThings.How](https://allthings.how/robloxs-new-recommended-for-you-algorithm-rewards-games-that-keep-you-hooked/)). El umbral de «5+ minutos» para una sesión cualificada procede de un extracto de foro y no figura en la documentación; los pesos de las señales, la fórmula del Deep PTR y el mínimo de plays para el retrieval no están publicados.

Fuera de RFY, las superficies relevantes son Charts —con «Top Playing Now» ordenado por CCU en tiempo real ([DevForum](https://devforum.roblox.com/t/introducing-top-playing-now-on-charts/3529809)), sorts por género y «Trending Events», que exige al menos 1,000 RSVPs ([Creator Hub: Experience events](https://create.roblox.com/docs/production/promotion/experience-events))—, el sort curado Standout Games para juegos con mecánicas novedosas, la búsqueda y Moments. No se hallaron definiciones oficiales vigentes de Top Trending, Up-and-Coming o Top Earning.

El tráfico pagado y externo no «entrena» al algoritmo, y esto corrige un folclore extendido. La documentación dice que RFY está separado de los anuncios, que los usuarios adquiridos por anuncios quedan excluidos de las señales incluso si luego vuelven por Home, y que tras una ráfaga publicitaria las impresiones de RFY pueden bajar porque esos usuarios «ya se consideran adquiridos», sin que sea una penalización ([Discovery FAQ](https://create.roblox.com/docs/discovery-faq)). El mecanismo por el que la viralidad externa acaba ayudando es, por tanto, indirecto y lo infieren los investigadores a partir de las reglas: los jugadores externos superan el mínimo de retrieval, elevan el CCU y los ingresos que alimentan Charts, amplían el grafo de amigos —que genera co-play intencional entre usuarios sí adquiridos por RFY— y aumentan las búsquedas por nombre; después la fase de exploración prueba el juego con cohortes orgánicas cuyo comportamiento sí cuenta. Los anuncios sirven para llenar servidores en el lanzamiento, alcanzar el umbral de Kids/Select (Ads Manager tiene un objetivo «Engagement» específico), reactivar jugadores inactivos y reunir datos de FTUE ([Creator Hub: Ads Manager](https://create.roblox.com/docs/production/promotion/ads-manager)). No hay benchmark fiable de coste por play: las cifras de terceros van de ~US$0.006 a US$0.45 y no pueden reconciliarse ([bloxg](https://bloxg.com/statistics/roblox-advertising-benchmarks), [clipclip.io](https://clipclip.io/guides/roblox-ads-cost)).

La forma en que el diseño alimenta cada señal queda así. La columna de guía oficial resume la documentación; la de palancas de diseño es síntesis de los investigadores con los ejemplos de los pilares anteriores.

| Señal | Guía oficial de Roblox | Palancas de diseño que la alimentan (síntesis) |
|---|---|---|
| PTR | Miniaturas y metadatos fieles; varias miniaturas activas; vídeo de gameplay real | Creativo que muestra el momento central del loop; refresco con cada actualización mayor |
| Rebote <60 s y 61–180 s | Diversión en los primeros cinco minutos; evitar tutoriales largos; probar en varios dispositivos y vigilar crashes y frame rate | Spawn orientado a la primera acción, moneda inicial igual al primer precio, rendimiento en móvil de gama baja |
| Play days (D1, D2–7, D8–28) | D7: progresión con metas de corto y largo plazo; D30: actualizaciones menores cada 2–4 semanas y mayores cada 2–3 meses, más mecánicas sociales | Algo que madura entre sesiones (crecimiento offline, stock rotativo), dailies de una sesión, pase mensual, rebirths que no caben en una sesión |
| Playtime (tope 60 min/día) | Contenido suficiente desde la primera sesión; quitar barreras a la interacción social | Varias pasadas del loop con upgrades visibles dentro de ~10 minutos; no depender de maratones ni de AFK |
| Co-play days intencionales | Diseñar para el juego en grupo; no aislar a los nuevos en instancias individuales | Equipos, trading, bonus cooperativos, valor de servidor privado; mecánicas que funcionen sin chat |
| Sesiones cualificadas | Sesiones «significativas» | Un primer loop completo y recompensado antes de que el jugador pueda irse |
| Spend days | Monetización como frecuencia | Productos repetibles de bajo precio (39–99 R$) en lugar de una única compra grande |
| Robux por usuario | Monetización como profundidad; mejorarla «una vez que la retención es fuerte» | Escalera de precios hasta bienes de estatus; pase de temporada |

Las guías oficiales de esa tabla proceden de [Retention](https://create.roblox.com/docs/production/analytics/retention), [Engagement](https://create.roblox.com/docs/production/analytics/engagement), [Discovery](https://create.roblox.com/docs/discovery) y [Discovery FAQ](https://create.roblox.com/docs/discovery-faq). El orden de trabajo también es oficial: primero gameplay, retención y metadatos fieles; si la retención es baja, arreglar el gameplay; solo después, monetización; y una señal fuerte de Días 8–28 «es improbable» si el Día 1 y los Días 2–7 son pobres. No existen umbrales numéricos oficiales de soft launch: las escalas de terceros («D1 20 % bueno, 30 % muy bueno, 40 % excelente», o «no compres anuncios con D1 por debajo del 25 %») chocan con la mediana de 10.3 % de GameAnalytics y con el ejemplo oficial de 12–19 % ([RoWatcher](https://rowatcher.com/news/day-1-retention-thresholds-before-you-buy-roblox-ads)). El criterio defendible, propuesto por los investigadores, es relativo: antes de escalar, situarse en el borde del percentil 90 del rango de «juegos similares» en PTR, D1, D7 y tiempo medio de sesión, con el rebote antes de 60 segundos a la baja.

### Principios de diseño que hereda la Fase 2

Lo que sigue destila el análisis en criterios de evaluación para la fase de conceptos. No son ideas de juego; son las condiciones que cualquier concepto debería cumplir, con la evidencia que las sostiene.

| Principio | Evidencia en este informe | Implicación para evaluar conceptos |
|---|---|---|
| Un loop que cabe en una frase y una primera acción sin texto | Rebote medido a <60 s y 61–180 s; hits con moneda inicial igual al primer precio; guía oficial contra tutoriales largos | El concepto debe poder describir qué hace el jugador en su primer minuto sin recurrir a un tutorial |
| Diseñar para días de juego, no para minutos | Tope de 60 min/día en playtime; play days como señal de primer nivel; ~3 sesiones diarias del jugador mediano; acantilado D1→D7 de 10.3 % a 1.6 % | Debe existir algo que madure entre sesiones y un motivo distinto para volver en los días 2–7 y 8–28 |
| Hibridar, no clonar | El original retiene el 92 % de su nicho; los look-alikes pierden prioridad; cada mega-hit combinó loop familiar + sistema prestado + reloj + tema | Identificar explícitamente el loop base, el sistema prestado y por qué la combinación no existe ya |
| El pico no es el negocio | Caídas de −96 % en ocho semanas y >−99 % en un año; ingresos que no siguen al CCU; evergreens sociales con mejor retención | Juzgar el concepto por su estado estable a seis meses, no por su potencial de pico |
| Meta-game de sistemas apilables con coste exponencial | Rebirth, variantes, colección y reroll con pity; ~4× de coste por rebirth frente a +1× de recompensa (cálculo sobre guías) | El contenido de largo plazo debe poder ampliarse con variantes y niveles sin arte nuevo masivo |
| Ceremonia proporcional a la rareza y con testigos | Escalera de Sol's RNG; «momento de alegría» oficial; tres motores de clip | Cada concepto necesita al menos un momento legible en 15 segundos sin contexto |
| Co-play intencional que no dependa del chat | Co-play days como señal; chat sujeto a verificación de edad y franjas | Las mecánicas de grupo deben funcionar con comunicación no verbal |
| Monetización como frecuencia antes que como ticket | Spend days como señal; pay-to-skip de 39–90 R$; ~1.25 % de conversión diaria; pagadores −16 % y gasto por pagador +5 % | Prever productos repetibles de bajo precio y un alto ticket de estatus, en ese orden |
| Azar de pago opcional y degradable | Divulgación obligatoria de probabilidades; restricciones en Reino Unido, Brasil y a menores; posible norma de la UE sin verificar | El juego debe ser completo y rentable con los ítems aleatorios de pago desactivados |
| Economía con sumideros que escalan con la riqueza | Tasa del 10 % al trading, cierres de intercambio, monedas con caducidad, respuesta quirúrgica a dupes | Definir desde el inicio las tres capas de moneda, sus sinks y las reglas de trading seguro |
| Live-ops sostenible | Fatiga de la cadencia semanal en Grow a Garden; guía oficial de 2–4 semanas y 2–3 meses; eventos como adquisición, no retención | El plan de contenido debe ser sostenible para el tamaño real del equipo |
| Alcance por elegibilidad y creativos honestos | Miniatura personalizada obligatoria; filtro Kids/Select; penalización de metadatos desalineados | Fijar la madurez de contenido y la vía de elegibilidad antes de diseñar monetización y tema |
| Medir contra «juegos similares», no contra umbrales universales | Ausencia de benchmarks por género; conflicto entre escalas de terceros y datos de GameAnalytics | Instrumentar el funnel de FTUE desde el primer build y decidir con el rango P50–P90 del panel |

### Conclusión

La lectura conjunta de los cinco pilares deja una paradoja que conviene tener presente al pasar a la Fase 2. El formato que bate récords —el simulador idle con ingreso pasivo, tienda compartida y evento semanal— es exactamente el que peor encaja con lo que la plataforma mide y paga desde junio de 2026: sus minutos AFK topan en 60 al día, sus picos de evento no generan días de juego en la ventana 8–28, su monetización de ruleta es la más expuesta a la regulación y su curva de decaimiento es la más empinada del mercado. Al mismo tiempo, los géneros que mejor alimentan esas señales —roleplay, moda competitiva, deducción social, shooters— rara vez producen el pico que da visibilidad y adquisición gratuita. Steal An Egg demuestra que en 2026 todavía se puede alcanzar la escala de 14 M de CCU; nada en los datos disponibles demuestra que alguien haya resuelto cómo conservarla. El espacio de valor está en esa brecha: una entrada tan legible como la de un simulador viral con una razón para volver tan estructural como la de un evergreen social.

La segunda conclusión es que el diseño, el algoritmo, la economía y la regulación ya no son capas independientes. Las mismas mecánicas que explican los récords de 2025 —FOMO semanal, azar con pago, pérdida por robo— son las que citan las demandas por diseño adictivo, las que restringen las políticas de ítems aleatorios y las que el propio Roblox dice querer dejar atrás. Antes de fijar conceptos conviene verificar en fuente primaria cuatro puntos que este informe solo pudo documentar por extracto o por fuente única: el umbral vigente de Kids/Select (250 o 100), el texto del anuncio de mayo de 2026 sobre ítems aleatorios de pago para menores, el borrador regulatorio de la UE del 12-nov-2026 y los precios actuales in-game, que cambian con cada parche y con el precio regional. Y hay que asumir tres vacíos que ninguna fuente pública cubre hoy: retención real de los mega-hits, benchmarks por género y peso de cada producto en los ingresos de un juego.

---

# PARTE II — FASE 2

## Fase 2 — Cinco conceptos originales con potencial viral para Roblox

*Documento de diseño, 17 de noviembre de 2026. Se apoya en el informe de la Fase 1 («Anatomía del éxito en Roblox»).*

### Cómo leer estas fichas

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

### Concepto 1 — Turbo Critters Derby

#### 1. Título gancho y high concept

**«Turbo Critters Derby 🏁 ¡Cría, entrena y corre!»**

Crías criaturas absurdas que entrenan solas mientras estás desconectado, y cada 6 minutos todo el servidor se detiene a ver el Gran Derby en el estadio central. No pilotas la carrera: preparas al corredor y sufres el final de foto con público.

#### 2. Nicho e hibridación

- **Loop base:** pet simulator (eclosionar, alimentar, mejorar estadísticas).
- **Sistema prestado:** gestión deportiva con carrera como espectáculo. La carrera se ve, no se conduce, y por eso cualquier jugador de móvil compite en igualdad.
- **Por qué funcionaría ahora:** Simulation concentra el 36.7 % de las plays (Dubit, ago–sep 2026), pero sus hits decaen más del 95 % porque su progreso es solitario y AFK. Aquí el progreso idle desemboca en un evento social programado, que es lo que da audiencia estable a los evergreens.
- **Títulos vecinos encontrados:** Fish Race, Dinosaur Racing y Brainrot Training tienen «entrena y corre». Los resultados de búsqueda no mencionan en ninguno entrenamiento offline ni carrera vista por todo el servidor.

#### 3. Core loop y meta-game

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

#### 4. Gancho viral

- **Final de foto con repetición.** Al cruzar la meta, la cámara de todo el servidor pasa a cámara lenta sobre los dos primeros.
- **La estadística Caos.** Cada critter tiene una pequeña probabilidad de hacer algo ridículo en plena carrera: tropezar, echarse una siesta o salir disparado hacia atrás. Produce remontadas y derrotas absurdas que se entienden en 15 segundos sin contexto.
- **Formato para creadores:** «copas» en servidor privado donde el creador corre contra los critters de sus espectadores, y series del tipo «crié al critter más feo y ganó la liga».
- **Ceremonia de rareza:** eclosionar una mutación Leyenda se anuncia a todo el servidor, y ese critter estrena animación de entrada al estadio.

#### 5. Estrategia de retención

- **Día 1:** la cola de entrenamiento offline termina en 4–8 horas y tiene tope. Volver significa recoger un critter más fuerte y reprogramar, lo que favorece dos o tres sesiones cortas al día en lugar de una larga AFK.
- **Días 2–7:** Liga de Novatos de siete días con ascenso el séptimo, y una pista distinta cada día.
- **Días 8–28:** temporada de cuatro semanas con relevos de club. Criar un linaje Leyenda exige unas tres generaciones, es decir, dos o tres semanas.
- **Co-play sin chat:** animar al critter de un amigo (un toque) da un pequeño impulso a su corredor y un sello de amistad a ambos.
- **Avisos:** notificación opcional (13+) cuando el critter termina de entrenar.

#### 6. Plan de monetización

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

### Concepto 2 — Kaiju o Ciudad

#### 1. Título gancho y high concept

**«Kaiju o Ciudad 🦖 ¡Construye, que te aplasten y sube de nivel!»**

Construyes un barrio tycoon junto a tus vecinos, y cada 8 minutos un jugador se convierte en un monstruo gigante que lo arrasa. Los escombros son el único material para mejorar: necesitas que te destruyan para progresar.

#### 2. Nicho e hibridación

- **Loop base:** tycoon de parcela (edificios que generan ingreso pasivo).
- **Sistema prestado:** PvP asimétrico de uno contra todos, con destrucción física.
- **Por qué funcionaría ahora:** el robo entre bases fue el motor de los récords de 2025–2026, pero se apoya en la pérdida, que es justo lo que citan las demandas por diseño adictivo y lo que Roblox dice querer dejar atrás. Este concepto conserva el drama de «alguien ataca mi base» e invierte el resultado: ser atacado es una ganancia.
- **Títulos vecinos encontrados:** Kaiju Universe y Kaiju Evolution son juegos de ser monstruo y destruir; Smash the City es destrucción por monedas. Los resultados no describen ninguno como tycoon ni con escombros como recurso de mejora.

#### 3. Core loop y meta-game

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

#### 4. Gancho viral

- **El contraste de escala.** Un amigo de 60 metros pisando tu casa, grabado desde el suelo o desde los ojos del monstruo. Se entiende sin sonido ni contexto.
- **La paradoja.** «Me destruyó la ciudad y gracias a eso construí el rascacielos» es un titular natural para un vídeo.
- **Duelo de kaijus.** Cuando dos medidores se llenan a la vez, cosa poco frecuente, el servidor entero presencia una pelea de monstruos.
- **Series de progresión:** «me convertí en el kaiju más grande del servidor».

#### 5. Estrategia de retención

- **Día 1:** las grúas terminan edificios mientras estás fuera (4–8 horas) y la caja fuerte acumula ingreso hasta un tope.
- **Días 2–7:** el «kaiju del día» deja un tipo de escombro distinto (hielo, fuego, cristal) y ciertas mejoras piden tipos concretos, así que hacen falta varios días. La segunda era se alcanza hacia el tercer día.
- **Días 8–28:** temporada de monumentos de alianza de cuatro semanas, eras cuarta y quinta, y árbol de evolución del kaiju.
- **Evento semanal sostenible:** la «Noche del Titán» la genera el sistema, sin contenido hecho a mano cada semana.
- **Co-play sin chat:** las alianzas defienden juntas con torretas y señuelos; no hace falta hablar.

#### 6. Plan de monetización

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

### Concepto 3 — Meteor Rush

#### 1. Título gancho y high concept

**«Meteor Rush ☄️ ¡Cayó un 1 en 10,000,000!»**

Cada 4 minutos cae un meteorito de rareza aleatoria en un mapa compartido, y todo el servidor ve en el cielo lo raro que es antes de que toque tierra. Corres, lo minas en equipo y forjas lo que lleva dentro.

#### 2. Nicho e hibridación

- **Loop base:** RNG de rareza («1 en X») con ceremonia creciente.
- **Sistemas prestados:** evento de mapa que hace converger a todos los jugadores, y minería con forja.
- **Por qué funcionaría ahora:** el RNG puro es solitario y AFK (Sol's RNG cayó de ~194 K a ~35 K de CCU), y su monetización es la más expuesta a las restricciones sobre ítems aleatorios de pago. Aquí la tirada es gratuita, pública y compartida: el azar se convierte en un acontecimiento con testigos, que es lo que la Fase 1 identificó como motor de clips.
- **Títulos vecinos encontrados:** Slime RNG tiene caídas de meteoritos a nivel de servidor; Tycoon RNG, meteoritos por niveles de rareza; 99 Nights in the Forest, minería de meteoritos. La búsqueda no encontró ninguno que haga de ello el loop central con carrera y minería cooperativa.

#### 3. Core loop y meta-game

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

#### 4. Gancho viral

- **El cielo cambia para todos.** Aparece «1 en 10,000,000» sobre el mapa, treinta jugadores echan a correr en la misma dirección y hay una revelación al final. Es un clip de 15 segundos con planteamiento, carrera y desenlace.
- **Reacciones de creadores** ante un Cósmico, que por diseño es rarísimo y se anuncia en todos los servidores.
- **Lluvias compradas:** quien paga una lluvia de meteoritos para todo el servidor aparece con su nombre en el cielo, lo que genera agradecimientos y más clips.

El meteorito se anuncia solo 20 segundos antes del impacto para que saltar de servidor en servidor no compense.

#### 5. Estrategia de retención

- **Día 1:** el telescopio personal acumula hasta tres cargas offline (una cada cuatro horas). Cada carga invoca un meteorito privado, lo que da motivo para dos o tres sesiones diarias.
- **Cada hora en punto:** lluvia de cinco minutos con suerte mejorada, generada por el sistema.
- **Días 2–7:** calendario de «constelación» que se completa jugando siete de diez días (tolera fallos) y entrega un Legendario garantizado.
- **Días 8–28:** primera Supernova hacia el día diez, temporada de observatorio de tripulación de cuatro semanas y un bioma nuevo al mes.
- **Co-play sin chat:** minar juntos acelera la extracción y el observatorio premia coincidir con la tripulación.

#### 6. Plan de monetización

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

### Concepto 4 — Última Luz

#### 1. Título gancho y high concept

**«Última Luz 🔦 ¡Que no se apague el faro!»**

Tú y hasta cinco amigos mantienen encendido un faro durante noches de diez minutos; las criaturas de la niebla solo se mueven donde no hay luz. Cada barco que salvas vuelve a tu puerto con carga mientras estás desconectado.

#### 2. Nicho e hibridación

- **Loop base:** supervivencia cooperativa por noches (recoger, resistir, repetir).
- **Sistemas prestados:** gestión de zonas tipo tower defense, hecha con luz, y un puerto persistente tipo tycoon con ingreso offline.
- **Por qué funcionaría ahora:** Survival es el segundo género por plays (~14.6 %) y 99 Nights in the Forest demostró su techo (14.15 M de CCU), pero los juegos de partidas no dejan nada que madure entre sesiones. El puerto le da al género el reloj offline que solo tenían los simuladores.
- **Títulos vecinos encontrados:** Nightlight (terror en solitario con una vela) y Specter (caza de fantasmas en equipo). La búsqueda no encontró ningún co-op de Roblox con faro ni con criaturas que se congelan con la luz.
- **Madurez:** Mild. Las criaturas son siluetas de sombra, sin sangre.

#### 3. Core loop y meta-game

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

#### 4. Gancho viral

- **El apagón.** La luz falla, la pantalla se oscurece y, al volver, hay una criatura a centímetros de un compañero. Es el clip de reacción clásico del género.
- **La línea de congelación.** Una fila de criaturas inmóviles justo al borde del haz es una imagen propia y reconocible, ideal para miniaturas honestas.
- **El reencendido en el último segundo,** con todo el grupo celebrando.
- **Formato para creadores:** retos de «noche 50 sin apagón» y partidas con chat de voz entre mayores verificados.

#### 5. Estrategia de retención

- **Día 1:** la carga de los barcos salvados llega offline con un tope de ocho horas; al volver hay algo que recoger y construir.
- **Cada día:** el «parte meteorológico» cambia las reglas de la niebla (niebla doble, relámpagos que revelan criaturas), de modo que la partida de hoy no es la de ayer.
- **Días 2–7:** las clases se desbloquean en los días 2, 3 y 5; el jefe de la noche 10 es el objetivo natural de la primera semana.
- **Días 8–28:** noches 25 a 50, primer prestigio y un faro nuevo al mes.
- **Co-play sin chat:** apuntar con la linterna es el sistema de señales. Jugar con las mismas personas en días distintos sube un bono de «tripulación» que aumenta la carga.

#### 6. Plan de monetización

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

### Concepto 5 — Guardería de Mímicos

#### 1. Título gancho y high concept

**«Guardería de Mímicos 🐾 ¿Cuál de estas mascotas NO es una mascota?»**

Ocho jugadores cuidan una guardería de mascotas adorables; uno de ellos es en secreto el Mímico, disfrazado de mascota, que se come a las demás cuando nadie mira. Hay que cuidar, observar y encerrar al sospechoso antes del amanecer.

#### 2. Nicho e hibridación

- **Loop base:** cuidado de mascotas (alimentar, bañar, jugar).
- **Sistema prestado:** deducción social con disfraz. El Mímico es un jugador escondido entre una docena de mascotas del juego y tiene que comportarse como ellas.
- **Por qué funcionaría ahora:** los evergreens que conservan audiencia son sociales y por rondas (Murder Mystery 2 fue el que más creció en octubre de 2026; Adopt Me! sigue en el top 10). El contraste tierno/siniestro da un tema propio sin depender de memes ajenos.
- **Títulos vecinos encontrados:** Fake an Egg (te disfrazas de huevo para robar mascotas) y un juego de Roblox de «hacerse pasar por NPC». Fuera de Roblox, The Mimic en Steam usa peluches. La búsqueda no encontró ninguno ambientado en una guardería con cuidado de mascotas y colección persistente.
- **Madurez:** Mild, con humor de dibujos animados.

#### 3. Core loop y meta-game

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

#### 4. Gancho viral

- **De tierno a maldito en tres segundos.** La revelación es el clip: se entiende sin contexto y la miniatura (mitad peluche, mitad monstruo) describe el juego con exactitud.
- **El punto de vista del Mímico.** «Fingiendo ser un NPC durante seis minutos» es un formato de humor ya probado entre creadores.
- **Las acusaciones equivocadas.** Encerrar a un gatito inocente mientras el Mímico está sentado al lado produce el drama social que alimenta los directos.
- **Dúos de creadores:** uno acusa y otro miente.

#### 5. Estrategia de retención

- **Rondas cortas:** seis minutos encajan con la sesión mediana de la plataforma (9.8 minutos) y favorecen varias sesiones al día.
- **Día 1:** tus mascotas crecen offline en la habitación; la primera victoria del día vale el triple de Golosinas.
- **Cada día:** tres misiones por rol y una «mascota del día» con afinidad doble.
- **Días 2–7:** calendario de cuidador novato que desbloquea al Veterinario el día 3 y entrega una mascota rara garantizada el día 7.
- **Días 8–28:** temporada clasificatoria de cuatro semanas con un aspecto de Mímico exclusivo; llevar una mascota a campeona toma dos o tres semanas.
- **Co-play sin chat:** cola en grupo y bono de Golosinas por jugar con el mismo amigo en días distintos.

#### 6. Plan de monetización

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

### Comparación y orden de prototipado

| Concepto | Fortaleza principal | Riesgo principal | Esfuerzo de producción |
|---|---|---|---|
| Turbo Critters Derby | Convierte el progreso idle en un evento social cada 6 min | Que ver la carrera sin pilotarla resulte pasivo; hay que cuidar la emoción del final | Medio |
| Kaiju o Ciudad | El clip más fuerte de los cinco y una pérdida que se vive como ganancia | Rendimiento de la destrucción física en móviles de gama baja | Alto |
| Meteor Rush | El loop más simple y la mejor ceremonia con testigos | Es el más expuesto a la regulación del azar si se desvía hacia tiradas de pago | Bajo–medio |
| Última Luz | Regla única de luz y oscuridad, y base persistente para un género de partidas | Necesita grupos; en solitario pierde gracia y hay que rellenar con matchmaking rápido | Medio–alto |
| Guardería de Mímicos | Estructura de evergreen social con colección intercambiable | La deducción sin chat tiene que funcionar de verdad con pistas físicas | Medio |

**Mi recomendación** es prototipar primero **Meteor Rush** y **Guardería de Mímicos**. Meteor Rush es el más barato de construir y permite comprobar en pocas semanas si la ceremonia compartida retiene mejor que un RNG solitario. Guardería de Mímicos es el que mejor encaja con lo que la plataforma mide desde junio de 2026 (días de juego y co-play) y el que tiene el estado estable más defendible a seis meses. Kaiju o Ciudad tiene el mayor techo de viralidad, pero también el mayor riesgo técnico; lo dejaría para después de validar la destrucción en móvil con una demo aislada.

### Cómo validar antes de escalar

- **Instrumentar el embudo de los primeros minutos desde el primer build**, con los eventos de onboarding de Roblox, para ver en qué paso se pierde cada jugador.
- **Medir contra «experiencias similares» en el panel de Creator Hub**, no contra umbrales universales. La única referencia externa fiable es la de GameAnalytics: mediana de D1 10.3 %, D7 1.6 % y D30 0.5 %; el 1 % superior alcanza 22.2 %, 9.1 % y 4.7 %.
- **Vigilar el rebote a 60 y 180 segundos** antes que cualquier métrica de ingresos; la Fase 1 documenta la guía oficial de arreglar la retención antes de monetizar.
- **Comprobar en fuente primaria**, antes de fijar la monetización, los cuatro puntos que la Fase 1 dejó sin verificar: el umbral vigente de Kids/Select, el anuncio de mayo de 2026 sobre ítems aleatorios de pago para menores, el borrador de la UE del 12-nov-2026 y los precios actuales de referencia.

### Fuentes de la comprobación de originalidad

Resultados de búsqueda consultados el 17-nov-2026 (solo extractos; no se abrieron las páginas):

- Carreras de criaturas: [Fish Race](https://www.roblox.com/games/70829614436499), [Dinosaur Racing](https://www.roblox.com/games/17462369239), [guía de Brainrot Training](https://hindi3.sportskeeda.com/roblox-news/brainrot-training-a-beginner-s-guide), [Derby](https://www.destructoid.com/?p=1137321).
- Kaiju y destrucción: [Kaiju Universe (tier list)](https://www.pocketgamer.com/roblox/kaiju-universe-tier-list), [Kaiju Universe (Destructoid)](https://destructoid.com/?p=444585), [Smash the City](https://www.roblox.com/games/104272271029312).
- Meteoritos y RNG: [Tycoon RNG, guía de meteoritos](https://www.droidgamers.com/guides/tycoon-rng-meteors-guide/), [meteoritos en 99 Nights in the Forest](https://allthings.how/how-to-mine-meteors-in-99-nights-in-the-forest-roblox/), [Prospecting](https://deltiasgaming.com/?p=315354), [Sol's RNG y los juegos de suerte](https://rowatcher.com/news/sol-s-rng-and-the-luck-based-game-craze-why-players-keep-rolling).
- Terror con luz: [guía de Nightlight](https://www.sportskeeda.com/roblox-news/roblox-nightlight-guide), [mejores juegos de terror de Roblox 2026](https://games.gg/news/best-roblox-horror-games-2026/).
- Deducción con disfraz: [guía de Fake an Egg](https://www.rosenberryrooms.com/?p=366149), [juego de «ser un NPC»](https://jira.phpfox.com/p/roblox-game-among-us-npcs), [The Mimic en Steam](https://store.steampowered.com/app/4962400).
