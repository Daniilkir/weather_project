import React, { useEffect, useState, useCallback } from 'react'
import { GalleryItem } from './Pets';
import { GallerContent } from './Pets';
import { GalleryTitle } from './Pets';
import { GalleryButton } from './Pets';
import { GallaryContainer } from './Pets'
import Container from '../Container/Container';
function Pets() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?q=pets&page=${page}&key=47433007-7d348e0d688bd253969425f83&image_type=photo&orientation=horizontal&per_page=4`,
        )
            .then(response => response.json())
            .then(data => {
                setImages((prevImages) =>
                    page === 1 ? data.hits : [...prevImages, ...data.hits]
                );
            })
    }
        , [page]);
    const loadMore = useCallback(() => {
        setPage((prevPage) => prevPage + 1);
    }, []);
    return (
        <GallaryContainer>
            <Container>
                <GalleryTitle>Interacting with our pets</GalleryTitle>

                <GallerContent>

                    {
                        images.map((image) => (

                            <GalleryItem key={image.id} src={image.webformatURL} alt={image.tags} />
                        ))
                    }

                </GallerContent>

                    <GalleryButton onClick={loadMore}>See more</GalleryButton>
            </Container>

        </GallaryContainer >
    )
}

export default Pets;