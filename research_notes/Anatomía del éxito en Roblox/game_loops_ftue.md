# Game structure and loop architecture of top/viral Roblox games: core loops, meta-game and onboarding/FTUE

> **Method and reliability note (read first).** Research date: 2026-11-17. In this session, direct page fetching was blocked for every host except GitHub, and the shared web-search budget ran out before all planned queries were done.
> - **Official Roblox guidance** was read in full from Roblox's own open-source docs repository ([github.com/Roblox/creator-docs](https://github.com/Roblox/creator-docs)), which is the source of create.roblox.com/docs. Quotes from those pages are verbatim and are cited with the public create.roblox.com URL. This is the most reliable part of these notes.
> - **Game-specific facts** come from search-result summaries of wikis and guide sites, not from full-page reads. Where the summary did not say which page a fact came from, I cite the most likely page(s) from that result set and mark it "(attribution per search summary)". Numbers that sources disagree on are flagged as conflicts. Treat game numbers as "reported by guides", not as verified in-game values.
> - Anything I could not source is in **Gaps**, not in findings. Minute-by-minute timelines are my reconstructions and are in **Inferences**.

---

## 1. Core loops and first 30 seconds / 5 minutes / 30 minutes, game by game

### Takeaway
Almost every top Roblox game puts the player's first core-loop action within seconds of spawning (a free tool, a few coins and a shop or resource within walking distance), and the loop always has the same three parts Roblox's own docs describe: a minute-to-minute interaction, a most-repeated action, and a progression engine that makes the next pass bigger. The 2025–2026 mega-hits (Grow a Garden, Steal a Brainrot, Steal An Egg) add two things on top of a trivially simple loop: income that keeps running while the player is away, and other players as a source of risk or spectacle.

### Cited Findings

#### Official definition of the loop (framework for the section)
- Roblox defines a core loop as three parts: "Minute to minute player interaction", "Most repeated set of actions", and "Progression engine". The action-RPG example is Explore → Fight → Upgrade, where upgrades "boost the player's future exploration and combat capabilities". "Without a progression system, a game becomes repetitive, boring, and shallow." — [Roblox Creator Hub, Core loops](https://create.roblox.com/docs/production/game-design/core-loops)
- Roblox's retention doc defines the core loop as "the actions that users repeat in your game to make progress in a single session". Its examples: pet adoption game = adopt, train, level up pets; tycoon = manage a business, balance resources, compete with other users. — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Roblox's "Recommended strategies" page says the loop "should consist of a series of actions and rewards that are satisfying, repeatable, and progressively challenging". — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies)
- Roblox's own reference game "Plant" uses the loop "planting seeds, selling produce, and investing currency into larger pots and more valuable plants". — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)

