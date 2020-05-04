# useHoverIntent

Integrate the [hoverintent library](https://www.npmjs.com/package/hoverintent) into React hooks

## HoverIntent

Rather than firing `hoverin` and `hoverout` events immediately, `hoverintent` applies heuristics to only fire when a user intends to hover over an element.

This is often useful when building multiple nested lists as sibling elements. Often, when trying to scroll from the root of an item into its children, the mouse passes over the root of an adjacent item. Natively, the DOM will instantly fire the `hoverout` event on the current item. Similarly, the adjacent item would fire the `hoverin` event, which does not reflect the user's intent. These events are intercepted by `hoverintent` and only fired by an element if the user wants them to.

## Usage

```tsx
const firstRef = useHoverIntent<HTMLButtonElement>({ 
  hoverIn: () => {console.log("entering first element")},
  hoverOut: () => {console.log("exiting first element")},
  opts: {
    interval: 1000
  }
});
const secondRef = useHoverIntent<HTMLButtonElement>({ 
  hoverIn: () => {console.log("entering second element")},
  hoverOut: () => {console.log("exiting second element")},
});

return (
  <div>
    <button ref={firstRef}>First</button>
    <button ref={secondRef}>Second</button>
  </div>
);
```

## Developing

1. `git clone git@github.com:abmagil/useHoverIntent.git`
1. `npm i; npm start;` # this builds the source code
1. `cd example/; npm i; npm start;` # this starts the sample app to demonstrate the behavior of the code
1. _in browser_ http://localhost:1234 # the URL for the demo app