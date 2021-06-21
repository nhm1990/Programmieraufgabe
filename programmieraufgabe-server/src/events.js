const express = require('express');
const { main } = require('./main');

function createRouter(db) {
  const router = express.Router();

  router.post('/event', (req, res, next) => {
    const owner = "nhormesch";
    db.query(
      'INSERT INTO events (owner, name, description, date) VALUES (?,?,?,?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
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

  router.get('/event', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'SELECT id, name, description, date FROM events WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',
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

  router.put('/event/:id', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'UPDATE events SET name=?, description=?, date=? WHERE id=? AND owner=?',
      [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/event/:id', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'DELETE FROM events WHERE id=? AND owner=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  //Customers
  router.post('/customer', (req, res, next) => {
    const owner = "nhormesch";
    db.query(
      'INSERT INTO customers (owner, name, address, creationDate) VALUES (?,?,?,?)',
      [owner, req.body.name, req.body.address, new Date(req.body.date)],
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

  router.get('/customer', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'SELECT id, name, address, creationDate FROM customers WHERE owner=? ORDER BY creationDate LIMIT 10 OFFSET ?',
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

  router.put('/customer/:id', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'UPDATE customers SET name=?, address=?, creationDate=? WHERE id=? AND owner=?',
      [req.body.name, req.body.address, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/customer/:id', function (req, res, next) {
    const owner = "nhormesch";
    db.query(
      'DELETE FROM customers WHERE id=? AND owner=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


  //Main
  router.post('/main', async function (req, res, next) {
    try{
      const main = require('./main.js');
      /*var name = req.body.name;
      var address = req.body.address;
      console.log("TEMPTESTNH7346346343 name: " + name);
      console.log("TEMPTESTNH7346346343 address: " + address);*/
      var resultArr = await main.executeMain();
      console.log("TEMPTESTNH34734634 get /main/ resultArr: " + resultArr);
      res.status(200).json(resultArr);
    }
    catch(e){
      res.status(500).json({status: 'error'}); 
    }
  });


  return router;
}

module.exports = createRouter;