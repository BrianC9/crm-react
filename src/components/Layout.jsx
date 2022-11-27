import {Outlet, Link, useLocation} from 'react-router-dom'
function Layout() {
  const location = useLocation();
  console.log(location)
  return (
<header className='md:flex md:min-h-screen'>
    <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
      <h2 className='text-white text-center text-4xl font-bold'>C.R.M</h2>
      <nav className='mt-10 text-white flex flex-col'>
        <Link to={'/newclient'} className="hover:text-blue-300">New Client</Link>
        <Link to={'/'} className="hover:text-blue-300">Clients</Link>
        <Link to={'/aboutus'} className="hover:text-blue-300">About Us</Link>
      </nav>

    </div>
    <main className='md:w-3/4 bg-zinc-100 md:h-screen overflow-scroll p-10 '>
    <Outlet/>
    </main>
    
</header>  )
}

export default Layout