import { Form, redirect, useNavigate } from "react-router-dom";
import { deleteClient } from "../api/clientsService";

export async function action({params}){
   deleteClient(params.clientId)
  return redirect('/')
}

function ClientRow({client}) {
  const navigate = useNavigate()
  const {email, name,company,telephone,id} = client;
   
  return (
    <tr className="border-b font-medium text-lg">
      
      <td className="space-y-2 p-4 ">
        <p className="font-bold">{name}</p>
        <p className="text-s">{company}</p>
      </td>

      <td className=" p-4 space-y-2">
        <p><span className="font-bold">Email: </span>{email}</p>
        <p><span className="font-bold">Tel: </span>{telephone}</p>  
      </td>

      <td className="p-4 space-x-3 flex ">
      <button 
        type="button" 
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:ring-4  hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        onClick={()=> navigate(`/clients/${id}/edit`)}
        >
        Edit
      </button>

      <Form
        method="POST"
        action={`/clients/${id}/delete`}
        onSubmit={(e)=>{
          if(!confirm("Confirm wether you like to delete the client?")){
            e.preventDefault()
          }
        }}
      >
        <button 
          type="submit" 
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-red-300 dark:hover:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
          Delete
        </button>
      </Form>
      </td>
    </tr>

    )
}

export default ClientRow