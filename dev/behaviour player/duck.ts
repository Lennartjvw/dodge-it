class Duck implements Behaviour {

    public player: Player;

    constructor(p:Player){

        this.player = p;

    }

    jumping(){

    }

    duck(){
        console.log("duck!");
    }

}

