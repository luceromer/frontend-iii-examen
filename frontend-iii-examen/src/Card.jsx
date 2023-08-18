//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ clientes }) {
  return (
    <ul className="card">
      {clientes.map((cliente, index) => (
        <li key={index}>
          Cliente: {cliente.name} - Mascota: {cliente.petname}
        </li>
      ))}
    </ul>
  )
}

export default Card
