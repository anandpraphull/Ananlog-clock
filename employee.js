// const data = {
//   employees: [
//     {
//       name: "John Smith",
//       email: "john.smith@company.com",
//     },
//     {
//       name: "Sarah Johnson",
//       email: "sarah.johnson@company.com",
//     },
//     {
//       name: "Michael Chen",
//       email: "michael.chen@company.com",
//     },
//   ],
// };

// function employeedata() {
//   // const response = await fetch("employee.json");
//   // const data = await response.json();
//   // console.log("data", data);

//   const empContainer = document.getElementById("employeeList");

//   data.employees.forEach((emp) => {
//     const empDiv = document.createElement("div");
//     empDiv.innerHTML = `<p>${emp.name} </p>  <p>${emp.email}</p>
//     <button onclick="viewProfile('${emp.name}')">View Profile</button><hr/>
//     `;
//     empContainer.appendChild(empDiv);
//   });
// }
// employeedata();
// function viewProfile(name) {
//   // alert("Viewing profile for " + name);
//   window.location.href = "https://www.youtube.com";
// }
// async function empData() {
//   const empdata = await employeedata();
//   console.log("empdata", empdata);

//   const empContainer = document.getElementById("employeeList");
//   empdata.forEach((emp) => {
//     const empDiv = document.createElement("div");
//     empDiv.className = "employee";
//     empDiv.innerHTML = `<p>${emp.name} - ${emp.email}</p>`;
//     empContainer.appendChild(empDiv);
//   });
// }
// empData();
