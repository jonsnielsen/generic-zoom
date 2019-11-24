import GenericZoom, { ZoomOverlay } from '../src';

interface IMakeZoomButtons {
  zoomOverlay?: ZoomOverlay | null;
  genericZoom?: GenericZoom;
}
export function makeZoomButtons({ zoomOverlay, genericZoom }: IMakeZoomButtons) {
  const zoomInButton = document.createElement('button');
  zoomInButton.innerText = 'zoom in';
  zoomInButton.addEventListener('click', () => {
    if (zoomOverlay) {
      zoomOverlay.zoom();
    }
    if (genericZoom) {
      genericZoom.zoom();
    }
  });

  const zoomOutButton = document.createElement('button');
  zoomOutButton.innerText = 'zoom out';
  zoomOutButton.addEventListener('click', () => {
    if (zoomOverlay) {
      zoomOverlay.unZoom();
    }
    if (genericZoom) {
      genericZoom.unZoom();
    }
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.appendChild(zoomInButton);
  buttonWrapper.appendChild(zoomOutButton);

  return buttonWrapper;
}
