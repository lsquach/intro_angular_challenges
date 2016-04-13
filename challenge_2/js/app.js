console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WdiController", WdiController);

function WelcomeController(){
  this.full_name = "Lotus";
  this.shout = function (str){
    return str.toUpperCase() + "!";
  };
}

function WdiController () {
  this.class_name = "Web Dev Immersive";
}
