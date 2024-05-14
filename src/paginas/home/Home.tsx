import React from 'react';
import homeLogo from '../../assets/img/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-amber-50 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-extrabold text-sky-600'>Farmácia Preço </h2>
              <p className='text-xl text-sky-600'>Os melhores produtos, com os melhores preços!</p>
  
            
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-100%' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;