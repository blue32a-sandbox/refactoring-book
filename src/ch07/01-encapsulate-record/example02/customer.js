class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

let customerData;
setRawDataOfCustomers({
  "1920": {
    name: "martin",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
        "3": 60,
        "4": 48,
        "5": 52,
        "6": 58,
        "7": 66,
        "8": 61,
        "9": 57,
        "10": 59,
        "11": 55,
        "12": 53
      },
      "2015": {
        "1": 70,
        "2": 63,
        "3": 67,
        "4": 71,
        "5": 55,
        "6": 58,
        "7": 51,
        "8": 64,
        "9": 59,
        "10": 60,
        "11": 66,
        "12": 65
      }
    }
  },
  "38673": {
    name: "neal",
    id: "38673",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
        "3": 60,
        "4": 48,
        "5": 52,
        "6": 58,
        "7": 66,
        "8": 61,
        "9": 57,
        "10": 59,
        "11": 55,
        "12": 53
      },
      "2015": {
        "1": 70,
        "2": 63,
        "3": 67,
        "4": 71,
        "5": 55,
        "6": 58,
        "7": 51,
        "8": 64,
        "9": 59,
        "10": 60,
        "11": 66,
        "12": 65
      }
    }
  }
});

export function getCustomerData() {return customerData;}
export function getRawDataOfCustomers() {return customerData._data;}
export function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}
