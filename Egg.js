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
  break() {
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
    this.velX = 0;
  }
}
