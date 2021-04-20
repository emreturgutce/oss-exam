const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
	message: 'SALE SERVICE',
  });
});

app.listen(4000);
