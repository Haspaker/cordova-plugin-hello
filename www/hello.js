/*global cordova, module*/
console.log("TEST PLUGIN TOP")
module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    }
};
