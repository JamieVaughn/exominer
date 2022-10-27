export const refinerLevel = 4
export const constructorLevel = 5
// 4 => 3.04
// 5 => 4.06

export const mines = {

}

export const ores = {
  carbon: {value: 2, quantity: 0 },
  tin: {value: 4, quantity: 0 },
  cobalt: {value: 8, quantity: 0 },
  bismuth: {value: 16, quantity: 0 },
  cerustie: {value: 32, quantity: 0 },
  manganese: {value: 72, quantity: 0 },
  einherjer: {value: 150, quantity: 0 },
  darkMatter: {value: 320, quantity: 0 },
  kriptonie: {value: 680, quantity: 0 },
  coreium: {value: 1460, quantity: 0 },
  cerythium: {value: 3200, quantity: 0 },
  etherium: {value: 7000, quantity: 0 },
  cosmium: {value: 0, quantity: 0 },
  galaxium: {value: 0, quantity: 0 },
}

export const refined = {
  carbon: {value: 3340, time: 6, inputs: {carbon: 800} , quantity: 0 },
  tin: {value: 6900, time: 9, inputs: {tin: 800} , quantity: 0 },
  cobalt: {value: 14030, time: 13, inputs: {cobalt: 800} , quantity: 0 },
  bismuth: {value: 28750, time: 19, inputs: {bismuth: 800} , quantity: 0 },
  cerusite: {value: 63480, time: 26, inputs: {cerusite: 800} , quantity: 0 },
  manganese: {value: 138_000, time: 39, inputs: {manganese: 800} , quantity: 0 },
  einherjer: {value: 276_000, time: 58, inputs: {einherjer: 800} , quantity: 0 },
  manganeseAlloy: {value: 538_000, time: 78, inputs: {manganese: 1, carbon: 8} , quantity: 0 },
  cobaltAlloy: {value: 782_000, time: 156, inputs: {cobalt: 12, tin: 24} , quantity: 0 },
  kriptoniteAlloy: {value: 1_790_000, time: 195, inputs: {einherjer: 1, kriptonite: 800} , quantity: 0 },
  coreiumAlloy: {value: 3_750_000, time: 235, inputs: {manganeseAlloy: 1, coreium: 800} , quantity: 0 },
  cerythiumAlloy: {value: 7_150_000, time: 274, inputs: {cobaltAlloy: 1, cerythium: 800} , quantity: 0 },
  etheriumAlloy: {value: 16_100_000, time: 313, inputs: {kriptoniteAlloy: 1, etherium: 800} , quantity: 0 },
  cosmiumAlloy: {value: 99_100_000, time: 352, inputs: {coreiumAlloy: 1, cosmium: 800} , quantity: 0 },
  galaxiumAlloy: {value: 99_100_000, time: 391, inputs: {cerythiumAlloy: 1, galaxium: 800} , quantity: 0 },
  mythrilAlloy: {value: 99_100_000, time: 0, inputs: {} , quantity: 0 },
}

export const constructed = {
  cables: {value: 0, time: 14, inputs: {carbon: 4}, quantity: 0 },
  fuses: {value: 0, time: 29, inputs: {tin: 4}, quantity: 0 },
  heatSensor: {value: 0, time: 59, inputs: {cables: 1, carbon: 8}, quantity: 0 },
  ballBearing: {value: 0, time: 118, inputs: {fuses: 1, cobalt: 4}, quantity: 0 },
  glass: {value: 0, time: 177, inputs: {bismuth: 8}, quantity: 0 },
  circuit: {value: 0, time: 295, inputs: {cerusite: 4, bismuth: 4, cables: 8}, quantity: 0 },
  lense: {value: 0, time: 590, inputs: {glass: 1, manganese: 4}, quantity: 0 },
  laserOptic: {value: 0, time: 886, inputs: {einherjer: 4, tin: 8, lense: 1}, quantity: 0 },
  minirover: {value: 0, time: 1181, inputs: {manganese: 4, circuit: 4, ballBearing: 3}, quantity: 0 },
  solarPanel: {value: 0, time: 1476, inputs: {circuit: 4, glass: 8}, quantity: 0 },
  laserBlaster: {value: 0, time: 1772, inputs: {manganeseAlloy: 4, laserOptic: 1, lense: 4}, quantity: 0 },
  advancedSensors: {value: 0, time: 2215, inputs: {cobaltAlloy: 16, heatSensor: 24}, quantity: 0 },
  surfaceScanner: {value: 0, time: 2658, inputs: {kriptoniteAlloy: 4, laserOptic: 1, glass: 4}, quantity: 0 },
  planetExplorer: {value: 0, time: 3101, inputs: {coreiumAlloy: 4, minirover: 4}, quantity: 0 },
  planetDustCollector: {value: 0, time: 3323, inputs: {laserBlaster: 1, advancedSensors: 1, manganeseAlloy: 8}, quantity: 0 },
  plasmaCannon: {value: 0, time: 3692, inputs: {laserBlaster: 4, cerythiumAlloy: 12}, quantity: 0 },
  ionRocketEngine: {value: 0, time: 3840, inputs: {kriptoniteAlloy: 48, cerusite: 120, coreiumAlloy: 32}, quantity: 0 },
  mobileTelescope: {value: 0, time: 4135, inputs: {lense: 16, planetExplorer: 1}, quantity: 0 },
  advancedAntenna: {value: 0, time: 4430, inputs: {cobaltAlloy: 120, etheriumAlloy: 16}, quantity: 0 },
  xenonEngine: {value: 0, time: 4873, inputs: {manganeseAlloy: 320, ballBearing: 160}, quantity: 0 },
  planetRadar: {value: 0, time: 0, inputs: {}, quantity: 0 },
}
