// Generic client.js file. Replace lines of code as needed. Below is simply
// a generic template that allows a PEAN server to run.

const app = angular.module('myApp', []);

const theConst = app.controller('theConstController', ['$http', function($http){
  let self = this;

  self.newConst = { };
  self.constArray = [ ];

  self.addTheConst= function(newTheConst) {
    $http({
      method: 'POST',
      url: '/urlhere',
      data: { food: self.newTheConst}
    }).then(function(response){
      console.log('response', response.data);
      self.newFood = {};
      self.getFoods();
    }).catch(function(error){
      console.log('Messaging That Shows You Are Inside The Function And It Encountered An Error', error);
    })
    console.log(self.foodArray);
  }

  self.deleteTheConst = function(food) {
    $http({
        method: 'DELETE',
        url: `/urlhere/${theConst.id}`,
        //data: { food: food } // optional
      }).then(function(response){
        console.log('response', response.data);
        self.getFoods();
      }).catch(function(error){
        console.log('Messaging That Shows You Are Inside The Function And It Encountered An Error', error);
      })
  }

  self.getTheConst = function(){
    $http({
      method: 'GET',
      url: '/urlhere'
    }).then(function(response){
      const theConst = response.data;
      for (theConst of theConst){
        theConst.column3 = food.column3.toString();
        theConst.column4 = food.column4.toString();
      }
      self.constArray = response.data;
    }).catch(function(error){
      console.log('Messaging That Shows You Are Inside The Function And It Encountered An Error', error);
    })
  }

    self.editTheConst = function(theConst){
    theConst.editing = true;
}

  self.getTheConsts();
}]);