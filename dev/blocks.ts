/// <reference path="gameobject.ts" />


class Blocks extends GameObject {

    private slideSpeed: number;
    
    private random: number;
    private number: number;

    constructor() {
        super();

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("block");
        container.appendChild(this.div);
        
        this.x = 1800;
        this.y = this.calculate();

        this.width = 100;
        this.height = 100;

        this.slideSpeed = 10;

        this.draw();
        
    }

    public calculate(){
        this.random = Math.floor(Math.random() * 6) + 1 

        if (this.random < 3){
            this.number = 700;
            console.log("this is: " + this.number);
            return this.number;
        }
        else {
            this.number = 600;
            console.log("this is:" + this.number);
            return this.number;
            
        }
    }

    public draw(){
        this.x -= this.slideSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}