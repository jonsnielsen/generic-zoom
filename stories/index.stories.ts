import GenericZoom from '../src/index';
export default {
  title: 'Demo',
};

export const image = () => {
  const outerElem = document.createElement('div');
  outerElem.style.width = '100%';
  outerElem.style.height = '100vh';
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
