//exemplo de busca linear
function buscaLinear(arr,alvo){
    for (let i= 0; i < arr.length; i++){
        //verifica se o elemento atual é o alvo
        if(arr[i] === alvo){
            return i; //retorna o indice
        }
    } 
    return -1; //retorna -1 se nao encontrado
}
const lista = [10, 50, 30, 70, 80, 20]
console.log(buscaLinear(lista, 20));
console.log(buscaLinear(lista,99));