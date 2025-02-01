var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

router.use(cors());

// 接続情報を設定 
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get('/', async (req, res) => { 
// データベース、コレクションを指定 
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得 
const query = { id: 1 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;