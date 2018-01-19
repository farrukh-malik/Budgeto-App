angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

//1st
      .state('dashboard', {
    url: '/page2',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl',
    controllerAs: 'vm'
  })
//2nd
  .state('incomes', {
    url: '/page6',
    templateUrl: 'templates/incomes.html',
    controller: 'incomesCtrl',
    controllerAs: 'vm'
  })
  //3rd

  .state('addIncomes', {
    url: '/page9?kegel&cycle&setsDone&fromAlarm',
    templateUrl: 'templates/addIncomes.html',
    controller: 'addIncomesCtrl',
    controllerAs: 'vm'
  })

    .state('expenses', {
      url: '/page10',
      templateUrl: 'templates/expenses.html',
      controller: 'expensesCtrl',
      controllerAs: 'vm'
    })

    .state('addExpenses', {
      url: '/page15',
      templateUrl: 'templates/addExpenses.html',
      controller: 'addExpensesCtrl',
      controllerAs: 'vm'
    })

$urlRouterProvider.otherwise('/page2')


});
