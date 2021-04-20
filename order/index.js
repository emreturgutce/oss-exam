const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
	message: 'ORDER SERVICE',
  });
});

app.listen(4000);
