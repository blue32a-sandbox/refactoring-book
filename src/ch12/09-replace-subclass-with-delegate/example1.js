class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay)  result += Math.round(result * 0.15);
    return result;
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback');
  }
  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }
  get hasDinner() {
    return this.extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }
}

// top level...
function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  return new PremiumBooking(show, date, extras);
}

// booking client...
aBooking = createBooking(show, date);

// premium client...
aBooking = createPremiumBooking(show, date, extras);
