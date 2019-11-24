import { IMargin } from './types/types';

export const getScrollX = (elem: HTMLElement) => {
  return elem.getBoundingClientRect().left;
};

export const getScrollY = (elem: HTMLElement) => {
  return elem.getBoundingClientRect().top;
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

export function calculatePosition(outerElem: HTMLElement, targetElem: HTMLElement) {
  const outerElemRect = outerElem.getBoundingClientRect();
  const targetElemRect = targetElem.getBoundingClientRect();

  const outerElemCenterX = outerElemRect.width / 2;
  const outerElemCenterY = outerElemRect.height / 2;

  const targetElemCenterX = targetElemRect.width / 2;
  const targetElemCenterY = targetElemRect.height / 2;

  const diffOffsetLeft = getScrollX(outerElem) - getScrollX(targetElem); // TODO: Test what if target element is scrolled down from start?
  const diffOffsetTop = getScrollY(outerElem) - getScrollY(targetElem); // TODO: Test what if target element is scrolled down from start?

  const translateX = outerElemCenterX - targetElemCenterX + diffOffsetLeft;
  const translateY = outerElemCenterY - targetElemCenterY + diffOffsetTop;

  return { translateX, translateY };
}
