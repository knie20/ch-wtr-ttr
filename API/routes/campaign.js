var express = require('express');
var router = express.Router();

const Campaign = require('../services/campaign-service');

router.get('/all', async (req, res, next) => {
  const allCampaigns = await Campaign.getAllCampaigns();

  return 
});

module.exports = router;
