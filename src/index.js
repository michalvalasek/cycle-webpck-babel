/** @jsx hJSX */

import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

function main(drivers) {
  return {
    DOM: drivers.DOM.get('input', 'click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        <div>
          <input type="checkbox" /> Toggle me
          <p>{toggled ? 'ON' : 'off'}</p>
        </div>
      )
  };
}

let drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
