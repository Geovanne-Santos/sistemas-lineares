export function gerarMatriz(data) {
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length - 1; j++) {
            newArray.push(data[i][j])
        }
    }

    return newArray;
}
