//a locomoção da sua calda.
class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {

        fill(43, 51, 25);
        rect(this.x, this.y, velocidade, velocidade, 4);

    }
}



