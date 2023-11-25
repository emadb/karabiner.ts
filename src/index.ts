import {
  ifApp,
  ifVar,
  layer,
  map,
  mapDoubleTap,
  NumberKeyValue,
  rule,
  simlayer,
  withCondition,
  withMapper,
  writeToProfile,
  hyperLayer,
} from 'karabiner.ts'

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile('Default', [
  layer('caps_lock', 'mod-layer').manipulators([
    map('a').to('left_shift'), 
    map('s').to('left_control'), 
    map('d').to('left_option'), 
    map('f').to('left_command'),
  ]),

  simlayer('f', 'nav-layer').manipulators([
    map('i').to('up_arrow'), 
    map('j').to('left_arrow'), 
    map('k').to('down_arrow'), 
    map('l').to('right_arrow'),
  ])



  // layer(['caps_lock'], 'nav-layer')
  // //.configKey((v) => v.toIfAlone('b', '⌘'), true)
  // .manipulators([
  //   // map('a').to('left_shift'), 
  //   // map('s').to('left_control'), 
  //   // map('d').to('left_option'), 
  //   // map('f').to('left_command'),

  //   map('i').to('up_arrow'), 
  //   map('j').to('left_arrow'), 
  //   map('k').to('down_arrow'), 
  //   map('l').to('right_arrow'),
  // ]),
])

/*
Karabiner-Elements profile parameters can also be set by the 3rd parameter
of writeToProfile('profileName', [ rules ], { params }). The default values are:

// Karabiner-Elements parameters
'basic.to_if_alone_timeout_milliseconds': 1000,
'basic.to_if_held_down_threshold_milliseconds': 500,
'basic.to_delayed_action_delay_milliseconds': 500,
'basic.simultaneous_threshold_milliseconds': 50,
'mouse_motion_to_scroll.speed': 100,

// karabiner.ts only parameters
//   for simlayer()
'simlayer.threshold_milliseconds': 200
//   for mapDoubleTap()
'double_tap.delay_milliseconds': 200,

 */
