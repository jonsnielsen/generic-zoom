import GenericZoom, { ZoomOverlay } from '../src/index';
import { makeZoomButtons } from './utils';
export default {
  title: 'Demo',
};

export const withOuterElem = () => {
  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.backgroundColor = 'blue';

  const imageWrapper = document.createElement('div');
  imageWrapper.style.width = 'fit-content';

  const img = document.createElement('img');
  img.src = '/pickle.png';
  img.style.width = '100px';

  const genericZoom = new GenericZoom({ outerElem, elemToZoom: img, elemToZoomWrapper: imageWrapper });
  img.addEventListener('click', () => {
    genericZoom.zoom();
  });

  const button = document.createElement('button');
  button.innerText = 'un zoom';
  button.addEventListener('click', () => {
    genericZoom.unZoom();
  });

  imageWrapper.appendChild(img);
  outerElem.appendChild(imageWrapper);
  outerElem.appendChild(button);
  return outerElem;
};

export const testZoomOverlay = () => {
  const outerElemWrapper = document.createElement('div');

  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.position = 'relative';
  outerElem.style.backgroundColor = 'blue';
  outerElem.innerText = 'overlay should cover this';

  // zoom overlay
  const zoomOverlayElem = document.createElement('div');
  const zoomOverlay = new ZoomOverlay({ outerElem, overlayElem: zoomOverlayElem });

  const zoomOverlayContainer = document.createElement('div');
  zoomOverlayContainer.style.position = 'relative';
  zoomOverlayContainer.style.width = '50px';
  zoomOverlayContainer.style.height = '50px';
  zoomOverlayContainer.style.backgroundColor = 'red';
  zoomOverlayContainer.innerText = 'overlay lives here';
  zoomOverlayContainer.appendChild(zoomOverlayElem);

  const buttons = makeZoomButtons({ zoomOverlay });
  buttons.style.position = 'absolute';
  buttons.style.bottom = '-30px';
  outerElem.appendChild(buttons);

  outerElemWrapper.appendChild(zoomOverlayContainer);
  outerElemWrapper.appendChild(outerElem);
  return outerElemWrapper;
};

export const testZoomOverlayWithScroll = () => {
  const outerElemWrapper = document.createElement('div');

  const paddingElem = document.createElement('div');
  paddingElem.style.height = '1000px';
  paddingElem.style.width = '100%';

  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.position = 'relative';
  outerElem.style.backgroundColor = 'blue';
  outerElem.innerText = 'overlay should cover this';

  // zoom overlay
  const zoomOverlayElem = document.createElement('div');
  const zoomOverlay = new ZoomOverlay({ outerElem, overlayElem: zoomOverlayElem });

  const zoomOverlayContainer = document.createElement('div');
  // zoomOverlayContainer.style.position = 'relative';
  zoomOverlayContainer.style.width = '50px';
  zoomOverlayContainer.style.height = '50px';
  zoomOverlayContainer.style.backgroundColor = 'red';
  zoomOverlayContainer.innerText = 'overlay lives here';
  zoomOverlayContainer.appendChild(zoomOverlayElem);

  const buttons = makeZoomButtons({ zoomOverlay });
  buttons.style.position = 'absolute';
  buttons.style.bottom = '-30px';
  paddingElem.appendChild(buttons);

  outerElemWrapper.appendChild(zoomOverlayContainer);
  outerElemWrapper.appendChild(paddingElem);
  outerElemWrapper.appendChild(outerElem);
  return outerElemWrapper;
};

export const testGenericZoomWithOerlay = () => {
  const outerElem = document.createElement('div');
  outerElem.style.position = 'relative';
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.backgroundColor = 'blue';

  // Zoom overlay
  const zoomOverlayElem = document.createElement('div');
  const zoomOverlay = new ZoomOverlay({ outerElem, overlayElem: zoomOverlayElem });

  // Generic Zoom
  const imageWrapper = document.createElement('div');
  imageWrapper.style.width = 'fit-content';

  const img = document.createElement('img');
  img.src = '/pickle.png';
  img.style.width = '100px';

  const genericZoom = new GenericZoom({ outerElem, elemToZoom: img, elemToZoomWrapper: imageWrapper });

  const buttons = makeZoomButtons({ zoomOverlay, genericZoom });
  buttons.style.position = 'absolute';
  buttons.style.bottom = '-30px';
  outerElem.appendChild(buttons);

  imageWrapper.appendChild(img);

  outerElem.appendChild(zoomOverlayElem);
  outerElem.appendChild(imageWrapper);
  outerElem.appendChild(buttons);

  return outerElem;
};

export const zoomToScroll = () => {
  const outerElemWrapper = document.createElement('div');
  outerElemWrapper.style.width = '100%';

  const paddingElem = document.createElement('div');
  paddingElem.style.height = '1000px';
  paddingElem.style.width = '100%';

  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.backgroundColor = 'blue';
  outerElem.style.position = 'relative';
  outerElem.style.right = '-200px';

  const imageWrapper = document.createElement('div');
  imageWrapper.style.width = 'fit-content';

  const img = document.createElement('img');
  img.src = '/pickle.png';
  img.style.width = '100px';

  const genericZoom = new GenericZoom({ outerElem, elemToZoom: img, elemToZoomWrapper: imageWrapper });
  img.addEventListener('click', () => {
    genericZoom.zoom();
  });

  const button = document.createElement('button');
  button.innerText = 'un zoom';
  button.addEventListener('click', () => {
    genericZoom.unZoom();
  });

  imageWrapper.appendChild(img);
  paddingElem.appendChild(imageWrapper);
  paddingElem.appendChild(button);

  outerElemWrapper.appendChild(paddingElem);
  outerElemWrapper.appendChild(outerElem);

  return outerElemWrapper;
};

/**
 * withDefaultOuterElem is deprecated. you HAVE to give it an outerElem
 */
// export const withDefaultOuterElem = () => {
//   // Wrapper is not outer elem, but just container for the elements
//   const wrapper = document.createElement('div');

//   const imageWrapper = document.createElement('div');
//   imageWrapper.style.width = 'fit-content';

//   const img = document.createElement('img');
//   img.src = '/pickle.png';
//   img.style.width = '100px';

//   const genericZoom = new GenericZoom({ elemToZoom: img, elemToZoomWrapper: imageWrapper });
//   img.addEventListener('click', () => {
//     genericZoom.zoom();
//   });

//   const button = document.createElement('button');
//   button.innerText = 'un zoom';
//   button.addEventListener('click', () => {
//     genericZoom.unZoom();
//   });

//   imageWrapper.appendChild(img);
//   wrapper.appendChild(imageWrapper);
//   wrapper.appendChild(button);

//   return wrapper;
// };
