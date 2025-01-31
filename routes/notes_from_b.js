var express = require('express');
var router = express.Router();
const cors = require('cors')

router.use(cors());

// 接続情報を設定 
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2201110070ze:<password>@cluster0.smmvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => { 
// データベース、コレクションを指定 
const database = client.db('notes');
const notes = database.collection('notes');

// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;