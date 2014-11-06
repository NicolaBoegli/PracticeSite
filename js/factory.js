myAppModule.factory('Cart', function() {
        var items = [];
        return {
            getItems: function() {
                return items;
            },
            addArticle: function(article) {
                items.push(article);
            },
            sum: function() {
                return items.reduce(function(total, article) {
                    return total + article.price;
                }, 0);
            },
            remove: function(index) {
                return items.splice(index, 1);
            },
            removeAll: function() {
                items = [];
            }
        };
    })
    .controller('ArticlesCtrl', function($scope, $http, Cart){
        $scope.addArticle = Cart.addArticle;
        $http.get('./js/articles.json').then(function(articlesResponse) {
            $scope.articles = articlesResponse.data;
        });
    })
    .controller('CartCtrl', function($scope, Cart){
        $scope.sum = Cart.sum;
        $scope.remove = Cart.remove;
        $scope.removeAll = Cart.removeAll;
        $scope.getItems = Cart.getItems;
    });
