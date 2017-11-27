export class Field{

  private id: number;
  private name: string;
  private info: string;
  private st: boolean;

  constructor(id: number, name: string, info: string, st: boolean){
    this.id = id;
    this.name = name;
    this.info = info;
    this.st = st;
  }

  get Id(): number{ return this.id; }
  set Id(param: number){ this.id = param; }

  get Name(): string{ return this.name; }
  set Name(param: string){ this.name = param; }

  get Info(): string{ return this.info; }
  set Info(param: string){ this.info = param; }

  get St(): boolean{ return this.st; }
  set St(param: boolean){ this.st = param; }
}
