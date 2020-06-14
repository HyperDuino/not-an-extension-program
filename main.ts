let x = 0
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.pause(1000)
led.enable(false)
basic.forever(function () {
    x = 0
    x += 1
})
