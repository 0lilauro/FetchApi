/*let url = "http://127.0.0.1:8001/data";
let requisition = {
    method: 'GET',
    mode:'cors',
}


fetch(url, requisition)
.then((response)=>{
    console.log(response)
    return response.json()
})
.then(data =>{ 
    console.log(data)
}) */
/*==============*/

let datav = {
    sexo: "masculino",
}

let url2 = "http://127.0.0.1:8001/send";
let requisition2 = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        sexo: "masculino"
    }),
}    

fetch(url2,requisition2)
.then(response => {
    console.log("============")
    console.log(response);
    console.log("============")
    return response.json()
})
.then(data => {
    console.log(data)
})
