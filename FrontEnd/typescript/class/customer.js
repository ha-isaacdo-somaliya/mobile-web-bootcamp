"use strict";
class customer {
    constructor(id, firstname, middleName, lastName, Phone, address, City) {
        this.id = id;
        this.firstName = firstname;
        this.middleName = middleName;
        this.lastName = lastName,
            this.Phone = Phone,
            this.address = address,
            this.City = City;
    }
    get() {
        return `id: ${this.id} firstname : ${this.firstName}  MiddleName: ${this.middleName} lastName: ${this.lastName} Phone: ${this.Phone} address: ${this.address} city: ${this.City}`;
    }
}
let customer1 = new customer(1, 'osmaan', 'daahir', 'Ige', 44333234, 'Hawaadle', 'hargeisa');
console.table(customer1);
