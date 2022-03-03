const productos = [
    {id:1,producto:'Zapatillas Nike', stock:5},
    {id:2,producto:'Zapatillas Adidas', stock:7}
]

export const getFetch = new Promise((res)=>{
    setTimeout(() => {
        res(productos)
    }, 2000);
})