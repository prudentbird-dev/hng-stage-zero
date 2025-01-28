const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    email: 'prudentbird@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/prudentbird-dev/hng-stage-zero'
  });
});

if (process.env.NODE_ENV === 'development') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Local server running on http://localhost:${PORT}`));
}

module.exports = app;