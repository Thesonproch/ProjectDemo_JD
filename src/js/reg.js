let ipt = document.querySelectorAll('input')
console.log(ipt)
let btn = ipt[2]
let url = handlerReg
console.log(url)
btn.onclick = () => {
    let userName = ipt[0].value;
    let password = ipt[1].value;
    console.log(userName)
    console.log(password)
    let params = {
        userName,
        password
    }
    console.log('ok')
    console.log(params)
    // $.ajax({
    //     url:url,
    //     type:"post",
    //     data:{params},
    //     success:function(res) {
    //         console.log(res)
    //     }
    // })
    axios.get('http://localhost:1337/api/v1/auth/reg').then((resolve) => {
        console.log(resolve)
    })
}
