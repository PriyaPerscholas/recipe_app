import React from 'react'
import { getRecipe, editRecipe } from "../services/recipeapi.js"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../App.css'

function Edit() {
       const { id } = useParams()
       const nav = useNavigate()
       const [data, setData] = useState({})
       useEffect(() => {
              getRecipe(id)
                     .then(res =>
                            setData(res.data)
                     )
       }, [data])
       const editTheRecipe = event => {
              event.preventDefault()
              const updatedRecipe = {
                     title: event.target.title.value,
                     image: event.target.image.value,
                     instruction: event.target.instruction.value,
                     ingridient: event.target.ingridient.value
              }
              editRecipe(id, updatedRecipe)
              nav('/${id}')
       }
       return (
              <div>
                     <form onSubmit={editTheRecipe}>
                            <fieldset>
                                   <legend><h3>Edit Recipe</h3></legend>
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

export default Edit