#### Grow a Garden (launched 2025; farming/idle simulator)
- Loop: players buy seeds, plant them, then harvest and sell the produce; plants keep growing while the player is offline. — [Gardening Know How](https://www.gardeningknowhow.com/garden-how-to/design/roblox-grow-a-garden-game)
- Start: the player opens the Seed Shop and buys two Carrot Seeds with the starting 20 Sheckles; the Seed Shop restocks every five minutes. — (attribution per search summary) [BlueStacks beginner guide](https://www.bluestacks.com/blog/game-guides/roblox/rl-grow-a-garden-beginners-guide-en.html); see also [GameSpot beginner guide](https://www.gamespot.com/articles/grow-a-garden-beginners-guide-and-tips/1100-6535055/)
- Early choice: carrots give one harvest and disappear; guides recommend moving to multi-harvest crops such as blueberries or tomatoes. — (attribution per search summary) [TheGamer](https://www.thegamer.com/roblox-grow-a-garden-beginner-tips-tricks-guide/), [Beebom tips](https://beebom.com/roblox-grow-a-garden-tips-and-tricks/)
- Secondary systems surfaced early: daily quests at the gear NPC; pet eggs, where guides advise skipping common/uncommon eggs and saving for rare or better. — (attribution per search summary) [Beebom tips](https://beebom.com/roblox-grow-a-garden-tips-and-tricks/), [TheGamer](https://www.thegamer.com/roblox-grow-a-garden-beginner-tips-tricks-guide/)
- Developer's stated reason for the design: Janzen "Jandel" Madsen said everyone likes "to farm, to watch something grow", and pointed to "the whole idea of the garden growing offline, the persistent world". He also said he "knew pretty quickly" it would succeed. — [GamesBeat interview](https://gamesbeat.com/janzen-madsen-interview/)
- Origin and scale: created by a 16-year-old; first version built in about three days; Splitting Point (Jandel) bought a share in April 2025 when it had about 1,000 concurrent users; fastest Roblox game to a billion visits (33 days). — [Wikipedia, Grow a Garden](https://en.wikipedia.org/wiki/Grow_a_Garden)
- Peak of about 21 million concurrent players. — [GamesRadar](https://www.gamesradar.com/games/mmo/with-21-million-concurrent-players-roblox-hit-grow-a-garden-is-bigger-than-half-of-steam-combined-but-players-are-already-flooding-another-far-weirder-competitor)
- Naavik describes the premise as simple (grow, harvest, upgrade a garden plot); within months it passed 12B visits and became the top-grossing Roblox game. — [Naavik digest](https://naavik.co/digest/predicting-the-next-big-hits-on-roblox/)

#### Steal a Brainrot (launched 2025; collect-and-steal tycoon)
- Start: the player has some starting cash and buys a cheap character (e.g. Noobini Pizzanini) from the moving line. — (attribution per search summary) [Pro Game Guides](https://progameguides.com/guides/complete-steal-a-brainrot-beginners-guide/), [Sportskeeda](https://www.sportskeeda.com/roblox-news/steal-from-brainrots-a-beginner-s-guide)
- The shop is a physical object: a large red conveyor ("Red Carpet") runs through the centre of the map and new Brainrots appear on it periodically. Each one shows its rarity tier (Common to Secret), money per second and price above its model. — (attribution per search summary) [games.gg guide](https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/), [Deltia's Gaming](https://deltiasgaming.com/how-to-play-steal-a-brainrot-roblox/)
- Purchased Brainrots sit in the player's base and generate passive income; other players can walk in and physically carry them back to their own base. — [games.gg guide](https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/)
- Defence is one button: Lock Base protects the base for about 60 seconds before rebirth upgrades, then others can enter again; higher rebirth levels extend lock time. — (attribution per search summary) [Deltia's Gaming](https://deltiasgaming.com/how-to-play-steal-a-brainrot-roblox/), [vgtimes](https://vgtimes.com/guides/166496-steal-a-brainrot-beginners-guide-tips-and-basics.html)
- Commentary on why the loop works: the "acquire-and-generate-income" loop is simple, the risk that someone can steal your assets adds tension, and stealing a rare Brainrot is more profitable than grinding from zero. — [Medium, "Steal a Brainrot Phenomenon"](https://medium.com/@emtertoszef/steal-a-brainrot-phenomenon-6af7b49081e0)
- A YouTube explainer describes the genre as a 4-step loop: get it, base, steal, defend. — [YouTube explainer](https://www.youtube.com/watch?v=Fj22QfXAhKo)
- The game was inspired by an earlier game, Steal a Character, according to a post by developer Sam Brakta (SpyderSammy); it now faces many imitators that marry the brainrot theme to other proven formats. — [The Star, 25 Mar 2026](https://www.thestar.com.my/tech/tech-news/2026/03/25/robloxs-hit-game-steal-a-brainrot-battles-its-many-imitators)
- Concurrency: reported peak of about 20 million in August 2025 during a mock "admin war" event with Grow a Garden's developer, and a later reported peak of 25.8 million in October 2025. — (attribution per search summary) [Wikipedia, Steal a Brainrot](https://en.wikipedia.org/wiki/Steal_a_Brainrot), [StudioKrew chart recap](https://studiokrew.com/blog/top-roblox-games-october-2026/)

#### Steal An Egg (2026 breakout; steal-genre successor)
- Loop: enter biomes, grab eggs off nests, run them home before a guardian or another player knocks you down; place the egg in your pen, hatch it, and collect the pet's income. Speed trained on a treadmill gates access to later zones with better eggs. Other players can steal eggs you carry or pets you have hatched. — [games.gg beginner guide](https://games.gg/roblox/guides/steal-an-egg-beginner-guide/)
- Reported peak of 14,313,917 concurrent players on 19 Sep 2026. — [RoStats records](https://rostats.io/records)
- Later snapshots: about 1.6M concurrent on 30 Sep 2026 and 713K on 29 Oct 2026. — [StudioKrew, September 2026](https://studiokrew.com/blog/top-roblox-games-september-2026/); [StudioKrew, October 2026](https://studiokrew.com/blog/top-roblox-games-october-2026/)

#### 99 Nights in the Forest (2025; co-op survival horror run)
- Entry: players step into a matchmaking box in the lobby and pick a team size of 1–5; larger teams make the game harder. — (attribution per search summary) [Eneba guide](https://www.eneba.com/hub/games/game-guides/how-to-beat-99-nights-in-the-forest/)
- Once in the forest, a timer counts down to the first night; the Deer and other threats appear only after dark. — [PC Gamer tips](https://www.pcgamer.com/games/roblox/99-nights-in-the-forest-tips/)
- Loop: daytime is spent gathering fuel and resources; fuel management is the core. Letting the fire die shrinks the safe zone and visibility. The recurring decision is whether to explore further or return early to prepare for night. — (attribution per search summary) [ExitLag guide](https://www.exitlag.com/blog/99-nights-in-the-forest-roblox/)
- Run goals: upgrade the campfire, rescue four missing children, survive 99 nights against the Deer. Each rescued child gives a large time-acceleration bonus. — (attribution per search summary) [Eneba guide](https://www.eneba.com/hub/games/game-guides/how-to-beat-99-nights-in-the-forest/), [GuideSpot, Nov 2026](https://www.guidespot.com/99-nights-in-the-forest-guide/)
- Campfire levels gate systems: level 2 unlocks basic crafting (bandages, simple tools), level 3 opens the Pelt Trader, level 4 enables the biofuel processor and safe full-map exploration. Another guide prioritises "Good Axe" and "Good Backpack" first. — (attribution per search summary) [GuideSpot](https://www.guidespot.com/99-nights-in-the-forest-guide/), [Fandom Tips And Tricks](https://99-nights-in-the-forest.fandom.com/wiki/Tips_And_Tricks)

#### Pet Simulator 99 (BIG Games, 2023–; pet-collection simulator)
- Start: break the objects at spawn, buy the Cracked Egg for 90 coins, equip the fastest-breaking pet. Next eggs: Spotted 150, Paw 250, Grass 650, Wood 1,500 coins. — [petsimulator99-wiki.wiki beginner guide, Oct 2026](https://petsimulator99-wiki.wiki/beginner-guide/); another guide puts the first egg at 100 coins — [u7buy guide](https://www.u7buy.com/blog/pet-simulator-99-beginner-guide/)
- Mid loop: break → coins → eggs → stronger pets → next area; first rebirth station is at Area 25. — [petsimulator99-wiki.wiki beginner guide](https://petsimulator99-wiki.wiki/beginner-guide/)

#### Bee Swarm Simulator (2018–; long-tail collection simulator)
- A hive holds 25 slots by default and 25 more can be bought at the Mountain Top Shop, for a maximum of 50. — [Bee Swarm Simulator Wiki, Hive Slot](https://bee-swarm-simulator.fandom.com/wiki/Hive_Slot)
- Zones are gated by how many bees (or which bee type) the player owns; the Mountain Top field's gate needs at least 30 bees. — [Switchblade Gaming guide](https://www.switchbladegaming.com/roblox/bee-swarm-simulator-guide/); [NamuWiki regions](https://en.namu.wiki/w/Bee%20Swarm%20Simulator/%EC%A7%80%EC%97%AD)

#### Blox Fruits (2019–; anime RPG grind)
- Progression is level-gated by "seas": Second Sea at level 700 (defeat the Ice Admiral, talk to the Experienced Captain); Third Sea at level 1,500; raids unlock at level 1,100 in Sea 2; one guide labels the Sea 3 range as level 1,500–2,550. Sources disagree on some gate bosses. — (attribution per search summary) [rblxguide Sea 2 walkthrough](https://rblxguide.com/games/blox-fruits/updates/blox-fruits-sea-2-walkthrough-2026), [rblxguide Sea 3 endgame](https://rblxguide.com/games/blox-fruits/updates/blox-fruits-sea-3-endgame-guide-2026), [Deltia's Gaming leveling guide](https://deltiasgaming.com/?p=151888)

#### Fisch (2024–; fishing collection RPG)
- Start: spawn in Moosewood with a free Flimsy Rod; catch fish, sell to the Merchant for C$, buy a better rod first. Rods are the core of progression. — [rblxguide beginner guide](https://rblxguide.com/games/fisch/updates/beginner-guide)
- First upgrade target cited by an older guide: Carbon Rod for C$2,000 at the Moosewood merchant. — (attribution per search summary) [Destructoid beginner guide](https://www.destructoid.com/fisch-roblox-beginners-guide/)

#### Dead Rails (2025; co-op roguelike run)
- Players ride a steam locomotive across a plague-ravaged world; the goal is to keep the train fuelled while fighting enemies, looting buildings and zombie-filled towns along the track, and welding new weapons and items to the train. Guides advise buying at least three pieces of coal before any weapon. — (attribution per search summary) [BlueStacks guide](https://www.bluestacks.com/blog/game-guides/roblox/rl-dead-rails-beginners-guide-en.html), [Pro Game Guides](https://progameguides.com/roblox/ultimate-dead-rails-beginners-guide/)
- Night changes threat level: werewolves spawn during Full Moon events; guides say to avoid towns and forts late in the day. — (attribution per search summary) [Deltia's Gaming](https://deltiasgaming.com/?p=231460)

#### Sol's RNG (2024–; pure RNG collection)
- Loop: click to roll, wait out the roll cooldown, roll again. Base luck is 1 and all boosts (gear, potions, biomes, gamepasses) multiply it. Progression is about shortening the cooldown and raising luck. — [solrng.wiki how to play](https://www.solrng.wiki/guides/how-to-play/); [solrng.wiki luck explained](https://www.solrng.wiki/guides/luck-explained/)
- Rolled auras are also crafting input: one guide lists a Lucky Gauntlet (+25% base luck) that needs only 10 Uncommon auras. Guides disagree on gauntlet names and stats. — [solrng.wiki gauntlets list](https://solrng.wiki/en/gauntlets/all-gauntlets-list/)

#### Anime Vanguards and the anime tower-defence family
- Modes: Story (progression), Infinite (endless waves with leaderboard), Dungeons, Worldlines (limited events); story progress unlocks Raids. First story stages named: Planet Namak, Sand Village, Double Dungeon. — [animevanguards.org beginner guide](https://animevanguards.org/guides/beginners)
- One summon costs 50 gems (40 with VIP). — [seemeta summon rates](https://seemeta.com/en/anime-vanguards/summon-rates)

#### Doors (2022–; procedural horror run)
- The Hotel runs from Door 1 to Door 100 with The Reception as an extra starting room; rooms contain randomly placed puzzles and gimmicks; The Mines is Floor 2. — (attribution per search summary) [GameWith](https://gamewith.net/roblox/57458), [rblxguide entities by floor](https://rblxguide.com/games/doors/updates/entities-by-floor)
- Roblox cites Doors ("a procedural survival horror game") as a top game appealing to older users. — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)

#### Forsaken (2025; asymmetric killer vs survivors)
- Rounds start after a 50-second intermission and players are sent in automatically unless AFK Mode is on. There is no role queue: the player with the highest "Malice" becomes killer; each completed generator puzzle adds 0.25 Malice. Player Points are the main currency (survivors, killers, skins, emotes). — [ForsakenHub guide](https://www.forsakenhub.com/roblox-forsaken-guide)

#### Rivals (Nosniy; arena shooter)
- Duels from 1v1 to 5v5; first side to win five rounds takes the match; one source lists 30 maps and 52 weapons. New players start with a free four-slot loadout and a Shooting Range. — [Bloxodes beginner guide](https://bloxodes.com/articles/rivals-beginner-guide); [Deltia's Gaming modes](https://deltiasgaming.com/?p=310957)

#### Blue Lock: Rivals (2025; 5v5 football)
- Matches are 5v5. A "style" (character loadout) is rolled from a spin system, with rarity tiers topping out at "Generational"; "flows" are a second layer of passive/active modifiers. — [games.gg beginner guide](https://games.gg/roblox/guides/blue-lock-rivals-beginners-guide/)

#### Adopt Me! (2017–; pet-raising RP)
- Loop: pets age by completing "tasks" that fill needs (feeding, drinking, sleeping, bathing, school, playing). — [games.gg aging guide](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/)
- Roblox uses "adopt, train, level up pets" as its example of a pet-game core loop. — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)

#### Dress to Impress (2023–; round-based fashion)
- Each round gives the whole server a theme and a timer (five minutes per one source, six per another). Players then walk the runway and are rated 1–5 stars by the others; the top three take the podium. Freeplay has no theme, timer or voting. — (attribution per search summary) [rblxguide beginners guide](https://rblxguide.com/games/dress-to-impress/updates/beginners-guide), [The Spike](https://thespike.gg/roblox/dress-to-impress-dti)

#### Brookhaven RP (2020–; sandbox roleplay)
- No quests, levels or bosses: join a server, pick a house, grab a vehicle, start roleplaying. Free content includes 24+ vehicles, 8+ house types, all jobs and every location; 15–16 optional gamepasses (VIP listed at 399 Robux). — [RoWatcher](https://rowatcher.com/news/what-is-brookhaven-rp-why-400k-players-choose-roblox-s-biggest-game); [games.gg gamepass tier list](https://games.gg/brookhaven-rp/guides/brookhaven-rp-gamepasses-tier-list/)
- Roblox's own reading: Brookhaven "resembles playing 'house'", and focuses on "providing users with the tools they need to interact with each other", so that "these interactions become the spontaneous content that keeps users coming back". It also has a "Creator Cam" that hides the UI for video makers. — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)

#### Classic tycoons
- Restaurant Tycoon 2: pick a location, name the restaurant, choose a cuisine; early loop is seating guests, taking orders and cooking; more tables bring more customers but staffing becomes the bottleneck; Cash is the primary currency and Diamonds the secondary. — (attribution per search summary) [NamuWiki](https://en.namu.wiki/w/Restaurant%20Tycoon%202), [Restaurant Tycoon 2 Wiki](https://restaurant-tycoon-2.fandom.com/wiki/Restaurant_Tycoon_2_Wiki)
- Theme Park Tycoon 2: each player gets a plot to build a park; economy is ride and amenity pricing; "your first hour is mostly small rides and patience". — (attribution per search summary) [DungeonPath tycoon comparison](https://dungeonpath.com/posts/pillar/roblox-tycoon-games-compared/)
- Retail Tycoon 2: place display stands, drive a truck to buy goods, stock shelves, set prices; long checkout lines lose customers. — (attribution per search summary) [NamuWiki](https://en.namu.wiki/w/Retail%20Tycoon%202), [DungeonPath](https://dungeonpath.com/posts/pillar/roblox-tycoon-games-compared/)
- Lumber Tycoon 2: no drop-collecting loop; start with a simple axe and a plot, chop trees in an open world, haul the wood yourself, sell, upgrade tools; "no tutorial worth the name". — (attribution per search summary) [DungeonPath](https://dungeonpath.com/posts/pillar/roblox-tycoon-games-compared/)

### Inferences
(Everything below is my reconstruction from the cited mechanics. It is not a measured timeline.)

- **Common loop template.** The hits above fit one pattern: *action (seconds)* → *soft-currency reward (immediate)* → *purchase that raises rate (minutes)* → *new zone / rarity tier / base slot (tens of minutes)* → *reset or collection goal (hours to weeks)*.
- **Inferred timeline, Grow a Garden.** 0–30 s: spawn on own plot, walk to Seed Shop, spend 20 Sheckles on two carrot seeds, plant. 30 s–5 min: first harvest and sale, rebuy, discover that the shop stock changes every 5 minutes (a built-in reason to stay at least one more restock). 5–30 min: switch to multi-harvest crops, first mutated crop, first gear or egg purchase, daily quests. Leaving is rewarded because crops grow offline.
- **Inferred timeline, Steal a Brainrot.** 0–30 s: spawn in an empty base facing the conveyor; buy the cheapest Brainrot; income counter starts. 30 s–5 min: fill slots, first steal attempt against or by another player, learn the 60-second lock. 5–30 min: cycle buy → collect → lock → raid, replace commons with higher rarities, work toward the Rebirth 1 requirement.
- **Inferred timeline, 99 Nights.** 0–30 s: lobby, pick team size, load in next to the campfire with a countdown to night. 30 s–5 min: chop wood, feed the fire, first night. 5–30 min: campfire level 2–3, first crafting bench items, first child rescue attempt, several day/night cycles.
- **Inferred timeline, Pet Simulator 99.** 0–30 s: break coin piles at spawn, 90-coin first egg hatch (the "first-egg moment"). 30 s–5 min: second and third eggs (150, 250 coins), first area gate. 5–30 min: steady area unlocks toward Area 25 and the first rebirth.
- **Round-based games compress the whole loop into one match.** Dress to Impress (about 5–6 minutes of dressing plus runway), Rivals (first to five rounds), Forsaken (50-second intermission then a round) deliver a full action → result → reward cycle every few minutes, and put long-term progress in an account-level currency or rank.
- **The steal genre turns other players into both content and loss-aversion.** The shop (conveyor) is a shared physical space, so new players see what high-rarity items look like within seconds, which works as a preview of long-term goals without any UI.

### Gaps
- No verified minute-by-minute measurements (e.g. recorded time-to-first-purchase) exist in the sources I could reach; timelines above are inferred.
- **Pet Simulator X**: no sourced data gathered on its loop or how it differed from PS99.
- **Anime Defenders** and **All Star Tower Defense**: not researched individually (search budget ran out); only Anime Vanguards is covered.
- **Dead Rails**: I could not source the win distance, safe-town spacing or typical run length.
- **Doors**: no sourced data on Knobs, the pre-run shop, or run duration.
- **Rivals**: Keys economy and weapon unlock costs not sourced. **Blue Lock: Rivals** match length and spin odds not sourced.
- **99 Nights**: day/night length in minutes, diamond payouts and class prices not sourced.
- **Bee Swarm Simulator**: starting state (first egg, first field, first quest giver) not sourced; the full list of bee-count gates was not confirmed.
- Whether Steal An Egg's 14.3M peak is measured the same way as Steal a Brainrot's 25.8M is unclear; the trackers use different methods.
- Naavik's and Deconstructor of Fun's full teardown text could not be opened; only the Naavik headline claims are cited.

---

## 2. Meta-game systems: rebirths, collections, rarity variants, rerolls, end-game

### Takeaway
The long-term layer of top Roblox games is built from four stackable systems: a reset-for-multiplier loop (rebirth), a collection with very steep rarity odds (down to 1 in billions in Sol's RNG), multiplicative variants layered on every collectible (mutations, golden/rainbow, neon/mega), and reroll systems with pity counters. Costs grow exponentially while per-step rewards grow roughly linearly, which is what stretches content to hundreds of hours.

### Cited Findings

#### Rebirth / prestige
- **Steal a Brainrot, Rebirth 1**: requires about $1M cash (some guides say $500K) plus two specific Brainrots, Trippi Troppi and Gangster Footera. Rewards: income multiplier (listed as x0.5 by most guides, x1 by one), $5K starting cash, +10 seconds base lock, and new gear (Friend Controller, Iron Slap, Gravity Coil, Bee Launcher). — [Beebom rebirth guide](https://beebom.com/steal-a-brainrot-rebirth-guide-levels-and-rewards/); [GameRant rebirth guide](https://gamerant.com/roblox-steal-a-brainrot-rebirth-guide/); [Sportskeeda rebirth guide](https://www.sportskeeda.com/roblox-news/steal-brainrot-rebirth-guide)
- **What resets vs persists (Steal a Brainrot)**: cash and Brainrots reset; cash multipliers, new gear, extra Brainrot slots and base lock-time upgrades persist. — (attribution per search summary) [Eldorado rebirth guide](https://www.eldorado.gg/blog/steal-a-brainrot-rebirth-guide/), [GameBoost rebirth guide](https://gameboost.com/blog/steal-a-brainrot-rebirth-guide)
- **Steal a Brainrot, later rebirths**: Rebirth 10 is commonly listed at 250 billion cash plus Girafa Celestre for a 9x multiplier; Rebirth 9 is listed with an x8 multiplier, +1 base slot and +10 s lock. The ladder has been extended over time: 16 levels, then 18, and 19 levels documented in October 2026. Per-level cash figures conflict between guides (one lists Rebirth 9 at $5M, another at $25B). — (attribution per search summary) [Bloxinformer rebirth wiki](https://bloxinformer.com/wikis/steal-a-brainrot/rebirth/); [allthings.how Rebirth 19](https://allthings.how/steal-a-brainrot-rebirth-19-guide-requirements-and-rewards/); [gameoverdrive.com.br](https://gameoverdrive.com.br/steal-a-brainrot-renascimentos/)
- **Pet Simulator 99**: rebirth stations sit at Area 25, 50, 75, 99, 125, 150 and 175. The first rebirth resets coins and areas and grants Auto Hatch plus the Castle Key; another guide describes it as a permanent 75% pet-strength boost. Pets are kept. — [petsimulator99-wiki.wiki beginner guide](https://petsimulator99-wiki.wiki/beginner-guide/); [u7buy guide](https://www.u7buy.com/blog/pet-simulator-99-beginner-guide/)
- **PS99 feature gating by rebirth**: Mastery requires Rebirth 4. — [HoldToReset mastery list](https://holdtoreset.com/pet-simulator-99-mastery-list/); Update 7 gated some items behind Rebirth 5. — [BIG Games Update 7 post](https://biggames.io/post/pet-simulator-99-update-7)
- **PS99 Ranks** are a separate ladder from rebirths; maximum rank 35 as of Update 59. — [Pet Simulator Wiki, Ranks](https://pet-simulator.fandom.com/wiki/Ranks_(Pet_Simulator_99))
- **Event-scoped rebirths (PS99 Update 90, Lucky Block Breakout)**: reaching Stage 100 on the event board allows a Rebirth that resets the climb, keeps pets, makes blocks tougher and pets hit harder; a Chest Luck upgrade raises Gargantuan and Titanic odds on hourly chests. — [allthings.how Update 90](https://allthings.how/lucky-block-breakout-in-pet-simulator-99-update-90/); [Bloxodes event guide](https://bloxodes.com/articles/pet-simulator-99-lucky-block-breakout-event-guide)

#### Multiplicative variants (mutations, golden/rainbow, neon)
- **Grow a Garden mutations** multiply sell value and stack. Community wiki values: Wet ×2, Pollinated ×3, Bloodlit ×4, Plasma and Honey Glazed ×5, Frozen ×10, Gold ×20, Rainbow ×50; Rainbow has a 0.1% chance to grow in place of the normal variant. — [Grow a Garden Wiki (Miraheze), Mutations](https://growagarden.miraheze.org/wiki/Mutations)
- By 2026 trackers list 158 to 172+ mutations, with newer ones far higher (e.g. Astral ×365, Goldsparkle ×500); values differ between sites (one lists Gold ×25 and Frozen ×20). — [gagdata.com](https://www.gagdata.com/mutations); [growagardencalcs.com](https://growagardencalcs.com/mutation-guide); [Beebom, April 2026](https://beebom.com/roblox-grow-a-garden-mutation-guide/)
- **Steal a Brainrot mutations**: Gold 1.25x (about 10% spawn), Diamond 1.5x (5% per the wiki's mutation page; other figures conflict), Rainbow 10x (about 1%). About 15 mutations in total, up to Eclipse 14x; others include Crystal 13x, Phantom 12x, Cyber 11x, Divine 10x. A mutation does not change rarity: a Rainbow Common still counts as Common and earns 10x its base income. — [rblxguide mutations list, Sept 2026](https://rblxguide.com/games/steal-a-brainrot/mutations); [eloboost24 mutations list](https://eloboost24.eu/blog/steal-a-brainrot-mutations-list-multipliers)
- **Adopt Me neon ladder**: 4 Full Grown pets of the same species make 1 Neon; 4 Full Grown Neons make 1 Mega Neon (16 copies in total). — [Adopt Me Wiki, Mega Neons](https://adoptme.fandom.com/wiki/Mega_Neons); [GG Chest](https://ggchest.com/blog/adopt-me/how-to-make-a-neon-pet-in-adopt-me)
- **Adopt Me aging cost by rarity** (changed 12 Sep 2025): now about 25 tasks for a Common up to 183 for a Legendary to reach Full Grown; before the rebalance it was 56 to 275. An Age-Up Potion grants 30 tasks; the Pet Pen ages up to 4 pets passively. Community totals for a Legendary Mega Neon conflict (3,660 / 4,400 / 5,500 tasks). — [games.gg aging guide](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/); [toyboxvalues](https://toyboxvalues.com/adopt-me/); [mmodude](https://www.mmodude.com/leveling-guides/adopt-me-pet-aging-and-neon-guide/)
- **PS99 Huge variants**: one guide lists Golden Huge +0.3x, Rainbow Huge +0.9x and Shiny Huge +1x damage. — (attribution per search summary) [robloxdatabase.com](https://robloxdatabase.com/guides/how-to-get-huge-pets-in-pet-simulator-99/)

#### Collection systems and published or estimated odds
- **Sol's RNG**: aura rarity is expressed as 1-in-N and tiers are defined by N (Basic = 1 in 1 to 1 in 999); biome-exclusive auras are bumped up a tier. Reported top-end odds: Sovereign 1/750,000,000, Gargantua 1/430,000,000, Abyssal Hunter 1/400,000,000 (older list); Luminosity 1/1,200,000,000; Monarch 1/3,000,000,000 and gated by a condition before entering the loot pool. The "rarest" changes with each era. — [Dot Esports](https://dotesports.com/roblox/news/what-is-the-rarest-aura-in-sols-rng); [rblxguide Luminosity](https://rblxguide.com/games/sols-rng/auras/luminosity); [allthings.how tier list](https://allthings.how/sols-rng-aura-tier-list-every-rarity-and-drop-rate-ranked/); [rblxguide rarity tiers](https://rblxguide.com/games/sols-rng/updates/auras-list-by-rarity)
- **Sol's RNG boosts**: a "Godlike Potion" is listed at +40,000,000% luck for one roll; the Singularity Gauntlet at +2,200% luck. — (attribution per search summary) [solrng.wiki crafting](https://www.solrng.wiki/en/crafting/how-to-craft/), [Droid Gamers crafting](https://www.droidgamers.com/guides/sols-rng-crafting/)
- **Anime Vanguards banner odds**: Rare 75.496%, Epic 20%, Legendary 4%, Mythic/Exclusive 0.5%, Vanguard 0.005%. Pity: Legendary at 50 summons, Mythic at 400 (Special and Selection banners share pity); a Secret pity at 5,000 summons was added with the 2nd Anniversary update; Vanguard pity is reported at 20,000–25,000 summons. A minority source gives Mythic pity 500. — [seemeta summon rates](https://seemeta.com/en/anime-vanguards/summon-rates); [RoboLibrary wiki](https://robolibrary.org/wikis/anime-vanguards)
- **PS99 Huge odds are not officially published**; community estimates for a standard egg range from about 1 in 500,000 to 1 in 2,000,000. The Huge Hunter enchant is listed at +25% Huge odds each. — [TheGamer](https://www.thegamer.com/roblox-pet-simulator-99-how-to-get-huge-pets/); [robloxdatabase.com](https://robloxdatabase.com/guides/how-to-get-huge-pets-in-pet-simulator-99/); [sabertoothgames](https://sabertoothgames.com/pet-simulator-99-hatch-luck-boosting-mechanics-explained/)
- **Adopt Me egg odds** (per guides): Pet Egg, 600 Bucks, 3% Legendary; Royal Egg 8% Legendary. — [games.gg egg guide](https://games.gg/adopt-me/guides/adopt-me-rare-egg-hatching-guide/)
- **Fisch bestiary as a gate**: the Rod of the Depths requires 100% completion of Vertigo's Bestiary, a Depths Key, two Enchant Relics (one Abyssal, one Hexed) placed on altars, and 750,000 C$. The official wiki's progression guide places it as the 6th rod step, after Midas (3rd) and Wisdom (4th). — [Official Fisch Wiki, Rod Of The Depths](https://fischipedia.org/wiki/Rod_Of_The_Depths); [Official Fisch Wiki, Progression Guide](https://fischipedia.org/wiki/Progression_Guide)
- **Fisch levels**: level-locked rods at level 500 (No-Life Rod) and 1,000 (Seraphic Rod); level cap 2,000. — (attribution per search summary) [rblxguide beginner guide](https://rblxguide.com/games/fisch/updates/beginner-guide)

#### Reroll / enchant systems
- **Anime Vanguards traits**: 11 trait families (Monarch, Ethereal, Deadeye, Solar, Blitz, Marksman, Fortune, Scholar, Vigor, Swift, Range). 2026 sources give Monarch 0.1% (1 in 1,000) with pity at 1,500 rerolls, and Vigor/Swift/Range about 26% each. A 2024 list gave Monarch 0.375%, Ethereal 0.175% and Solar 0.5%, which likely predates a rebalance. — [seemeta traits](https://seemeta.com/en/anime-vanguards/traits); [Bloxodes traits](https://bloxodes.com/wiki/anime-vanguards/traits); older figures: [Twinfinite](https://twinfinite.net/guides/anime-vanguards-traits-tier-list/)
- **Fisch enchanting**: done at the Keeper's Altar, which is active only at night, using Enchant Relics; the Rod of the Depths gives a 10% chance for an extra catch to be an Enchant Relic. — [Fandom, Enchant Relic](https://fisch.fandom.com/wiki/Enchant_Relic); [Official Fisch Wiki, Rod Of The Depths](https://fischipedia.org/wiki/Rod_Of_The_Depths)

#### Zone gating and account-level meta in run-based games
- **Bee Swarm Simulator**: one guide reports the final hive slot costs 2,169,203,229,760 honey. — (attribution per search summary) [Of Zen and Computing progression guide](https://www.ofzenandcomputing.com/bee-swarm-simulator-hive-progression-guide/)
- **99 Nights in the Forest**: classes are the persistent layer. They are bought only with diamonds and change starting tools and early priorities. The roster grew from 24 (older GamesRadar count) to 39 (later guides). — [GamesRadar classes](https://www.gamesradar.com/games/simulation/99-nights-in-the-forest-classes-all); [PC Gamer classes](https://www.pcgamer.com/roblox/99-nights-in-the-forest-classes)
- **Dead Rails**: classes are bought from the Tailor in the lobby with Bonds, which are found during runs or bought at the Lobby Bank. Reported prices: Doctor and Miner 15, Arsonist 20, Cowboy/Conductor about 50, Survivalist/Priest/Demolitionist 75, Ironclad 100 Bonds. One wiki counts 29 classes. — [Dead Rails Wiki, Classes](https://dead-rails-game.fandom.com/wiki/Classes); [Beebom bonds guide](https://beebom.com/how-to-get-and-use-bonds-in-dead-rails/); [Bloxodes classes](https://bloxodes.com/wiki/dead-rails/classes)
- **Doors**: modifiers that let players alter runs after beating the game were added on 26 Aug 2023 (from an unreviewed wiki draft). — [Draft: DOORS wiki mirror](https://wiki.riteme.site/wiki/Draft:DOORS_(Roblox_Game))
- **Dress to Impress**: total Stars set the player's rank, on a ladder from New Model to Fashion Goddess; Style Showdown winners get 100 Stars; some pass tiers pay Stars. — (attribution per search summary) [rblxguide beginners guide](https://rblxguide.com/games/dress-to-impress/updates/beginners-guide), [rblxguide Style Showdown](https://rblxguide.com/games/dress-to-impress/updates/style-showdown-guide)
- **Rivals**: ranked play is gated (one source: reach Level 100; another: 10 placement duels); ranked formats listed are 1v1, 2v2, 3v3. — [allthings.how ranked](https://allthings.how/roblox-rivals-ranked-mode-and-ranks-explained/)
- **Forsaken**: Player Points buy new survivors, killers, skins and emotes. — [ForsakenHub guide](https://www.forsakenhub.com/roblox-forsaken-guide)

#### Official guidance on end-game
- Roblox calls this the "ending system": what is available "after they've completed the main objectives of your game or reached higher levels". To improve D30, add content regularly and add social mechanics: "trading, parties, guilds, and competitive systems such as PvP (player versus player), tournaments and leaderboards". — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Major update types Roblox lists: Social (guilds, trading, parties), Competitive (PvP, leaderboards, tournaments), "Collections and achievements" (new short, mid and long-term completionist goals, like collectible pets or season passes), and Live Events. — [Roblox Creator Hub, LiveOps essentials](https://create.roblox.com/docs/production/game-design/liveops-essentials)
- Cadence content should "not be immediately consumed by the majority of players"; games with progression should add permanent content "at the end of the progression, where seasoned players are starting to run out of objectives". — [Roblox Creator Hub, Content updates](https://create.roblox.com/docs/production/game-design/content-updates)

### Inferences
- **Exponential cost, linear reward.** Using the commonly cited figures for Steal a Brainrot ($1M at Rebirth 1, $250B at Rebirth 10), the cash requirement grows by an average factor of about 4x per rebirth (250,000^(1/9) ≈ 3.98), while the income multiplier rises by roughly +1x per level (x8 at Rebirth 9, x9 at Rebirth 10). Each rebirth therefore takes longer than the last even with the bonus. This is my calculation from guide numbers that conflict in places.
- **Rebirths also gate content, not just multipliers.** Steal a Brainrot requires specific Brainrots (a collection check) for each rebirth and hands out gear and lock time; PS99 unlocks Auto Hatch, Mastery and items by rebirth number. The reset is used as a feature-unlock track.
- **Variant layers multiply the collection without new art.** One Brainrot × ~15 mutations, one crop × 150+ mutations, one pet × normal/neon/mega or normal/golden/rainbow/shiny. Roblox's content-updates doc recommends exactly this ("simple variants on existing assets") and cites Adopt Me pet variants.
- **Under current Adopt Me numbers**, a Legendary Mega Neon needs at least 183 × 16 ≈ 2,900 aging tasks before counting Neon-stage aging; community totals of 3,660–5,500 suggest Neon stages add more. Rough estimate only.
- **Pity counters turn pure RNG into a visible long-term goal.** Anime Vanguards publishes thresholds from 50 summons (Legendary) to 5,000 (Secret) and 20,000+ (Vanguard), which gives a guaranteed ceiling at several orders of magnitude of play time.
- **Odds scale with era.** Sol's RNG's rarest aura went from hundreds of millions (older lists) to billions (2026 lists) as luck multipliers inflated; the meta-game is an arms race between luck stats and new rarer targets.
- **Run-based hits keep the run pure and put the meta in the lobby**: classes for diamonds (99 Nights), classes for Bonds (Dead Rails), modifiers (Doors), characters for Player Points (Forsaken).

### Gaps
- **Exact rebirth cost tables** are inconsistent across guides for Steal a Brainrot, and I could not open the wiki to settle them. Use the figures above as "commonly cited".
- **Pet Simulator X / PS99**: no sourced numbers for golden/rainbow/shiny conversion rates, Titanic odds, enchant slot counts or rank rewards. Huge odds are community estimates only.
- **Bee Swarm Simulator**: badges, beequips, sticker book and end-game time investment not sourced.
- **Blox Fruits**: mastery requirements, max level as of November 2026, race V4 and awakening costs not sourced.
- **Anime Vanguards secret-unit drop rates per stage**, evolution material costs, and **Anime Defenders / ASTD** trait odds not sourced.
- **Clan battles, leaderboards and raids** as end-game: only named at mode level (Anime Vanguards Infinite leaderboard, Blox Fruits raids at level 1,100); no reward or cadence data.
- **Sol's RNG**: collection/index bonuses, bonus-roll rules and biome mechanics not sourced; gauntlet stats conflict.
- **Grow a Garden**: pet system numbers, offline growth caps and trading rules not sourced.

---

## 3. Onboarding / FTUE: techniques and official guidance

### Takeaway
Roblox's official position is explicit: get the player through the core loop once within about five minutes, with visuals instead of text, give starter items or currency, then end on a designed "moment of joy" and a visible preview of long-term goals. The top games implement this by removing the tutorial altogether and making the first loop pass nearly free: a free rod, 20 Sheckles next to a seed shop, a 90-coin egg next to breakable coins, a starter Brainrot rolling past the spawn.

### Cited Findings

#### What Roblox says FTUE is and how it is measured
- "Onboarding, also known as the First-Time User Experience (FTUE), comprises the first few minutes of gameplay that new players experience." Success is judged on two things: Day 1 retention and onboarding goals. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- The three onboarding goals: "Teach the essentials", "Get to the fun quickly", "Leave players wanting more". — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- Onboarding must teach the core loop: "It is critical that players understand both what they are expected to do and why they should do it." — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- "New players typically decide their interest in a game within minutes." Value must be shown quickly through progression, social motivators, and starter items and currency. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- Time budget: "Avoid a complex or time consuming FTUE, as you want to get users to the fun as quickly as possible, ideally in 5 minutes or less after entering your game." — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- "Ensure users have fun within the first five minutes of joining your game." — [Roblox Creator Hub, Engagement](https://create.roblox.com/docs/production/analytics/engagement)
- Why it matters more on Roblox: "Because games are so easy to join and leave, FTUEs that get users into the fun quickly tend to do better on Roblox. Lengthy, detailed tutorials are liable to bore users and cause them to bounce". — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)
- "Roblox players like to get to the action immediately and figure it out on their own (or with friends). If you must have a tutorial, keep it short, contextual, and interactive." — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies)

#### The FTUE recipe in Roblox's retention doc
- Three steps: (1) "Use a brief tutorial or contextual info like tooltips to guide users through your core loop"; (2) "Deliver a joyful moment after users complete your core loop for the first time"; (3) "Preview the progress that users can make if they complete your core loop multiple times." — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Moment of joy: "Joy can be elicited through rewards, delightful animations, and celebratory visual effects when a player achieves a milestone. Ending the onboarding experience with an intentionally designed moment of joy leaves players feeling accomplished and excited to return". — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- Goals preview: "Providing short, mid, and long-term goals help players conceptualize future play sessions", through "skill trees, season passes, quests, collections", surfaced "in highly visible places, either in the game-world or the UI". Example shown: Jailbreak's season pass. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)

#### Specific techniques named by Roblox
- **Three onboarding techniques**: visual elements, contextual tutorials, timed hints. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Visual elements** listed: "A bouncing arrow pointing at a button in the UI", "Particle effects over an item of interest in the world", "A glowing trail in the world that directs players to a destination", "An in-world sign displaying a game's core loop." — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Why not text**: "Players generally don't like to read instructions and skip through text prompts to get to gameplay." Visuals also need no translation and work for children still learning to read and on small mobile screens. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **In-world sign (prominence)**: in Color or Die, a sign explaining the survival mechanic is placed in the player's line of sight as they collect their first paint bucket; "It's impossible to miss, but doesn't prevent the player from starting the game." — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **UI spotlight (highlights)**: in Hello Kitty Cafe the target button is spotlighted, the rest of the screen dimmed, with a pink outline and an arrow. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Directional trail**: Hello Kitty Cafe uses a trail that "strongly suggest[s] an action, but [doesn't] require it"; Creatures of Sonaria and Winds of Fortune use directional arrows and icons. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Environmental hints**: in Jailbreak, footprints hint at an escape route so players "solve the problem themselves, and feel clever for figuring it out". — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Feedback as teaching**: Winds of Fortune combat uses hit flashes, red damage numbers, a red low-health screen effect, health bars, coins flying out of defeated enemies and a quest counter, so most players understand combat "without needing a more explicit combat tutorial". — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Contextual ("just in time") tutorials**: triggered by normal play. Squishmallows shows the combine-station tutorial only when the player holds two identical items, and the marketplace tutorial only when the player finds the marketplace. Benefits: better learning retention, faster onboarding, reduced cognitive load. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **Timed hints**: shown only to players who are slow. Example from Roblox's Plant game: if playtests show most players press "PLANT CABBAGE SEED" within 10 seconds, highlight the button at 11 seconds. An arrow over the correct market stall is the second example. Hints should appear only the first time and only for those who need them. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- **UI attention tools**: bright colour for crucial buttons, and movement: "Particle effects, wiggling buttons, and animated arrows are often used in tutorials for guidance." Badges on buttons signal new or completed missions. — [Roblox Creator Hub, UI and UX design](https://create.roblox.com/docs/production/game-design/ui-ux-design); [Roblox Creator Hub, Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)
- **Starter items and currency**: "Providing free items like equipment or soft currency allows players to engage with your systems early." Roblox suggests A/B testing different starting currency amounts. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- **Low early XP thresholds**: "Keeping thresholds low for a player's early levels allows them to level up quickly and feel the fun of progression immediately." — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- **Quests as tutorial**: quest-based tutorials promote active learning, break complex tasks into discrete steps, spread tutorials over time, give analytics on where players struggle, and reward players for learning. — [Roblox Creator Hub, Introduction to quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)
- **Starter pack**: defined as "an initial offer of an item or bundle of items that a new user sees within the first few minutes after joining an experience". — [Roblox Creator Hub, Monetization foundations](https://create.roblox.com/docs/production/game-design/monetization-foundations)
- **Genre conventions as free onboarding**: "The closer your design patterns and user experience are to the most popular games in that genre, the less you have to explain upfront"; users also "help each other out and fill in the gaps". — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)
- **Do not isolate new players**: "Don't create barriers like individual server instances that prevent users from playing with friends." — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies)

#### Measuring the funnel
- Roblox's funnel events track onboarding, progression and shop drop-off. Onboarding steps are logged with `AnalyticsService:LogOnboardingFunnelStepEvent(player, stepNumber, stepName)`, starting at `PlayerAdded`. "Your onboarding flow is a great place to start tracking funnel events, as this is likely where you lose the majority of your users." — [Roblox Creator Hub, Funnel events](https://create.roblox.com/docs/production/analytics/funnel-events)
- Worked example: in the Plant onboarding funnel ("In Farm" → "Plant Seed" → ...), the largest drop-off is step 2, "Plant Seed". Suggested fixes: add contextual indicators, or require a successful plant before the player explores the rest of the game. — [Roblox Creator Hub, Funnel events](https://create.roblox.com/docs/production/analytics/funnel-events)
- Roblox recommends A/B tests on individual tutorial steps, e.g. "a shorter dialogue sequence versus a guided arrow", or a 5-second versus 10-second timed-hint delay. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding); [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- The "New User First Session Retention" chart shows how many new users are still playing X minutes after first joining. — [Roblox Creator Hub, Engagement](https://create.roblox.com/docs/production/analytics/engagement)
- Roblox staff also published Developer Forum posts on this topic. — [DevForum, Learn More About FTUE & Onboarding](https://devforum.roblox.com/t/learn-more-about-first-time-user-experience-onboarding/2621940); [DevForum, Improving Onboarding through Funnel Events](https://devforum.roblox.com/t/improving-onboarding-through-funnel-events/3064458)

#### How the hit games apply it (from guides)
- Free first tool: Fisch gives a free Flimsy Rod at spawn in Moosewood. — [rblxguide Fisch beginner guide](https://rblxguide.com/games/fisch/updates/beginner-guide)
- Starter currency sized to exactly one first purchase: Grow a Garden's 20 Sheckles buy two carrot seeds. — (attribution per search summary) [BlueStacks guide](https://www.bluestacks.com/blog/game-guides/roblox/rl-grow-a-garden-beginners-guide-en.html)
- First-egg moment: PS99's first egg costs 90 coins, earned by breaking the objects at spawn. — [petsimulator99-wiki.wiki beginner guide](https://petsimulator99-wiki.wiki/beginner-guide/)
- Starter cash plus a moving shop at spawn: Steal a Brainrot gives enough cash for a basic character from the conveyor. — [Pro Game Guides](https://progameguides.com/guides/complete-steal-a-brainrot-beginners-guide/)
- Free starter loadout and a practice space: Rivals' free four-slot loadout and Shooting Range; "Beginner and Daily Tasks" act as guided onboarding. — [Bloxodes Rivals beginner guide](https://bloxodes.com/articles/rivals-beginner-guide)
- Counter-example with no onboarding: Lumber Tycoon 2 is described as having "no tutorial worth the name", so players need a wiki. — [DungeonPath](https://dungeonpath.com/posts/pillar/roblox-tycoon-games-compared/)
- Third-party (not Roblox) rule of thumb: core onboarding should take about 60–90 seconds. — [creation.dev glossary](https://www.creation.dev/glossary/onboarding); [RoWatcher](https://rowatcher.com/news/roblox-onboarding-in-90-seconds-or-your-game-is-already-dead)

### Inferences
- **The "15-second hook" in practice** is spatial, not instructional: the spawn point faces the core interaction (shop, conveyor, coin piles, campfire), the starting currency equals the price of the first purchase, and the first reward lands within one action. This matches Roblox's "get to the fun quickly" and "starter items and currency" guidance, though Roblox's docs speak of minutes, not 15 seconds.
- **Forced first purchase with soft currency** is how Grow a Garden, Steal a Brainrot and PS99 teach the whole loop in one pass: buy → place → earn → sell/collect. There is nothing else the starting currency can be spent on.
- **Shared servers act as a free goal preview.** Seeing other players' gardens, bases and pets replaces the "preview the progress" step Roblox recommends.
- **Timed shop restocks (5 minutes in Grow a Garden) double as a first-session retention device**: they give a new player a concrete reason to stay until the next restock.
- **Roblox's worked example for an FTUE funnel is literally a plant-and-sell game** (its "Plant" reference project), the same structure as Grow a Garden. A report can use the Plant funnel ("In Farm" → "Plant Seed" → harvest → sell) as the canonical template.

### Gaps
- **No developer talks were retrieved**: nothing from RDC sessions, GDC talks, or devlogs by Preston/BIG Games, Uplift Games, Gamefam, Twin Atlas or Grandma's Favourite Games could be searched before the search budget ran out. Only one Jandel quote (GamesBeat) and one Sam Brakta attribution (The Star) are in these notes.
- The two Roblox staff DevForum posts are cited by title only; I could not read their content.
- **No sourced evidence** on whether specific hits use beams/arrows at first spawn, "playtime rewards" timers, daily login gifts, or pulsing UI; the techniques are documented by Roblox in general terms and with other games (Hello Kitty Cafe, Color or Die, Jailbreak, Squishmallows, Creatures of Sonaria, Winds of Fortune).
- No sourced FTUE description for Adopt Me (starter egg), Blox Fruits (first quest giver), Bee Swarm Simulator (first bee/bear quest), Doors or Brookhaven.
- No funnel completion percentages for any named game are public in the sources reached.

---

## 4. Session-structure patterns and loop layering

### Takeaway
Roblox sessions are short and promiscuous: the median successful game holds a player under 10 minutes per session and players hop between several games per sitting. Top games therefore layer loops so that each layer gives a reason to return on a different clock: seconds (the action), minutes (purchase/round), a built-in timer of minutes to hours (restocks, offline growth, base locks), and days to weeks (dailies, season passes, updates, rebirth ladders).

### Cited Findings

#### Platform-level session data
- GameAnalytics' 2026 Roblox benchmark (500+ experiences with at least 1M MAU, Aug 2025–Jul 2026): median average session length 9.8 minutes; 75th percentile 12 minutes; 90th percentile 14.7 minutes. Median D1 retention 10.3%, D7 1.6%, D30 0.5%. The median player logged three sessions and 22.4 minutes of play per day. — [GameDev Reports summary of GameAnalytics](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox); report hub: [GameAnalytics Roblox Benchmark Report](https://www.gameanalytics.com/reports/2025-roblox-report)
- Roblox: "A Roblox session typically means playing a handful of different games. Roblox is closer in many ways to YouTube than the App Store." It is "very common for users to join a game for a short time, switch to another, and repeat". — [Roblox Creator Hub, The Roblox user base](https://create.roblox.com/docs/production/roblox-user-base)
- Roblox splits users into "Tourists" (hop between games, variety over depth) and "Locals" (focus on a few games and "form almost all a game's engaged user base"); many locals start as tourists. — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)
- Roblox's dashboard example for D1 retention benchmark: 50th–90th percentile of 12.11%–18.73% among games with similar players. — [Roblox Creator Hub, Analytics dashboard](https://create.roblox.com/docs/production/analytics/analytics-dashboard)
- Genre claims without disclosed methodology: role-playing games have the longest average sessions; simulators are built for frequent, shorter sessions of 15–30 minutes. — [RoWatcher](https://rowatcher.com/news/which-roblox-games-keep-players-hooked-the-longest)
- An unsourced genre table lists D1/D7/D30 of 32%/14%/6.2% for simulators and 22%/8%/2.8% for horror, about three times GameAnalytics' median; treat as unreliable. — [bloxg.com](https://bloxg.com/statistics/roblox-retention-benchmarks)

#### Three structural archetypes (evidence per game)
- **Round-based / match**: Dress to Impress (theme + 5–6 minute timer + runway vote + podium) — [rblxguide](https://rblxguide.com/games/dress-to-impress/updates/beginners-guide); Rivals (first to five rounds) — [Bloxodes](https://bloxodes.com/articles/rivals-beginner-guide); Forsaken (50-second intermission, then round) — [ForsakenHub](https://www.forsakenhub.com/roblox-forsaken-guide); Blue Lock: Rivals (5v5 match) — [games.gg](https://games.gg/roblox/guides/blue-lock-rivals-beginners-guide/)
- **Run-based co-op (roguelike session)**: Doors (Door 1 to 100) — [GameWith](https://gamewith.net/roblox/57458); 99 Nights in the Forest (team of 1–5, day/night cycles, survive to night 99) — [PC Gamer](https://www.pcgamer.com/games/roblox/99-nights-in-the-forest-tips/); Dead Rails (train journey with a lobby meta-shop) — [Dead Rails Wiki](https://dead-rails-game.fandom.com/wiki/Classes)
- **Persistent progression**: Grow a Garden (offline growth, persistent plot) — [GamesBeat](https://gamesbeat.com/janzen-madsen-interview/); Steal a Brainrot (base, income, rebirth) — [games.gg](https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/); PS99 (areas and rebirths) — [petsimulator99-wiki.wiki](https://petsimulator99-wiki.wiki/beginner-guide/); Blox Fruits (levels and seas) — [rblxguide](https://rblxguide.com/games/blox-fruits/updates/blox-fruits-sea-2-walkthrough-2026); Fisch (rods, bestiary) — [Official Fisch Wiki](https://fischipedia.org/wiki/Progression_Guide)
- **Sandbox / social**: Brookhaven RP (no quests, levels or bosses) — [RoWatcher](https://rowatcher.com/news/what-is-brookhaven-rp-why-400k-players-choose-roblox-s-biggest-game); Roblox notes that in such games users "act as evergreen sources of content for each other". — [Roblox Creator Hub, Design for Roblox](https://create.roblox.com/docs/production/game-design/design-for-roblox)

#### Loop layers and their clocks
- Roblox's goal horizons: short-term goals "can be completed in a single play session"; mid-term goals "require days to weeks of play"; long-term goals "take months of play". Dailies must be short-term only. — [Roblox Creator Hub, Introduction to quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)
- Dailies are "short tasks with modest rewards" available for 24 hours that "incentivize players to log in every day" and act as a "resource drip". — [Roblox Creator Hub, Introduction to quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)
- Minutes-scale timers inside the hits: Grow a Garden seed shop restocks every 5 minutes — (attribution per search summary) [BlueStacks guide](https://www.bluestacks.com/blog/game-guides/roblox/rl-grow-a-garden-beginners-guide-en.html); Steal a Brainrot base lock lasts about 60 seconds — [Deltia's Gaming](https://deltiasgaming.com/how-to-play-steal-a-brainrot-roblox/); Fisch's enchant altar works only at night — [Fandom, Enchant Relic](https://fisch.fandom.com/wiki/Enchant_Relic); PS99 event chests are hourly — [allthings.how](https://allthings.how/lucky-block-breakout-in-pet-simulator-99-update-90/)
- Offline layer: Grow a Garden crops keep growing while the player is away. — [Gardening Know How](https://www.gardeningknowhow.com/garden-how-to/design/roblox-grow-a-garden-game)
- Weeks-scale layer (season pass): one month is "a good starting point" for season length; ten tiers "is a good place to start"; leave at least a one-week rest between seasons; missions reset daily, with weekly high-reward missions and double XP in the final week as catch-up. — [Roblox Creator Hub, Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)
- Update cadence as the outermost loop: "aim for minor content updates every 1–2 weeks and major system updates every 2–3 months". — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies); a second Roblox page says smaller updates every 2–4 weeks and bigger ones every 2–3 months. — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Retention maps to layers in Roblox's model: D1 ← core loop, FTUE and performance; D7 ← progression system; D30 ← "ending system" (content updates and social mechanics). — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Limited-time content "spurs engagement as players increase their efforts in a rush to beat the clock" and is "an essential element" of LiveOps. — [Roblox Creator Hub, Introduction to quest design](https://create.roblox.com/docs/production/game-design/introduction-to-quest-design)

### Inferences
- **Layer map (synthesis).** Seconds: click/roll/chop/collect. Minutes: purchase, round result, shop restock, base lock. Tens of minutes: new zone, campfire level, first rebirth step. Hours to days: rebirth ladder, offline income, dailies. Weeks: season pass (about 1 month, 10 tiers), limited-time events, weekly or fortnightly content drops. Months: collection completion, rarest variants, ranked ladders.
- **Design consequence of the 9.8-minute median session.** One full pass of the core loop plus one visible upgrade has to fit well inside 10 minutes, and the game must leave something maturing (crops, income, a timer) so the player has a reason to come back in the same day; the median player plays about three sessions a day.
- **Persistent-progression games dominate the concurrency records** (Grow a Garden, Steal a Brainrot, Steal An Egg) because idle income lets a player stay connected with little input, while round-based games need active attention. This is an inference from the mechanics; I found no source measuring AFK share.
- **Run-based horror/survival** has long single sessions by construction (a 100-door or 99-night run), so it relies on co-op and a lobby currency for return visits instead of timers.

### Gaps
- **No reliable per-genre session-length benchmark** was found; the only genre figures (RoWatcher, bloxg) do not disclose methodology.
- No sourced run lengths for Doors, Dead Rails or 99 Nights, and no round lengths for Forsaken, Rivals or Blue Lock: Rivals.
- No sourced data on daily-login or playtime-reward timer structures in the named games.
- I could not confirm update cadence for specific hits (e.g. Grow a Garden's weekly updates and "admin abuse" events) because the search budget ran out; the only related fact is the August 2025 "admin war" event.

---

## 5. Numeric pacing rules cited by developers and the platform

### Takeaway
Hard numbers from Roblox itself are few but clear: fun within 5 minutes, low early XP thresholds, timed hints tuned around a 10-second median, dailies completable in one session, 10 season tiers over about one month, content every 1–4 weeks and systems every 2–3 months. Exponential cost curves are standard in the idle-game literature (cost = base × growth^n, with growth around 1.1–1.15 in published examples), and the Roblox hits show much steeper steps between tiers (about 1.7–2.6x between early PS99 eggs, about 4x per Steal a Brainrot rebirth).

### Cited Findings

#### Roblox platform guidance with numbers
- FTUE to fun: "ideally in 5 minutes or less after entering your game". — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- "Users should be able to answer these questions [what makes it fun, different, worth replaying] within the first few minutes." — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies)
- Early levels: keep XP thresholds low so players "level up quickly and feel the fun of progression immediately"; the illustrated level-up curve rises exponentially. — [Roblox Creator Hub, Onboarding](https://create.roblox.com/docs/production/game-design/onboarding)
- Timed hints: example threshold of 10 seconds for most players, hint at 11 seconds; test 5-second versus 10-second delays. — [Roblox Creator Hub, Onboarding techniques](https://create.roblox.com/docs/production/game-design/onboarding-techniques)
- Progression pacing: "If users progress too fast, they might run out of content to explore. If they progress too slow, they might get bored and frustrated". Roblox suggests measuring player distribution per level and time to next level. — [Roblox Creator Hub, Retention](https://create.roblox.com/docs/production/analytics/retention)
- Do not gate the fun: "make sure there is still enough content available upfront to ensure new users can still have fun in their first session". Progression exists to "make content last longer, so you have time to make more content". — [Roblox Creator Hub, Engagement](https://create.roblox.com/docs/production/analytics/engagement)
- Season pass: about one month long, ten tiers, at least one week between seasons; tier spacing should be designed "relative to the average session time"; missions "never require spending hard currency". — [Roblox Creator Hub, Season pass design](https://create.roblox.com/docs/production/game-design/season-pass-design)
- Content cadence: under three weeks of effort per cadence release; "many games release content cadence updates every two weeks to one month"; limited-time events balanced "so that most players will require weeks to exhaust the entirety of the content". — [Roblox Creator Hub, Content updates](https://create.roblox.com/docs/production/game-design/content-updates)
- KPIs Roblox tells developers to target: D1 retention and average playtime per user for organic growth; D7/D30, conversion and ARPPU for sustained growth. — [Roblox Creator Hub, Recommended strategies](https://create.roblox.com/docs/get-started/strategies)
- Funnel bookkeeping: up to ten funnels per game; a user's saved step expires after 180 days without events. — [Roblox Creator Hub, Funnel events](https://create.roblox.com/docs/production/analytics/funnel-events)

#### Benchmarks to calibrate against
- Median D1 10.3%, D7 1.6%, D30 0.5%; median session 9.8 min (p90 14.7 min) across 500+ large Roblox games, Aug 2025–Jul 2026. — [GameDev Reports summary of GameAnalytics](https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox)

#### Cost-curve math (idle/incremental literature)
- Anthony Pecorella's "The Math of Idle Games" (Kongregate; three parts on Game Developer) covers growth, cost, prestige and generator balancing; Part II gives a worked generator cost of 5 × 1.1^n. — [Game Developer, Math of Idle Games Part II](https://www.gamedeveloper.com/game-platforms/the-math-of-idle-games-part-ii); [Kongregate blog](https://blog.kongregate.com/quest-for-progress-the-math-of-idle-games); [Game Developer, Part I](https://gamedeveloper.com/design/the-math-of-idle-games-part-i); [Game Developer, Part III (prestige)](https://gamedeveloper.com/design/the-math-of-idle-games-part-iii)
- Cookie Clicker building costs follow Cost_n = Cost_0 × 1.15^n. — (attribution per search summary) [Envato Tuts+, Numbers Getting Bigger](https://code.tutsplus.com/numbers-getting-bigger-the-design-and-math-of-incremental-games--cms-24023a)

#### Observed step sizes in Roblox hits (raw numbers from guides)
- PS99 first five egg prices: 90, 150, 250, 650, 1,500 coins. — [petsimulator99-wiki.wiki beginner guide](https://petsimulator99-wiki.wiki/beginner-guide/)
- PS99 rebirth stations every roughly 25 areas (25, 50, 75, 99, 125, 150, 175). — [petsimulator99-wiki.wiki beginner guide](https://petsimulator99-wiki.wiki/beginner-guide/)
- Steal a Brainrot: Rebirth 1 about $1M; Rebirth 10 about $250B; multiplier x8 at Rebirth 9 and x9 at Rebirth 10. — (attribution per search summary) [Beebom rebirth guide](https://beebom.com/steal-a-brainrot-rebirth-guide-levels-and-rewards/); [Bloxinformer rebirth wiki](https://bloxinformer.com/wikis/steal-a-brainrot/rebirth/)
- Steal a Brainrot permanent mutation odds: Gold about 10%, Rainbow about 1% (10x). Grow a Garden Rainbow 0.1% (×50). — [rblxguide](https://rblxguide.com/games/steal-a-brainrot/mutations); [Grow a Garden Wiki](https://growagarden.miraheze.org/wiki/Mutations)
- Adopt Me aging: 25 tasks (Common) to 183 (Legendary) since 12 Sep 2025, cut from 56–275. — [games.gg aging guide](https://games.gg/adopt-me/guides/adopt-me-pet-aging-guide/)
- Anime Vanguards rarity ladder: 75.496% / 20% / 4% / 0.5% / 0.005%, with pity at 50 / 400 / 5,000 / 20,000+. — [seemeta summon rates](https://seemeta.com/en/anime-vanguards/summon-rates)
- Blox Fruits world gates at levels 700 and 1,500, raids at 1,100. — [rblxguide Sea 2 walkthrough](https://rblxguide.com/games/blox-fruits/updates/blox-fruits-sea-2-walkthrough-2026)
- Fisch level-locked rods at 500 and 1,000, cap 2,000; first rod upgrade C$2,000; late rod C$750,000. — [rblxguide beginner guide](https://rblxguide.com/games/fisch/updates/beginner-guide); [Official Fisch Wiki](https://fischipedia.org/wiki/Rod_Of_The_Depths)
- PS99 rebirth timing advice from a guide: rebirth only when you have saved enough to buy the best Area 1 egg at once and "skip to Area 10+ within 5 minutes". — (attribution per search summary) [sabertoothgames](https://sabertoothgames.com/how-to-optimize-rebirth-order-in-pet-simulator-99/)

### Inferences
- **Early price steps are far steeper than classic idle curves.** PS99's first eggs step by ×1.67, ×1.67, ×2.6, ×2.3; classic idle generators use ×1.1–1.15 per unit. Roblox simulators sell few, large steps (each a new egg or zone with new art), not many small ones. My calculation from the guide prices.
- **About 4x cost per rebirth with about +1x multiplier per rebirth** (Steal a Brainrot, from conflicting guide figures) means each rebirth takes meaningfully longer than the previous one, which is how 19 levels stretch over months.
- **Rarity ladders step by roughly 5–10x per tier at the low end and 100x+ at the top** (Anime Vanguards: 4% → 0.5% → 0.005%; Steal a Brainrot: 10% → 1%; Grow a Garden Rainbow 0.1%). Top tiers are tuned to be seen on a server now and then, not owned by most players.
- **A working rule set a designer could derive from the above** (synthesis, not a quoted rule): first purchase under 30 seconds; first full loop pass under 2 minutes; fun and one visible upgrade inside Roblox's 5-minute window; several unlocks inside the 9.8-minute median session; a first reset or major milestone that needs more than one session; dailies sized to one session; a 10-tier monthly pass; content every 1–2 weeks.
- **Live rebalancing toward faster early progress** is visible in Adopt Me cutting aging tasks by about a third to a half in September 2025, consistent with Roblox's advice to keep early thresholds low.

### Gaps
- **No developer-cited numeric rules** (e.g. "time to first rebirth should be X minutes", "a new unlock every Y minutes") were found from Roblox developers; searches for DevForum postmortems and RDC talks could not be run before the search budget was exhausted. The rules above come from Roblox's docs and from numbers observed in guides.
- I could not confirm the often-quoted "1.07–1.15" cost growth range from Pecorella's text; only the 1.1 worked example and Cookie Clicker's 1.15 are sourced.
- No sourced time-to-first-rebirth measurements for any game.
- No prestige formula (e.g. prestige currency as a root of lifetime earnings) was retrieved from the idle-game articles; Part III covers it but could not be opened.
- Pages that need to be reachable for a follow-up pass: create.roblox.com (read here via the GitHub mirror), devforum.roblox.com, naavik.co, the Fandom wikis (pet-simulator, bee-swarm-simulator, blox-fruits, doors-game, dead-rails-game), fischipedia.org, bloxinformer.com, gamesbeat.com, gamedeveloper.com and en.wikipedia.org.
