const nomes = ["Yasmim", "Duda", "Naju", "Crys", "Rosiele"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)