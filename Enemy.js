export default class Enemy {
  constructor() {
    this.height = 50;
    this.width = 50;
    this.x = 1200;
    this.y = 500;
    this.velX = -2;
    this.velY = 0;
    this.weight = 1;
  }

  draw(context) {
    context.fillStyle = "green";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += this.velX;
    this.y += this.velY;
    this.velY += this.weight;
  }
}
