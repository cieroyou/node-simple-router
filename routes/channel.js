var express = require('express');
var router = express.Router();

/**
 * BaseUrl : /channel
 */


 /* clubList 출력. 담당개발자 A */
router.get('/', function (req, res) {
    //     clubList.list(req, res);
        res.send('/channel')
});

 /* clubList 출력. 담당개발자 A */
router.get('/list', function (req, res) {
//     clubList.list(req, res);
    res.send('/channel/list')
});

/* 클럽상세. 담당개발자 B */
router.get('/detail', function (req, res) {
    // clubDetail.detail(req, res);
    res.send('/channel/detail')
});

module.exports = router;