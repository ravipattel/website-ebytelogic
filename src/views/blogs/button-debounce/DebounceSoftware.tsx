import React from 'react'

export const softwareMethodsData = {
  title: "Software Debounce Methods",
  description: {
    text: "Software debouncing uses code running on a microcontroller to filter out switch bounce. This approach is often simpler and more cost-effective than hardware solutions, though it requires CPU time and careful implementation."
  },
  methods: [
    {
      id: "arduino",
      title: "Arduino Implementation",
      techniques: [
        {
          title: "Basic Delay-Based Debounce",
          description: "The simplest approach uses a delay after detecting a button press. While easy to implement, it blocks execution and introduces noticeable delays.",
          code: `
const int buttonPin = 2;
const int ledPin = 13;
int buttonState;
int lastButtonState = LOW;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);
  
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;
      if (buttonState == HIGH) {
        digitalWrite(ledPin, !digitalRead(ledPin));
      }
    }
  }
  lastButtonState = reading;
}
          `
        },
        {
          title: "State Machine-Based Debounce",
          description: "A more robust approach using a finite state machine to track button states and handle transitions properly.",
          code: `
enum ButtonState { BUTTON_RELEASED, BUTTON_PRESSED, BUTTON_DEBOUNCE };
ButtonState currentState = BUTTON_RELEASED;

void loop() {
  buttonState = digitalRead(buttonPin);
  switch (currentState) {
    case BUTTON_RELEASED:
      if (buttonState == HIGH) {
        currentState = BUTTON_DEBOUNCE;
        lastDebounceTime = millis();
      }
      break;
      
    case BUTTON_PRESSED:
      if (buttonState == LOW) {
        currentState = BUTTON_DEBOUNCE;
        lastDebounceTime = millis();
      }
      break;
      
    case BUTTON_DEBOUNCE:
      if ((millis() - lastDebounceTime) > debounceDelay) {
        if (buttonState == HIGH) {
          currentState = BUTTON_PRESSED;
          ledState = !ledState;
          digitalWrite(ledPin, ledState);
        } else {
          currentState = BUTTON_RELEASED;
        }
      }
      break;
  }
}
          `
        },
        {
          title: "Using the Bounce2 Library",
          description: "The Bounce2 library provides a simple, efficient interface for debouncing buttons with minimal code complexity.",
          code: `
#include <Bounce2.h>

Bounce debouncer = Bounce();
int ledState = LOW;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  debouncer.attach(buttonPin);
  debouncer.interval(50);
}

void loop() {
  debouncer.update();
  if (debouncer.fell()) {
    ledState = !ledState;
    digitalWrite(ledPin, ledState);
  }
}
          `
        }
      ]
    },
    {
      id: "raspberry-pi",
      title: "Raspberry Pi Implementation (Python)",
      techniques: [
        {
          title: "RPi.GPIO Library with Built-in Debouncing",
          description: "The RPi.GPIO library's `add_event_detect()` function includes a `bouncetime` parameter for easy debouncing.",
          code: `
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(ledPin, GPIO.OUT)

def buttonPressed(channel):
  print("Button pressed")
  GPIO.output(ledPin, not GPIO.input(ledPin))

GPIO.add_event_detect(buttonPin, GPIO.FALLING, callback=buttonPressed, bouncetime=200)
          `
        },
        {
          title: "Using gpiozero Library",
          description: "The higher-level gpiozero library provides a simple interface with built-in debouncing capabilities.",
          code: `
from gpiozero import Button, LED
from signal import pause

# 0.2 second debounce time
button = Button(14, bounce_time=0.2)
led = LED(15)

def buttonPressed():
  print("Button pressed")
  led.toggle()

button.when_pressed = buttonPressed
pause()
          `
        }
      ]
    }
  ]
};

const DebounceSoftware = () => {
  return (
    <section id="software-methods" className="py-16 px-8 bg-slate-50">
      {/* Title */}
      <h2 className="font-serif text-3xl font-semibold mb-4 text-center">
        {softwareMethodsData.title}
      </h2>
      {/* Description */}
      <div className="mb-8">
        <p className="text-gray-600 text-center">
          {softwareMethodsData.description.text}
        </p>
      </div>

      {/* Software Methods */}
      {softwareMethodsData.methods.map((method, index) => (
        <div id={method.id} key={index} className="mb-16">
          <h3 className="font-serif text-3xl font-semibold mb-8">
            {method.title}
          </h3>

          <div className="space-y-8">
            {method.techniques.map((technique, idx) => (
              <div className="bg-gray-50 rounded-md p-6" key={idx}>
                <h4 className="font-serif text-xl font-semibold mb-4">
                  {technique.title}
                </h4>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                <div className="bg-[#1e293b] text-white text-sm rounded-md p-4">
                  <pre>{technique.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default DebounceSoftware
