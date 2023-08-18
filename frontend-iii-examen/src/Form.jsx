import React, { useState } from "react"
import PropTypes from "prop-types"

export default function Form({ onAddClient }) {
  const [name, setName] = useState("")
  const [petname, setPetname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.length < 3 || petname.length < 6) {
      alert("Por favor chequea que la información sea correcta.")
      return
    }
    onAddClient({ name, petname })
    setName("")
    setPetname("")
  }

  return (
    <div className="cnt-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Ingrese su nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          name="petname"
          id="petname"
          placeholder="Ingrese el nombre de su mascota"
          value={petname}
          onChange={(e) => setPetname(e.target.value)}
        />

        <button type="submit">Agregar cliente</button>
      </form>
    </div>
  )
}
