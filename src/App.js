import React, { useState } from "react";

import UserForm from "./components/UserForm";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  // usamos el custom hook que creamos:

  const submit = (usuario) => {
    // clase 80: agregamos el usuario del formulario en el array de usuarios
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <Container>
      <Card>
        <UserForm submit={submit} />
      </Card>
      <Card>
        <ul>
          {usuarios.map((item) => (
            <li key={item.email}>
              {`${item.name} ${item.lastname} | Correo: ${item.email}`}
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}

export default App;
