import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import snickers from '../Categories/imgs/snickers.jpg'
import drinks from '../Categories/imgs/drinks.jpg'
import reeses from '../Categories/imgs/reeses.jpg'
import gummies from '../Categories/imgs/gummies.jpg'
import gum from '../Categories/imgs/gum.jpg'
import chips from '../Categories/imgs/chips.jpg'
import spreads from '../Categories/imgs/spreads.jpg'

import { CategoriesCard } from './Categories-card';
import './Categories.css';

export const Categories = () => {

    const Categories =[
    {
        title:"Chocolate Bars",
        imgUrl: snickers,
    },
    {
        title:"Drinks",
        imgUrl: drinks,
        
    },
    {
        title:"Chocolates",
        imgUrl: reeses,
        
    },
    {
        title:"Gummies",
        imgUrl: gummies,
        
    },
    {
        title:"Chewing Gum",
        imgUrl: gum,
        
    },
    {
        title:"Chips",
        imgUrl: chips,
        
    },
   
    ]

    
return(
    <section className='categories' id='categories'>
        <Container>
            <Row>
                <Col size={12}>
                <h2>Categories</h2>
        <Row>
                        {
                          Categories.map((Categories, index) => {
                            return (
                              <CategoriesCard
                                key={index}
                                {...Categories}
                                />
                            )
                          })
                        }
                      </Row>
                        </Col>
                      </Row>

        </Container>
   
    </section>

)

}
export default Categories;
