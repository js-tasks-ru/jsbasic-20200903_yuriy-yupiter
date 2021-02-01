import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
      constructor(product) {
        this.elem = document.createElement('div');
        this.elem.classList.add('card');

        this.head = document.createElement('div');
        this.head.classList.add('card__top');
        this.elem.append(this.head);

        this.body = document.createElement('div');
        this.body.classList.add('card__body');
        this.elem.append(this.body);

        this.image = product.image;
        this.urlImage = `/assets/images/products/${this.image}`;
        this.img = document.createElement('img');
        this.img.setAttribute('src', this.urlImage);
        this.img.classList.add('card__image');
        this.img.setAttribute('alt', 'product');
        this.head.append(this.img);

        this.span = document.createElement('span');
        this.price = `€${product.price.toFixed(2)}`;
        this.span.append(this.price);
        this.span.classList.add('card__price');
        this.head.append(this.span);

        this.title = document.createElement('div');
        this.title.classList.add('card__title');
        this.name = product.name;
        this.title.append(this.name);
        this.body.append(this.title);

        this.button = document.createElement('button');
        this.button.classList.add('card__button');
        this.body.append(this.button);
        this.icon = document.createElement('img');
        this.icon.setAttribute('src', '/assets/images/icons/plus-icon.svg');
        this.icon.setAttribute('alt', 'icon');
        this.button.append(this.icon);

        this.id = product.id;
        this.button.addEventListener('click', () => {
          this.elem.dispatchEvent( new CustomEvent("product-add", {
            detail: this.id,
            bubbles: true }));
        });
      }
}
