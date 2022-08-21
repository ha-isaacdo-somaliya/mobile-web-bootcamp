class customer{
    id:number;
    firstName:string;
    middleName:string;
    lastName:string;
    Phone:number;
    address:string;
    City:string;
    constructor( id:number,firstname:string,middleName:string,lastName:string,Phone:number,address:string,City:string){
       this.id,
        this.firstName = firstname,
        this.middleName = this.middleName,
        this.lastName = this.lastName,
        this.Phone  = Phone,
        this.address = address,
        this.City = City
    }
    get(){
        return `id: ${this.id} firstname : ${this.firstName}  MiddleName: ${this.middleName} lastName: ${this.lastName} Phone: ${this.Phone} address: ${this.address} city: ${this.City}`;
    }
}


let customer1  = new customer(1,'osmaan','daahir','Ige',44333234,'Hawaadle','hargeisa');
console.table(customer1);
