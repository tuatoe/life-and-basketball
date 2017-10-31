import $ from 'jquery';

class myShow{
    constructor(){
        this.slideShow();
    }

    slideShow(){
        $('#slider > div:gt(0)').hide();
        
        setInterval(function(){
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slider');
        } 3000);
    }
}

export default myShow;