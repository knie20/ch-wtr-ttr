const Models = require('./db');

module.exports = {
    getAllCampaigns: () => {
        return Models.Campaign.findAll().then(campaigns => {
            return campaigns;
        });
    }
}
