import InputHandler from "./InputHandler.js";
import Platform from "./Platform.js";
import Player from "./Player.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  const groundSummer = document.createElement("img");
  groundSummer.src = "./art/groundSummer.png";

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height);
  const generateGround = () => {
    let groundTiles = [];
    for (let i = 0; i < 100; i++) {
      let platform = new Platform(
        groundSummer.width * i,
        canvas.height - groundSummer.height,
        canvas.width,
        canvas.height,
        groundSummer
      );
      groundTiles.push(platform);
    }
    return groundTiles;
  };

  const platforms = generateGround();
  // const platforms = [
  //   new Platform(
  //     200,
  //     canvas.height - 100,
  //     canvas.width,
  //     canvas.height,
  //     groundSummer
  //   ),
  //   new Platform(
  //     1000,
  //     canvas.height - 100,
  //     canvas.width,
  //     canvas.height,
  //     groundSummer
  //   ),
  // ];

  let scrollDistance = 0;

  function animate() {
    requestAnimationFrame(animate);
    if (scrollDistance > 2000) {
      console.log("you win");
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platform) => {
      platform.draw(ctx);
    });
    player.draw(ctx);
    player.update(input);

    platforms.forEach((platform) => {
      if (
        player.y + player.height <= platform.y &&
        player.y + player.height + player.velY >= platform.y &&
        player.x + player.width >= platform.x &&
        player.x <= platform.x + platform.width
      ) {
        player.velY = 0;
        player.isOnGround = true;
      }
    });

    if (player.x >= 499) {
      platforms.forEach((platform) => {
        platform.x -= player.velX;
        scrollDistance += player.velX;
      });
    }
  }

  animate();
});
