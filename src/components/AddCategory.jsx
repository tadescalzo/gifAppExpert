import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    
    const [inputValue, setInputValue] = useState('')
    
    //Cuando hay cambios en el input cambia el estado del inputValue
    const onInputChange = ({ target }) =>{
       setInputValue(target.value)
    }

    //Cuando apretamos enter envia el valor del input al componente padre
    const onSubmit = (event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
            if (newInputValue.length <= 1) return
            onNewCategory(inputValue)
        setInputValue('')
    }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
    <h1>Buscar gif:</h1>
    <input 
        type="text" 
        placeholder="Buscar gifs"
        onChange={onInputChange}
        value={inputValue}
    />
    </form>
  )
}
