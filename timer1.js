const args = process.argv.slice(2);

// const numArgs = args.filter( n => typeof(n) === 'number').filter( n => n >= 0 );
const numArgs = args.filter( n => n >= 0 );

for (let arg of numArgs) {
  setTimeout( () => {
    console.log(`${arg} sec timer! \x07`)
  }, arg*1000);
}