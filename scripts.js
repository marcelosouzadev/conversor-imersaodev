document.getElementById("botao").onclick = function() {

  var ValorKm = Number(document.querySelector('input').value.replace('.',','))
  
  if (ValorKm < 1) {
document.querySelector('span').innerHTML = "Valor inválido!"
  } 
  else {
document.querySelector('span').innerHTML = 'Resultado: ' + (ValorKm * 0.62) + ' milhas' 
  }  
}

//
