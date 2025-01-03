import React, { useRef } from 'react';
import '../../assets/styles/WorkExperience.css';
import { WORKEXPERIENCE } from '../../utils/data';
import Experiencecard from './Experiencecard';
import Slider from "react-slick";

const Workexperience = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        inifinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>
            <div className='experience-content'>
                <div className='arrow-right' onClick={() => sliderRef.current.slickNext()}>
                    <i className='material-icons'>chevron_right</i>
                </div>
                <div className='arrow-left' onClick={() => sliderRef.current.slickPrev()}>
                    <i className='material-icons'>chevron_left</i>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {WORKEXPERIENCE.map((item) => (
                        <Experiencecard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Workexperience;
