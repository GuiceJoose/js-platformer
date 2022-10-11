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
    this.isOnGround = true;
    this.jumps = 0;
    this.weight = 1;
    this.friction = 0.25;
  }
  draw(context) {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update(input) {
    // Input responses
    if (input.keys.ArrowRight.pressed === true) {
      this.velX = 5;
    }
    if (input.keys.ArrowLeft.pressed === true) {
      this.velX = -5;
    }

    if (
      input.keys.ArrowUp.pressed === true &&
      input.keys.ArrowUp.released === this.jumps &&
      this.isOnGround === true
    ) {
      this.isOnGround = false;
      this.velY = -15;
      ++this.jumps;
    }

    if (input.keys.w.pressed === true) {
      this.weight = 0.35;
    } else this.weight = 1;

    this.x += this.velX;
    this.y += this.velY;

    // Boundary conditions
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 500) {
      this.x = 500;
    }
    if (this.y > this.canvasHeight - this.height) {
      this.y = this.canvasHeight - this.height;
      this.isOnGround = true;
    }

    this.velY += this.weight;

    if (this.velX > 0) {
      this.velX -= this.friction;
    }
    if (this.velX < 0) {
      this.velX += this.friction;
    }
  }
}
