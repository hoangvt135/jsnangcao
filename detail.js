
var url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id');
const name = document.querySelector('#name').innerHTML;
const image = document.querySelector('#image').innerHTML;
const price = document.querySelector('#price').innerHTML;

var info = {};

axios.get('http://localhost:3000/products/' + id)
    .then(response => {
        info = response.data
        console.log(info);
        
        document.querySelector('#name').innerHTML = info.name
        document.querySelector('#price').innerHTML = info.price
        document.querySelector('#description').innerHTML = info.description



    });

    axios.get('http://localhost:3000/products/' + id)
    .then(response => document.querySelector('.imgpls').innerHTML = 

        `
        <div class="post-list-aside">
                                    <div class="post-single">
                                        <div class="post-slider-thumb post-img text-center">
                                            <ul class="slides">
                                                <li data-thumb="${response.data.image}">
                                                    <a href="javascript:;" title="Freshness Photo">
                                                        <img src="${response.data.image}" alt="" id="image" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
        `


    );
    const tar=document.querySelector('#target');
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
