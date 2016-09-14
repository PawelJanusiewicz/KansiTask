kansiTaskApp.filter('startFrom', function () {
        return function (data, start) {
            if (!data || !data.length) {
                return;
            }
            return data.slice(start);
        };
    });