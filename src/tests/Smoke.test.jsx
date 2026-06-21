// src/tests/Smoke.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

describe('Smoke Test - App', () => {
  it('deve renderizar o componente App sem erros', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});