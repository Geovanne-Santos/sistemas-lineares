import React, { useState } from "react";
import { calcularDeterminante } from "./functions/calculadoraDeterminante";
import { gerarMatriz } from "./functions/gerarMatriz";
import Input from "./components/Input";
import { classificarSistema } from "./functions/classificarSistema.js";

function App() {
  const [matriz, setMatriz] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  const [determinante, setDeterminante] = useState(null);
  const [classificacao, setClassificacao] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [z, setZ] = useState(null);
  const [detX, setDetX] = useState(null);
  const [detY, setDetY] = useState(null);
  const [detZ, setDetZ] = useState(null);

  // Função para lidar com a mudança de valor nos campos de entrada da matriz
  const handleInputChange = (linha, coluna, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatriz = matriz.map((row, i) =>
      row.map((value, j) => (i === linha && j === coluna ? newValue : value))
    );
    setMatriz(newMatriz);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const det = calcularDeterminante(matriz);
    setDeterminante(det);

    if (det !== 0) {
      const detX = calcularDeterminante(
        substituirColuna(matriz, 0, obterColunaResultados(matriz))
      );
      const detY = calcularDeterminante(
        substituirColuna(matriz, 1, obterColunaResultados(matriz))
      );
      const detZ = calcularDeterminante(
        substituirColuna(matriz, 2, obterColunaResultados(matriz))
      );

      const xValue = detX / det;
      const yValue = detY / det;
      const zValue = detZ / det;

      setX(xValue);
      setY(yValue);
      setZ(zValue);

      setDetX(detX);
      setDetY(detY);
      setDetZ(detZ);

      // Chame a função para classificar o sistema
      const classificacaoMatrix = classificarSistema(det, detX, detY, detZ);
      setClassificacao(classificacaoMatrix)
      console.log(classificacaoMatrix)
    } else {
      setX(null);
      setY(null);
      setZ(null);
    }
  };

  // Função para substituir uma coluna em uma matriz
  const substituirColuna = (matrix, coluna, novaColuna) => {
    return matrix.map((row, i) =>
      row.map((value, j) => (j === coluna ? novaColuna[i] : value))
    );
  };

  // Função para obter a coluna de resultados de uma matriz
  const obterColunaResultados = (matrix) => {
    return matrix.map((row) => row[3]);
  };

  console.log(gerarMatriz(matriz));

  return (
    <div className="max-w-800 mx-auto py-8 text-center">
      <h1 className="text-xl font-bold mb-4">
        Calculadora de Sistemas Lineares
      </h1>
      <form onSubmit={handleSubmit} className="pb-8 border-b-2">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-center mb-4">
            {row.map((col, colIndex) => (
              <React.Fragment key={colIndex}>
                <p className="mx-2">
                  {colIndex === 3 ? "=" : String.fromCharCode(88 + colIndex)}
                </p>
                <Input
                  value={matriz[rowIndex][colIndex]}
                  onChange={handleInputChange}
                  linha={rowIndex}
                  coluna={colIndex}
                />
              </React.Fragment>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calcular Determinante
        </button>
      </form>

      {determinante !== null && (
        <div className="mt-4">
          <p>O determinante da matriz é: {determinante}</p>
          {x !== null && (
            <p>
              O valor de x é: {x} (Determinante de x: {detX})
            </p>
          )}
          {y !== null && (
            <p>
              O valor de y é: {y} (Determinante de y: {detY})
            </p>
          )}
          {z !== null && (
            <p>
              O valor de z é: {z} (Determinante de z: {detZ})
            </p>
          )}
          {classificacao && <p>Classificacao: {classificacao}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
