// JSON describing the wizard
const wizard = {
  title: "User Registration Wizard",
  steps: [
    {
      name: "Basic Info",
      fields: [
        { label: "Full Name", type: "text", required: true },
        { label: "Email", type: "email", required: true },
      ],
    },
    {
      name: "Profile Details",
      fields: [
        { label: "Age", type: "number" },
        {
          label: "Role",
          type: "select",
          options: ["Developer", "Designer", "Other"],
        },
      ],
    },
    {
      name: "Confirmation",
      fields: [],
    },
  ],
};

let currentStep = 0;
const container = document.getElementById("wizard");

function renderStep() {
  const step = wizard.steps[currentStep];
  let html = `<h2>${step.name}</h2>`;

  step.fields.forEach((field) => {
    if (field.type === "select") {
      html += `<label>${field.label}</label><select>`;
      field.options.forEach((opt) => (html += `<option>${opt}</option>`));
      html += `</select><br/>`;
    } else {
      html += `<label>${field.label}</label><input type="${field.type}" ${
        field.required ? "required" : ""
      } /><br/>`;
    }
  });

  // Navigation Buttons
  html += `
    <div style="margin-top: 20px;">
      ${currentStep > 0 ? `<button onclick="prev()">Previous</button>` : ""}
      ${
        currentStep < wizard.steps.length - 1
          ? `<button onclick="next()">Next</button>`
          : `<button onclick="finish()">Finish</button>`
      }
    </div>
  `;

  container.innerHTML = html;
}

// Navigation handlers
function next() {
  currentStep++;
  renderStep();
}

function prev() {
  currentStep--;
  renderStep();
}

function finish() {
  container.innerHTML = "<h2>Done! Form submitted.</h2>";
}

// Initial render
renderStep();
