angular.module('app').controller('FamilyListController', function($scope, $location, FamilyResource) {

    $scope.loadFamilies = function() {
        $scope.families = FamilyResource.query({
                page:$scope.currentPage,
                size:$scope.itemsPerPage,
                filter:$scope.searchText,
                sort:$scope.sortOrder
            },
            function(data, getHeaders) {
                var headers = getHeaders();
                if(headers.totalrowcount != $scope.pageTotalItems) {
                    $scope.pageTotalItems = headers.totalrowcount;
                }
            });
    };

    $scope.sortOptions = [{value:"dateAdded",text: "Sort by Date Added"},
        {value: "phone1",text: "Sort by Phone Number"},
        {value: "address1",text: "Sort by Address"}];

    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.$watch('searchText', function() {
        $scope.currentPage = 1;
        $scope.loadFamilies();
    });

    $scope.$watch('sortOrder', function() {
        $scope.currentPage = 1;
        $scope.loadFamilies();
    });

    $scope.familyRowClick = function (id) {
        $location.path("/families/" + id);
    };

    $scope.itemsPerPage = 12;
    $scope.pageTotalItems = 1;
    $scope.currentPage = 1;
    $scope.pageMaxSize = 10;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;

    };

    $scope.loadFamilies();
});