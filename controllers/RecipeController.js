const express = require('express');
const { get } = require('../routes');

module.exports={
    async get(req,res)
    {
        return res.status(200).json({'success':true, "body":{"message":"testing the basic project structure"}})
    }
}