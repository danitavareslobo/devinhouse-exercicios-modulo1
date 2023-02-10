var numero = parseInt(prompt('Informe o número'))

if (isNaN(numero)) {
  alert('Número inválido')
}else {

  for(var i = 0; i<=10; i++){
    resultado += numero + 'x' + 1 + ' = ' + (numero * i) + '\n';
  } 
  alert(resultado);
}
