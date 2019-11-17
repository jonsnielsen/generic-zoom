import { IMargin } from '../types/types';

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

// /**
//  *
//  * @param elem element that gets its children transfered to the new element. That new element becomes it's new child.
//  */
// export const makeNewInnerElem = (elem: HTMLElement): HTMLElement | null => {
//   let newInnerElem: HTMLElement | null;
//   if (typeof document === 'undefined') {
//     newInnerElem = null;
//   } else {
//     newInnerElem = document.createElement('div');
//     newInnerElem.style.width = '100%';
//     newInnerElem.style.height = '100%';

//     console.log(elem);
//     // transfer elemToZooms children to newElemToZoom
//     while (elem.firstChild) {
//       console.log(elem.firstChild);
//       newInnerElem.appendChild(elem.firstChild);
//       elem.removeChild(elem.firstChild);
//     }
//     elem.appendChild(newInnerElem);
//   }
//   return newInnerElem;
// };
