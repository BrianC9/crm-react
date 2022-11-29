import { useLoaderData } from "react-router-dom";
import ClientRow from "../components/ClientRow";
export function loader(){
const clients = [
  {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
  },
  {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
  },
  {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
  },
  {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
  },
  {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
  },
]
return clients;
}
function Index() {
  const clients= useLoaderData()
  

  return (
      <>
    <h1 className='text-4xl text-blue-900 font-black'>Clientes</h1>
    <p className="my-3">Manage your clients</p>
{clients.length ? (
  <table className="w-full bg-white shadow table-auto rounded-lg "  border={1}>
    <thead className="bg-blue-300 text-2xl text-left text-white rounded-md border-b">
      <tr>
      <th className="p-4 ">Client</th>
      <th className="p-4 ">Contact</th>
      <th className="p-4 ">Action</th>
      </tr>
       </thead>
       <tbody >
        {clients.map(client=>{
          return (<ClientRow client={client} key={client.id}/>)
        })}
       </tbody>

  </table>)
:(<h2>There are no clients yet</h2>)}
    
    </> )
}

export default Index