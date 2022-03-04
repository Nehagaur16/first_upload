
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
    
    
}


export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}


// export const addItem = () => ({
//     type: "ADDITEM"
// });

// export const delItem = () => ({
//     type: 'DELITEM'
// })