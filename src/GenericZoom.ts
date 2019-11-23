import { calculateScale, calculatePosition } from './utils';
import { IMargin } from './types/types';

interface IGenericZoom {
  outerElem: HTMLElement;
  elemToZoom: HTMLElement;
  activeZIndex?: number;
  elemToZoomWrapper: HTMLElement;
  zoomMargin?: IMargin;
  transitionDuration?: number;
}

class GenericZoom {
  private transitionDuration: number;
  private activeZIndex: number;
  private outerElem: HTMLElement;
  private elemToZoom: HTMLElement;
  private elemToZoomWrapper: HTMLElement;
  private zoomMargin: IMargin;

  // This reference is a way to remove event listener later, since when adding listener, we need to bind "this"
  private applyZoomRef: any;

  constructor({
    transitionDuration = 300,
    outerElem,
    elemToZoom,
    elemToZoomWrapper,
    activeZIndex = 11,
    zoomMargin = { vertical: 50, horizontal: 50 },
  }: IGenericZoom) {
    this.activeZIndex = activeZIndex;
    this.transitionDuration = transitionDuration;
    this.outerElem = outerElem;
    this.elemToZoomWrapper = elemToZoomWrapper;
    this.elemToZoom = elemToZoom;
    this.zoomMargin = zoomMargin;

    this.elemToZoom.style.position = 'relative';
    this.applyZoomRef = this.applyZoom.bind(this);
  }

  private applyZoom() {
    const elemToZoomWrapperRect = this.elemToZoomWrapper.getBoundingClientRect();

    const { translateX, translateY } = calculatePosition(this.outerElem, this.elemToZoomWrapper);
    const scale = calculateScale(
      this.outerElem.clientWidth,
      this.outerElem.clientHeight,
      elemToZoomWrapperRect.width,
      elemToZoomWrapperRect.height,
      this.zoomMargin,
    );

    this.elemToZoom.style.zIndex = `${this.activeZIndex}`;
    this.elemToZoom.style.transition = `transform ${this.transitionDuration}ms`;
    this.elemToZoom.style.transform = `translate3d(
      ${translateX}px,
      ${translateY}px,
      0) scale(${scale})`;
  }

  private onTransitionEnd = () => {
    this.elemToZoom.style.zIndex = 'inherit';
    this.elemToZoom.removeEventListener('transitionend', this.onTransitionEnd);
  };

  zoom() {
    this.applyZoom();
    window.addEventListener('resize', this.applyZoomRef);
  }

  unZoom() {
    window.removeEventListener('resize', this.applyZoomRef);
    if (!this.elemToZoom) return;
    this.elemToZoom.addEventListener('transitionend', this.onTransitionEnd);
    this.elemToZoom.style.transform = `translate3d(
      0px,
      0px,
      0) scale(1)`;
  }
}

export default GenericZoom;
