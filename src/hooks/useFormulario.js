import { useState } from "react";

const useFormulario = (initial) => {
  // Creamos el state:
  const [formulario, setFormulario] = useState(initial);

  // Creamos la formula para gestionar el state:
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Clase 80: creamos una función para limpiar el formulario
  const reset = () => {
    setFormulario(initial);
  };

  return [formulario, handleChange, reset];
};

export default useFormulario;
