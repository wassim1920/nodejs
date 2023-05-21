const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created: welcome.txt');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
