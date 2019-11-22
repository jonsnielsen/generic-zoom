import { calculateScale, calculatePosition } from './utils';
import { IMargin } from './types/types';

interface IGenericZoom {
  outerElem: HTMLElement;
  elemToZoom: HTMLElement;
  elemToZoomWrapper: HTMLElement;
  zoomMargin?: IMargin;
}

class GenericZoom {
  private outerElem: HTMLElement;
  private elemToZoom: HTMLElement;
  private elemToZoomWrapper: HTMLElement;
  private zoomMargin: IMargin;

  // This reference is a way to remove event listener later, since when adding listener, we need to bind "this"
  private applyZoomRef: any;

  constructor({
    // outerElem = typeof document === 'undefined' ? null : document.body,
    outerElem,
    elemToZoom,
    elemToZoomWrapper,
    zoomMargin = { vertical: 50, horizontal: 50 },
  }: IGenericZoom) {
    this.outerElem = outerElem;
    this.elemToZoomWrapper = elemToZoomWrapper;
    this.elemToZoom = elemToZoom;
    this.zoomMargin = zoomMargin;
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

    this.elemToZoom.style.transition = 'transform 10300ms';
    this.elemToZoom.style.transform = `translate3d(
      ${translateX}px,
      ${translateY}px,
      0) scale(${scale})`;
  }

  zoom() {
    this.applyZoom();
    window.addEventListener('resize', this.applyZoomRef);
  }

  unZoom() {
    window.removeEventListener('resize', this.applyZoomRef);
    if (!this.elemToZoom) return;

    this.elemToZoom.style.transform = `translate3d(
      0px,
      0px,
      0) scale(1)`;
  }
}

// interface IOverlay {
//   show: boolean;
//   bgColor: string;
// }
// const Overlay: React.FC<IOverlay> = ({ show, bgColor }) => {
//   return (
//     style as div={{
//         ...defaultStyles.overlay,
//         opacity: show ? 1 : 0,
//         backgroundColor: bgColor,
//       }}
//     />
//   );
// };

export default GenericZoom;
