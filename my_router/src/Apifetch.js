import React from 'react'
import { useEffect } from 'react'
 import axios from 'axios'
function Apifetch() {
    useEffect(
        ()=>{
        getProduct()
      }
      
      )
      async function getProduct(){
        let res = await axios.put('https://fakestoreapi.com/products/10',{
          method:"PUT",
          body:JSON.stringify(
              {
                  title: 'test product',
                  price: 13.5,
                  description: 'lorem ipsum set',
                  image: 'https://i.pravatar.cc',
                  category: 'electronic'
              }
          )
      })
      console.log(res.data);
      }
    //   async function getProduct(){
    //     let res = await axios.get('https://fakestoreapi.com/products/10')
  
    //     console.log(res.data);
    // }
    // async  function postProduct(){

    //    let res = fetch('https://fakestoreapi.com/products',{
    //             method:"POST",
    //             body:JSON.stringify(
    //                 {
    //                     title: 'test product',
    //                     price: 13.5,
    //                     description: 'lorem ipsum set',
    //                     image: 'https://i.pravatar.cc',
    //                     category: 'electronic'
    //                 }
    //             )
    //         })           
    //         let data = (await res).json;
    //         console.log(data)
    // }
    // async function getProduct(){
    //     let res= await fetch('https://fakestoreapi.com/products')
    //     let data=await res.json();
    //     console.log(data)
    // }
  return (
    <div>
      <p>API INTEGRATION </p>
    </div>
  )
}
  

export default Apifetch
