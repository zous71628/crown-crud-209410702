var express = require('express');
var router = express.Router();

const db = require('../utils/database');

router.get('/', async (req, res, next) => {
  const query = {
    text: `SELECT *FROM book_02`,
  };
  let results = await db.query(query);
  let data = results.rows;
  console.log(results)
  res.render('book_02/index_02', {
    data,
  });
});

router.get('/delete/:id', async(req,res,next)=>{
  let id = req.params.id
  const query = {
    text: `DELETE FROM book_02 WHERE id = $1`,
    values:[id],
  };
  await db.query(query)
  res.redirect("/book_02")
})
module.exports = router;
