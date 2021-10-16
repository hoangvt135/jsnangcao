

const posts = document.querySelector('#posts');
const response = fetch('http://localhost:3000/products').then(response => response.json()).then(data => {
  const result = data.map(prod => {
    return `
  <tr>
    <td>${prod.id}</td>
    <td>${prod.name}</td>
    <td>${prod.price}</td>
    <td><img src="${prod.image}" width="50" alt=""></td>
    <td>${prod.category}</td>
    <td>${prod.description}</td>
    <td><a class="btn btn-info" href="product-detail.html?id=${prod.id}">Sửa</a></td>
    <td><button name="del" id="del" class="btn btn-danger" onclick="del('${prod.id}')">Xóa</button></td>
</tr>`


  }).join("");
  posts.innerHTML = result
});
function del(data){
  console.log(data);

  axios.delete('http://localhost:3000/products/'+ data) //????
          
}