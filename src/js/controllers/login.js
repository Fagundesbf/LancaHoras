//Login.js
angular
  .module('app',['oitozero.ngSweetAlert'])
  .controller('LoginCtrl', LoginCtrl)


LoginCtrl.$inject = ['$scope', '$http','SweetAlert'];
function LoginCtrl($scope, $http,SweetAlert) {
var baseUrl = 'https://noticias-api.herokuapp.com/api/v1/users';
vm = $scope;

vm.submit = function(form) {
  console.log('formulario',form);

  if (!form.$invalid) {
    login();
  }
}

login = function(){
//chama serviço lofin
  $http.get(baseUrl).then(function (response) {
    $scope.users = response.data;
    console.log('user',$scope.users.result);
    if((vm.users.result[0].login == vm.user.username)&&(vm.users.result[0].password == vm.user.password )){

      //chamar SWEETALERT
      console.log( 'é verdade');
     
        SweetAlert
        SweetAlert.swal("I'm a fancy Alert");
     
     }
     else{
      SweetAlert.swal("I'm a fancy Alert");
     }

  }, function (err) {
    console.log(err);
  });
  // -------------------------------

}



}
