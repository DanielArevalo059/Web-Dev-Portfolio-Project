import ImageGallery from 'react-image-gallery';
import React from 'react';

const images = [
    {
      original: 'images/family-disneyland.jpg',
      thumbnail: 'images/family-disneyland.jpg',
      description: `Family Photo`,
      originalHeight: '450px',
    },  {
        original: 'images/daniel-illo-graduation-party.jpg',
        thumbnail: 'images/daniel-illo-graduation-party.jpg',
        description: `Grandpa and Me`,
        originalHeight: '450px',
      },  {
        original: 'images/daniel-spain-proposal.jpeg',
        thumbnail: 'images/daniel-spain-proposal.jpeg',
        description: `Proposing to my Love`,
        originalHeight: '450px',
      },  {
        original: 'images/nephew-nine-months-old.jpg',
        thumbnail: 'images/nephew-nine-months-old.jpg',
        description: `Niece and Nephew`,
        originalHeight: '450px',
      },  {
        original: 'images/olive-dog-beach.jpg',
        thumbnail: 'images/olive-dog-beach.jpg',
        description: `Olive Oyl at the Beach`,
        originalHeight: '450px',
      },  {
        original: 'images/softball-team.jpg',
        thumbnail: 'images/softball-team.jpg',
        description: `Softball League 2022`,
        originalHeight: '450px',
      },  {
        original: 'images/bryce-canyon-wind-tunnel.jpg',
        thumbnail: 'images/bryce-canyon-wind-tunnel.jpg',
        description: `Utah Bryce Canyon`,
        originalHeight: '450px',
      },  {
        original: 'images/daniel-arevalo-disc-golf-drive.jpg',
        thumbnail: 'images/daniel-arevalo-disc-golf-drive.jpg',
        description: `Disc Golf at Oyster Bay`,
        originalHeight: '450px',
      },  {
        original: 'images/botin-restaurant-madrid.jpg',
        thumbnail: 'images/botin-restaurant-madrid.jpg',
        description: `Botin Restaurant, Madrid, Spain`,
        originalHeight: '450px',
      },  {
        original: 'images/sort-timer.png',
        thumbnail: 'images/sort-timer.png',
        description: `Sort-Timer Python Project`,
        originalHeight: '450px',
      },
    ]

    function GalleryPage(){
        return(
    <>
        <h2><strong>Gallery</strong></h2>

        <article>
            <ImageGallery items={images} />
            
        </article>

    </>
    )
}
export default GalleryPage;