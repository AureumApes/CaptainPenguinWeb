import {gameLoop} from "./index.js";

export default class Player {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.width = 50;
        this.height = 100;
        this.GAME_WIDTH = GAME_WIDTH
        this.GAME_HEIGHT = GAME_HEIGHT

        this.points = 0

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: GAME_WIDTH / 2 - this.width / 2,
            y: GAME_HEIGHT - this.height - 10
        };
    }

    draw(context) {
        context.fillStyle = "gray";
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.x += this.speed

        console.log(this.points)
        if (this.position.x < 0)
            this.position.x = 0;
        if (this.position.x + this.width > this.GAME_WIDTH)
            this.position.x = this.GAME_WIDTH - this.width;
    }

    die(enemy, egg) {
        this.maxSpeed = 0;
        egg.speed = 0
        enemy.speed = 0
        document.getElementById("gameScreen").hidden = true
        document.getElementById("pointText").hidden = true
        document.getElementById("deathScreen").hidden = false
        this.died = true;
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }
}