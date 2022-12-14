import {Outlet, Link, useLocation} from 'react-router-dom'
function Layout() {
  const location = useLocation();
  return (
<header className='md:flex md:min-h-screen'>
    <div className='md:w-1/4 bg-blue-900 text-center xl:p-15 2xl:p-20 p-10 '>
      <h2 className='text-white text-4xl font-bold  md:text-left'>C.R.M</h2>
      <nav className='mt-10 text-white flex flex-col md:text-left'>
        <Link 
        to={'/'} 
        className={`${location.pathname === "/" ? "text-blue-300":""} text-1xl hover:text-blue-300 py-2 `} >Clients</Link>
        <Link 
        to={'/clients/new'} 
        className={`${location.pathname === "/newclient" ? "text-blue-300":""} text-1xl hover:text-blue-300 py-2 `} >New Client</Link>
        <Link 
        to={'/aboutus'} 
        className={`${location.pathname === "/aboutus" ? "text-blue-300":""} text-1xl hover:text-blue-300 py-2 `} >About Us</Link>
      </nav>

    </div>
    <main className='md:w-3/4 bg-zinc-100 md:h-screen overflow-scroll p-10 '>
    <Outlet/>
    </main>
    
</header>  )
}

export default Layout