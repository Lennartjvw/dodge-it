class Game {

    private player: Player;
    
    constructor() {
        console.log("Dodge It has started!");
        this.player = new Player();
        requestAnimationFrame(() => this.gameLoop());
    }


    private gameLoop() {
        this.player.draw();    
        requestAnimationFrame(() => this.gameLoop());
    }

} 

window.addEventListener("load", function() {
    new Game();
});