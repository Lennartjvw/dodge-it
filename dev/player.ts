class Player extends GameObject {

    constructor(){
        super();

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("player");
        container.appendChild(this.div);

        this.x = 50;
        this.y = 600;
        this.width = 100;
        this.height = 200;

    }

    public draw() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}