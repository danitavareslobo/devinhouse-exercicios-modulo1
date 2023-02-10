// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.

var idade = parseInt (prompt('Quantos anos você tem?'));

if (idade >=0 && idade <=15) {
  alert('Você é Jovem!')
} else if (idade >= 16 && idade <=64) {
  alert('Você é Adulto!')
}else if (idade >=65) {
  alert('Você é Idoso!')
}else {
  alert('Valor inválido!')
}