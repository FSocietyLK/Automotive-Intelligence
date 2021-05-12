// import require modules
const express = require('express');
const toolController = require('../controllers/toolController');

// create express router
const router = express.Router();

// tool routes
router.get('/add', toolController.getAddTool);
router.get('/find', toolController.getFindTool);
router.get('/', toolController.getAllTools);
router.post('/', toolController.postAddTool);
router.post('/find', toolController.postFindTool);
router.get('/:id', toolController.getTool);
router.delete('/:id', toolController.deleteTool);


setInterval(toolController.usage, 60000); // every minuter check one time all tools' location
//setInterval(toolController.usage, 6000); // testing

// export router handles
module.exports = router;