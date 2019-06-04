/*global cordova, module*/
console.log("TEST PLUGIN TOP")
window.test = 5
module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    }
};
