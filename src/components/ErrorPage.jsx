import {useRouteError, useNavigate} from 'react-router-dom'
function ErrorPage() {
  const navigate = useNavigate()
    const error = useRouteError()
    console.log(error);
  return (
    <div className='space-y-4 text-center font-semibold'>
        <h1 className='text-4xl font-bold text-blue-800'>CRM - Clients</h1>
        <p>An error has ocurred</p>
        <p className='font-bold'>{error.status && `Status Code: ${error.status} - `}{error.message || error.statusText}</p>
        <div className='flex justify-center'>
        <button
        className='font-bold uppercase bg-blue-800 text-white  px-4 py-2 rounded-lg my-6 mb-9'
        onClick={()=> navigate('/')}  
        >
        Return
      </button>
    </div>
    </div>
  )
}

export default ErrorPage