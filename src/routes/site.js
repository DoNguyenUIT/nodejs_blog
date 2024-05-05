const express = require('express');
const router = express.Router();
//dòng module.exports = new SiteController; bên file SiteController.js có tác dụng ở đây, thì siteController sẽ chứa 1 phiên bản của class SiteController
const siteController = require('../app/controllers/SiteController');

router.use ('/search', siteController.search) ;
router.use('/', siteController.home);

module.exports =  router;