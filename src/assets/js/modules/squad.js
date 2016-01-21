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
            var item =
                '<li class="player">' +
                    '<p class="player__info">' +
                        '<span class="player__number">' + data[i].squadnumber + '</span>' +
                        '<span class="player__name">' + data[i].firstname + ' ' + data[i].lastname + '</span>' +
                        '<span class="player__position">' + data[i].position + '</span>' +
                    '</p>' +
                '</li>';
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