import { useSelector } from "react-redux"


export const useCheckOrder = () => {
  
    const {orden} = useSelector(state=>state.orden);
    return {
        orden
    }
}