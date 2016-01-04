/*
Main navigation
*/
var MainNav = {

    showNavAt: 768,

    init: function() {
        var mainNavObj = {
            nav: $('.main-nav'),
            toggle: $('.main-nav__toggle')
        };

        if (Window.getViewportWidth() >= MainNav.showNavAt)
            MainNav.showNav(mainNavObj);

        MainNav.eventListeners(mainNavObj);
    },

    eventListeners: function(mainNavObj) {
        MainNav.setState(mainNavObj); // On load

        Window.resize(function() {
            MainNav.setState(mainNavObj);
        });
    },

    setState: function(mainNavObj) {
        if (Window.getViewportWidth() >= MainNav.showNavAt) {
            mainNavObj.toggle.attr('tabindex', '-1');
            MainNav.showNav(mainNavObj);
        } else {
            mainNavObj.toggle.removeAttr('tabindex');
            MainNav.hideNav(mainNavObj);
        }
    },

    showNav: function(mainNavObj) {
        mainNavObj.nav.show();
    },

    hideNav: function(mainNavObj) {
        mainNavObj.nav.hide();
    },

};
$(document).ready(MainNav.init);
/*
Show/hide
*/

var ShowHide = {

    selectors: {
        content:        'data-showhide-content',
        target:         'data-showhide-target',
        openDefault:    'data-showhide-open-default',
        isOpen:         '--is-open',
        active:         'active'
    },

    init: function() {
        var showHideObj = {
            toggle: $(this),
            content: $('[' + ShowHide.selectors.content + '=' + $(this).attr(ShowHide.selectors.target) + ']')
        };

        if (showHideObj.content.attr(ShowHide.selectors.openDefault) !== 'true')
            showHideObj.content.hide();

        ShowHide.eventListeners(showHideObj);
    },

    eventListeners: function(showHideObj) {
        showHideObj.toggle.on('click', function(event) {
            ShowHide.doToggle(showHideObj);
            return false;
        });
    },

    doToggle: function(showHideObj) {
        showHideObj.content.slideToggle();
        showHideObj.toggle.toggleClass(ShowHide.selectors.active);
        ShowHide.handleBodyClass(showHideObj.content.attr(ShowHide.selectors.content));
    },

    handleBodyClass: function(classToToggle) {
        classToToggle = classToToggle + ShowHide.selectors.isOpen;
        $('body').toggleClass(classToToggle);
    },

    hideElement: function(element) {
        if (element.is(':visible')) {
            var selector = element.attr(ShowHide.selectors.content);
            element.slideUp();
            $('body').removeClass(selector + ShowHide.selectors.isOpen);
            $('[' + ShowHide.selectors.target + '=' + selector + ']').removeClass(ShowHide.selectors.active);
        }
    }

};
$('[data-showhide-target]').each(ShowHide.init);
var Window = {

    resize: function(callback, timeout) {
       
        /*
        To call:

        Window.resize(function() {
            callbackFunction();
        }, [optional timeout value] );

        */

        var id;

        if (!timeout)
            timeout = 200;

        $(window).resize(function() {
            clearTimeout(id);
            id = setTimeout(callback, timeout);
        });

    },

    getViewportWidth: function() {
        return window.innerWidth;
    },

    getViewportHeight: function() {
        return window.innerHeight;
    }
    
};