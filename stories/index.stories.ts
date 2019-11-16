import { Greeter } from '../src/index';
export default {
  title: 'Demo',
};

export const header = () => {
  const headerElem = document.createElement('header');
  headerElem.innerText = Greeter('yoo');
  return headerElem;
};

export const image = () => {
  const img = document.createElement('img');
  img.src = '/pickle.png';
  img.style.width = '100px';

  return img;
};

export const button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
