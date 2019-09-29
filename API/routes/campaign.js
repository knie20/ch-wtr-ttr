var express = require('express');
var router = express.Router();

const CampaignService = require('../services/campaign-service');

router.get('/all', async (req, res, next) => {
  const allCampaigns = await CampaignService.getAllCampaigns();

  res.send(allCampaigns);
});

module.exports = router;
