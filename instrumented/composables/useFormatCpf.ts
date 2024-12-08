export function useFormatCpf() {
  const format = (cpf: number | string) => {
    return formatCpf(cpf)
  }
  return {
    format,
  }
}
