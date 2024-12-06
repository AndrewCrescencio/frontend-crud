export default function formatCpf(cpf: number | string): string {
  const cpfStr = cpf.toString().replace(/\D/g, '')

  if (cpfStr.length !== 11 || !/^\d{11}$/.test(cpfStr)) {
    throw new Error('CPF must be a 11-digit number.')
  }

  return `${cpfStr.slice(0, 3)}.${cpfStr.slice(3, 6)}.${cpfStr.slice(6, 9)}-${cpfStr.slice(9)}`
}
