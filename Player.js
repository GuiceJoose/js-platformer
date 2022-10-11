export default class Player {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = this.canvasHeight - this.height;
    this.velX = 0;
    this.velY = 0;
    this.weight = 1;
  }
  draw(context) {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update(input) {
    // Input responses
    if (input.keys.indexOf("ArrowRight") > -1) {
      this.velX = 5;
    }
    if (input.keys.indexOf("ArrowLeft") > -1) {
      this.velX = -5;
    }
    if (
      input.keys.indexOf("ArrowRight") === -1 &&
      input.keys.indexOf("ArrowLeft") === -1
    ) {
      this.velX = 0;
    }

    if (input.keys.indexOf("ArrowUp") > -1 && this.isOnGround()) {
      this.velY = -15;
    }

    if (input.keys.indexOf("w") > -1) {
      this.weight = 0.35;
    } else this.weight = 1;

    this.x += this.velX;
    // Boundary conditions
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > this.canvasWidth - this.width) {
      this.x = this.canvasWidth - this.width;
    }
    if (this.y > this.canvasHeight - this.height) {
      this.y = this.canvasHeight - this.height;
    }

    this.y += this.velY;

    if (!this.isOnGround()) {
      this.velY += this.weight;
    } else {
      this.velY = 0;
    }
  }
  isOnGround() {
    return this.y >= this.canvasHeight - this.height;
  }
}
