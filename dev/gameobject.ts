class GameObject {

    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;

    protected div: HTMLElement;

    constructor(){

    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getHeight(){
        return this.height;
    }

    public setHeight(h: number){
        this.height = h;
    }

}