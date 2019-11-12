import anime from 'animejs';

export function startAnimation(element) {
  anime({
    targets: element,
    translateX: -5570,
    easing: 'linear',
    loop: true,
    // direction: "reverse",
    duration: 50000
    // duration: 200000000000000000
  });
}