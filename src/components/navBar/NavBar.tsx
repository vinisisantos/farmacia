import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-gray-700 text-zinc-50 flex justify-center py-4'>
          <div className="container flex justify-around text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia React</div>

            <div className='flex gap-x-16'>
              <Link to='/home' className='hover:bg-sky-700'>Home</Link>
              <Link to='/produtos' className='hover:bg-sky-700'>Produtos</Link>
              <Link to='/categorias' className='hover:bg-sky-700'>Categorias</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar