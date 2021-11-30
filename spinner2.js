const char = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];

const animatedSpinner = () => {
  let timer = 100;
  for (const el of char) {
    setTimeout(() => {
      process.stdout.write(el);
    }, timer);
    timer += 200;
  }
};

animatedSpinner();
