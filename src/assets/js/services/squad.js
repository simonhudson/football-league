var _s_Squad = {
  
    getAll: function() {
        return $.ajax({
            url: 'data/squad.json',
            method: 'get'
        });
    }

};