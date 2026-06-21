// src/tests/Integracao.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Cadastro from '../pages/Cadastro';
import { UserProvider } from '../context/UserContext';

// Interceta as chamadas reais do Axios para não sujar a base de dados durante o teste
vi.mock('axios');

describe('Teste de Integração - Fluxo de Cadastro', () => {
  it('deve simular o preenchimento do formulário e disparar a submissão', async () => {
    axios.post.mockResolvedValueOnce({
      data: { id: 999, nome: 'Ana', email: 'ana@teste.pt', categoria: 'Livre' }
    });

    render(
      <UserProvider>
        <Cadastro />
      </UserProvider>
    );

    // Preenche os campos utilizando os data-testid existentes
    fireEvent.change(screen.getByTestId('nome-input'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'ana@teste.pt' } });
    fireEvent.change(screen.getByTestId('categoria-select'), { target: { value: 'Livre' } });

    // Clica no botão de submissão
    fireEvent.click(screen.getByTestId('botao-cadastrar'));

    // Aguarda a execução assíncrona e valida se o POST foi disparado
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });
});