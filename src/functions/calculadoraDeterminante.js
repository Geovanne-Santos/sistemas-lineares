// Função para calcular o determinante de uma matriz
export function calcularDeterminante(matriz) {
    const tamanho = matriz.length;

    // Caso base: matriz 1x1
    if (tamanho === 1) {
        return matriz[0][0];
    }

    // Caso base: matriz 2x2
    if (tamanho === 2) {
        return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    }

    let determinante = 0;

    // Iterar sobre a primeira linha da matriz
    for (let j = 0; j < tamanho; j++) {
        // Cofator da posição (0, j)
        const cofator = matriz[0][j] * calcularCofator(matriz, 0, j);
        // Adiciona ou subtrai o cofator dependendo do índice da coluna
        determinante += (j % 2 === 0 ? cofator : -cofator);
    }

    return determinante;
}

// Função auxiliar para calcular o cofator de uma posição na matriz
function calcularCofator(matriz, linha, coluna) {
    const submatriz = [];
    const tamanho = matriz.length;

    // Construir a submatriz excluindo a linha e coluna do cofator
    for (let i = 0; i < tamanho; i++) {
        if (i !== linha) {
            submatriz.push(matriz[i].slice(0, coluna).concat(matriz[i].slice(coluna + 1)));
        }
    }

    // Calcular o determinante da submatriz
    return calcularDeterminante(submatriz);
}
