import { useSelector } from "react-redux"
import {BrowserRouter as Route,withRouter} from "react-router-dom";

export default withRouter(function Payments(props){
    const MyProudct=useSelector(state=> state.users.Product);
    // const MyProudct=[{id:3,amountToUset:30}];
    const AllProudct=useSelector(state=> state.products.StoreProduct);
    const myFullArr=[]
    let ind=0;
    for (let i = 0; i < AllProudct.length; i++) 
        for (let j = 0; j < MyProudct.length; j++) {
            if(AllProudct[i].id==MyProudct[j].id)
            {
                myFullArr[ind++]={id:AllProudct[i].id,name:AllProudct[i].name,amountInStore:AllProudct[i].amountInStore,price:AllProudct[i].price,amountToUset: MyProudct[j].amountToUset}
            }
        }
    return  <div>
    {myFullArr.map(f => {return(<><h4>{`name: ${f.name}`}</h4>
    <h4>{`amount: ${f.amountToUset}`}</h4><h4>{`price: ${f.price*f.amountToUset}`}</h4></>)})}
        <button onClick={()=>props.history.push('/GoodBy')}>To Pay</button>
        <button onClick={()=>props.history.push('/MyBasket')}>back to My Basket</button>
    </div>
})