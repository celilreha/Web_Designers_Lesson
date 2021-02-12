var app = angular.module('myApp', []);
app.service('veri', function () {
    var personelList = [{ id: 1, isim: "Ahmet" }, { id: 2, isim: "Mehmet" }, { id: 3, isim: "Ayşe" }];
    this.getPersonel = function (id) {
        var personel=null;
        angular.forEach(personelList , function (p) {
            if (p.id == id) {
                personel=p;
            }
        });
        /*for (let i = 0; i < personelList.length; i++) {
            if (personelList[i].id == id)
                return personelList[i].isim;
        }*/
        return personel;
    }
});
app.controller('myCtrl', function a($scope, veri) {
    $scope.getPersonel=function(){
        $scope.personel = veri.getPersonel($scope.pId);
        $scope.pIsim=$scope.personel.isim;
    }
    
});