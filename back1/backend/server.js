import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});
const jokes = [
  {
    id: 1,
    title: "Why JavaScript",
    content: "Why did JavaScript break up with HTML? Because it found someone more dynamic."
  },
  {
    id: 2,
    title: "Programmer Life",
    content: "A programmer’s wife says, 'Go to the store and buy some milk.' He never comes back because they have infinite loops."
  },
  {
    id: 3,
    title: "Bug",
    content: "I wrote a bug-free program once… it didn’t do anything."
  },
  {
    id: 4,
    title: "Keyboard",
    content: "Why do programmers love keyboards? Because they have all the right keys."
  },
  {
    id: 5,
    title: "Coffee",
    content: "Programmers don’t drink coffee, they turn it into code."
  },
  {
    id: 6,
    title: "Error 404",
    content: "My love life is like an Error 404 — not found."
  }
];







app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});