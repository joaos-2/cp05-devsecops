function calcular() {
  const expr = document.getElementById("expr").value;
  const resultado = eval(expr); 
  document.getElementById("resultado").textContent = resultado;
}
