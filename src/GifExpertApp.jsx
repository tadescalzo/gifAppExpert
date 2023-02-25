import { useState } from "react"
import { AddCategory } from "./AddCategory"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch','Dragon Ball'])

    const onAddCategory = (newCategory) =>{
        setCategories([...categories,newCategory])
    }

  return (
    <>

    <h1>GifExpertApp</h1>

    {/*Recibe el valor del input y se agrega al estado de categories*/}
    <AddCategory onNewCategory ={(event)=> onAddCategory(event) } />
    
    <ol>
    {categories.map( category =>{
        return <li key={category}>{category}</li>})}
    </ol>

    </>
  )
}
