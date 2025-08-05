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
  duoLayer,
  toKey,
  mapSimultaneous,
  writeToProfile,
  withModifier,
  hyperLayer,
} from 'karabiner.ts'

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile('Default', [

  duoLayer('d', 'f').manipulators([
    map('1').to('f1'),
    map('2').to('f2'),
    map('3').to('f3'),
    map('4').to('f4'),
    map('5').to('f5'),
    map('6').to('f6'),
    map('7').to('f7'),
    map('8').to('f8'),
    map('9').to('f9'),
    map('0').to('f10'),
    map('-').to('f11'),
    map('=').to('f12'),
  ]),

  duoLayer('j', 'k').manipulators([
    map('1').to('f1'),
    map('2').to('f2'),
    map('3').to('f3'),
    map('4').to('f4'),
    map('5').to('f5'),
    map('6').to('f6'),
    map('7').to('f7'),
    map('8').to('f8'),
    map('9').to('f9'),
    map('0').to('f10'),
    map('-').to('f11'),
    map('=').to('f12'),
  ]),

  layer('caps_lock', 'caps_lock pressed')
    .configKey((v) => v.toIfAlone('escape'), true)
    .modifiers('??')
    .manipulators({
      "return_or_enter": toKey('delete_or_backspace'),
      a: toKey('left_shift'),
      s: toKey('left_control'),
      d: toKey('left_option'),
      f: toKey('left_command'),
      g: toKey('tab'),
      h: toKey('tab', 'left_shift'),
      i: toIfAlone('up_arrow'),
      j: toKey('left_arrow'),
      k: toKey('down_arrow'),
      l: toKey('right_arrow'),
    }),
  rule('accent').manipulators([
    map('.', 'right_command').to('grave_accent_and_tilde', 'left_option'),
    map('e', 'right_command').to('e', 'left_option'),
  ]),
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
