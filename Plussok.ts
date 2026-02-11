export class Plussok{
  nev: string;
  magassag: number;
  szin: string;

  private static ervenyesSzinek: string[] = ["piros","barna","sarga"];

  constructor(nev: string, magassag: number, szin: string) {
    
    if (!nev || nev.trim() === "") {
      throw new Error("A név nem lehet üres!");
    }

    if (magassag <= 0) {
      throw new Error("A magasság nem lehet 0 vagy negatív!");
    }

    if (!Plussok.ervenyesSzinek.includes(szin)) {
      throw new Error("Érvénytelen szín lett kiválasztva!");
    }
    this.nev = nev;
    this.magassag = magassag;
    this.szin = szin;
  }
}