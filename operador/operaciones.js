function sumar(x1,x2) {
  return x1+x2;
  }
function restar(x1,x2){
  return x1-x2;
}
function multiplicar(x1,x2){
  return x1*x2;
}
function dividir(x1,x2){
  if(x2==0){
    errorDividircero();
  }
  else {
    return x1 / x2;
  }
}
function errorDividircero() {
  console.log('no se puede dividir entre cero');


}
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
