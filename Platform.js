export default class Platform {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = 100;
    this.height = 24;
    this.x = x;
    this.y = y;
  }
  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
