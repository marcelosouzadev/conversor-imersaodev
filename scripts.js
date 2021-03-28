const conversor = document.querySelector('button')

conversor.onclick = () => 
{
  var ValorMilhas = Number(document.querySelector('input').value.replace('.',','))
  if (ValorMilhas < 1) 
  {
document.querySelector('span').innerHTML = "Valor inválido!"
  } 
  else {
document.querySelector('span').innerHTML = 'Resultado: ' + (ValorMilhas * 0.62) + ' milhas' 
  }  
}

//
