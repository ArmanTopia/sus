input.onButtonPressed(Button.AB, function () {
	
})
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.showIcon(IconNames.Confused)
    basic.pause(100)
    basic.showIcon(IconNames.Angry)
    basic.pause(100)
    basic.showIcon(IconNames.Asleep)
    basic.pause(100)
    basic.showIcon(IconNames.Surprised)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
