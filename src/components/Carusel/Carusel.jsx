import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carusel.module.css";
import Container from "../Container/Container";
const Carusel = () => {
    const [images, setImages] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch("https://pixabay.com/api/?key=47433007-7d348e0d688bd253969425f83&q=mountain&image_type=photo&per_page=7")
            .then(response => response.json())
            .then(data => setImages(data.hits));

        const handleKeyDown = (e) => {
            if (sliderRef.current) {
                if (e.key === "ArrowRight") sliderRef.current.slickNext();
                if (e.key === "ArrowLeft") sliderRef.current.slickPrev();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        centerMode: false,
    };

    return (
        <section className={styles.sliderContainer}>
            <Container>
                <h3 className={styles.title}>Beautiful nature</h3>
                <Slider ref={sliderRef} {...settings}>
                    {images.map((image) => (
                        <div key={image.id} className={styles.slide}>
                            <img src={image.webformatURL} alt="Nature" className={styles.slideImage} />
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Carusel;
