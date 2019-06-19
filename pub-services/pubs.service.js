var pubs = require('../mocks/pubs.json');

function findAllPubs() {
    return pubs.map(function(pub) {
        return pub.name;
    })
}

//function findOpenPubsByDay() {}

module.exports = {
    findAllPubs : findAllPubs,
    //findOpenPubsByDay : findOpenPubsByDay
    };