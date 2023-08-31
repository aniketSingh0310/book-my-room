import Image from 'next/image';


 const Navbar = () => {
  
  return (
    <div className="sticky top-0 z-50">
        <div className="navbar bg-gray-500">
  <div className="flex-1 py-5">
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <Image src="/static/logo2.jpg" height={50} width={100} alt='logo'/>
    <p className='text-3xl font-light text-white bg-black'>MY</p>
  </div>
  <div className="flex-none gap-2">
     
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src="/static/avatar.png" height={40} width={40} alt='avt' />
        </div>
      </label>
      
     
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;
