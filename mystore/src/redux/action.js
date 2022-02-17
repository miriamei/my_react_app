export const login = (userName) => {
    return { type: 'LOG_IN_USER', payload: userName }
}
export const logout = (userName) => {
    return { type: 'LOG_OUT_USER', payload: userName }
}
export const addProudctById = (id) => {
    return { type: 'ADD_PRODUCT_BY_ID', payload: id }
}
export const deleteProudctById = (id) => {
    return { type: 'DELETE_PRODUCT_BY_ID', payload: id }
}
export const deleteProdcute = (id) => {
    return { type: 'DELETE_PRODUCT', payload: id }
}
export const addProduct = (id) => {
    return { type: 'ADD_PRODUCT', payload: id }
}

