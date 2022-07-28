var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];


listaFilmes.push("Harry Potter 2");


// valor inicial. condicao. expressão final
for (var indice = 0; indice < 4; indice = indice +1) {
  document.write("<p>" + indice + "</p>");
  document.write("<p>" + listaFilmes[indice] + "</p>");
}