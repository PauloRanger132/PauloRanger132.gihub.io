let maca;
let velocidade =15; //gap between grid lines
let cobra;
let pLoc = {};
let highest = 0;
let fimDeJogo = new Audio(src = 'library/game_over.mp3');
let eat = new Audio(src = 'library/eat.mp3');
let veneno;
let musica = new Audio(src = 'library/musica.mp3');

//começo da função da principal
function setup() {
    createCanvas(450, 490);
    maca = new Fruit();
    veneno = new Veneno();
    cobra = new Head();
    frameRate(12);
    textSize(14);
    textStyle(BOLD);

    for (let i = 0; i < 2; i++) {
        cobra.tails.push(new Tail(cobra.x, cobra.y + (15 * i)));
    }
}
//função principal

//essa função chamada 'draw' nos mostrar a estrutura do desenho, aquilo que necessetamos ver

function telaInicial(){
fill("deepSkyBlue");
  rect(0,0,450,490);
  fill("deepPink");
  textAlign(CENTER);
  textSize(20);
  text("SENAI - Serviço Nacional \n de Aprendizagem Induistrial",200,80);
  text("Ucr: Linguagem de Progamação",200,190);
  text("PROF: Tarcisio Nunes", 200,150);

  text("Nomes: Paulo, Jackson, Luis, Luiz",200,230);
  fill("deepPink");
}


function jogo(){
  {
    musica.play();
    background(170, 204, 102);
   // Grade, apenas para referência, não necessária para o jogo funcionar. Comentar noStroke (); mostrar
    noFill();
    noStroke();
    for (let i = 0; i < height; i += velocidade) {
        for (let j = 0; j < width; j += velocidade) {

            rect(j, i, velocidade, velocidade);

        }
    }
    //a direção da cobra e a movimentação de sua calda
    for (let i = cobra.tails.length - 1; i >= 0; i--) {
        if (i == 0) {
            cobra.tails[i].x = cobra.x;
            cobra.tails[i].y = cobra.y;
        } else {
            cobra.tails[i].x = cobra.tails[i - 1].x;
            cobra.tails[i].y = cobra.tails[i - 1].y;
        }
        cobra.tails[i].show();
    }


    pLoc.x = cobra.x;
    pLoc.y = cobra.y;
    cobra.update();

  //a colisão da cobra com a maça
  //caso a cobra interaja com a maça, ela ira come-la, gerando um som, caso ela não interaja, não afetara em nada.
    if (cobra.collision(maca)) {
        eat.play();
        cobra.score++;
        maca.eat();
        
        cobra.tails.push(new Tail(pLoc.x, pLoc.y));
      
    }
      //caso a cobra colida com o veneno 
      //ela primeiramente irá comer o objeto(veneno)
      //diminuira o score
      //e ainda por cima diminuira seu tamanho
        if (cobra.collision(veneno)) {
        eat.play();
        cobra.score--;
        veneno.eat();
        
        cobra.tails.pop();
      
    }
    
    
    if (cobra.score > highest) {
        highest = cobra.score;
    }
    if (cobra.collision(maca) == false || cobra.tail_collide() == true) {
        fimDeJogo.play();
        cobra.redefine();
        maca.eat();
        
      
    }if (cobra.collision(veneno) == false || cobra.tail_collide() == true) { fimDeJogo.play();
                                                                          cobra.redefine();
        veneno.eat();
        eat.play();
                                                                               }
    
    }
    //veneno
  
  //uma função para definir a pontuação, mostrando quantos pontos o personagem arrecadou durante o jogo.
    maca.show();
    veneno.show();

    fill(43, 51, 25);
    text("Score: " + int(cobra.score,), 50, height - 35);
    text("Highest: " + int(highest), 60, height - 15);
    cobra.show();
    noFill();
            strokeWeight(4);
    stroke(43, 51, 25);
    rect(1, 1, width - 2, height - 2);
}
              //fim do Draw//

  

        //começo do draw
function draw() {
   if(frameCount <100){
    telaInicial();
  }else{
    jogo();
    
}
}

//Essa função é de extrema importancia, pois define a movimentação da cobra
function keyPressed() {
    if (keyCode == LEFT_ARROW && cobra.dir != 'right') {
        cobra.dir = 'left';
    } else if (keyCode == RIGHT_ARROW && cobra.dir != 'left') {
        cobra.dir = 'right';
    } else if (keyCode == UP_ARROW && cobra.dir != 'down') {
        cobra.dir = 'up';
    } else if (keyCode == DOWN_ARROW && cobra.dir != 'up') {
        cobra.dir = 'down';
    }
}