const express = require('express');
const { main } = require('./main');

function createRouter(db) {
  const router = express.Router();

  router.post('/main', async function (req, res, next) {
    try{
      const main = require('./main.js');
      var number = req.body.input;
      console.log("TEMPTESTNH7346346343 number: " + number);
      var palindromeNumber = await main.executeMain(number);
      console.log("TEMPTESTNH34734634 get /main/ palindromeNumber: " + palindromeNumber);
      res.status(200).json(palindromeNumber);
    }
    catch(e){
      res.status(500).json({status: 'error'}); 
    }
  });

  router.post('/mainSave', (req, res, next) => {
    const owner = "nhormesch";
    db.query(
      'INSERT INTO palindrome (owner, input, result, numberOfCycles) VALUES (?,?,?,?)',
      [owner, req.body.input, req.body.result, req.body.numberOfCycles],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/main', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'SELECT id, input, result, numberOfCylces FROM palindrome WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });


  return router;
}

module.exports = createRouter;