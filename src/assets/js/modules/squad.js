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
            var playerName = data[i].firstname + ' ' + data[i].lastname;
            var playerSlug = playerName.replace(' ', '-').toLowerCase();
            var item =
                '<li class="player">' +
                    '<a class="player__link" href="./players/' + playerSlug + '">' +
                        '<img alt="' + playerName + '" class="player__img" src="imgs/players/' + playerSlug + '.jpg" />' +
                    '</a>' +
                    '<p class="player__info">' +
                        '<a class="player__link" href="./players/' + playerSlug + '">' +
                            '<span class="player__number">' + data[i].squadnumber + '</span>' +
                            '<span class="player__name cut-corner cut-corner--tl">' + playerName + '</span>' +
                            '<span class="player__position">' + data[i].position + '</span>' +
                        '</a>' +
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