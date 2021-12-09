import React from "react";
import Input from "./Input";
import Button from "./Button";

import useFormulario from "../hooks/useFormulario";

export default function UserForm({ submit }) {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre: "
        placeholder="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
      />
      <Input
        label="Apellido: "
        placeholder="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
      />
      <Input
        label="Correo electrónico: "
        placeholder="Correo electrónico"
        name="email"
        value={formulario.email}
        onChange={handleChange}
      />
      <Button>Enviar</Button>
    </form>
  );
}
