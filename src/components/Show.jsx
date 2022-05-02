import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getRecipe, deleteRecipe } from "../services/recipeapi.js"
import App from '../App.css'

function Show() {
       const nav = useNavigate()
       const { id } = useParams()
       const [data, setData] = useState({})
       const [activetab, setActivetab] = useState('instruction')
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
                            <div className='show4'>
                                   <button className={activetab === 'instruction' ? 'active' : ' '} onClick={() => { setActivetab('instruction') }}>Instruction</button>
                                   <button className={activetab === 'ingredient' ? 'active' : ' '} onClick={() => { setActivetab('ingredient') }}>Ingredient</button>
                            </div>
                            <br />
                            {activetab === 'instruction' && (
                                   <div>
                                          <h3>Instruction</h3><br />
                                          <p>{data.instruction}</p>
                                   </div>
                            )}<br />

                            {activetab === 'ingredient' && (
                                   <div>
                                          <h3>Ingredient</h3><br />
                                          <p>{data.ingredient}</p>
                                   </div>
                            )}<br />


                            <div className='show3'>
                                   <a href className='sh' onClick={() => { nav(`/priyarecipes/${id}/edit`) }}>Edit Recipe</a>
                                   <a href className='sh' onClick={deleteTheRecipe}>Delete Recipe</a>
                            </div>
                     </div>
              </div>

       )
}


export default Show