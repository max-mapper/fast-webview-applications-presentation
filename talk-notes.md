# Fast WebView Applications

## for @jsconfar 2012

- two ways to make native mobile apps: native UI or web stack through WebView
- problem: there are bad, bad defaults in WebViews

### Background philosophy:
  - cordoba: jewel of the world
    - europe pre-enlightenment, oppressed by churches
    - islam, a religion founded on SCIENCE
    - paved streets, street lights (con gas)
    - "public hospitals, universities, medical schools, restaurants and the world’s largest library, housing up to a million volumes"
    - "Contemporary Muslims who bring up the memory of Cordoba typically do so either to emphasize the need for a new Islamic scientific and industrial renaissance, or to emphasize the need for a multi-cultural and tolerant society."
  - cordova 
  - carthago delenda est - "Furthermore I think Carthage must be destroyed"
  - "Cato the Elder would always end with this expression even if he had not been discussing Carthage in the speech. TROLOLOL"
  - @izs - stagnation vs chaos. js vs obj-c

### Why go through all the trouble?
  - WebView benefits (vs web apps)
    - Fast load times/offline
    - Cordova plugins
      - fb + twitter sdk
      - push notifications
    - Persistence control
    - UI control

### doin-it-wrong app
  - ~400ms delay for clicks
  - see defaults.css

### touchevents app
  - listenForTouches - see touch-helpers.js
  - Zepto github.com/madrobby/zepto
    - webkit specific
    - smaller footprint
    - code is easy to read
    - broken up into pieces
    - zepto.touch && tap event
  - Phantom Limb

### templating app
  - Templating: github.com/janl/mustache.js
  - Routing: github.com/flatiron/director && see routes.js
  - see overflow-scrolling.css

### form app
  - Spriting - see sprite.css
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
  