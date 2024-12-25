import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  key: "reactSimple",
  name: "React Simple",
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.4,

      width: 1,
    },
    move: {
      enable: true,
      outModes: "bounce",
      speed: 0.3,
    },
    collisions: {
      enable: true,
    },
    number: {
      value: 20,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: {
        min: 0.1,
        max: 0.3,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: true,
      offset: {
        x: 5,
        y: 5,
      },
    },
    stroke: {
      color: {
        value: "#ff0000",
      },
      width: 0,
      opacity: 1,
    },
  },
  polygon: {
    draw: {
      enable: false,
      stroke: {
        color: "rgba(255, 255, 255, .1)",
        width: 0.5,
        opacity: 0.1,
      },
    },
    enable: false,
    inline: {
      arrangement: "one-per-point",
    },
    move: {
      radius: 10,
      type: "path",
    },
    scale: 1,
    type: "inline",
    url: "",
  },

  pauseOnBlur: true,
  background: {
    color: "#0d47a1",
    image: "linear-gradient(180deg, #12181b 0%, #262935 50%, #12181b 100%)",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export default options;
