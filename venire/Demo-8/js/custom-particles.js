particlesJS("particles-js", {
  particles: {
    number: { value: 14, density: { enable: true, value_area: 800 } },
    color: { value: "#ff8800" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#ff8800" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.4890406785639845,
      random: true,
      anim: { enable: true, speed: 0, opacity_min: 0, sync: false },
    },
    size: {
      value: 15.620167457129543,
      random: true,
      anim: { enable: true, speed: 10, size_min: 20, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 0.16034120608655228,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 160.3412060865523,
        rotateY: 481.0236182596568,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "bubble" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 10, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
