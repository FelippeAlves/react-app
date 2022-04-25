import React, { useEffect, useState, useLayouteffect } from 'react';
import NumberFormat from 'react-number-format';
import './listadeusuarios.css';
import axios from 'axios';

//Pegando as informações da API pelo GET
const ListaDeUsuarios = () => {
    const [infos, setInfos] = useState([
    {id: 1001, name: 'Eduardo Santos', img: 'https://randomuser.me/api/portraits/men/9.jpg', username: '@eduardo.santos'} ,
    {id: 1002, name: 'Marina Coelho', img: 'https://randomuser.me/api/portraits/women/37.jpg', username: '@marina.coelho'},
    {id: 1003, name: 'Márcia da Silva', img: 'https://randomuser.me/api/portraits/women/57.jpg', username: '@marcia.silva'},
    {id: 1004, name: 'Fabrício Val', img: 'https://randomuser.me/api/portraits/men/98.jpg', username: '@fabricio.val'},
    {id: 1005, name: 'Júlia Magalhães', img: 'https://randomuser.me/api/portraits/women/44.jpg', username: '@julia.magalhaes'},
    {id: 1006, name: 'Luma Pereira', img: 'https://randomuser.me/api/portraits/women/13.jpg', username: '@luma.pereira'},
    {id: 1007, name: 'Danilo Gonçalves', img: 'https://randomuser.me/api/portraits/men/55.jpg', username: '@danilo.goncalves'},
    {id: 1008, name: 'Amanda Souza', img: 'https://randomuser.me/api/portraits/women/59.jpg', username: '@amanda.souza'},
    {id: 1009, name: 'Suely Abreu', img: 'https://randomuser.me/api/portraits/women/80.jpg', username: '@suely.abreu'},
    {id: 1010, name: 'Elizângela Moraes', img: 'https://randomuser.me/api/portraits/women/10.jpg', username: '@elizangela.moraes'},
    {id: 1011, name: 'Rogéria Duarte', img: 'https://randomuser.me/api/portraits/women/50.jpg', username: '@rogeria.duarte'},
    {id: 1012, name: 'Eveline Dantas', img: 'https://randomuser.me/api/portraits/women/58.jpg', username: '@eveline.dantas'},
    {id: 1013, name: 'Wagner Oliveira', img: 'https://randomuser.me/api/portraits/men/96.jpg', username: '@wagner.oliveira'},
    {id: 1014, name: 'Vitor Lins', img: 'https://randomuser.me/api/portraits/men/14.jpg', username: '@vitor.lins'},
    {id: 1015, name: 'Sandro Carvalho', img: 'https://randomuser.me/api/portraits/men/71.jpg', username: '@sandro.carvalho'},
    {id: 1016, name: 'Cauã Muniz', img: 'https://randomuser.me/api/portraits/men/29.jpg', username: '@caua.muniz'},
    {id: 1017, name: 'Felipe Andrade', img: 'https://randomuser.me/api/portraits/men/67.jpg', username: '@felipe.andrade'},
    {id: 1018, name: 'André Castro', img: 'https://randomuser.me/api/portraits/men/3.jpg', username: '@andre.castro'},
    {id: 1019, name: 'Mariana Torres', img: 'https://randomuser.me/api/portraits/women/34.jpg', username: '@mariana.torres'},
    {id: 1020, name: 'Juliano Garcia', img: 'https://randomuser.me/api/portraits/men/54.jpg', username: '@juliano.garcia'},
    {id: 1021, name: 'Otávio Barcelos', img: 'https://randomuser.me/api/portraits/men/33.jpg', username: '@otavio.barcelos'},
    {id: 1022, name: 'Tatiana Novaes', img: 'https://randomuser.me/api/portraits/women/0.jpg', username: '@tatiana.novaes'},
    {id: 1023, name: 'Marco Assunção', img: 'https://randomuser.me/api/portraits/men/72.jpg', username: '@marco.assuncao'},
    {id: 1024, name: 'Antônio Moura', img: 'https://randomuser.me/api/portraits/men/92.jpg', username: '@antonio.moura'},
    {id: 1025, name: 'Alessandra Gomes', img: 'https://randomuser.me/api/portraits/women/9.jpg', username: '@alessandra.gomes'},
    {id: 1026, name: 'Arnaldo Barros', img: 'https://randomuser.me/api/portraits/men/41.jpg', username: '@arnaldo.barros'},
    {id: 1027, name: 'Adriele Cavalcante', img: 'https://randomuser.me/api/portraits/women/96.jpg', username: '@adriele.cavalcante'},
    {id: 1028, name: 'Carol Lombardi', img: 'https://randomuser.me/api/portraits/women/62.jpg', username: '@carol.lombardi'},
    {id: 1029, name: 'Bruno Martins', img: 'https://randomuser.me/api/portraits/men/20.jpg', username: '@bruno.martins'},
    {id: 1030, name: 'Fernando Sanches', img: 'https://randomuser.me/api/portraits/men/21.jpg', username: '@fernando.sanches'},
    {id: 1031, name: 'Maria Medeiros', img: 'https://randomuser.me/api/portraits/women/77.jpg', username: '@maria.medeiros'},
    {id: 1032, name: 'Paulo Noronha', img: 'https://randomuser.me/api/portraits/men/68.jpg', username: '@paulo.noronha'},
    {id: 1033, name: 'Mário Campos', img: 'https://randomuser.me/api/portraits/men/35.jpg', username: '@mario.campos'},])
    /* useEffect(() => {
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET',
        }).then((resposta) => {setInfos(resposta.data)})
    }, []) */

// Mock com lista de cartões para teste
const cards = [
    // cartão válido
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // cartão inválido
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
];

// Função para pegar a escolha do cartão do input select
const escolhaDoCartao = (event) => {
    setValorCartao(event.target.value);
}

// Ações dos modals
const [abrirPagamento, setAbrirPagamento] = useState("none"); // Para abrir modal de pagamento
const [pegarUsuario, setPegarUsuario] = useState(""); // Para pegar o nome do usuário
const [abrirPagou, setAbrirPagou] = useState("none"); // Para abrir modal com recibo de pagamento
const [abrirNaoRecebeu, setAbrirNaoRecebeu] = useState(""); // Para msg de erro de pagamento
const [valorCartao, setValorCartao] = useState("1"); // Para pegar o cartão escolhido para pagamento
const [valorDinheiro, setValorDinheiro] = useState(""); // Para pegar o valor de pagamento digitado
const [validarCampo, setValidarCampo] = useState("none"); // Para validar campo de valor digitado

// Função para abrir o modal de pagamento do usuário
const abrirModalPagar = (name) => {
    setAbrirPagamento("flex")
    setPegarUsuario(name)
}

// Função que abre o modal de recibo de pagamento 
const abrirModalPagou = () => {
    if (valorDinheiro === "") {
        setValidarCampo("flex");
    } else 
        {
        if (valorCartao === "1") {
            setAbrirNaoRecebeu("");
        } else {
            setAbrirNaoRecebeu("não");
        }
        setAbrirPagamento("none");
        setAbrirPagou("flex");
        setValorDinheiro("");
        setValidarCampo("none");
    }
}

// Função para fechar o modal do recibo de pagamento
const fecharModal = () => {
    setAbrirPagou("none");
}

// Função para validar campo de valor para pagamento do usuário
const valorInput = (event) => {
    setValorDinheiro(event.target.value);
    setValidarCampo("none");
}

// Renderizando na tela as informações recebidas da API 
    return (
        <>
            <button>Pagar</button>
            {infos.map(item => (
                <div className="container" key={item.index} data-testid="custom-element">
                    <div className="content" >
                        <img className="thumbnail" src={item.img} alt="Foto do usuário" />
                        <div className="infos">   
                            <p>Nome do Usuário: {item.name}</p>
                            <p>ID: {item.id} - Username: {item.username}</p>
                        </div>
                        <button data-testid="botao-pagar" className="botao-pagar" onClick={()=>{abrirModalPagar(item.name)}}>Pagar</button>
                    </div>
                </div>
            ))}

            {/*--------------------------------Abrir Modal de pagamento----------------------------------*/}
            <div className="abrirModal" style={{display: abrirPagamento}} data-testid="abrirModal">
                <p className="texto-cabecalho-modal">Pagamento para <span>{pegarUsuario}</span></p>
                <div className="valorInput">
                <NumberFormat thousandSeparator={true} value={valorDinheiro} onChange={valorInput} prefix={'R$ '} inputMode="numeric" placeholder="R$ 0,00" data-testid="campo-valor"/>
                <p style={{display:validarCampo}}>Campo obrigatório</p>
                </div>
                <select value={valorCartao} onChange={escolhaDoCartao}>
                <option value="1">Cartão com final {cards[0].card_number.substr(-4)}</option>
                <option value="2">Cartão com final {cards[1].card_number.substr(-4)}</option>
                </select>
                <button onClick={()=>{abrirModalPagou ()}}>Pagar</button>
            </div>  

            {/*------------------------------Abrir Modal de recibo de pagamento--------------------------------*/}
            <div className="abrirModal" style={{display: abrirPagou}} data-testid="modalPagamento">
                <p className="texto-cabecalho-modal">Recibo de pagamento</p>
                <p>O Pagamento <b>{abrirNaoRecebeu}</b> foi concluído com sucesso</p>
                <button onClick={()=>{fecharModal()}}>Fechar</button>
            </div>
        </>
    )
}

export default ListaDeUsuarios