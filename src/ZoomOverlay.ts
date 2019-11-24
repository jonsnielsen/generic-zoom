import { calculatePosition } from './utils';

const INACTIVE_ZINDEX = '-1';

interface IZoomOverlay {
  outerElem: HTMLElement;
  overlayElem: HTMLElement;
  activeZIndex?: number;
  transitionDuration?: number;
  backgroundColor?: string;
}
class ZoomOverlay {
  private zoomOverlay: HTMLElement;
  private outerElem: HTMLElement;
  private activeZIndex: number;
  private isZoomed: boolean = false;

  constructor({
    outerElem,
    overlayElem,
    transitionDuration = 300,
    backgroundColor = '#fff',
    activeZIndex = 10,
  }: IZoomOverlay) {
    this.activeZIndex = activeZIndex;
    this.zoomOverlay = overlayElem;
    this.outerElem = outerElem;

    overlayElem.style.position = 'absolute';
    overlayElem.style.zIndex = INACTIVE_ZINDEX;
    overlayElem.style.backgroundColor = backgroundColor;
    overlayElem.style.opacity = '0';
    overlayElem.style.transition = `opacity ${transitionDuration}ms`;
  }

  private onTransitionEnd = () => {
    // in case the use zooms again before the ontransitionend is called
    this.zoomOverlay.removeEventListener('transitionend', this.onTransitionEnd);
    if (this.isZoomed) return;
    this.zoomOverlay.style.transform = `translate3d(0px, 0px, 0`;

    this.zoomOverlay.style.zIndex = INACTIVE_ZINDEX;
  };

  private applyZoom = () => {
    // Reset transform so position can be calculated correctly
    this.zoomOverlay.style.transform = `translate3d(0px, 0px, 0`;
    this.zoomOverlay.style.width = `${this.outerElem.getBoundingClientRect().width}px`;
    this.zoomOverlay.style.height = `${this.outerElem.getBoundingClientRect().height}px`;

    const { translateX, translateY } = calculatePosition(this.outerElem, this.zoomOverlay);
    this.zoomOverlay.style.transform = `translate3d(
      ${translateX}px,
      ${translateY}px,
      0`;
    this.zoomOverlay.style.opacity = '1';
    this.zoomOverlay.style.zIndex = `${this.activeZIndex}`;
  };

  zoom() {
    this.isZoomed = true;
    this.applyZoom();
    window.addEventListener('resize', this.applyZoom);
  }
  unZoom() {
    this.isZoomed = false;
    window.removeEventListener('resize', this.applyZoom);
    this.zoomOverlay.style.opacity = '0';
    this.zoomOverlay.addEventListener('transitionend', this.onTransitionEnd);
  }
}

export default ZoomOverlay;
