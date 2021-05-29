import Player from "./player.js";
import Enemy from "./enemy.js";
import Egg from "./egg.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = canvas.clientWidth;
const GAME_HEIGHT = canvas.clientHeight;


const player = new Player(GAME_WIDTH, GAME_HEIGHT)
const enemy = new Enemy(GAME_WIDTH, GAME_HEIGHT)
const egg = new Egg(GAME_WIDTH, GAME_HEIGHT)

new InputHandler(player, egg, enemy)


export function gameLoop() {
    context.clearRect(0, 0, 800, 600)

    player.update()
    player.draw(context)

    enemy.update(player, egg)
    enemy.draw(context)

    egg.update(player)
    egg.draw(context)

    requestAnimationFrame(gameLoop);
}

gameLoop()
