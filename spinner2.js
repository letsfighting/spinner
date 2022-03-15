let array = ["\r|", "\r/", "\r-", "\r\\", "\r-", "\r/", "\r|", "\n"];
let delay = 100;

for (const element in array) {
  setTimeout(() => {
    process.stdout.write(array[element]);
  }, delay);
  delay = delay + 200;
}
