import $ from 'jquery';

 class HarrisModal{
    constructor(){
      this.openModalButton = $('.open-harris-modal');
      this.modal = $('.harris-modal');
      this.closeModalButton = $('.harris-modal__close');
      this.events();
    }

    events(){
      //clicking the open modal button
      this.openModalButton.on('click',this.openModal.bind(this));

      //clicking the x close modal button
      this.closeModalButton.on('click',this.closeModal.bind(this));

      //pushes any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        this.closeModal();
      }
    }

    openModal(){
        this.modal.addClass('harris-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('harris-modal--is-visible');
    }


 }
export default HarrisModal;


