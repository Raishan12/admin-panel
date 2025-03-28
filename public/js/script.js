let div = document.getElementById("datalist")
async function getData(){
    let res = await fetch(".../user.json")
    let data = await res.json()

    let str = ""
    data.forEach(element => {
        str += `<p>UserName: ${element.username}</p>
        <p>UserName: ${element.password}</p>
        `
    });
    div.innerHTML=str
}