interface IZoomOverlay {
  outerElem: HTMLElement;
  activeZIndex?: number;
  transitionDuration?: number;
  backgroundColor?: string;
}
class ZoomOverlay {
  private zoomOverlay: HTMLDivElement;
  private activeZIndex: number;

  constructor({ outerElem, transitionDuration = 300, backgroundColor = '#fff', activeZIndex = 10 }: IZoomOverlay) {
    this.activeZIndex = activeZIndex;
    outerElem.style.position = 'relative';

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = backgroundColor;
    overlay.style.opacity = '0';
    overlay.style.transition = `opacity ${transitionDuration}ms`;
    overlay.style.zIndex = '-1';

    outerElem.appendChild(overlay);
    this.zoomOverlay = overlay;
  }

  private onTransitionEnd = () => {
    this.zoomOverlay.style.zIndex = '-1';
    this.zoomOverlay.removeEventListener('transitionend', this.onTransitionEnd);
  };

  zoom() {
    this.zoomOverlay.style.opacity = '1';
    this.zoomOverlay.style.zIndex = `${this.activeZIndex}`;
  }
  unZoom() {
    this.zoomOverlay.style.opacity = '0';
    this.zoomOverlay.addEventListener('transitionend', this.onTransitionEnd);
  }
}

export default ZoomOverlay;
