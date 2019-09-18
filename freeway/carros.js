let xCarros = [600, 600, 600, 600, 600, 600,];
let yCarros = [40, 100, 150,210,260,315];
let velocidadesCarros = [2,5,3.5,6,2,7];
let comprimentoCarros =[50,50,80,50,50,80];
let altura = 40;

function mostraCarros(){
  for(let i=0; i< imagensCarros.length ; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i] ,altura);
    }
  }
 
  function movimentaCarro (){
   for(let i=0; i< imagensCarros.length ; i++){
   xCarros[i] -= velocidadesCarros[i];
      if (xCarros[i] < -50){
     xCarros[i] = 600; 
  }
 }
}
