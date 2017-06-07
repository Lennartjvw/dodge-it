class Player extends GameObject {

    private spacebar: number;
    private d: number;

    public behaviourJump: Behaviour;
    public behaviourDuck: Behaviour;

    constructor(){
        super();

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("player");
        container.appendChild(this.div);

        this.x = 50;
        this.y = 600;
        this.width = 100;
        this.height = 200;

        this.spacebar = 32;
        this.d = 68

        this.behaviourJump = new Jumping(this);
        this.behaviourDuck = new Duck(this);

        window.addEventListener("keydown", this.onKeyDown.bind(this));

    }

    private onKeyDown(event: KeyboardEvent){

        if(event.keyCode == 32) {
            this.behaviourJump.jumping();
        }
        else if(event.keyCode == 68) {
            this.behaviourDuck.duck();
        }
    }

    public draw() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}