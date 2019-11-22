import { IMargin } from './types/types';

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

export function calculatePosition(outerElem: HTMLElement, elemToZoom: HTMLElement) {
  const outerRectCenterX = outerElem.clientWidth / 2; // whats difference outerElem.clientWidth and outerRect.left + elemToZoomRect
  const outerRectCenterY = outerElem.clientHeight / 2; // originally: const viewportY = window.innerHeight / 2;

  const elemToZoomRect = elemToZoom.getBoundingClientRect();
  const elemToZoomCenterX = elemToZoomRect.left + elemToZoomRect.width / 2;
  const elemToZoomCenterY = elemToZoomRect.top + elemToZoomRect.height / 2;

  // Get offset amounts for image coords to be centered on screen
  const translateX = outerRectCenterX - elemToZoomCenterX;
  const translateY = outerRectCenterY - elemToZoomCenterY;

  return { translateX, translateY };
}

// export function createOuterElemPortal() {
//   const outerElemPortal = document.createElement('div');
//   outerElemPortal.style.width = '100vw';
//   outerElemPortal.style.height = '100vh';
//   document.body.appendChild(outerElemPortal);
//   return outerElemPortal;
// }
