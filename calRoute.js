const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('heelo',req);
    try {
        const { val1, val2, method } = req?.body;

        console.log("method",method)
        console.log("val1",val1)
        console.log("val2",val2)

        if (method == 'add') {
           return res.status(200).send({ result: val1 + val2 });
        } else if (method == 'sub') {
           return res.status(200).send({ result: val1 - val2 });
        } else if (method == 'mul') {
          return res.status(200).send({ result: val1 * val2 });
        } else {
           return res.status(400).send({ message: 'Invalid method' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Something went wrong!', error: error?.message || error });
    }
});

module.exports = router;
