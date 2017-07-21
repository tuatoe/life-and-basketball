import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
//import TabContent from './modules/TabContent';

var mobileMenu = new MobileMenu();

new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");

var stickyHeader = new StickyHeader();
var modal = new Modal();

var tabContent = new TabContent();
