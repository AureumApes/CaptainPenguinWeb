import Player from "./player.js";

export default class Egg {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.width = 20;
        this.height = 20;
        this.speed = 4;
        this.gameWidth = GAME_WIDTH
        this.gameHeight = GAME_HEIGHT

        this.pointText = document.getElementById("pointText")

        this.position = {
            x: GAME_WIDTH / 2 - this.width / 2,
            y: 0
        };
    }

    draw(context) {
        context.fillStyle = "#fff";
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(player) {
        this.position.y += this.speed
        if (this.position.y > this.gameHeight - 100) {
            this.position.y = 0
            this.position.x = Math.floor(Math.random() * this.gameWidth);
        }

        if (this.rectIntersect(this.position.x, this.position.y, this.width, this.height, player.position.x, player.position.y, player.width, player.height)){
            this.position.y = 0
            this.position.x = Math.floor(Math.random() * this.gameWidth);
            player.points += 1;
            this.pointText.textContent = "Points: " + player.points
        }
    }

    rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
            return false;
        }
        return true;
    }
}