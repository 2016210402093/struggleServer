let express = require('express');
let router = express.Router();
let db = require('../db/mysql')

router.post('/', function(req, res){


    let userId = Number(req.body.userId);
    let clockId = Number(req.body.clockId);

    if(userId === -1){
        db.queryAllClockInfo(clockId, res);
    }
    else {
        db.queryClockInfoByUserId(userId, clockId, res);
    }

});

module.exports = router;