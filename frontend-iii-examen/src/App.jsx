import Card from "./Card"
import Form from "./Form"
import React, { useState } from "react"
import "./App.css"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [clientes, setClientes] = useState([])

  const handleAddClient = (cliente) => {
    setClientes([...clientes, cliente])
  }

  return (
    <div className="App">
      <h1>Veterinaria El gato pesado</h1>
      <p>Formulario de ingreso de clientes para el negocio</p>

      <Form onAddClient={handleAddClient} />

      <Card clientes={clientes} />
    </div>
  )
}

export default App
