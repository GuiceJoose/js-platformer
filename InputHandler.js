export default class InputHandler {
  constructor() {
    this.keys = {
      ArrowUp: {
        pressed: false,
        released: 1,
      },
      ArrowDown: {
        pressed: false,
      },
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      w: {
        pressed: false,
      },
      e: {
        pressed: false,
      },
    };
    window.addEventListener("keydown", ({ key }) => {
      console.log(this.keys.ArrowUp.disabled);
      if (
        (key === "ArrowUp" ||
          key === "ArrowDown" ||
          key === "ArrowRight" ||
          key === "ArrowLeft" ||
          key === "w" ||
          key === "e") &&
        this.keys[key].pressed === false
      ) {
        this.keys[key].pressed = true;
      }
    });
    window.addEventListener("keyup", ({ key }) => {
      if (
        key === "ArrowUp" ||
        key === "ArrowDown" ||
        key === "ArrowRight" ||
        key === "ArrowLeft" ||
        key === "w" ||
        key === "e"
      ) {
        this.keys[key].pressed = false;
        if (key === "ArrowUp") {
          ++this.keys[key].released;
        }
      }
    });
  }
}
