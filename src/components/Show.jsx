import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getRecipe, deleteRecipe } from "../services/recipeapi.js"

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
              <div>Show page
                     <h3>{data.title}</h3>
                     <img src={data.image} />
                     <p>{data.instruction}</p>

                     <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button><br /><br />
                     <button onClick={deleteTheRecipe}>Delete</button>
              </div>
       )
}

export default Show