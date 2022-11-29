import {useNavigate, Form} from 'react-router-dom'
import FieldsNewClient from '../components/FieldsNewClient'

export async function action({request}){
  console.log("Submit al formulario")

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  
  console.log(datos)
  
}

function NewClient() {

  const navigate = useNavigate()
  
  return (
    <>
    <h1 className='text-4xl text-blue-900 font-black'>New Client</h1>
    <p className="my-3">Add a new client</p>
    <div className='flex justify-end'>

      <button
        className='font-bold uppercase bg-blue-800 text-white px-4 py-2 rounded-lg my-2'
        onClick={()=> navigate('/')}  
      >
        Return
      </button>

    </div>
    <div className='bg-white shadow rounded-md md:w-3/4 px-5 p-10'>
      <Form
        method='post'
        action={action}
      >
      <FieldsNewClient/>
      <input
        type="submit"
        className='mt-5 w-full bg-blue-800 hover:bg-blue-600 hover:ring-2 uppercase font-semibold text-white text-lg rounded-lg py-1'
        value="Register client"
      />
      </Form>
    </div>
    </>
    )
}

export default NewClient