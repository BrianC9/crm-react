import {useNavigate, Form, useActionData, redirect} from 'react-router-dom'
import FieldsNewClient from '../components/FieldsNewClient'
import ErrorForm from '../components/ErrorForm'
import { checkEmailExist, createClient } from '../api/clientsService'

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

  const email = formData.get('email')
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errors.push("Email format is not valid")
  }
  
  const exists = await checkEmailExist(email)
  
  if(exists === true){
    errors.push("Email is already taken")
  }
  
  // Retornar datos si hay errores
  if(Object.keys(errors).length){
    return errors
  }

  // Validación correcta
  await createClient(curatedData);

  return redirect('/')
}

function NewClient() {
  
  const navigate = useNavigate()
  const errors = useActionData()
  console.log(errors)
  
  return (
    <>
    <h1 className='text-4xl text-blue-900 font-black'>New Client</h1>
    <p className="my-3">Fill the form</p>
    <div className='flex justify-center'>
      <button
        className='font-bold uppercase bg-blue-800 text-white  px-4 py-2 rounded-lg my-6 mb-9'
        onClick={()=> navigate('/')}  
      >
        Return
      </button>
    </div>

    <div className='bg-gray shadow lg:max-w-2xl rounded-md mx-auto md:w-3/4 px-6 p-10'>

      {errors?.length && errors.map((error, i)=>(<ErrorForm key={i+error.length} >{error}</ErrorForm>))}

      <Form
        method='post'
        noValidate
      >
      <FieldsNewClient/>
      <input
        type="submit"
        className='mt-5 w-full bg-teal-700 hover:bg-teal-500 hover:ring-2 hover:ring-teal-400 uppercase font-semibold text-white text-lg rounded-lg py-1'
        value="Register client"
      />
      </Form>
    </div>
    </>
    )
}

export default NewClient