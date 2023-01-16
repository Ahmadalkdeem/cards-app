import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import css from './corsla.module.scss'
function Corsla(props: any) {
    return (
        <Carousel className={css.mycarousel} fade>
            <Carousel.Item>
                <img
                    className={css.myimg}
                    src={props?.src}
                    alt={props?.titel}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={css.myimg}
                    src={props?.src}
                    alt={props?.titel}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={css.myimg}
                    src={props?.src}
                    alt={props?.titel}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Corsla