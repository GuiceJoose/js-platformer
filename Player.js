import Egg from "./Egg.js";

export default class Player {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 500;
    this.velX = 0;
    this.velY = 0;
    this.isOnGround = true;
    this.weight = 1;
    this.friction = 0.95;
    this.jumps = 0;
    this.flapping = false;
    this.eggs = [];
    this.eggCooldown = 0;
    this.direction = 1; // 1 = right, -1 = left
  }
  draw(context) {
    this.direction === 1
      ? (context.fillStyle = "white")
      : (context.fillStyle = "grey");
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update(input) {
    // Input responses
    if (input.keys.ArrowRight.pressed === true) {
      this.flapping ? (this.velX += 0.6) : (this.velX += 0.3);
      this.direction = 1;
    }
    if (input.keys.ArrowLeft.pressed === true) {
      this.flapping ? (this.velX -= 0.6) : (this.velX -= 0.3);
      this.direction = -1;
    }

    if (
      input.keys.ArrowUp.pressed === true &&
      input.keys.ArrowUp.released > this.jumps &&
      this.isOnGround === true
    ) {
      this.isOnGround = false;
      this.velY -= 15;
      this.flapping ? (this.weight = 0.35) : (this.weight = 1);
      this.jumps = input.keys.ArrowUp.released;
    }

    if (input.keys.w.pressed === true) {
      this.flapping = true;
    } else {
      this.flapping = false;
    }

    // egg creation
    if (input.keys.e.pressed === true && this.eggCooldown <= 0) {
      let egg = new Egg(this.x, this.y + this.height / 2, this.direction);
      this.eggs.push(egg);
      this.eggCooldown = 25;
    } else {
      --this.eggCooldown;
    }

    this.x += this.velX;
    this.y += this.velY;

    // Boundary conditions
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 500) {
      this.x = 500;
    }

    this.velY += this.weight;
    this.velX = this.velX * this.friction;
  }
}
