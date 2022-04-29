import React from 'react'
import { getRecipes } from "../services/recipeapi"
import { useState, useEffect } from 'react'
import '../App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

function Index() {
       const [data, setData] = useState([])
       useEffect(() => {
              getRecipes()
                     .then(res => setData(res.data))
       }, [])
       return (
              <div>
                     <Wrapper>
                            <h3>Priya's Picks</h3><br />
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2px',
                            }}>
                                   {data.map((recipe) => {
                                          return (
                                                 <SplideSlide>
                                                        <div>
                                                               <Card>
                                                                      <a href={'/${recipe._id}'}>
                                                                             <img src={recipe.image} alt={recipe.title} /></a>
                                                                      <h3>{recipe.title}</h3>
                                                               </Card>
                                                        </div>
                                                 </SplideSlide>
                                          )
                                   })}
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
p{
     color:black,
     
}`;

export default Index