/// <reference path="gameobject.ts" />


class Blocks extends GameObject {

    private slideSpeed: number;


    constructor() {
        super();

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("block");
        container.appendChild(this.div);
        
        this.x = 1800;
        this.y = 700;

        this.width = 100;
        this.height = 100;

        this.slideSpeed = 10;

    }

    public draw(){



        this.x -= this.slideSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";



    }
}