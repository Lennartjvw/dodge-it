class Level {

    private player: Player;
    private blocks: Array<Blocks> = new Array <Blocks>();

    private utils: Utils;
    
    constructor(){
        this.player = new Player();
        this.utils = new Utils();
        setInterval(()=> this.createBlock(), 1400);
    }

    private createBlock():void {
        this.blocks.push(new Blocks());
        // console.log("aantal blocks: " + this.blocks.length);
    }

    public update(){
        this.player.draw();

        for(let b of this.blocks){
            b.draw();
            if(this.utils.hasOverlap(b, this.player)){
                // console.log("Player hits a block!");
            }
        }
    }
}