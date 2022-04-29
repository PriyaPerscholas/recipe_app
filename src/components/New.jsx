import React from 'react'
import { createRecipe } from "../services/recipeapi"
import { useNavigate } from "react-router-dom"
import App from '../App.css'

function New() {
       const nav = useNavigate()
       const createTheRecipe = (event) => {
              event.preventDefault()
              const newrecipe = {
                     title: event.target.title.value,
                     image: event.target.image.value,
                     instruction: event.target.instruction.value,
                     ingridient: event.target.ingridient.value
              }
              createRecipe(newrecipe)
              nav('/priyarecipes')
       }
       return (
              <div >
                     <form onSubmit={createTheRecipe}>
                            <fieldset>
                                   <legend><h3>Create New Recipe</h3></legend>
                                   <label htmlFor='title'>Title</label>
                                   <input type="text" name="title" className='tit1' />
                                   <label htmlFor='image'>Image</label>
                                   <input type="text" name="image" className='tit2' />
                                   <label htmlFor='instruction'>Instruction</label>
                                   <input type="textarea" name="instruction" />
                                   <label >Ingridient</label>
                                   <input type="textarea" name="ingridient" />
                                   <label htmlFor='button'></label>
                                   <button>submit</button>
                            </fieldset>
                     </form>
              </div>
       )
}

export default New

