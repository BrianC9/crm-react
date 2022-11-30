import { useLoaderData } from "react-router-dom";
import ClientRow from "../components/ClientRow";
import { getClients } from "../api/clients";
export function loader(){
  const clients = getClients()

  return clients
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