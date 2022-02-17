import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from 'react';
import {addProudctById,deleteProudctById,deleteProdcute,addProduct} from "../redux/action";
export const Proudct=(props)=>{
    const NameProudct=props.NameProudct;
    const price=props.price;
    const amount=props.amount;
    const Id=props.Id;
    const userName=useSelector(state => state.users.Username);
    const [IsTrue, setIsTrue] = useState(false)
    const UserProduct=useSelector(p=> p.users.Product);
    // function whatToRender(){
    //     const IsExsist=UserProduct.findIndex(c => c.id==Id)
    //     if(userName!=undefined&&IsExsist>=0){
    //          setIsTrue(true);
    //      }
    //      else
    //      setIsTrue(false);
    // }
   
    useEffect(() => {
        console.log("hii from use effect",IsTrue,Id)
        //whatToRender();
        const IsExsist=UserProduct.findIndex(c => c.id==Id)
        if(userName!=undefined&&IsExsist>=0){
             setIsTrue(true);
             console.log("hii im true now",NameProudct)
         }
         else{
            setIsTrue(false);
            console.log("hii im false now",NameProudct)
         }

    },[Id])
    return<div>
        {/* <ExsistProudct NameProudct={NameProudct} price={price} amount={amount} Id={Id}/> */}
        {IsTrue===true&&<ExsistProudct NameProudct={NameProudct} price={price} amount={amount} Id={Id}/>}
        {IsTrue===false&&<NotExsistProudct NameProudct={NameProudct} price={price} amount={amount} Id={Id}/>}
    </div>
}

export const ExsistProudct=(props)=>{
    const NameProudct=props.NameProudct;
    const price=props.price;
    const amount=props.amount;
    const Id=props.Id;
    const UserProduct=useSelector(p=> p.users.Product);
    const IsExsist=UserProduct.findIndex(c => c.id==Id)
    const dispatch = useDispatch();
    const AddProudctById = (id) => {
        dispatch(addProudctById(id))
    }
    const DeleteProudctById = (id) => {
     dispatch(deleteProudctById(id))
     }
     const DeleteProdcute = (id) => {
         dispatch(deleteProdcute(id))
         }
    return<div>
        <label>Proudct name:</label> <label>{NameProudct}</label>
        <br/>
        <label>Price:</label> <label>{price}</label>
        <br/>
        <label>amount In Store: </label> <label>{amount}</label>
        <br/>
        <label>amount To Uset: </label> <label>{(+UserProduct[IsExsist].amountToUset)}</label>
        <br/>
        <label>Final Price</label> <label>{price*(+UserProduct[IsExsist].amountToUset)}</label>
        <br/>
        {amount-(+UserProduct[IsExsist].amountToUset)>0&&<button  onClick={()=>AddProudctById(Id)}>+</button>}
        {(+UserProduct[IsExsist].amountToUset)>0&&<button onClick={()=>DeleteProudctById(Id)}>-</button>}
        <button onClick={()=>DeleteProdcute(Id)}>Remove</button>
    </div>
}
export const NotExsistProudct=(props)=>{
    const NameProudct=props.NameProudct;
    const price=props.price;
    const amount=props.amount;
    const Id=props.Id;
    const dispatch = useDispatch();
    const AddProudct = (id) => {
        dispatch(addProduct(id))
    }
    return<div>
        <label>Proudct name:</label> <label>{NameProudct}</label>
        <br/>
        <label>Price:</label> <label>{price}</label>
        <br/>
        <label>amount In Store: </label> <label>{amount}</label>
        <br/>
        <button onClick={()=>AddProudct(Id)}>Add Proudct</button>
    </div>
}

