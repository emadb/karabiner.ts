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
import { hrm } from "karabiner.ts-greg-mods";

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile('Default', [
  rule("Home row mods").manipulators(
     hrm(
       new Map([
         ["a", "l⇧"],
         ["s", "l⌃"],
         ["d", "l⌥"],
         ["f", "l⌘"],

         ["j", "l⌘"],
         ["k", "l⌥"],
         ["l", "l⌃"],
         [";", "l⇧"],
      ])
     )
     .lazy(true)
     .holdTapStrategy("permissive-hold")
     .chordalHold(true)
     .build()
   ),
  layer('caps_lock', 'caps_lock pressed')
      .configKey((v) => v.toIfAlone('escape'), true)
      .modifiers('??')
      .manipulators({
        return_or_enter: toKey('delete_or_backspace'),
        a: toKey('left_shift'),
        s: toKey('left_control'),
        d: toKey('left_option'),
        f: toKey('left_command'),
        i: toKey('up_arrow'),
        j: toKey('left_arrow'),
        k: toKey('down_arrow'),
        l: toKey('right_arrow'),
      })

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
