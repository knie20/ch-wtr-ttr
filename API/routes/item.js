var express = require('express');
var router = express.Router();

const ItemService = require('../services/itemService');

router.get('/', async (req, res, next) => {
  const allCampaigns = await CampaignService.getAllCampaigns();

  res.send(allCampaigns);
});

router.post('/', async (req, res, next) => {
    const campaignId = await CampaignService.newCampaign();

    res.status(200);
    res.send(campaignId);
});

router.put('/:id/name', async (req, res, next) => {
  const campaign = await CampaignService.setName(req.params.campaignId, req.body.name);

  res.status(200);
  res.send(campaignId);
});

router.delete('/:id', async (req, res, next) => {
  const campaignId = await CampaignService.deleteCampaign(req.params.id);

  res.status(200);
});



module.exports = router;
