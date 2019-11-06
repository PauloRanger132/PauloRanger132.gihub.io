//Abaixo, temos a função principal da movimentação da cobra ao inicar o jogo, ela irá sempre para cima ao startar.
class Head {
    constructor() {
        this.x = floor(width / (2 * velocidade)) * velocidade;
        this.y = floor(height / (2 * velocidade)) * velocidade;
        this.dir = 'up';
        this.score = 0;
        this.tails = [];
    }

  //movimento da cabeça.
    update() {
        if (this.dir == 'left') {
            this.x -= velocidade;
        } else if (this.dir == 'right') {
            this.x += velocidade;
        } else if (this.dir == 'up') {
            this.y -= velocidade;
        } else if (this.dir == 'down') {
            this.y += velocidade;
        }
    }

  //esse codigo serve para quando o jogo iniciar fazer com que a cobra se movimente para cima, o score do jogador iniciará com 0, e sua calda sempre irá iniciar com um determinado tamanho.
    redefine() {
        this.x = floor(width / (2 * velocidade)) * velocidade;
        this.y = floor(height / (2 * velocidade)) * velocidade;
        this.dir = 'up';
        this.score = 0;
        this.tails = [];

        for (let i = 0; i < 2; i++) {
            cobra.tails.push(new Tail(cobra.x, cobra.y + (15 * i)));
        }

    }

    //A colisão com a calda.
    tail_collide() {
        for (let i = 0; i < this.tails.length; i++) {
            if (this.x == this.tails[i].x && this.y == this.tails[i].y) {
                return true;
            }
        }
    }
//colisão com objeto.
    collision(obj) {
        if (this.x == obj.x && this.y == obj.y) {
            return true;
        }
        if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
            return false;
        }

    }

    show() {
        fill(23, 31, 10);
        rect(this.x, this.y, velocidade, velocidade, 4);
    }

}



