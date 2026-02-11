import { Plussok } from "./Plussok";

const form = document.getElementById("plussForm") as HTMLFormElement;
const app = document.getElementById("app") as HTMLDivElement;

const API_LINK = "https://retoolapi.dev/XWWMOG/data"

form.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const nevInput = document.getElementById("nev") as HTMLInputElement;
    const magassagInput = document.getElementById("magassag") as HTMLInputElement;
    const szinInput = document.querySelector(
      'input[name="szin"]:checked'
    ) as HTMLInputElement | null;

    if (!szinInput) {
      throw new Error("Válassz színt!");
    }

    const nev: string = nevInput.value;
    const magassag: number = Number(magassagInput.value);
    const szin: string = szinInput.value;

    const ujPluss = new Plussok(nev, magassag, szin);

    app.innerHTML = `
      <p>Sikeres mentés!</p>
      <p>Név: ${ujPluss.nev}</p>
      <p>Magasság: ${ujPluss.magassag} cm</p>
      <p>Szín: ${ujPluss.szin}</p>
    `;

  } catch (error) {
    if (error instanceof Error) {
      app.innerHTML = `<p style="color:red;">Hiba: ${error.message}</p>`;
    }
  }
});