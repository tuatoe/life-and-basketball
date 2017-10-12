import $ from 'jquery';

class JotForm {
    constructor(){
        this.jot = $('.our-success__content-block__title');
        this.theForm();
    }
    
    theForm(){
        $(document).ready(function(){
            if(this.jot){
                alert('yes');
            }
        })
    }
}

export default JotForm;