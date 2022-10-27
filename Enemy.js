export default class Enemy {
  constructor(x, y, height, width) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
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
