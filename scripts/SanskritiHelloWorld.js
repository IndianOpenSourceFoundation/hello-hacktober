// LANGUAGE: Javascript
// ENV: Node.js
// AUTHOR: Sanskriti
// GITHUB: https://github.com/sanskriti27

const id = setTimeout(() => {
  let count = 5;

  while (count !== 0) {
    console.log("Hello, World");
    count--;
  }

  if (count === 0) {
    clearTimeout(id);
  }
}, 3000);
