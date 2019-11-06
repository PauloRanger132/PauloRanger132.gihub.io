
//Essa classe mostrará a nossa fruta, ela aparecerá em uma determinada área, caso a cobra interaja com a fruta ela irá aparecer em outro local.
class Fruit {

    constructor() {
        this.x = floor(random(0, width) / velocidade) * velocidade;
        this.y = floor(random(0, height) / velocidade) * velocidade;
    }

    eat() {

        this.x = floor(random(0, width) / velocidade) * velocidade;
        this.y = floor(random(0, height) / velocidade) * velocidade;

        if (this.x == cobra.x || this.y == cobra.y) {
            this.eat();
        }
    }

    show() {
        fill(30,200);
        rect(this.x, this.y, velocidade, velocidade, 4);
    }

}

//A mesma coisa serve para o Veneno.
class Veneno {

    constructor() {
        this.x = floor(random(0, width) / velocidade) * velocidade;
        this.y = floor(random(0, height) / velocidade) * velocidade;
    }

    eat() {

        this.x = floor(random(0, width) / velocidade) * velocidade;
        this.y = floor(random(0, height) / velocidade) * velocidade;

        if (this.x == cobra.x || this.y == cobra.y) {
            this.eat();
        }
    }

    show() {
        fill(225,200);
        rect(this.x, this.y, velocidade, velocidade, 4);
    }

}