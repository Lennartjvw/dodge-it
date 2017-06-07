class Duck implements Behaviour {

    public player: Player;

    private div: HTMLElement;

    constructor(p:Player){

        this.player = p;

        this.div = document.getElementById("player");

    }

    jumping(){

    }

    duck(){ 
        console.log(this.player.getHeight());

        if (Player.getNoKeyPressed() == 1){
            this.player.setHeight(100);
            this.player.setY(700);
        }
        if (Player.getNoKeyPressed() == 0){
            this.player.setHeight(200);
            this.player.setY(600);
        }
        
    }

}

