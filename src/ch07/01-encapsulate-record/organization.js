class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({name: "Acme Goosebeeries", country: "GB"});

export function getRawDataOfOrganization() {return organization._data;}
export function getOrganization() {return organization;}
