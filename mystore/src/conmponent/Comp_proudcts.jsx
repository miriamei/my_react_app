import {Proudct} from './Comp_proudct'
import { useSelector } from "react-redux";
import { useEffect } from 'react';
export const Proudcts=(props)=>{
    //useEffect
    //get ax
    //אם מצליח dispatch
     const {arr}=props;
    // const AllProudcts=useSelector(p=> p.products.StoreProduct);
    return<div>
        {arr.length&&arr[0].map(p=> <Proudct NameProudct={p.name} price={p.price} amount={p.amountInStore} Id={p.id}/>)}
    </div>
}