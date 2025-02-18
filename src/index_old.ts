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
  simlayer('spacebar', 'mod-layer', 500)
    .options({
      key_down_order: 'strict',
    })
    .manipulators({
      a: toKey('left_shift'),
      s: toKey('left_control'),
      d: toKey('left_option'),
      f: toKey('left_command'),
      j: toKey('right_command'),
      k: toKey('right_option'),
      l: toKey('right_control'),
      ';': toKey('right_shift'),
      return_or_enter: toKey('delete_or_backspace'),
    }),

  rule('accent').manipulators([
    map('.', 'right_command').to('grave_accent_and_tilde', 'left_option'),
    map('e', 'right_command').to('e', 'left_option'),
  ]),

  layer('caps_lock', 'caps_lock pressed')
    .configKey((v) => v.toIfAlone('escape'), true)
    .modifiers('??')
    .manipulators({
      return_or_enter: toKey('delete_or_backspace'),
      i: toKey('up_arrow'),
      j: toKey('left_arrow'),
      k: toKey('down_arrow'),
      l: toKey('right_arrow'),
      // Questi sono comodi ma interferisco con lo shift per fare le parentesi
      // o: toKey('page_up'),
      // '.': toKey('page_down'),
      a: toKey('left_shift'),
      s: toKey('left_control'),
      d: toKey('left_option'),
      f: toKey('left_command'),
      g: toKey('tab'),
      q: toKey('1'),
      w: toKey('2'),
      e: toKey('3'),
      r: toKey('4'),
      t: toKey('5'),
      y: toKey('6'),
      u: toKey('7'),
      //i: toKey('8'),
      o: toKey('9'),
      p: toKey('0'),
    }),

  simlayer('return_or_enter', 'return_or_enter pressed')
    // .configKey((v) => v.toIfAlone('return_or_enter'), true)
    // .modifiers('??')
    .manipulators({
      q: toKey('1'),
      w: toKey('3'),
      e: toKey('3'),
      r: toKey('4'),
      t: toKey('5'),
      y: toKey('6'),
      u: toKey('7'),
      i: toKey('8'),
      o: toKey('9'),
      p: toKey('0'),
    }),

  simlayer('return_or_enter', 'return_or_enter-layer', 400)
    .options({
      key_down_order: 'strict',
    })
    .manipulators({
      j: toKey('right_command'),
      k: toKey('right_option'),
      l: toKey('right_control'),
      ';': toKey('right_shift'),
    }),
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
