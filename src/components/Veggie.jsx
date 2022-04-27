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
       return (
              <div>
                     <Wrapper>
                            <h3>Veggie Picks</h3>
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2px',
                            }}>
                                   {veggie.map((recipe) => {
                                          return (
                                                 <SplideSlide>
                                                        <div>
                                                               <Card>
                                                                      <p>{recipe.title}</p>
                                                                      <img src={recipe.image} alt={recipe.title} />
                                                               </Card>
                                                        </div>
                                                 </SplideSlide>
                                          )
                                   })
                                   }
                            </Splide>
                     </Wrapper>
              </div>
       )
}
const Wrapper = styled.div`
margin: 5rem 0rem;
`;

const Card = styled.div`
img{
       border-radius: 2rem;
       max-height: 250px;
}
p{
     color:black,
     font-size:  
}`;

export default Veggie