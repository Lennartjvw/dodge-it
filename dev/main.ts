class Game {
    
    constructor() {
        console.log("Dodge It has started!");
        requestAnimationFrame(() => this.gameLoop());
    }


    private gameLoop() {    
        requestAnimationFrame(() => this.gameLoop());
    }

} 

window.addEventListener("load", function() {
    new Game();
});