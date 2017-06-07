class Player extends GameObject {

    private spacebar: number;
    private d: number;

    public behaviourJump: Behaviour;
    public behaviourDuck: Behaviour;

    private static noKeyPressed: number = 0;


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
        window.addEventListener("keyup", this.onKeyUp.bind(this));

    }

    public static getNoKeyPressed():number {
        return Player.noKeyPressed;
    }

    private onKeyDown(event: KeyboardEvent){

        if(event.keyCode == 32) {
            this.behaviourJump.jumping();
        }
        else if(event.keyCode == 68) {
            this.behaviourDuck.duck();
            Player.noKeyPressed = 0;
        }
    }

    private onKeyUp(event: KeyboardEvent){
        if(event.keyCode == 68) {
            Player.noKeyPressed = 1;
        }

    }

    public draw() {
        console.log(Player.noKeyPressed);

        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
    }

}