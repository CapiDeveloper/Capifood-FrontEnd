export const Alertas = ({message,error=true,errorMessage=''}) => {

  return (
    <div className={`${error?'bg-red-200 text-red-500':'bg-blue-200 text-primario'}  mb-5 h-10 w-full p-2 rounded-lg mt-5 text-center font-semibold text-sm`}>
        {(errorMessage=='')? message:errorMessage}
    </div>
  )
}