const annoyer = {
  phrases: ['Totes', 'Cray Cray', 'LLS', 'Jie Like', 'IDK', 'Whatever'],
  pick() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    console.log('Starting...');
    this.timerId = setInterval(() => {
      console.log(this.pick());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log('Stopping');
  },
};
