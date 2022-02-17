import produce from 'immer';
/**StoreProduct[] (StoreProduct מכיל את השדות הבאים:
id: number, name: string, amountInStore: number, img: string price ) */
const initalState = {
  StoreProduct:[],
}

export const productReducer = produce((state, action) => {

    switch (action.type) {
        case 'LOAD_PRODUCT':state.StoreProduct.push(action.payload);break;
    }
}, initalState)