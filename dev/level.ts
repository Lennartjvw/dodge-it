class Level {

    private player: Player;
    private blocks: Array<Blocks> = new Array <Blocks>();

    private utils: Utils;

    public static hit: Boolean = false;
    
    constructor(){
        this.player = new Player();
        this.utils = new Utils();
        setInterval(()=> this.createBlock(), 1400);
    }

    private createBlock():void {
        this.blocks.push(new Blocks());
        console.log("aantal blocks: " + this.blocks.length);
    }

    public static getHit() : Boolean{
        return Level.hit;
    }

    public static setHit(hit){
        Level.hit = hit;
    }

    public update(){
        this.player.draw();    
        for(let b of this.blocks){  
            b.draw();
            if(this.utils.hasOverlap(b, this.player)){
                console.log("Player hits a block!");
                Level.setHit(true);
                this.removeBlockFromArray(b);
            }
        }
    }

    public removeBlockFromArray(b: Blocks){
        let i:number = this.blocks.indexOf(b);
        if(i!= -1){
            this.blocks.splice(i, 1);
            b.removeDiv();
        }
    }

}