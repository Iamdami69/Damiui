export const damiUi = (options) => {
  let elements = document.querySelectorAll(options.target);
  // FOR TOUCHABLE opacity
  if (options.touchableOpacityDuration) {
    elements.forEach((element) =>
      element.addEventListener('click', () => {
        element.style.opacity = '0%';
        setTimeout(() => {
          element.style.opacity = '100%';
        }, options.touchableOpacityDuration);
      })
    );
  }
  // FOR borderRadius
  if (options.borderRadius) {
    elements.forEach(
      (element) => (element.style.borderRadius = options.borderRadius)
    );
  }
  // For vibration
  if (options.touchFeedback) {
    elements.forEach((element) =>
      element.addEventListener('click', () => {
        navigator.vibrate(options.touchFeedback);
      })
    );
  }
  // FOR shadows
  if (options.shadowType === '#0') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px')
    );
  }
  if (options.shadowType === '#1') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px')
    );
  }
  if (options.shadowType === '#2') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px')
    );
  }
  if (options.shadowType === '#3') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px')
    );
  }
  if (options.shadowType === '#4') {
    elements.forEach(
      (element) => (element.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px')
    );
  }
  if (options.shadowType === '#5') {
    elements.forEach(
      (element) => (element.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px')
    );
  }
  if (options.shadowType === '#6') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px')
    );
  }
  if (options.shadowType === '#7') {
    elements.forEach(
      (element) => (element.style.boxShadow = 'rgb(51, 51, 51) 0px 0px 0px 3px')
    );
  }
  if (options.shadowType === '#8') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow = 'rgba(27, 31, 35, 0.15) 0px 0px 0px 1px')
    );
  }
  if (options.shadowType === '#9') {
    elements.forEach(
      (element) => (element.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 12px')
    );
  }
  if (options.shadowType === '#10') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow =
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px')
    );
  }
  if (options.shadowType === '#11') {
    elements.forEach(
      (element) =>
        (element.style.boxShadow =
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px')
    );
  }
};
  
  module.exports.damiUi = damiUi;