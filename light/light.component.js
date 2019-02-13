"use strict";
const light = {
    template: `
    <section ng-class="{lightOn: $ctrl.isOn}">LIGHT
    <light-switch on-flip="$ctrl.onFlip();"></light-switch></section>
 
    `,
    controller: ["$rootScope", function($rootScope) {
        const vm = this;
        vm.isOn = false;
        vm.onFlip = function() {
            // if(vm.isOn === false) {
            // vm.isOn = true;
            // console.log(vm.isOn);
            // }
            // else {
            //     vm.isOn = false;
            //     console.log(vm.isOn);
            // }
            vm.isOn = !vm.isOn;
        }
    }]
};
angular.module("App").component("light", light);