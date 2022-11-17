import { useEffect, useState } from 'react'


export default function Index(){

    const [numero, setNumero ] = useState(0);
    const [numeros, setNumeros] = useState([]);

    function inverterArray(){
       let r = numeros.reverse()
       alert(numeros)
       return r
    }

    function adicionarUmNumero(){
        let a = numeros.push(numero)
    }

    useEffect(() => {
        adicionarUmNumero()
    }, [])

   
    return(
        <>
            <main>
                <div> <h1> Exercício Um - Inverter Array</h1></div>
                <div>
                    <div>
                        <label>Insira um número:</label>
                        <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))}/>
                        {numero}
                    </div>
                    <button onClick={adicionarUmNumero}>Add</button>
                    <button onClick={inverterArray}>Inverter</button>

                    <div>
                        {numeros.map(item => 
                         <span> {item} </span>
                        )}
                    </div>

                </div>
            </main>
        </>
    )
}