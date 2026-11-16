# Test Bomberos

Simulador de test para oposiciones de bombero en **un único archivo**: `test-bomberos.html`.
Incluye HTML, CSS y JavaScript, no necesita servidor ni conexión y se puede abrir en cualquier navegador de ordenador, tablet o móvil. Se puede enviar por WhatsApp como documento.

## Uso

1. Descarga `test-bomberos.html` (o recíbelo por WhatsApp) y ábrelo con el navegador.
2. Elige:
   - **Test definitivo**: 60 preguntas, 5 de cada uno de los 12 temas, elegidas al azar.
   - **Test por temas**: todas las preguntas de un tema, en orden aleatorio.
3. Al responder se marca la opción correcta o incorrecta y aparece la explicación. También puedes **dejar en blanco**.
4. Al terminar verás la nota sobre 10 (con penalización opcional de −1/3 por fallo), el desglose por tema, la revisión de fallos y la opción **Repasar falladas**.

Las preguntas y el orden de las opciones se barajan en cada intento. Atajos de teclado: `1–4` o `A–D` para responder e `Intro` para avanzar.

## Temario incluido (171 preguntas)

| # | Tema | Normativa / contenidos |
|---|------|------------------------|
| 1 | Constitución Española | Valores, derechos, estados excepcionales, fuentes, TC |
| 2 | Protección Civil y Autoprotección | Ley 17/2015 · RD 393/2007 |
| 3 | Prevención de Riesgos Laborales | Ley 31/1995 · RD 773/1997 · Reglamento (UE) 2016/425 |
| 4 | Teoría del fuego | Tetraedro, transmisión del calor, flashover, backdraft, BLEVE |
| 5 | Agentes extintores y extintores | Agua, espumas, CO2, polvos · RIPCI y CTE |
| 6 | Hidráulica | Presión, caudal, pérdidas de carga, bombas, cavitación |
| 7 | Instalaciones PCI | RD 513/2017 (RIPCI) |
| 8 | CTE: seguridad en caso de incendio | DB-SI y DB-SUA 4 |
| 9 | Mercancías peligrosas | ADR |
| 10 | Primeros auxilios y SVB | ERC 2021 |
| 11 | Protección respiratoria y EPI | ERA, filtros EN 14387, normas EN |
| 12 | Riesgo eléctrico y vehículos | RD 614/2001, REBT, vehículos eléctricos |

## Añadir o cambiar preguntas

Abre el `.html` con un editor de texto y busca `const Q=[`. Cada pregunta es una línea:

```js
[tema, "Enunciado (usa **NO** para resaltar)", ["CORRECTA", "incorrecta", "incorrecta", "incorrecta"], "Explicación"],
```

- `tema` es el número del tema empezando en 0 (los temas están en `const T=[...]`).
- La **primera** opción es siempre la correcta; la aplicación baraja las opciones al mostrarlas.
- No uses opciones como «todas las anteriores», porque dependen de la posición.
- Cada tema debe tener al menos 5 preguntas para que el test definitivo quede equilibrado.

> Las preguntas se basan en la normativa estatal vigente que se indica en cada explicación. Antes del examen, contrástalas con las bases y el temario oficial de tu convocatoria, que pueden incluir normativa autonómica o municipal.
