import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import { Nav } from "./nav";
import MyProudcts from './myBasket'
import Payments from './payment'
import { Proudcts } from './Comp_proudcts';
import { useSelector ,useDispatch} from "react-redux"
import { GoodBy } from "./goodby";
import { useEffect } from "react";
import {getAllProudctFromServer} from "../redux/reducers/proudctThunk"

  export function Main(props){
    const AllProudct=useSelector(state=> state.products.StoreProduct);
    const userName=useSelector(state => state.users.Username);
     const dispatch = useDispatch();
    //const [data, setData] = useState()
    useEffect(() => {
        const dataToFunction = getAllProudctFromServer();
        if(dataToFunction.length==0||(dataToFunction.length==2&&dataToFunction.length<5)){
      //  dataToFunction(dispatch);
        // getAllProudctFromServer();
        console.log({ dataToFunction });
        if(dataToFunction.length>2)
        dispatch({ type: 'LOAD_PRODUCT', payload: dataToFunction })
        }
  },[AllProudct])

      return <Router>
              <Nav/>
              <Switch>
                  <Route path="/Home">
                        <Proudcts arr={AllProudct}/>
                  </Route>
                  <Route path="/MyBasket">
                       <MyProudcts/>
                  </Route>
                  <Route path="/Payment">
                  {userName!=undefined?<Payments/>:<label>please LogIn To Use In Our App</label>}
                  </Route>
                  <Route path="/GoodBy">
                      <GoodBy/>
                  </Route>
              </Switch>
      </Router>
  }