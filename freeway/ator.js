//variavel ator
let yAtor = 366;
let xAtor = 100;
let colidiu = false;

//variavel ator 2
let yAtor2 = 366;
let xAtor2 = 350;

//variavel placar

let placar2 = 0;
let placar = 0;




function mostraPlacar2(){
  if (yAtor2 < 15){
  placar2 += 1;
  voltaAtorParaPosicaoInicial2();
  somPonto.play();
  }
  textAlign(CENTER)
  textSize (25);
  fill(color (255, 192, 140))
  text( placar2, 300,30)

}



function mostraPlacar(){
  if (yAtor < 15){
  placar += 1;
  voltaAtorParaPosicaoInicial();
  somPonto.play();
  }
  textAlign(CENTER)
  textSize (25);
  fill(color (255, 192, 140))
  text( placar, 180,30)

}

function verificaColisao(){
  
  for(let i=0; i < imagensCarros.length; i++){
   
    colidiu = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor,15);
        
        if (colidiu){
        console.log("colidiu");
          voltaAtorParaPosicaoInicial();
          somColidiu.play();
          
          
        if(placar > 0)
            placar -= 1;
        }
   }
}

function voltaAtorParaPosicaoInicial(){
yAtor = 366;
}
        
function mostraAtor(){
    image(imagemDoAtor,xAtor,yAtor,30,30);
  }
    

  function movimentaAtor(){
if (keyIsDown(87)) {
  //Se a seta para cima for pressionada
  //E o yAtor maior que 5, ent]ao sobe.
  if(yAtor > 5)
  yAtor -= 3;
  }
   

  if (keyIsDown(83)) {
    if(yAtor < 366)
    yAtor += 3;
    
  }
}
function verificaColisao2(){
  
  for(let i=0; i < imagensCarros.length; i++){
   
    colidiu = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarros[i], altura, xAtor2, yAtor2,15);
        
        if (colidiu){
        console.log("colidiu");
          voltaAtorParaPosicaoInicial2();
          somColidiu.play();
          
          if(placar2 > 0)
            placar2 -= 1;
        }
  }
}

function voltaAtorParaPosicaoInicial2(){
yAtor2 = 366;
}

function mostraAtor2(){
image(imagemDoAtor,xAtor2,yAtor2,30,30)
}

function movimentaAtor2(){
if (keyIsDown(UP_ARROW)) {
  //Se a seta para cima for pressionada
  //E o yAtor maior que 5, entao sobe.
  if(yAtor2 > 5)
  yAtor2 -= 3;
  }
   

  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor2 < 366)
    yAtor2 += 3;
    
  }
}
