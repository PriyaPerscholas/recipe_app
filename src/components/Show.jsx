import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getRecipe, deleteRecipe } from "../services/recipeapi.js"
import App from '../App.css'

function Show() {
       const nav = useNavigate()
       const { id } = useParams()
       const [data, setData] = useState({})
       useEffect(() => {
              getRecipe(id)
                     .then(res =>
                            setData(res.data))
       }, [data])
       console.log(data)
       const deleteTheRecipe = () => {
              deleteRecipe(id)
              nav('/priyarecipes')
       }

       return (
              <div className='show'>
                     <div className='show1'>
                            <h2>{data.title}</h2><br />
                            <img className='img' src={data.image} />
                     </div>
                     <div className='show2'>
                            {/* <button>Instruction</button>
                            <button>Ingredient</button> */}
                            <h3>Instruction</h3><br />
                            <p>{data.instruction}</p><br />
                            <h3>Ingredient</h3><br />
                            <ul className='list'><li>{data.ingredient}</li></ul><br />
                            <div className='show3'>
                                   <button onClick={() => { nav(`/priyarecipes/${id}/edit`) }}>Edit Recipe</button>
                                   <button onClick={deleteTheRecipe}>Delete Recipe</button>
                            </div>
                     </div>
              </div>
       )
}


export default Show