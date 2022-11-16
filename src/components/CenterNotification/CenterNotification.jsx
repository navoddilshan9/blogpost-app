import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CenterNotification = () => {
  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}