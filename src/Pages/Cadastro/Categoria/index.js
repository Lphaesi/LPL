import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descrição: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState( [ ] );
    const [values, setValues] = useState('valoresIniciais');

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
            setValue(
                infosDoEvento.target.getAttribute('name'),
                infosDoEvento.target.value
        );
    }
    
        return (
            <PageDefault>
                <h2>Cadastro de Categoria</h2>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values.nome
                    ]);

                    setValues(valoresIniciais)
                }}>
                                  
                        <FormField 
                            label= "Nome da Categoria"
                            type="text"
                            name="nome"
                            Value={values.nome}
                            onChange={handleChange}
                        />

                        <FormField
                            label= "Descrição da Categoria"
                            type="text"
                            name="descrição"
                            value={values.descrição}
                            onChange={handleChange}
                        />

                        <FormField
                            label= "Cor da Categoria"
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />

                    <button>
                        Cadastrar
                    </button>

                </form>
                
                <ul>
                    {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )    
                })}
                </ul>

                <Link to="/">
                    Ir para home
                </Link>

            </PageDefault>
    );
}

export default CadastroCategoria;