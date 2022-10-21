joystickbit.initJoystickBit()
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("X=")
        basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.X))
    } else if (input.logoIsPressed()) {
        basic.showString("Y=")
        basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.Y))
    } else {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # . . . .
                # . . . .
                # # # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
            basic.showLeds(`
                # # . . .
                # . # . .
                # . # . .
                # . # . .
                # # . . .
                `)
            music.playTone(294, music.beat(BeatFraction.Whole))
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # # # . .
                `)
            music.playTone(330, music.beat(BeatFraction.Whole))
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # . . . .
                `)
            music.playTone(349, music.beat(BeatFraction.Whole))
        } else {
            basic.showIcon(IconNames.Heart)
        }
    }
})
