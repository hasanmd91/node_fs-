const readData = async (file: string | number) => {
  const dataStr = readFileSync(file, 'utf-8');
  const data = JSON.parse(dataStr);
  return data;
};

const main = async () => {
  const args = process.argv;
  if (args.length !== 4) {
    console.log(`usage: ${args[0]} ${args[1]} input output`);
    process.exit(1);
  }
  const data = await readData(args[2]);
  const output = data.toString()

  writeFileSync(
    args[3],
    output,
    'utf8'
  );
};

main();


// externls script 
