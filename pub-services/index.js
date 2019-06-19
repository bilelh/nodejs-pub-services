var pubService = require('./services/pubs.service');

var listePub = pubService.findAllPubs();
console.log("Liste des pubs : " + listePub)


module.exports = {
    services: {
        pubService : pubService
    }
}


