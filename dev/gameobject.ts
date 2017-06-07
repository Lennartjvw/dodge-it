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

}