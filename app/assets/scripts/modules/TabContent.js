import $ from 'jquery';

class TabContent{
    constructor(){
        this.events();
    }
    
    events(){
       
        $('ul.how-you-can-help__nav-tabs li').on('click',this.showActiveTab);
    }
    
    showActiveTab(){
        var $that = $(this);
        var tab_id = $that.attr('data-tab');
        
        $('ul.how-you-can-help__nav-tabs li').removeClass('how-you-can-help__nav-tabs__link--current');
        $('.how-you-can-help__tab-content').removeClass('how-you-can-help__nav-tabs--current-tab');
            
        $that.addClass('how-you-can-help__nav-tabs__link--current');
        $('#'+tab_id).addClass('how-you-can-help__nav-tabs--current-tab');
    }
}

export default TabContent;