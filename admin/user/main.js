

const posts = document.querySelector('#posts');
const response = fetch('http://localhost:3000/users').then(response => response.json()).then(data => {
  const result = data.map(post => {
    return `
  <tr>
    <td>${post.id}</td>
    <td>${post.email}</td>
    <td><a class="btn btn-info" href="user-detail.html?id=${post.id}">Sửa</a></td>
    <td><button name="del" id="del" class="btn btn-danger" onclick="del('${post.id}')">Xóa</button></td>
</tr>`


  }).join("");
  posts.innerHTML = result
});
function del(data){
  console.log(data);

  axios.delete('http://localhost:3000/posts/'+ data) //????
          
}