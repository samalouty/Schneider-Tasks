let UserList = JSON.parse(localStorage.getItem("UserList")) || [
  { name: "ahmed", age: 10, email: "ahmed@example.com" },
];

function saveUserList() {
  localStorage.setItem("UserList", JSON.stringify(UserList));
}

const viewButt = document.getElementById("users");
viewButt.addEventListener("click", (e) => {
  const tabl = document.getElementById("tabl");
  tabl.style.display = tabl.style.display === "" ? "none" : "";

  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  UserList.forEach((user, i) => {
    let newBody = `<tr>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.email}</td>
    </tr>`;
    tableBody.innerHTML += newBody;
  });
});

const submitButt = document.getElementById("sub");
submitButt.addEventListener("click", (e) => {
  const name = document.getElementById("Name").value;
  const age = document.getElementById("Age").value;
  const email = document.getElementById("email").value;

  if (!name || !age || !email) {
    alert("Enter all the data plz bro");
    return;
  }

  UserList.push({ name: name, age: age, email: email });
  saveUserList();

  console.log(UserList);
  alert("Submitted");
});
