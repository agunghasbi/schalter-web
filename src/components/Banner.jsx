import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='hidden lg:group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-slate-50 text-black cursor-pointer'>
            <BsChevronCompactRight onClick={onClick} size={30} />
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='hidden lg:group-hover:block absolute top-[50%] left-5 z-10 text-2xl rounded-full p-2 bg-slate-50 text-black cursor-pointer'>
            <BsChevronCompactLeft onClick={onClick} size={30} />
        </div>
    );
}

export default function Banner() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    const slides = [
        {
            url: 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1702969277_3Y1Lb0.jpg',
        },
        {
            url: 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1690260495_PraZyu.jpg',
        },
        {
            url: 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1704354291_8usAA6.jpg',
        },
        {
            url: 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1705031826_I58SZz.jpg',
        },
    ];

    return (
        <div className="container my-12 mx-auto px-4 md:px-12 group">
            {/* // <div className='max-w-4/5 h-[400px] w-full m-auto py-8 px-4 relative group'> */}
            <Slider {...settings}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} >
                        <img src={slide.url} className='w-full max-h-96 min-h-44 object-cover rounded-2xl bg-center bg-cover duration-500' alt="..." />
                    </div>
                ))}
            </Slider>
        </div>
    )
}