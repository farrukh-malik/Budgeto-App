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
          var allIncomes = $localStorage.incomes;
          var allExpenses = $localStorage.expenses;

          var monthlyIncomes = [0,0,0,0,0,0,0,0,0,0,0,0];
          var monthlyExpenses = [0,0,0,0,0,0,0,0,0,0,0,0];

          var totalIncomes = $localStorage.totalIncomes;
          var totalExpenses = $localStorage.totalExpenses;
          var savings = totalIncomes - totalExpenses;
        //chart work
        //$scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        //$scope.series = ['Series A', 'Series B', 'Series C'];
        //
        //$scope.data = [ [totalIncomes][totalExpenses][savings], [totalExpenses], [savings] ];

        for(i = 0; i<allIncomes.length; i++){

          if (allIncomes[i].month == "Jan" && allIncomes[i].year == "2014"){
            monthlyIncomes[0] = monthlyIncomes[0] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Feb" && allIncomes[i].year == "2014"){
            monthlyIncomes[1] = monthlyIncomes[1] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Mar" && allIncomes[i].year == "2014"){
            monthlyIncomes[2] = monthlyIncomes[2] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Apr" && allIncomes[i].year == "2014"){
            monthlyIncomes[3] = monthlyIncomes[3] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "May" && allIncomes[i].year == "2014"){
            monthlyIncomes[4] = monthlyIncomes[4] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "June" && allIncomes[i].year == "2014"){
            monthlyIncomes[5] = monthlyIncomes[5] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "July" && allIncomes[i].year == "2014"){
            monthlyIncomes[6] = monthlyIncomes[6] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Aug" && allIncomes[i].year == "2014"){
            monthlyIncomes[7] = monthlyIncomes[7] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Sept" && allIncomes[i].year == "2014"){
            monthlyIncomes[8] = monthlyIncomes[8] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Oct" && allIncomes[i].year == "2014"){
            monthlyIncomes[9] = monthlyIncomes[9] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Nov" && allIncomes[i].year == "2014"){
            monthlyIncomes[10] = monthlyIncomes[10] + allIncomes[i].cost;
          }
          if (allIncomes[i].month == "Dec" && allIncomes[i].year == "2014"){
            monthlyIncomes[11] = monthlyIncomes[11] + allIncomes[i].cost;
          }
        }
        console.log(monthlyIncomes);

        for(i = 0; i<allExpenses.length; i++){

          if (allExpenses[i].month == "Jan" && allExpenses[i].year == "2014"){
            monthlyExpenses[0] = monthlyExpenses[0] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Feb" && allExpenses[i].year == "2014"){
            monthlyExpenses[1] = monthlyExpenses[1] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Mar" && allExpenses[i].year == "2014"){
            monthlyExpenses[2] = monthlyExpenses[2] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Apr" && allExpenses[i].year == "2014"){
            monthlyExpenses[3] = monthlyExpenses[3] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "May" && allExpenses[i].year == "2014"){
            monthlyExpenses[4] = monthlyExpenses[4] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "June" && allExpenses[i].year == "2014"){
            monthlyExpenses[5] = monthlyExpenses[5] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "July" && allExpenses[i].year == "2014"){
            monthlyExpenses[6] = monthlyExpenses[6] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Aug" && allExpenses[i].year == "2014"){
            monthlyExpenses[7] = monthlyExpenses[7] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Sept" && allExpenses[i].year == "2014"){
            monthlyExpenses[8] = monthlyExpenses[8] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Oct" && allExpenses[i].year == "2014"){
            monthlyExpenses[9] = monthlyExpenses[9] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Nov" && allExpenses[i].year == "2014"){
            monthlyExpenses[10] = monthlyExpenses[10] + allExpenses[i].cost;
          }
          if (allExpenses[i].month == "Dec" && allExpenses[i].year == "2014"){
            monthlyExpenses[11] = monthlyExpenses[11] + allExpenses[i].cost;
          }
        }
        console.log(monthlyExpenses);

        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.series = ['Series A', 'Series B', 'Series C'];

        $scope.data = [ monthlyIncomes, monthlyExpenses, [ 48, 40, 19, 86, 27, 90,48, 40, 19, 86, 27, 90] ];
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
