import { useState } from 'react'

import './index.scss'

export default function Index(){

    const [numero, setNumero ] = useState(0);
    const [numeros, setNumeros] = useState([]);
    const [numeroParaInserir, setNumeroParaInserir] = useState(0);

    function criarArray(){
        let r = [numero];
        setNumeros(r);
        console.log(numeros);
    }

    function adicionarUmNumero(){
        numeros.push(numeroParaInserir)
        console.log(numeros)
    }

    function inverterArray(){
        numeros.reverse();
    }

    return(
        <>
            <main>
                <div> <h1> Exercício Um - Inverter Array</h1></div>
                <div>
                    <div>
                        <label>Insira a quantidade de números do Array:</label>
                        <input type="number" onChange={e => setNumero(Number(e.target.value))}/>
                        <button onClick={criarArray}>Ok</button>
                    </div>
                    <div>
                        <label>Número:</label>
                        <input type="number" onChange={e => setNumeroParaInserir(Number(e.target.value))}/>
                    </div>
                    <button onClick={adicionarUmNumero}>Add</button>
                    <button onClick={inverterArray}>Inverter</button>

                    <div>
                        {numeros.map(item => 
                         <div>{item}</div>
                        )}
                    </div>

                </div>
            </main>
        </>
    )
}