export default class Platform {
  constructor(x, y, canvasWidth, canvasHeight, img) {
    this.img = img;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = img.width;
    this.height = img.height;
    this.x = x;
    this.y = y;
  }
  draw(context) {
    context.fillStyle = "red";
    context.drawImage(this.img, this.x, this.y);
  }
}
