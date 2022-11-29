import {useNavigate, Form, useActionData} from 'react-router-dom'
import FieldsNewClient from '../components/FieldsNewClient'
import ErrorForm from '../components/ErrorForm'

export async function action({request}){
  console.log("Submit al formulario")

  const formData = await request.formData()
  
  const rawData = Object.fromEntries(formData)
  let curatedData = {};
  for (const [key,value] of Object.entries(rawData)) {
    Object.assign(curatedData, {[key]:value.trim()})
  }
  

  //Validación

  const errors = []
  if(Object.values(curatedData).includes('')){
    errors.push("All the fields are required")
  }

  // Retornar datos si hay errores
  if(Object.keys(errors).length){
    return errors
  }
  
}

function NewClient() {

  const navigate = useNavigate()
  const actionData = useActionData()
  
  return (
    <>
    <h1 className='text-4xl text-blue-900 font-black'>New Client</h1>
    <p className="my-3">Add a new client</p>
    <div className='flex justify-center'>
      <button
        className='font-bold uppercase bg-blue-800 text-white  px-4 py-2 rounded-lg my-6 mb-9'
        onClick={()=> navigate('/')}  
      >
        Return
      </button>
    </div>

    <div className='bg-white shadow rounded-md mx-auto md:w-3/4 px-6 p-10'>

      {actionData?.length && actionData.map((error, i)=>(<ErrorForm key={i} >{error}</ErrorForm>))}

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