function imgSlider(anything) {
  document.querySelector('.home-img').src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}


/*=============== GSAP ANIMATION ===============*/
TweenMax.from('.home-title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-description', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-button', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})
