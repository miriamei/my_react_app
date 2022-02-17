import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import {deleteProdcute} from "../redux/action";

export const GoodBy=()=>{
    const dispatch = useDispatch();
    const UserProduct=useSelector(p=> p.products.StoreProduct);
    const DeleteProdcute = (id) => {
        dispatch(deleteProdcute(id))
        }
    useEffect(() => {
        UserProduct.forEach(proudct => { DeleteProdcute(proudct.id)});
    },[])
    return <>
     <h1>Thank you for buying in our store we appreciate it!</h1>
    </>
}