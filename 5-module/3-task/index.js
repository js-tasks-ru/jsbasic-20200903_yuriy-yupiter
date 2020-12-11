function initCarousel() {
  let position = 0;
  let slidesAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]');

  let carouselInnerElem = elem.querySelector('.carousel__inner');
  
  let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
  
  let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');
  

  update();

  elem.onclick = (event) => {
      if (event.target.closest('.carousel__arrow_right')) {
      next();
      }

      if (event.target.closest('.carousel__arrow_left')) {
      prev();
      }
  };

  function next() {
      position++;
      update();
  }

  function prev() {
      position--;
      update();
  }

  function update() {
      let offset = -carouselInnerElem.offsetWidth * position;
      carouselInnerElem.style.transform = `translateX(${offset}px)`;

      if (position == slidesAmount - 1) {
      carouselArrowRight.style.display = 'none';
      } else {
      carouselArrowRight.style.display = '';
      }

      if (position == 0) {
      carouselArrowLeft.style.display = 'none';
      } else {
      carouselArrowLeft.style.display = '';
      }
  }
}
