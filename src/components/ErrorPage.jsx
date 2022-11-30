import {useRouteError} from 'react-router-dom'
function ErrorPage() {
    const error = useRouteError()
    console.log(error);
  return (
    <div className='space-y-4 text-center font-semibold'>
        <h1 className='text-4xl font-bold text-blue-800'>CRM - Clients</h1>
        <p>An error has ocurred</p>
        <p className='font-bold'>{error.message}</p>
    </div>
  )
}

export default ErrorPage