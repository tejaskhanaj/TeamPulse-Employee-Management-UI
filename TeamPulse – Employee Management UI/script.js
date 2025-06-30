let employees = [];

function renderTable() {
  const tbody = document
    .getElementById("employeeTable")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  employees.forEach((emp, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.position}</td>
          <td>${emp.email}</td>
          <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
    tbody.appendChild(row);
  });
}

function addEmployee() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;

  if (name && position && email) {
    employees.push({ name, position, email });
    renderTable();
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("email").value = "";
  } else {
    alert("Please fill all fields");
  }
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  renderTable();
}
