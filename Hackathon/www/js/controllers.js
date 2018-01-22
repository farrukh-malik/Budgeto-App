angular.module('app.controllers', ['ionic','chart.js'])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {

    }])

  .controller('dashboardCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {

      $localStorage.incomes = $localStorage.incomes || !$localStorage.hasOwnProperty('incomes') && [];
      $localStorage.expenses = $localStorage.expenses || !$localStorage.hasOwnProperty('expenses') && [];
      $localStorage.totalIncomes = $localStorage.totalIncomes || !$localStorage.hasOwnProperty('totalIncomes');
      $localStorage.totalExpenses = $localStorage.totalExpenses || !$localStorage.hasOwnProperty('totalExpenses');

      var vm = this;

      $scope.$on('$ionicView.beforeEnter', function(){
        var totalIncomes = $localStorage.totalIncomes;
        var totalExpenses = $localStorage.totalExpenses;
        var savings = totalIncomes - totalExpenses;
        //chart work
        $scope.labels = ['Budgeto'];
        $scope.series = ['Series A', 'Series B', 'Series C'];

        $scope.data = [ [totalIncomes], [totalExpenses], [savings] ];
//
      });


      vm.incomesPage = function(){
          $state.go('incomes');
      }

      vm.expensesPage = function(){
          $state.go('expenses');
      }

    }])

  .controller('incomesCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $rootScope, $state, $localStorage) {

      var vm = this;
      var incomesData = $localStorage.incomes;
      vm.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      vm.years = ['2014', '2015', '2016', '2017', '2018'];
      var temp = [];

      vm.searchByDate = function(){
          var selectedMonthSearch = this.selectedMonth;
          var selectedYearSearch = this.selectedYear;

        for (var i = 0; i < incomesData.length; i++ ){
            if(selectedMonthSearch == incomesData[i].month && selectedYearSearch == incomesData[i].year){
                temp.push(incomesData[i]);
          }
        }
        vm.list = temp;
      }

      $scope.$on('$ionicView.beforeEnter', function(){
          vm.list = $localStorage.incomes;
          var total = 0;

        for( var i = 0; i<incomesData.length; i++ ){
            total += incomesData[i].cost;
        }
        vm.totalIncomes = total;
        $localStorage.totalIncomes = total;
      });

      vm.addIncomesForm = function(){
          $state.go('addIncomes');
      }

    }])

  .controller('addIncomesCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$localStorage', '$cordovaVibration',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $rootScope, $state, $localStorage, $cordovaVibration) {
        var vm = this;
        vm.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        vm.years = ['2014', '2015', '2016', '2017', '2018'];

      vm.addIncomesData = function(){
        var incomesObj = {
            month: this.selectedMonth,
            year: this.selectedYear,
            category: this.category,
            by: this.by,
            cost: this.cost,
        }
        $localStorage.incomes.push(incomesObj);
        $state.go('incomes');
      }
    }])

  .controller('expensesCtrl', ['$scope', '$stateParams', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
        var vm = this;
        var expensesData = $localStorage.expenses;
        vm.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        vm.years = ['2014', '2015', '2016', '2017', '2018'];
        var temp = [];

      vm.searchByDate = function(){
          var selectedMonthSearch = this.selectedMonth;
          var selectedYearSearch = this.selectedYear;

        for (var i = 0; i < expensesData.length; i++ ){
          if(selectedMonthSearch == expensesData[i].month && selectedYearSearch == expensesData[i].year){
              temp.push(expensesData[i]);
          }
        }
        vm.list = temp;
      }

      $scope.$on('$ionicView.beforeEnter', function(){
          vm.list = $localStorage.expenses;
          var total = 0;

        for( var i = 0; i<expensesData.length; i++ ){
            total += expensesData[i].cost;
        }
        vm.totalExpenses = total;
        $localStorage.totalExpenses = total;

      });

      vm.addExpensesForm = function(){
          $state.go('addExpenses');
      }

    }])

  .controller('addExpensesCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicHistory, $localStorage) {
        var vm = this;
        vm.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        vm.years = ['2014', '2015', '2016', '2017', '2018'];

      vm.addExpensesData = function(){
        var expensesObj = {
            month: this.selectedMonth,
            year: this.selectedYear,
            category: this.category,
            by: this.by,
            cost: this.cost,
        }
        $localStorage.expenses.push(expensesObj);
        $state.go('expenses');
      }
    }])
