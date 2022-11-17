import { useState } from 'react'
import './index.scss'

export default function Index(){

    const [numero, setNumero] = useState();
    const [numeroDois, setNumeroDois] = useState();
    const [figurinhasUm, setFigurinhasUm] = useState([]);
    const [figurinhasDois, setFigurinhasDois] = useState([]);
    const [possibilidadesTroca, setPossibilidadesTroca] = useState([]);

    function PessoaUm(){
        figurinhasUm.push(numero)
    }

    function PessoaDois(){
        figurinhasDois.push(numeroDois)
    }

    function PossiveisTrocas () {
        let diferenca = figurinhasUm.filter(x => figurinhasDois.indexOf(x) === -1);
        let r = typeof(diferenca)
        setPossibilidadesTroca(diferenca)
    }

    return(
        <>
            <main>
                <div> <h1> Exercício Dois - Figurinhas da Copa</h1></div>

                <div>
                        <label>Colecionador Um:</label>
                        <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))}/>
                </div>
                <div>
                        <label>Colecionador Dois:</label>
                        <input type="number" value={numeroDois} onChange={e => setNumeroDois(Number(e.target.value))}/>
                </div>
                <div>
                    <button onClick={PessoaUm}>Adicionar Figurinhas do Colecionador Um</button>
                    <button onClick={PossiveisTrocas}>Analisar possibilidades</button>
                    Podem ser feitas essas trocas {possibilidadesTroca}
                    <button onClick={PessoaDois}>Adicionar Figurinhas do Colecionador Dois</button>
                </div>

                <div>
                    <h3>FIGURINHAS COLECIONADOR UM:</h3>
                    {figurinhasUm.map(item =>
                        <ul>
                            <li>{item}</li>
                        </ul>
                        )}
                </div>    

                <div>            
                    <h3>FIGURINHAS COLECIONADOR DOIS:</h3>
                    {figurinhasDois.map(item =>
                        <ul>
                            <li>{item}</li>
                        </ul>
                        )}    
                </div>    
                
            </main>
        </>
    )
}