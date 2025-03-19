import { toast } from 'react-toastify'

export const clipboardWriteText = (str: string) => navigator.clipboard.writeText(str).then(() => toast.info('Скопировано'));