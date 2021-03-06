import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
    $(document).click(this.clickHandler.bind(this));
  }

  openModal() {
    this.modal.addClass("modal--visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--visible");
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  clickHandler(e) {
    if (e.target.classList[0] == 'modal') {
      this.closeModal();
    }
  }
}

export default Modal;