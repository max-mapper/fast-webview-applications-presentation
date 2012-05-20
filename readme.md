# Fast WebView Applications

## a presentation given at @jsconfar 2012

- two ways to make iOS apps: native UI or web stack through WebView
- there are bad, bad defaults in the WebView

### Background philosophy:
  - cordoba: jewel of the world
  - cordova: diamond in the rough
  - carthago delenda est - "Furthermore I think Carthage must be destroyed"
  - "Cato the Elder would always end with this expression even if he had not been discussing Carthage in the speech."
  - @izs - stagnation vs chaos. js vs obj-c

### Why go through all the trouble?
  - WebView benefits
    - Fast load times
    - PhoneGap plugins
      - fb + twitter sdk
      - push notifications
    - Persistence control
    - UI control

### doin-it-wrong app
  - ~400ms delay for clicks
  - defaults.css

### touchevents app
  - listenForTouches - touch-helpers.js
  - Zepto
    - webkit specific
    - smaller footprint
    - code is easy to read
    - broken up into pieces
    - zepto.touch && tap event
  - Phantom Limb

### templating app
  - Templating: github.com/janl/mustache.js
  - Routing: github.com/flatiron/director
  - overflow-scrolling.css

### form app
  - Spriting
    - glue images/ . --simple --algorithm=vertical
    - Retina
  
### Oddities
  - datetime
    - focus weirdness
    - placeholder/value
  - localStorage 5.1
  - XCode (in general)
  - debugging (in general)
  - anti-aliasing dom elements

### Animation - animations.css
  - Always test on device!
  - use built in stuff when possible
  - Scrollability
  - https://github.com/jeremyckahn/stylie
  - keyframe vs cubic bezier
  - cubic-bezier cant have < 0, > 100
  - position: absolute vs -webkit-transform

### Experimental
  - websockets/streaming xhr
  - svg/canvas
  - filesystem access
  