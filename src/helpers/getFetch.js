import zapatillaNike from '../images/zapatillaNike.png'
import zapatillaAdidas from '../images/zapatillaAdidas.png'

const productos = [
    {id:1,producto:'Zapatillas Nike', stock:5, precio:10000, img: zapatillaNike},
    {id:2,producto:'Zapatillas Adidas', stock:7, precio:8000, img: zapatillaAdidas}
]

export const getFetch = new Promise((res)=>{
    setTimeout(() => {
        res(productos)
    }, 2000);
})