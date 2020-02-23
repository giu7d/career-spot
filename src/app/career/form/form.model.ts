export class Form {

  private id: number;
  private name: string;
  private email: string[] = new Array(2);
  private phone: string[] = new Array(2);
  private adress: string;
  private cep: string;
  private city: string;
  private state: string;
  private job: number;

  constructor() {}

  get Id(): number { return this.id; }
  set Id(param: number) { this.id = param; }

  get Name(): string { return this.name; }
  set Name(param: string) { this.name = param; }

  getEmail(i: number): string { return this.email[i]; }
  setEmail(i: number, param: string) { this.email[i] = param; }

  getPhone(i: number): string { return this.phone[i]; }
  setPhone(i: number, param: string) { this.phone[i] = param; }

  get Adress(): string { return this.adress; }
  set Adress(param: string) { this.adress = param; }

  get Cep(): string { return this.cep; }
  set Cep(param: string) { this.cep = param; }

  get City(): string { return this.city; }
  set City(param: string) { this.city = param; }

  get State(): string { return this.state; }
  set State(param: string) { this.state = param; }

  get Job(): number { return this.job; }
  set Job(param: number) { this.job = param; }

}
