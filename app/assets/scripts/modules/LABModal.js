import $ from 'jquery';

 class LABModal{
    constructor(){
      this.openModalButton = $('.open-life-academy-modal');
      this.modal = $('.life-academy-modal');
      this.closeModalButton = $('.life-academy-modal__close');
      this.btn = $('.btn--orange');
      this.events();
      this.showsome();
    
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
        this.modal.addClass('life-academy-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('life-academy-modal--is-visible');
    }
     
    showsome(){
       console.log('hi');
    } 


 }
export default LABModal;


