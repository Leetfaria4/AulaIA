function buscaBinaria(array,alvo){
    let inicio = 0;
    let fim = array.length - 1;

    while(inicio <= fim){
        //calcula o ponto médio
        let meio = Math.floor((inicio + fim)/ 2);
        
        if(array[meio]=== alvo){
            return meio; //alvo encontrado
        }else if (array[meio] < alvo){
            inicio = meio + 1; //busca metade direita
        }else{
            fim = meio - 1; //busca metade esquerdas
        }
    }
    return -1; //alvo nao encontrardo
}

/*const milNumeros = Array.from({ length: 1000 }, () => 
  Math.floor(Math.random() * 100) + 1
);

console.log(milNumeros);
*/
const numeros = [];

for (let i = 0; i < 1000; i++) {
  // Gera um número inteiro entre 1 e 1000
  let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
  numeros.push(numeroAleatorio);
}

console.log(numeros);
