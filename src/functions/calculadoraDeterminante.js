export function calcularDeterminante(matriz) {
    const tamanho = matriz.length;

    if (tamanho === 1) {
        return matriz[0][0];
    }

    if (tamanho === 2) {
        return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    }

    let determinante = 0;

    for (let j = 0; j < tamanho; j++) {
        const cofator = matriz[0][j] * calcularCofator(matriz, 0, j);
        determinante += (j % 2 === 0 ? cofator : -cofator);
    }

    return determinante;
}

function calcularCofator(matriz, linha, coluna) {
    const submatriz = [];
    const tamanho = matriz.length;

    for (let i = 0; i < tamanho; i++) {
        if (i !== linha) {
            submatriz.push(matriz[i].slice(0, coluna).concat(matriz[i].slice(coluna + 1)));
        }
    }

    return calcularDeterminante(submatriz);
}
