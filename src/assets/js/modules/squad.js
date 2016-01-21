var Squad = {
  
    init: function() {
        Squad.eventListeners();
    },

    array: [],

    eventListeners: function() {

        if ($('.js-squad-list').length)
            _s_Squad.getAll().then(function(response) {
                Squad.createItems(response);
            });

    },

    createItems: function(data) {
        for (var i in data) {
            var item = '<li>' + data[i].firstname + ' ' + data[i].lastname + '</li>';
            Squad.array.push(item);
        }
        Squad.renderItems();
    },

    renderItems: function() {
        for (var i=0; i < Squad.array.length; i++) {
            $('.js-squad-list').append(Squad.array[i]);
        }
    }

};
$(document).ready(Squad.init());