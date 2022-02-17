import axios from "axios"
import {useDispatch} from "react-redux"

export const
    defaultURL = `http://localhost:4002/products`
//const dispatch = useDispatch();
export const getAllProudctFromServer = () => async (dispatch, getState) => {
    
    // console.log('!!!!!!!!!!!!! from thunk', dispatch, getState())
    try {
        const allProudct = await axios.get(defaultURL);
        console.log(allProudct)
       dispatch({ type: 'LOAD_PRODUCT', payload: allProudct.data.Products })
        return allProudct.data.Products;
    } catch (e) {
        console.log(e)
    }
}