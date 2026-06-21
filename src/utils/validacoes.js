export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCampoObrigatorio(valor) {
  if (!valor) return false;
  return valor.trim().length > 0;
}