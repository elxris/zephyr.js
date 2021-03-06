// Copyright (c) 2016, Intel Corporation.

// Reimplementation of Arduino - Basics - Blink example
//   - Toggles an onboard LED on and off every second

// Hardware Requirements:
//   - None, to use the onboard LED
//   - Otherwise, an LED and a resistor
// Wiring:
//   For an external LED:
//     - Wire its long lead to the IO pin you choose below
//     - Wire its short lead to one end of a resistor
//     - Wire the other end of the resistor to Arduino GND
// Note: For a completely safe resistor size, find the LED's actual forward
//   voltage (or lowest reported), subtract from 3.3V, and divide by the
//   desired current. For example:
//     (3.3V - 1.8V) / 20 mA = 1.5 V / 0.02 A = 75 Ohms.
//   Larger resistors will make the LED dimmer. Smaller ones could reduce its
//     life.

console.log("Starting Blink example...");

// import gpio module
var gpio = require("gpio");
var pins = require("arduino101_pins");

// pin 8 is one of the onboard LEDs on the Arduino 101
// 'out' direction is default, could be left out
var pin = gpio.open({
    pin: pins.LED0,
    direction: 'out'
});

// remember the current state of the LED
var toggle = false;

// schedule a function to run every 1s (1000ms)
setInterval(function () {
    toggle = !toggle;
    pin.write(toggle);
}, 1000);
