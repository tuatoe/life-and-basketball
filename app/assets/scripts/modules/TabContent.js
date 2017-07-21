import $ from 'jquery';

class TabContent(){
    constructor(){
        this.tabNav = $('.how-you-can-help__nav-tabs__link');
        this.tabId = $(this).attr('data-tab');
        this.tabContent = $('.how-you-can-help__tab-content');
        this.event();
    }
    
    event(){
        this.tabNav.on('click',function(e){
            e.preventDefault();
            this.tabNav.removeClass('how-you-can-help__nav-tabs__link--current');
            this.tabContent.removeClass('how-you-can-help__nav-tabs--current-tab');
            
            $(this).addClass('how-you-can-help__nav-tabs__link--current');
            $('#'+this.tabId).addClass('how-you-can-help__nav-tabs--current-tab');
        })
    }
}

export default TabContent;