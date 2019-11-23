import { IMargin } from './types/types';

export const getScrollX = (elem: HTMLElement) => {
  return elem ? elem.offsetLeft : 0;
};

export const getScrollY = (elem: HTMLElement) => {
  return elem.offsetTop;
};

export const getDocumentScrollY = () => {
  return document.scrollingElement ? document.scrollingElement.scrollTop : 0;
};

export const getDocumentScrollX = () => {
  return document.scrollingElement ? document.scrollingElement.scrollLeft : 0;
};

export const calculateScale = (
  outerWidth: number,
  outerHeight: number,
  innerWidth: number,
  innerHeight: number,
  margin: IMargin,
) => {
  const scaleX = (outerWidth - 2 * margin.horizontal) / innerWidth;
  const scaleY = (outerHeight - 2 * margin.vertical) / innerHeight;
  return Math.min(scaleX, scaleY);
};

export function calculatePosition(outerElem: HTMLElement, elemToZoomWrapper: HTMLElement) {
  const outerRectCenterX = outerElem.clientWidth / 2 + getScrollX(outerElem); // whats difference outerElem.clientWidth and outerRect.left + elemToZoomRect
  const outerRectCenterY = outerElem.clientHeight / 2 + getScrollY(outerElem); // originally: const viewportY = window.innerHeight / 2;

  const elemToZoomRect = elemToZoomWrapper.getBoundingClientRect();
  const elemToZoomCenterX = elemToZoomRect.left + elemToZoomRect.width / 2;
  const elemToZoomCenterY = elemToZoomRect.top + elemToZoomRect.height / 2;

  // Get offset amounts for image coords to be centered on screen
  const translateX = outerRectCenterX - elemToZoomCenterX - getDocumentScrollX();
  const translateY = outerRectCenterY - elemToZoomCenterY - getDocumentScrollY();
  console.log({ translateY });

  return { translateX, translateY };
}

// export function createOuterElemPortal() {
//   const outerElemPortal = document.createElement('div');
//   outerElemPortal.style.width = '100vw';
//   outerElemPortal.style.height = '100vh';
//   document.body.appendChild(outerElemPortal);
//   return outerElemPortal;
// }
