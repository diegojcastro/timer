const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('Press a number 1-9 to start a timer.\n\x07');
    stdin.on('data', (key) => {
      if (key < 10 && key > 0) {
        key = Number(key);
        process.stdout.write(`${key} sec timer`);
        setTimeout( () => {
          console.log(`\nFinished the ${key} second timer! \x07`);
        }, key * 1000)
      
      }
    })

  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // process.stdout.write('');
});

console.log('after callback');