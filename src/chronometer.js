class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      // printTimeCallback();
      if (printTimeCallback) return printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    let numberSeconds = this.currentTime % 60;
    return numberSeconds;
  }

  computeTwoDigitNumber(value) {
    if (value.length === 2) {
      return value.toString();
    } else {
      return value.toString().padStart(2, "0");
    }
  }

  stop() {
    clearInterval(this.intervalId);
    // clearInterval(this.intervalId);
    // clearInterval(startprintTimeCallback())
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// const chronometer = new Chronometer(); // instance of the Chronometer
