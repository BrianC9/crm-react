
function ClientRow({client}) {
  const {email, nombre,empresa,telefono} = client;
  return (
    <tr className="border-b font-medium text-lg">
      <td className="space-y-2 p-4 ">
        <p className="font-bold">{nombre}</p>
        <p className="text-s">{empresa}</p>
      </td>
      <td className=" p-4 space-y-2">
        <p><span className="font-bold">Email: </span>{email}</p>
        <p><span className="font-bold">Tel: </span>{telefono}</p>
        
      </td>
      <td className="p-4 space-x-3">
      <button 
        type="button" 
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:ring-4  hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        Edit
      </button>

      <button 
        type="button" 
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-red-300 dark:hover:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        Delete
      </button>

      </td>
    </tr>

    )
}

export default ClientRow