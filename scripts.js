function converterParaMilhas() {
  
var valorEmKm = parseFloat(document.getElementById('KmToMilhas').value.replace(',', '.'))

const valorFixoKm = 0.62

var kmParaMilhas = (valorEmKm * valorFixoKm)

if (kmParaMilhas) {
document.getElementById('resultadoMilhas').innerHTML = "O resultado é: " + kmParaMilhas + " milhas"
}                                             
 else {
    document.getElementById('resultadoMilhas').innerHTML = "Valor inválido!"
 } 
}
