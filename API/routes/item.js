var express = require('express');
var router = express.Router();

const ItemService = require('../services/itemService');

router.get('/', async (req, res, next) => {
  const allItems = await ItemService.getAllItems();

  res.status(200).send(allItems);
});

router.post('/', async (req, res, next) => {
    const data = await ItemService.addItem(req.body.item);
    const newItem = await ItemService.findItem(data.id);
    
    res.status(200).send(newItem);
});

router.put('/:id/', async (req, res, next) => {
  await ItemService.updateItem(req.body.item, req.params.id);
  const allItems = await ItemService.getAllItems();

  res.status(200).json(allItems);
});

router.delete('/:id', async (req, res, next) => {
  await ItemService.deleteItem(req.params.id);
  const allItems = await ItemService.getAllItems();
  
  res.json(allItems);
});



module.exports = router;
