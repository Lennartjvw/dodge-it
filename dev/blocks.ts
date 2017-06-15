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
        this.y = this.calculateY();

        this.width = 99;
        this.height = 99;

        // this.slideSpeed = 10;
        
        // this.draw(10);
        
    }

    public calculateY(){
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

        this.calculateSpeed();

        this.x -= this.slideSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

    public calculateSpeed(){

        console.log("boolean is " + Level.hit);  

        if(Level.getHit() == true){
            this.slideSpeed = 0;

            setInterval(()=>  {

                Level.setHit(false);

            }, 10000)
        }
        else {
            this.slideSpeed = 10;
        }
        
    }


    public removeDiv(){
        this.div.remove();
    }



}