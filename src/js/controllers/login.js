//Login.js
angular
  .module('app', ['oitozero.ngSweetAlert'])
  .controller('LoginCtrl', LoginCtrl)


LoginCtrl.$inject = ['$scope', '$state', '$http', 'SweetAlert'];
function LoginCtrl($scope, $state, $http, SweetAlert) {
  var baseUrl = 'https://noticias-api.herokuapp.com/api/v1/users';
  vm = $scope;

  vm.submit = function (form) {
    if (!form.$invalid) {
      login();
    }
  }

  login = function () {
    //chama serviço lofin
    $http.get(baseUrl).then(function (response) {
      $scope.users = response.data;
      if ((vm.users.result[0].login == vm.user.username) && (vm.users.result[0].password == vm.user.password)) {
        //chamar SWEETALERT
        SweetAlert.swal({
          title: "Login",
          text: "Login efetuado com sucesso Seja bem vindo!",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: false,
          confirmButtonText: false,
          cancelButtonText: false,
          closeOnConfirm: false,
          closeOnCancel: false,
          showConfirmButton: false,
          timer: 2000
        });
        //navegue para MAIN
        $state.go('app.main');
      }
      else {
        SweetAlert.swal({
          title: "Ops!",
          text: "Não foi possivel Acessar, verifique suas credenciais e Tente Novamente!",
          type: "error",
          showCancelButton: false,
          confirmButtonClass: false,
          confirmButtonText: false,
          cancelButtonText: false,
          closeOnConfirm: false,
          closeOnCancel: false,
        });
      }
    }, function (err) {
      SweetAlert.swal({
        title: "Ops!",
        text: "Acho que encontramos algum problema em nosso servidores, tente novamente!",
        type: "error",
        showCancelButton: false,
        confirmButtonClass: false,
        confirmButtonText: false,
        cancelButtonText: false,
        closeOnConfirm: false,
        closeOnCancel: false,
        showConfirmButton: true,
        timer: 3000
      });
    });
  }
}
