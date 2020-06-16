'use strict';

const gallery = document.querySelector('#thumbs');

gallery.onclick = function(e) {
  e.preventDefault();

  const isSmall = e.target.classList.contains('gallery__thumb');

  if (isSmall) {
    const currentImg = event.target;
    const largeImage = document.querySelector('#largeImg');

    largeImage.src = currentImg.src.replace('-thumb.jpeg', '.png');
  }
};
