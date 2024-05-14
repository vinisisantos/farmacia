import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'

function DeletarTema() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/temas/${id}`);

            alert('Tema apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Tema')
        }

        retornar()
    }
  
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-sky-600 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-500 hover:bg-red-700  w-full py-2' onClick={retornar}>Não</button>
        <button className='w-full text-slate-100 bg-sky-300 hover:bg-sky-600 flex items-center justify-center' onClick={deletarCategoria} >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarTema
