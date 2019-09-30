var express = require('express');
var router = express.Router();

const ItemService = require('../services/itemService');

router.get('/', async (req, res, next) => {
  const allCampaigns = await ItemService.getAllItems();

  res.send(allCampaigns);
});

router.post('/', async (req, res, next) => {
    const item = await ItemService.addItem(req.body.item);

    res.status(200);
    res.send(item);
});

router.put('/:id/', async (req, res, next) => {
  await ItemService.updateItem(req.body.item, req.params.id);

  res.status(200);
});

router.delete('/:id', async (req, res, next) => {
  await ItemService.deleteItem(req.params.id);

  res.status(200);
});



module.exports = router;
