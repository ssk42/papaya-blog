const { Router } = require('express');
const router = new Router();
const db = require('./database');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/posts', (request, response) => {
    doQuery(response, db.getPosts);
});

router.get('/posts/:id', (request, response) => {
    doQuery(response, db.getPost, request.params.id);
});

async function doQuery(response, queryFunction, ...params) {
    try {
        const results = await queryFunction(...params);
        if (results) {
            response.status(200).json(results.rows);
        } else {
            response.status(200).json([]);
        }
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .json({ status: 'error', message: `Error:${error}` });
    }
}

module.exports = router;  