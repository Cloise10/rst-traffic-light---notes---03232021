// Red to Green every 1 sec. repeat 4 times.
// Red on -> Red off -> Green on -> Green off (1 second delay each)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(2000)
    }
})
