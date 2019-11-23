import GenericZoom, { ZoomOverlay } from '../src/index';
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
  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.backgroundColor = 'blue';

  const zoomOverlay = new ZoomOverlay({ outerElem });

  const zoomInButton = document.createElement('button');
  zoomInButton.innerText = 'zoom';
  zoomInButton.addEventListener('click', () => {
    zoomOverlay.zoom();
  });
  const zoomOutButton = document.createElement('button');
  zoomOutButton.style.position = 'absolute';
  zoomOutButton.style.bottom = '-30px';
  zoomOutButton.innerText = 'zoom out';
  zoomOutButton.addEventListener('click', () => {
    zoomOverlay.unZoom();
  });

  outerElem.appendChild(zoomInButton);
  outerElem.appendChild(zoomOutButton);
  return outerElem;
};

export const testGenericZoomWithOerlay = () => {
  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '500px';
  outerElem.style.backgroundColor = 'blue';

  // Zoom overlay
  const zoomOverlay = new ZoomOverlay({ outerElem });

  // Generic Zoom
  const imageWrapper = document.createElement('div');
  imageWrapper.style.width = 'fit-content';

  const img = document.createElement('img');
  img.src = '/pickle.png';
  img.style.width = '100px';

  const genericZoom = new GenericZoom({ outerElem, elemToZoom: img, elemToZoomWrapper: imageWrapper });

  const zoomInButton = document.createElement('button');
  zoomInButton.innerText = 'zoom';
  zoomInButton.addEventListener('click', () => {
    zoomOverlay.zoom();
    genericZoom.zoom();
  });
  const zoomOutButton = document.createElement('button');
  zoomOutButton.style.position = 'absolute';
  zoomOutButton.style.bottom = '-30px';
  zoomOutButton.innerText = 'zoom out';
  zoomOutButton.addEventListener('click', () => {
    zoomOverlay.unZoom();
    genericZoom.unZoom();
  });

  imageWrapper.appendChild(img);
  outerElem.appendChild(imageWrapper);
  outerElem.appendChild(zoomInButton);
  outerElem.appendChild(zoomOutButton);
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
