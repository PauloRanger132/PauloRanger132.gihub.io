//Variáveis da bolinha
let xBolinha =300;
let yBolinha =200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [242,78,7];
let velocidadeX = 17;
let velocidadeY =17;

//Váriaveis Raquete
let alturaRaquete = 100;
let larguraRaquete= 20;
let corRaquete = [0, 0, 0,]; //Preto

//Váriaveis Minha Raquete
let xMinhaRaquete = 580
let yMinhaRaquete = 150;
let corMinhaRaquete = [245, 249, 253]; //Preto

let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [3, 219, 252];

//variáveis do Placar
let pontosMeus =0;
let pontosOponente =0;

//sounds
let ponto;
let raquetada;


function preload(){
raquetada = loadSound('raquetada.mp3');
ponto = loadSound("ponto.mp3");
}


//Configuração Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+" Altura: "+altura);
}

//draw-desenha
function draw() {

  background(102,0,0);
  if (!(pontosMeus >=10 || pontosOponente >=10))
    jogo();
  else 
    mostraVencedor();
}
  ////////////////////////////////////////////////////////////////
  function jogo()
  { 
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoh();
  verificaColisaov();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificarColisaoMinhaRaquete();
  marcaPonto();
  mostrarPlacar ();
  //tempoJogo();
  }
  
  
  function mostraVencedor(){
    
    if(pontosMeus >= 10){ 
    fill(255,130,0);//laranja
   rect(300,0,300,400)//metade direita da tela
   textAlign(CENTER);
   fill(0);
   textSize(30);
   text("Lado direito é campeão",300,200);
  }else{
    fill(255,130,0);//laranja
   rect(0,0,300,400)//metade direita da tela
   textAlign(CENTER);
   fill(0);
   textSize(30);
   text("Lado esquerdo é campeão",300,200);
    
  }
}


  
  //draw - desenha
  
  function marcaPonto(){ 
    if (xBolinha <10){
    pontosMeus += 1; //pontosMeus = pontosMeus +1
    ponto.play();
    }
  
    if(xBolinha > 590){
      pontosOponente += 1; 
      ponto.play();
    }
    
  }

//função mostrarPlacar
 function mostrarPlacar (){
  textSize(30);
   strokeWeight(4);//Largura da borda
   stroke(57, 48, 138);//cor da borda
   
   fill(127, 216, 227);
   textAlign(CENTER);
   rect(428,12,60,35,10);
   rect(128,12,60,35,10);
   
   
   fill(255);
   text(pontosMeus, 450, 40);
   text(pontosOponente, 150,40);
  
 }
//Verificação de colisão com a bolinha - Raquete Aliada
function verificaColisaoRaquete(){
 if(xBolinha + raio > xMinhaRaquete&&
    yBolinha -raio < yMinhaRaquete + alturaRaquete&&
    yBolinha +raio > yMinhaRaquete){
   
   if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX <0)){
    velocidadeX *= -1;
   raquetada.play();}
 }
//Verificação de colisão com a bolinha - Raquete Oponente
   if(xBolinha - raio < xRaqueteOponente+larguraRaquete &&
      yBolinha - raio < yRaqueteOponente + alturaRaquete &&
      yBolinha + raio > yRaqueteOponente){
     
     if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX <0)){
            velocidadeX *= -1;
   raquetada.play();}
  }  
}
//função para movimentar a raquete

//função para mostrar a raquete   
function mostraRaquete()
{ fill(corMinhaRaquete);
 rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
  
  if(yMinhaRaquete < 0){
    yMinhaRaquete =0; //corrigido
  }else {
      yMinhaRaquete -= 10; //Velocidade da Raquete
  }
}
 if(keyIsDown(DOWN_ARROW)){ //SETA_PARA_BAIXO
   if (yMinhaRaquete > 300){
     yMinhRaquete = 300; //corrigido 
   }else{
   yMinhaRaquete += 10; //Velocidade da Raquete
     }
  }
}

//Verificação de Movimento - Raquete Oponente
function movimentaRaqueteOponente()
{if(keyIsDown(87)){
  if (yRaqueteOponente <0) {
    yRaqueteOponente = 0; //corrigido
  }else{
      yRaqueteOponente -= 10; //Velocidade da Raquete
  }
}
 if(keyIsDown(83)){//SETA_PARA_BAIXO
   if (yRaqueteOponente >300) {
     yRaqueteOponente =300; //corrigido
   }else{
   yRaqueteOponente += 10; //Velocidade da Raquete
}
 }
}
 //Função para mostrar a raquete oponente
function mostraRaqueteOponente()
{ fill(corRaqueteOponente);
 rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}


//Nesta função mostra a bolinha
function mostraBolinha (){
    noStroke();
  fill(corBolinha)
  circle(xBolinha,yBolinha,diametro);
}

  
//Nesta função movimenta a bolinha
function movimentaBolinha(
) {
  if(frameCount > 100)
  {
  //velocidade Horizontal
  xBolinha +=velocidadeX;//Incremento de x
  //velocidade Vertical
  yBolinha +=velocidadeY//Incremento de Y 
}
}

//Verificação de colisão Horizontal
function verificaColisaoh (){
  
  //Colisão Horizontal com bordas laterais
  if (xBolinha + raio > largura ||  xBolinha - raio <0){
    //velocidadeX é = velocidadeX * -1
    velocidadeX *= -1;
    }
}
//Verificação da colisao da Raquete aliada
function verificarColisaoMinhaRaquete ()
{ if (yMinhaRaquete   || yMinhaRaquete <0)
{
}
}
//Verificação de colisão Vertical
function verificaColisaov (){
   //Colisão Vertical com bordas superior e inferior
  if (yBolinha + raio > altura || yBolinha - raio <0) {
    velocidadeY *= -1;}
}
