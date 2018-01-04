import $ from 'jquery';

 class Modal{
    constructor(){
      this.openModalButton = $('.open-modal');
      this.modal = $('.modal');
      this.closeModalButton = $('.modal__close');
      this.iframe = $('#player')[0];
      this.player = $(this.iframe);
      this.events();
     
    }

    events(){
      //clicking the open modal button
      this.openModalButton.click(this.openModal.bind(this));
      this.openModalButton.on('click',function(){
            var iframe = $('#life-and-basketball')[0];
            var player = $f(iframe);
            player.api('play');
      })
      //clicking the x close modal button
      this.closeModalButton.click(this.closeModal.bind(this));
      this.closeModalButton.on('click',function(){
        //$('.modal .modal__inner iframe').attr('src', $('.modal .modal__inner iframe').attr('src')); 
            var iframe = $('#life-and-basketball')[0];
            var player = $f(iframe);
            player.api('pause');
           location.reload();
      });
        
      //pushes any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        this.closeModal();
      }
    }

    openModal(){
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }


 }
export default Modal;


