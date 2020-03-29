import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(event){
        
        event.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await Api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch(err){
            
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link className="link" to="/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" value={title} onChange={ e => setTitle(e.target.value) } placeholder="Titulo do caso" />
                    <textarea value={description} onChange={ e => setDescription(e.target.value) } placeholder="Descrição" ></textarea>
                    <input value={value} onChange={ e => setValue(e.target.value) } type="text" placeholder="Valor em reais" />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}