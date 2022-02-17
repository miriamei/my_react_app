import produce from 'immer';

const initalState = {
    Username:undefined,
    Password:undefined,
    Mail:undefined,
    /**:id: number, amountToUset */
    Product:[]
}

export const userReducer = produce((state, action) => {

    function findProduct(arr,id)
    {
        for (let index = 0; index < arr.length; index++) {
          if(arr[index].id==id)
            arr[index].amountToUset=arr[index].amountToUset+1
        }
    }
    function findProductToDelet(arr,id)
    {
        for (let index = 0; index < arr.length; index++) {
            if(arr[index].id==id)
              arr[index].amountToUset=arr[index].amountToUset-1
          }
    }
    switch (action.type) {
        case 'LOG_OUT_USER': state.Username=undefined;break;
        case 'LOG_IN_USER': state.Username=action.payload;break;
        case 'ADD_PRODUCT': state.Product.push({id:action.payload,amountToUset:1});break;
        case 'ADD_PRODUCT_BY_ID': findProduct(state.Product,action.payload);break;
        case 'DELETE_PRODUCT_BY_ID': findProductToDelet(state.Product,action.payload);break;
        case 'DELETE_PRODUCT': state.Product=state.Product.filter(i=> i.id!==action.payload);break;
        case 'SAVE_MAIL': state.Password=action.payload;break;
        case 'SAVE_PASSWORD': state.Mail=action.payload;break;
    }

}, initalState)