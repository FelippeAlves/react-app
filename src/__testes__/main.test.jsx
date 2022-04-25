import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import ListaDeUsuarios from '../ListaDeUsuarios';

describe('Testando componentes da UI', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
               <ListaDeUsuarios />
        );
    });
    
    it('Testando renderização dos cards', () => {
        const div = screen.queryAllByTestId("custom-element");

        expect(div).toHaveLength(33);
    });

    it("Testando renderização do modal", () => {
        const modal = screen.getByTestId('abrirModal');

        expect(modal).toBeInTheDocument();
    });

    it("Testando renderização do modal de pagamento", () => {
        const pagamento = screen.getByTestId("modalPagamento");

        expect(pagamento).toBeInTheDocument();
    });

});

/* describe('Testando gatilhos de eventos', () => {
    
    it('testando o campo de pagamento', () => {
        const click = { button : 0 };
        const button = screen.getByText(/pagar/i)

        userEvent.click(button, click);

        const valor = '2000';
        const campoValor = screen.getByTestId('campo-valor')

        userEvent.type(valor, campoValor);

        expect(email.ariaValueText).toBe(valor);
    });

}) */