import $ from 'jquery';

class BackToTop {
  constructor() {
    this.backToTopButton = $('.btn__back-to-top');
    this.events();
  }

  events() {
    $(window).scroll(this.scrollFunction.bind(this));
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backToTopButton[0].classList.remove("btn--hidden");
    } else {
      this.backToTopButton[0].classList.add("btn--hidden");
    }
  }
}

export default BackToTop;