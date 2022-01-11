// // Ouvindo o evento através do addEventListener
// // A função vai ser executada  toda vez que utilizarmos o submit
// // event previne toda vez de reccaregar a página

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

//função  enviar
// Passando a função
function handleSubmit(event) {
    event.preventDefault();

    //  Pegando os valores do input getinput
    //Pegando os valores com numeros getinputnumber

    const gender = getSelectedValue("gender");
    const age = getInputNumberValue("age");
    const weight = getInputNumberValue("weight");
    const height = getInputNumberValue("height");
    const activityLevel = getSelectedValue("activity_level");
    // Operação para calcular o valor das calorias
    const tmb = Math.round(
        gender === "female" ?
        655 + 9.6 * weight + 1.8 * height - 4.7 * age :
        66 + 13.7 * weight + 5 * height - 6.8 * age
    );
    //
    const maintenance = Math.round(tmb * Number(activityLevel));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const layout = `
    <h2>Resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é :${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso: <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso  sua média diaria é: <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Ganhando peso média diária: <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
  `;

    // Retornandoo valor o resultado
    const result = document.getElementById("result");

    result.innerHTML = layout;
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}
