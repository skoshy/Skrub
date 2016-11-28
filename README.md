# Skrub

A simple library by Stefan Koshy. Just contains random functions that are handy to have.

## What are some of the functions?

- `text.substringByStrings` - Gets a substring between two strings.
  
  *Example:* params: `{mainString: "We have 5 dogs", string1: "have ", string2: " "}`, output: `"5"`
- `dom.insertAfter` - Adds an element after a reference element
- `dom.eventFire` - Fires an event on a given element
- `dom.interval` - A better version of `setInterval` that allows a set amount of times the interval should be run, running the interval immediately, and easy stopping of the interval.

## How do I use it?

Simply include the code in the skrub.js file. You can then invoke any of the public functions by calling `Skrub`.

## Known Issues

- None so far

If you notice any other bugs, please let me know!