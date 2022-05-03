import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
       const params = useParams()
       const [details, setDetails] = useState({})

       const fetchDetails = async () => {
              const data = await fetch(
                     `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=60badfad779f4c4dbd2c16534fcce164`);
              const detailData = await data.json();
              setDetails(detailData)
              console.log(detailData)
       }
       useEffect(() => {
              fetchDetails()
       }, [params.name])



       return (
              <div className='show'>
                     <div className='show1'>
                            <h2>{details.title}</h2><br />
                            <img className='img' src={details.image} />
                     </div>
                     <div className='show2'>
                            <h3>Instruction</h3><br />
                            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p><br />
                            {/* <ul>
                                   {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}

                            </ul> */}
                     </div>
              </div >
       )
}

export default Recipe