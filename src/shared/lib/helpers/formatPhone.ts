export const formatPhone = (phone: string, format: string = '+7 (___) ___-__-__'): string => {
  phone = phone.replace(/\D/g, '')

  return ((l, i = 0) => format.replace(/./g, (w) => (/[_\d]/.test(w) && i < l ? phone.charAt(i++) : i >= l ? '' : w)))(
    phone.length
  )
}
