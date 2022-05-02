import React from 'react'
import { useState, useEffect } from 'react'
import { getVeggie } from '../services/recipeapi'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

function Veggie() {
       const [veggie, setVeggie] = useState([])
       useEffect(() => {
              getVeggie()
                     .then((res) => {
                            setVeggie(res.data.recipes)
                     })
       }, [])
       console.log(veggie)
       return (
              <div>
                     <Wrapper>
                            <h3>Veggie Picks</h3><br />
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2px',
                            }}>
                                   {veggie.map((recipe) => {
                                          return (
                                                 <SplideSlide key={recipe.id}>
                                                        <div>
                                                               <Card>
                                                                      <a href={`/recipe/${recipe.id}`}>
                                                                             <img src={recipe.image} alt={recipe.title} /></a>
                                                                      <h4>{recipe.title}</h4>
                                                               </Card>
                                                        </div>
                                                 </SplideSlide>
                                          )
                                   })
                                   }
                            </Splide>
                     </Wrapper>
              </div >
       )
}
const Wrapper = styled.div`
margin: 5rem 0rem;
`;

const Card = styled.div`
max-height: 350px;
img{
       border-radius: 2rem;
       height: 250px;
       width: 250px;
}
h3{
     color:black,
     font-family: Arial, Helvetica, sans-serif;
}`;

export default Veggie