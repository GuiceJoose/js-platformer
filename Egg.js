export default class Egg {
  constructor(x, y, dir) {
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y - this.height / 2;
    this.velX = -dir * 7.5;
  }
  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += this.velX;
  }
}
