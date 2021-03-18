angular.module('listaTelefonica').factory('timestampInterceptor', function() {
    return {
        request: function(config) {
            var url = config.url;
            if (url.indexOf('view') > -1) return config;
            if (url.indexOf('?') > -1) return config;
            // Concatena um timestamp na url para evitar cache
            config.url = url + '?timestamp='+new Date().getTime();
            return config;
        }
    };
});