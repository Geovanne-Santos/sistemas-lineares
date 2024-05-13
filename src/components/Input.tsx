import React from "react";

// Componente de Input reutilizável
const Input = ({ value, onChange, linha, coluna }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(linha, coluna, e)}
      className="w-20 mx-2 px-3 py-1 border border-gray-300 rounded text-center appearance-none"
    />
  );
};

export default Input;
