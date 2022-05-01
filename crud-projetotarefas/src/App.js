import './App.css';
import { useState } from 'react';

let initialState = [
    {
        id: 1,
        descricao: 'Primeira atividade'
    },
    {
        id: 2,
        descricao: 'Segunda atividade'
    }
]

function App() {

    const [atividades, setAtividades] = useState(initialState);

    function addAtividade(e) {
        e.preventDefault();

        const atividade = {
            id: document.getElementById('id').value,
            descricao: document.getElementById('descricao').value
        };
        setAtividades([...atividades, { ...atividade }]); // cada elemento existente dentro de atividades, ira ser copiado para dentro dessa array
    }


    return (
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Id</label>
                    <input id='id' type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Descrição</label>
                    <input id='id' type="text" className="form-control" />
                </div>

                <div className="cold-12">
                    <button className="btn btn-outline-secondary" onClick={addAtividade}>+ Atividade</button>
                </div>

            </form>
            
            <div className="mt-4">
                {atividades.map((ativ) => (
                    <div key="{ativ.id}" className='card mb-2 shadow-sm'>
                        <div className="card-body">
                            <p className="card-text">
                                {ativ.id} - {ativ.descricao}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;


// Acessa uma informação específica do objeto, com o map é como se fosse um for each. O ativ esta dentro de atividades 