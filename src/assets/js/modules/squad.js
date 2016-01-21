var Squad = {
  
    init: function() {
        Squad.eventListeners();
    },

    eventListeners: function() {

        if ($('.js-squad-list').length)
            Squad.listAll();

    },

    listAll: function() {
        _s_Squad.getAll().then(function(response) {
            console.log(response);
        });
    }

};
$(document).ready(Squad.init());