import './index.scss'

import { Link } from 'react-router-dom'

export default function Index(){
    return(
        <>
            <main className='home'>
                <div className='textos'>
                    <h1>PROVA QUARTO BIMESTRE</h1>
                    <h2>Aluno: Gabriel de Araújo Silva Turma:INFO D</h2>
                    <Link to='/exercicioum'> Vá para o exercício um</Link>
                    <Link to='/exerciciodois'> Vá para o exercício dois</Link>
                </div>
            </main>
        </>
    )
}