let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x = 2
})
function Sum (num: number, num2: number) {
    if (num != 0 && num2 != 0) {
        basic.showString("" + (num * num2))
    } else {
        basic.showString("X")
    }
}
input.onButtonPressed(Button.B, function () {
    y = 4
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Sum(x, y)
    basic.pause(1000)
    basic.clearScreen()
})
