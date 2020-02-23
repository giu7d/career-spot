export class Candidate {

    private id: number;
    private name: string;
    private email:string;
    private phone: string;
    private adress: string;
    private cep: string;
    private city: string;
    private state: string;
    private jobApply: string;

    constructor() {}
    
    get Id(): number { return this.id; }
    set Id(param: number) { this.id = param; }

    get Name(): string { return this.name; }
    set Name(param: string) { this.name = param; }

    get Email(): string { return this.email; }
    set Email(param: string) { this.email = param; }

    get Phone(): string { return this.phone; }
    set Phone(param: string) { this.phone = param; }

    get Adress(): string { return this.adress; }
    set Adress(param: string) { this.adress = param; }

    get Cep(): string { return this.cep; }
    set Cep(param: string) { this.cep = param; }

    get City(): string { return this.city; }
    set City(param: string) { this.city = param; }

    get State(): string { return this.state; }
    set State(param: string) { this.state = param; }

    get JobApply(): string { return this.jobApply; }
    set JobApply(param: string) { this.jobApply = param; }
}
