const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    
    const obj = {
        title: "System Design",
    }

    res.send(obj)
})

module.exports = router