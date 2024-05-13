import React, { useState } from "react";
import { calcularDeterminante } from "./functions/calculator";
import { gerarMatriz } from "./functions/gerarMatriz";

function App() {
  const [matriz, setMatriz] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
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
        <div className="flex items-center justify-center mb-4">
          <p className="mx-2">X</p>
          <input
            type="number"
            value={matriz[0][0]}
            onChange={(e) => handleInputChange(0, 0, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Y</p>
          <input
            type="number"
            value={matriz[0][1]}
            onChange={(e) => handleInputChange(0, 1, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Z</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(0, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">=</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(0, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <p className="mx-2">X</p>
          <input
            type="number"
            value={matriz[0][0]}
            onChange={(e) => handleInputChange(1, 0, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Y</p>
          <input
            type="number"
            value={matriz[0][1]}
            onChange={(e) => handleInputChange(1, 1, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Z</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(1, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">=</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(1, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="mx-2">X</p>
          <input
            type="number"
            value={matriz[0][0]}
            onChange={(e) => handleInputChange(2, 0, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Y</p>
          <input
            type="number"
            value={matriz[0][1]}
            onChange={(e) => handleInputChange(2, 1, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">Z</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(2, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
          <p className="mx-2">=</p>
          <input
            type="number"
            value={matriz[0][2]}
            onChange={(e) => handleInputChange(2, 2, e)}
            className="w-12 mx-2 py-1 border border-gray-300 rounded text-center appearance-none"
          />
        </div>
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
