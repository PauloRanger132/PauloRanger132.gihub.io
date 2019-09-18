
function setup() {
  createCanvas(500, 400);
//trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
 if(!(placar >= 10 || placar2 >=10))
    jogo();
  else
    mostraVencedor();
  
}

 function mostraVencedor(){
    
    if(placar >= 10){ 
    fill(255,130,0);//laranja
   rect(114, 182, 237)//metade direita da tela
   textAlign(CENTER);
   fill(0);
   textSize(30);
   text("Lado esquerdo é campeão",400,200);
  }else{
     if(placar2 >= 10){ 
    fill(255,130,0);//laranja
   rect(252, 91, 91)//metade direita da tela
   textAlign(CENTER);
   fill(0);
   textSize(30);
   text("Lado direito é campeão",300,200);
     }
  }
}

function jogo(){
 mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarro();
  verificaColisao();
  mostraPlacar ();
  mostraAtor2();
  movimentaAtor2();
  verificaColisao2();
  mostraPlacar2();
  mostraVencedor();
}
