// src/tests/Validacao.test.js
import { describe, it, expect } from 'vitest';
import { validarEmail, validarCampoObrigatorio } from '../utils/validacoes';

describe('Testes Unitários - Funções de Validação', () => {
  it('deve validar formatos de e-mail corretamente', () => {
    expect(validarEmail('estudante@dominio.pt')).toBe(true);
    expect(validarEmail('email.sem.arroba.pt')).toBe(false);
    expect(validarEmail('utilizador@sem-ponto')).toBe(false);
  });

  it('deve rejeitar campos vazios ou apenas com espaços', () => {
    expect(validarCampoObrigatorio('React')).toBe(true);
    expect(validarCampoObrigatorio('   ')).toBe(false);
    expect(validarCampoObrigatorio('')).toBe(false);
  });
});