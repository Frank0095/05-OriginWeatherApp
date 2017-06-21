var weatherApp = angular.module('weatherApp', []);

 angular
        .module('weatherApp')
        .controller('weatherAppCtrl', weatherAppCtrl);

    function weatherAppCtrl ($http) {
        var vm = this;
        vm.output = [];
        vm.getWeather = getWeather;
        

        function getWeather (place) {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=5b31675d09958dab90331d5866659943')
                .then(function(response) {
                    vm.weather = response.data;
                    vm.convertTimeFormat();
                    vm.addToSearchHistory();
                    vm.done= true;
                });
    }

    vm.convertTimeFormat = function () {
        vm.date = new Date(new Date().getTime()).toLocaleDateString();
        vm.time = new Date(new Date().getTime()).toLocaleTimeString();
    }

    vm.addToSearchHistory = function () {
        vm.output.push({
            city: vm.weather.name,
            date: vm.date,
            time: vm.time,
        });
    }
    }