import GenericZoom from '../src/index';
export default {
  title: 'Demo',
};

export const withOuterElem = () => {
  const outerElem = document.createElement('div');
  outerElem.style.width = '500px';
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
