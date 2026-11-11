import {Animal} from "./Animal.js";
import {Funcionario} from "./Funcionario.js";
import {Clinica} from "./Clinica.js";
import {Consulta} from "./consulta.js"; 
import Gato from "./Gato.js";
import Cachorro from "./Cachorro.js";
import Aves from "./Aves.js";
import { Veterinario } from "./Veterinario.js";
import { Recepcionista } from "./recepcionista.js";

let cachorro = new Cachorro("Rex(Cachorro)", 3, "Carlos", "Labrador");
let gato = new Gato("Mimi(Gato)", 2, "Ana", "Siamês");
let ave = new Aves("Loro(Ave)", 1, "Pedro", true);
let cachorro2 = new Cachorro("Thor(Cachorro)", 4, "Marcos", "Golden Retriever");
let veterinario = new Veterinario("João", 101, 3000);
let recepcionista = new Recepcionista("Maria", 102, 1800);
let recepcionista2 = new Recepcionista("Pedro", 103, 1800);