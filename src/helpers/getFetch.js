import zapatillaNike from '../images/zapatillaNike.png'
import zapatillaAdidas from '../images/zapatillaAdidas.png'
import zapatillaVans from '../images/zapatillaVans.png'

const productos = [
    {id:"1",producto:'Zapatillas Nike', marca:'Nike',stock:5, precio:10000, img: zapatillaNike},
    {id:"2",producto:'Zapatillas Adidas', marca:'Adidas', stock:7, precio:8000, img: zapatillaAdidas},
    {id:"3",producto:'Zapatillas Vans', marca:'Vans', stock:10, precio:7500, img: zapatillaVans}
]

export const getFetch = new Promise((res)=>{
    setTimeout(() => {
        res(productos)
    }, 3000);
})