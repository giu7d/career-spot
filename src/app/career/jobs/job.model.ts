export class Job{

  private id: number;
  private name: string;
  private info: string;
  private st: boolean;
  private categorie: number;

  constructor(id: number, name: string, info: string, st: boolean, categorie: number){
    this.id = id;
    this.name = name;
    this.info = info;
    this.st = st;
    this.categorie = categorie;
  }

  get Id(): number{ return this.id; }
  set Id(param: number){ this.id = param; }

  get Name(): string{ return this.name; }
  set Name(param: string){ this.name = param; }

  get Info(): string{ return this.info; }
  set Info(param: string){ this.info = param; }

  get St(): boolean{ return this.st; }
  set St(param: boolean){ this.st = param; }

  get Categorie(): number{ return this.categorie; }
  set Categorie(param: number){ this.categorie = param; }

}
