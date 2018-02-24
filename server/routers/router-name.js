// Generic router-namejs file. Replace lines of code as needed. Below is simply
// a generic template that allows a PEAN server to run.
const express = require('express'); 
const router = express.Router();
const pool = require('../modules/pool');

// Start GET
router.get('/', (req, res) => {
  console.log('Console Message That Lets You Know You Are Inside The Function.');
  let queryText = `INSERT SQL QUERY HERE`;
  pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error GETting Query.', err);
        res.sendStatus(500);
    });
});
// End GET

// Start POST
router.post('/', (req, res) => {
    const theConst = req.body.theConst;
    console.log('Console Message That Lets You Know You Are Inside The Function, It Will Add/Post The Variable theConst.', theConst);
  
    let queryText = `INSERT SQL QUERY HERE`;
    pool.query(queryText, [theConst.column1, theConst.column2, theConst.column3, theConst.column4])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error POSTing Query.', err);
        res.sendStatus(500);
      });
  })
// End POST

router.put('/:id', (req, res) => {
  const id = req.params.id
  const theConst = req.body.theConst;
  console.log('Console Message That Lets You Know You Are Inside The Function, It Will Update' , theConst);
  let queryText = `INSERT SQL QUERY HERE`;
  pool.query(queryText, [id, theConst.column1, theConst.column2, theConst.column3, theConst.column4])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Console Message That Lets You Know You Are Inside The Function, It Will Delete theConst with id = ${id}`);
    let queryText = `INSERT SQL QUERY HERE`;
    pool.query(queryText, [id])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error Deleting Query.', err);
        res.sendStatus(500);
      })
  });

module.exports = router;