import React from 'react';
import './styles.css'; 
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/40008415?s=460&u=5c6d0f0fc31391561f3a019f4897c24336fb67e9&v=4" alt="Bruno M."/>
                        <div>
                            <strong>Bruno Milford</strong>
                            <span>Programação front-end</span>
                        </div>
                    </header>
                    <p>Desenvolvedor Front-end Senior <br/><br/> Meus alunos adoram meus doidos layouts, mais 200 mil alunos ja sofreram de layout doidice.</p>
                    <footer>
                        <p>Preço/hora <strong>R$ 80,00</strong></p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;