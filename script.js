// Danh sách sản phẩm
let listProduct = [
  ["1", "iPhone"],
  ["2", "Samsung"],
  ["3", "BlackBerry"],
];

/* LIST FUNCTION */

// 1. Xây dựng các hàm hiển  thị danh sách sản phẩm
function getListProduct() {
  let targetTable = document.getElementById("tableProduct");

  let data = `<tr>
    <td>ID</td>
    <td>PRODUCT NAME</td>
    <td>&nbsp;</td>
  </tr>`;

  for (let i = 0; i < listProduct.length; i++) {
    data += `<tr>
        <td>${listProduct[i][0]}</td>
        <td>${listProduct[i][1]}</td>
        <td>
        <button type="button" name="edit" onClick="editProduct(${listProduct[i][0]})">Edit</button>
        <button type="button" name="delete" onClick="deleteProduct(${listProduct[i][0]})">Delete</button>
        </td>
    </tr>`;

    targetTable.innerHTML = data;
  }
}

// 2. Thêm một sản phẩm vào danh sách
function addProduct() {}

// 3. Sửa tên sản phẩm
function editProduct() {}

// 4. Xóa sản phẩm
function deleteProduct() {}

/* INIT APPLICATION */
getListProduct();
