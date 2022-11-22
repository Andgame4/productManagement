var array = ["Long"];
let sout;
function addNewProduct() {
  var product = document.getElementById("addNewProduct").value;
  array.push(product);
  displayProduct();
}
function displayProduct() {
  sout = "<table border='1' width='400' margin:'50px'>";
  sout = sout + "<tr>";
  sout = sout + "<th>" + "STT" + "</th>";
  sout = sout + "<th>" + "Name Product" + "</th>";
  sout = sout + "<th>" + "Action" + "</th>";
  sout = sout + "</tr>";
  for (i = 0; i <= array.length - 1; i++) {
    let count = i + 1;
    sout = sout + "<tr>";
    sout = sout + "<td>" + count + "</td>";
    sout =
      sout +
      "<td>" +
      array[i] +
      "</td>" +
      "<td>" +
      " <button onclick='editProduct(" +
      i +
      ")'>Edit</button>" +
      " <button onclick='deleteProduct(" +
      i +
      ")'>Delete</button>" +
      "</td>";
    sout = sout + "</tr>";
  }
  sout = sout + "</table>";
  document.getElementById("displayProduct").innerHTML = sout;
}

function editProduct(index) {
  document.getElementById("editProduct").value = array[index];
  document.getElementById("editProductId").value = index;
}

function changeNameProduct() {
  let index = document.getElementById("editProductId").value;
  let changeName = document.getElementById("editProduct").value;
  array[index] = changeName;
  displayProduct();
}
function deleteProduct(index) {
  array.splice(index, 1);
  displayProduct();
}
