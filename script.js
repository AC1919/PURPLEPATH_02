let data;

const greeting = document.getElementById("greeting");
const categorySelect = document.getElementById("categorySelect");
const optionSelect = document.getElementById("optionSelect");
const responseContainer = document.getElementById("responseContainer");

fetch("purplepath_data_updated.json")
  .then(res => res.json())
  .then(json => {

    data = json;

    greeting.innerHTML = data.greeting;

    Object.keys(data.categories).forEach(category => {

      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;

      categorySelect.appendChild(option);

    });

  });

categorySelect.addEventListener("change", () => {

  optionSelect.innerHTML = `<option>Select Detail</option>`;

  responseContainer.innerHTML = "";

  const selectedCategory = categorySelect.value;

  if (!data.categories[selectedCategory]) return;

  const options = data.categories[selectedCategory].options;

  Object.keys(options).forEach(opt => {

    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;

    optionSelect.appendChild(option);

  });

});

optionSelect.addEventListener("change", () => {

  const selectedCategory = categorySelect.value;
  const selectedOption = optionSelect.value;

  const info =
    data.categories[selectedCategory].options[selectedOption];

  if (!info) return;

  let html = `
    <div class="response-card">
      ${info.response}
    </div>
  `;

  info.links.forEach(link => {

    html += `
      <a class="link-card"
         href="${link.url}"
         target="_blank">

         <b>${link.title}</b><br>
         <small>${link.description}</small>

      </a>
    `;

  });

  responseContainer.innerHTML = html;

});