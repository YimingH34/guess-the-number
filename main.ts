// When you press the A button it will increase the number you are guessing.
input.onButtonPressed(Button.A, function () {
    guess += 1
})
// You you give the microbit 6g of force it will show you the random number.
input.onGesture(Gesture.SixG, function () {
    basic.showNumber(random)
})
// When you press the A and B button, it will match the 2 numbers.
input.onButtonPressed(Button.AB, function () {
    // When random is smaller or equals to guess then
    if (random <= guess) {
        if (random != guess) {
            basic.showString("Too High")
        } else {
            basic.showString("You got it")
            // When you get the number some confetti will show up. and it will say you got it.
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Chessboard)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    } else {
        // Otherwise it will show too low.
        basic.showString("Too Low")
    }
})
// When you press the B button, it will decrease the number you are guessing.
input.onButtonPressed(Button.B, function () {
    guess += -1
})
// On start, It will pick a random number between 0-20.
let guess = 0
let random = 0
random = randint(0, 20)
guess = 0
