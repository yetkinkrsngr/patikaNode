const exprees = require('express');
const app = exprees();
const port = 3000;
const path = require('path');

app.use(exprees.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/get', (req, res) => {
  res.sendFile(path.join(__dirname, 'post.html'));
});

app.get('/add_post', (req, res) => {
  res.sendFile(path.join(__dirname, 'add_post.html'));
});
app.get('/blog', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.json(blog);
});
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
