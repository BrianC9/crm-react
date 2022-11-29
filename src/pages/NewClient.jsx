import {useNavigate} from 'react-router-dom'
import FormNewClient from '../components/FormNewClient'
function NewClient() {
  const navigate = useNavigate()
  return (
    <>
    <h1 className='text-4xl text-blue-900 font-black'>New Client</h1>
    <p className="my-3">Add a new client</p>
    <div className='flex justify-end'>

      <button
        className='font-bold uppercase bg-blue-800 text-white px-4 py-2 rounded-lg'
        onClick={()=> navigate('/')}  
      >
        Return
      </button>

    </div>
    <div className='bg-white shadow rounded-md md:w-3/4 px-5 p-10'>
      <FormNewClient/>
    </div>
    </>
    )
}

export default NewClient