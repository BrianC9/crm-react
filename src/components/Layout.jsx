import {Outlet, Link} from 'react-router-dom'
function Layout() {
  return (
<div>
    <h1 className="text-6xl font-bold flex justify-center">CRM - React </h1>
    <Outlet/>
    <footer className='bg-slate-200 p-5 mt-3'>
      <div className='flex justify-center'>Este es el footer de nuestra página</div>
      <div className='rounded-lg hover:bg-slate-600 hover:text-zinc-300 flex justify-center p-2 active:bg-slate-900'><Link to={"/"}>Volver a inicio 👈</Link></div>
    </footer>
</div>  )
}

export default Layout