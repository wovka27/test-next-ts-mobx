import axios from 'axios'
import { toast } from 'react-toastify'

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  instance.interceptors.request.use((config) => {
  return config
  }, Promise.reject)

  instance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 400:
          toast.error("Некорректный запрос!", { theme: 'colored' });
          break;
        case 404:
          toast.error("Данные не найдены!", { theme: 'colored' });
          break;
        case 500:
          toast.error("Ошибка сервера, попробуйте позже.", { theme: 'colored' });
          break;
        default:
          toast.error("Произошла ошибка, попробуйте ещё раз.", { theme: 'colored' });
      }
    } else if (error.request) {
      toast.error("Сервер не отвечает.", { theme: 'colored' });
    } else {
      toast.error(`Ошибка: ${error.message}`, { theme: 'colored' });
    }

    return Promise.reject(error);
  })

  return instance
}

const api = getAxiosInstance()

export default api