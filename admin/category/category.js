

const posts = document.querySelector('#posts');
const response = fetch('http://localhost:3000/category').then(response => response.json()).then(data => {
  const result = data.map(cate => {
    return `
  <tr>
    <td>${cate.id}</td>
    <td>${cate.name}</td>
    <td><img src="${cate.image}" width="50" alt=""></td>
    <td><a class="btn btn-info" href="category-detail.html?id=${cate.id}">Sửa</a></td>
    <td><button name="del" id="del" class="btn btn-danger" onclick="del('${cate.id}')">Xóa</button></td>
</tr>`


  }).join("");
  posts.innerHTML = result
});
function del(data){
  console.log(data);

  axios.delete('http://localhost:3000/products/'+ data) //????
          
}