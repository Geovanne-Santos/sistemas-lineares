import React, { useState } from "react";
import { calcularDeterminante } from "./functions/calculator";
import { gerarMatriz } from "./functions/gerarMatriz";
import Input from "./components/Input";


function App() {
  const [matriz, setMatriz] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [determinante, setDeterminante] = useState(null);

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
    const result = calcularDeterminante(matriz);
    setDeterminante(result);
  };

  console.log(gerarMatriz(matriz));

  return (
    <div className="max-w-800 mx-auto p-8 text-center">
      <h1 className="text-xl font-bold mb-4">
        Calculadora de Sistemas Lineares
      </h1>
      <form onSubmit={handleSubmit} className="mb-8">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-center mb-4">
            {row.map((col, colIndex) => (
              <React.Fragment key={colIndex}>
                <p className="mx-2"> {String.fromCharCode(88 + colIndex)}</p>
                <Input
                  value={matriz[rowIndex][colIndex]}
                  onChange={handleInputChange}
                  linha={rowIndex}
                  coluna={colIndex}
                />
              </React.Fragment>
            ))}
            <p className="mx-2">=</p>
            <Input
              value={matriz[rowIndex][2]}
              onChange={handleInputChange}
              linha={rowIndex}
              coluna={2}
            />
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
        <p className="mt-4">O determinante da matriz é: {determinante}</p>
      )}
    </div>
  );
}

export default App;
