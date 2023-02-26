import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;
        setCategories([...categories,newCategory])
        
        
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/*Recibe el valor del input y se agrega al estado de categories*/}
    <AddCategory onNewCategory ={(event)=> onAddCategory(event) } />
    
    {/* Se mapean las categorias ingresadas */}
    {
        categories.map( category =>(
            <GifGrid key={category} category={category} />
        ))
    }


    </>
  )
}
