const target = document.querySelector('#target');
const response = fetch('http://localhost:3000/products').then(response => response.json()).then(data => {
    const result = data.map(prod => {
        return `
<div class="col-md-3">
    <div class="product-list">
        <div class="product-img">
        <a href="detail.html?id=${prod.id}">
            <img  src="${prod.image}" alt="" style="width: 250px;"   />
        </a>
        
        </div>
         <div class="product-title">
        <h5><a  href="detail.html?id=${prod.id}">${prod.name}</a></h5>
         </div>
         <div class="product-price">
          ${prod.price}$
         </div>
   
         <div class="product-btn">
        <a href="#" class="btn btn-extra-small btn-dark-border  "><i
                class="fa fa-shopping-cart"></i> Add to cart</a>
         </div>
    </div>
</div>
`


    }).join("");
    target.innerHTML = result
});

const tar=document.querySelector('#menu');
const u = window.localStorage.getItem('user');
console.log(u);
const obj = JSON.parse(u);
console.log(obj);

function check(){
    if(obj==null){
        tar.innerHTML= `<li><a href="index.html">Home</a>
        </li>
        <li >
            <a href="signin.html">Đăng Nhập</a>
        </li>
        <li >
            <a href="signup.html">Đăng Ký</a>
        </li>`
    }
    if(obj!=null){
        tar.innerHTML=`
        <li><a href="index.html">Home</a>
                            </li>
                            <li >
                                <a href="./admin/index.html">Quản Lý</a>
                            </li>
                            <li >
                                <a href="" onclick="logout()" >Đăng Xuất</a>
                            </li>
        `
    }
}
check();
function logout(){
    window.localStorage.removeItem('user');
    window.location.href='index.html';
}