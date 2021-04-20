const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
	message: 'AUTH SERVICE',
  });
});

app.listen(4000);
