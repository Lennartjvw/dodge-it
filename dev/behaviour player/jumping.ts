class Jumping implements Behaviour {
    public player: Player;

    private jump_y: number;
    private goingDown: boolean = false;
    private jumpLimit: number = 300;
    private isJumping: boolean;

    private timer: number;

    constructor(p:Player){

        console.log("Behaviour Jump!");

        this.player = p;
        this.jump_y = this.player.getY();
        this.isJumping = false;

    }

    jumping(){
        console.log("jump");
        let y = this.player.getY();

        if (!this.isJumping) {
          this.isJumping = true;
          
          this.timer = setInterval(() => {

            if (y > this.jumpLimit && !this.goingDown) {
              y -= 10;
              this.player.setY(y);
            } else {
              this.goingDown = true;
              y += 10;
              this.player.setY(y);
              if (y == this.jump_y) {
                clearInterval(this.timer)
                this.goingDown = false;
                this.isJumping = false;
              }
            }

          }, 10)
        }
    }
}