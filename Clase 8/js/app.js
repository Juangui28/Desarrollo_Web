import { personas } from "./persona.js";
import { computersChoiceDisplay } from "./dom.js";

const sectionMain = document.createElement('section');
const parrafoPrincipal = document.createElement('p');
parrafoPrincipal.innerHTML = `${personas[0].firstName} ${personas[0].lastname}`;
sectionMain.classList.add("main");

document.body.appendChild(parrafoPrincipal);

const seccion = `
<section class = "main">
    <p>Dentro de otro seccion</p>
</section>
`;

sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);
