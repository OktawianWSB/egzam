var Tutorial = require('./tutorial');

exports.nodeTutorial = function () {
    console.log("tutorial z node'a");

    this.wywolanie = function () {
        var calling = Tutorial;
        calling.tutorial()
    }
}