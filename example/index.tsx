import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHoverIntent } from '../dist'

const App = () => {
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
    opts: {
      timeout: 2000
    }
  });
  
  return (
    <div>
      <button ref={firstRef}>First</button>
      <button ref={secondRef}>Second</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
