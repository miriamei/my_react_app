import { useSelector } from "react-redux"
import { Proudcts } from "./Comp_proudcts"
import {BrowserRouter as Route,withRouter} from "react-router-dom";

export default withRouter(function MyProudcts(props){
    const MyProudct=useSelector(state=> state.users.Product);
    // const MyProudct=[{id:3,amountToUset:30}];
    const AllProudct=useSelector(state=> state.products.StoreProduct);
    const myFullArr=[]
    let ind=0;
    for (let i = 0; i < AllProudct.length; i++) 
        for (let j = 0; j < MyProudct.length; j++) {
            if(AllProudct[i].id==MyProudct[j].id)
            {
                myFullArr[ind++]={id:AllProudct[i].id,name:AllProudct[i].name,amountInStore:AllProudct[i].amountInStore,price:AllProudct[i].price}
            }
        }
    
    return <>
        <Proudcts arr={myFullArr}></Proudcts>
        <button onClick={()=>props.history.push('/Payment')}>Payment</button>
    </>
})