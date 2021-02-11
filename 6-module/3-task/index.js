import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');

    this.arrowRight = document.createElement('div');
    this.arrowRight.classList.add('carousel__arrow', 'carousel__arrow_right');
    this.elem.append(this.arrowRight);
    this.imageArrowRight = document.createElement('img');
    this.imageArrowRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    this.imageArrowRight.setAttribute('alt', 'icon');

    this.arrowRight.append(this.imageArrowRight);
    this.arrowLeft = document.createElement('div');
    this.arrowLeft.classList.add('carousel__arrow', 'carousel__arrow_left');
    this.elem.append(this.arrowLeft);
    this.imageArrowLeft = document.createElement('img');
    this.imageArrowLeft.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');
    this.imageArrowLeft.setAttribute('alt', 'icon');

    this.arrowLeft.append(this.imageArrowLeft);

    this.inner = document.createElement('div');
    this.inner.classList.add('carousel__inner');
    this.elem.append(this.inner);

    this.carousel = this.slides.map(slide => {
      this.slide = slide;
      this.slideDiv = document.createElement('div');
      this.slideDiv.classList.add('carousel__slide');
      this.slideDiv.setAttribute('data-id', this.slide.id);

      this.image = document.createElement('img');
      this.image.setAttribute('src', `/assets/images/carousel/${this.slide.image}`);
      this.slideDiv.append(this.image);
      this.inner.append(this.slideDiv);

      this.caption = document.createElement('div');
      this.caption.classList.add('carousel__caption');
      this.slideDiv.append(this.caption);

      this.price = document.createElement('span');
      this.price.append(`€${this.slide.price.toFixed(2)}`);
      this.price.classList.add('carousel__price');
      this.caption.append(this.price);

      this.title = document.createElement('div');
      this.title.classList.add('carousel__title');
      this.title.append(this.slide.name);
      this.caption.append(this.title);

      this.button = document.createElement('button');
      this.button.setAttribute('type', 'button');
      this.button.classList.add('carousel__button');
      this.caption.append(this.button);
      this.icon = document.createElement('img');
      this.icon.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      this.icon.setAttribute('alt', 'icon');
      this.button.append(this.icon);
      this.currentSlideNumber = 0;

    })

    this.initCarousel();
  }
  initCarousel() {

    let slidesAmount = this.slides.length;

    this.elem.onclick = ({target}) => {
      let buttonPlus = target.closest('.carousel__button');
      if (buttonPlus) {
          let id = target.closest('[data-id]').dataset.id;

          this.elem.dispatchEvent(new CustomEvent('product-add', {
              detail: id,
              bubbles: true
          }));
      }


      if (target.closest('.carousel__arrow_right')) {
        next();
      }

      if (target.closest('.carousel__arrow_left')) {
        prev();
      }
    };

    let next = () => {
      this.currentSlideNumber++;
      update();
    }

    let prev = () => {
      this.currentSlideNumber--;
      update();
    }

    let update = () => {
      let offset = -this.inner.offsetWidth * this.currentSlideNumber;
      this.inner.style.transform = `translateX(${offset}px)`;
      if (this.currentSlideNumber === slidesAmount - 1) {
        this.arrowRight.style.display = 'none';
      } else {
        this.arrowRight.style.display = '';
      }
      if (this.currentSlideNumber === 0) {
        this.arrowLeft.style.display = 'none';
      } else {
        this.arrowLeft.style.display = '';
      }
    }
    update();
  }
}
