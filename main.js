import Enemy from "./Enemy.js";
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

  let scrollDistance = 0;

  let input = new InputHandler();
  let player;
  let enemy;
  let platforms;

  const generateGround = () => {
    let groundTiles = [];
    for (let i = 0; i < 40; i++) {
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

  function init() {
    player = new Player(canvas.width, canvas.height);
    platforms = generateGround();
    enemy = new Enemy();
  }

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
    enemy.draw(ctx);
    enemy.update();

    platforms.forEach((platform) => {
      //player playform collision detection
      if (
        player.y + player.height <= platform.y &&
        player.y + player.height + player.velY >= platform.y &&
        player.x + player.width >= platform.x &&
        player.x <= platform.x + platform.width
      ) {
        player.velY = 0;
        player.isOnGround = true;
      }
      //enemy platform collision detection
      if (
        enemy.y + enemy.height <= platform.y &&
        enemy.y + enemy.height + enemy.velY >= platform.y &&
        enemy.x + enemy.width >= platform.x &&
        enemy.x <= platform.x + platform.width
      ) {
        enemy.velY = 0;
      }
      if (
        player.x + player.width >= enemy.x &&
        player.y + player.height >= enemy.y &&
        player.x <= enemy.x + enemy.width
      ) {
        console.log("you died");
        init();
      }
    });

    if (player.x >= 499) {
      enemy.x -= player.velX;
      platforms.forEach((platform) => {
        platform.x -= player.velX;
        scrollDistance += player.velX;
      });
    }
    if (player.y > canvas.height) {
      console.log("you lose");
      init();
    }
  }
  init();
  animate();
});
