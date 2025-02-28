// Função para calcular a média das três notas do meio
function calcularMedia(notas) {
    // Ordena as notas
    notas = notas.sort((a, b) => a - b);
  
    // Remove a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);
    
  // Calcula a média das notas restantes
    let soma = 0;
    notasComputadas.forEach(nota => soma += nota);
    return soma / notasComputadas.length;
  }
  
  // Função para exibir o resultado
  function exibirResultados(atletas) {
    atletas.forEach(atleta => {
      let nome = atleta.nome;
      let notas = atleta.notas;
      let mediaValida = calcularMedia(notas);
      console.log(`Atleta: ${nome}`);
      console.log(`Notas Obtidas: ${notas.join(",")}`);
      console.log(`Média Válida: ${mediaValida.toFixed(6)}`);
      console.log('');
    });
  }
  
  // Dados dos atletas
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Executa a função de exibição dos resultados
  exibirResultados(atletas);
  