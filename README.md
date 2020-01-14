Work in progress: NOT PRODUCTION READY YET!

Inspired by [Medium Zoom](https://github.com/francoischalifour/medium-zoom/), but working by transforming the container element. Implied by the 'generic' part of the name, anything put in the component will be tranformed and scaled.

## Installation

The module is available on the [npm](https://www.npmjs.com) registry.

```sh
npm install medium-zoom
# or
yarn add medium-zoom
```

## Usage

<!-- > [Try it out in the browser](https://codesandbox.io/s/github/francoischalifour/medium-zoom/tree/master/website) -->

Import the library as a module: (NOTE the zoom overlay comes as a seperate module)

```js
import GenericZoom, { ZoomOverlay } from 'generic-zoom';
```

## API

```ts
interface IGenericZoom {
  outerElem: HTMLElement;
  elemToZoomWrapper: HTMLElement;
  elemToZoom: HTMLElement;
  zoomMargin?: IMargin;
  transitionDuration?: number;
  activeZIndex?: number;
}
GenericZoom({ outerElem, elemToZoomWrapper, elemToZoom, zoomMargin, transitionDuration, activeZIndex });
```

## framework integrations

- React: [generic-zoom-react](https://github.com/jsparvath/generic-zoom-react)
- Vue: ACCEPTING PULL REQUESTS
- Angular: ACCEPTING PULL REQUESTS

```

```
