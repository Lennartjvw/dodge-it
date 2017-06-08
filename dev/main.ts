class Game {

    private level: Level;
    
    constructor() {
        console.log("Dodge It has started!");
        this.level = new Level();
        requestAnimationFrame(() => this.gameLoop());
    }



    private gameLoop() {
        this.level.update();
        requestAnimationFrame(() => this.gameLoop());
    }

} 

window.addEventListener("load", function() {
    new Game();
});