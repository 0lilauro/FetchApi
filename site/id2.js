const url = 'http://127.0.0.1:8001/send';
// const data = {
//         email: "sam@corcos.io"
//     }

//     var data2 = new FormData();
//     data2.append("sexo", "masculino");



//   fetch('http://127.0.0.1:8001/send', {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: data2
//   }).then((res) => {
//     console.log("this is res", res)
//   }).catch((err) => {
//     console.log(err)
//   })



// var data = new FormData();
// data.append("sexo", "masculino\n");

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "http://127.0.0.1:8001/send");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("Access-Control-Allow-Origin"," http://127.0.0.1:8001/send");
// xhr.setRequestHeader("Postman-Token", "653048dd-c33d-45eb-96ac-1b5b66f8d82d");

// xhr.send(data);



// The data we are going to send in our request
// let data = {
//     name: 'Sara'
// }
// // The parameters we are gonna pass to the fetch function
// let fetchData = { 
//     method: 'POST', 
//     mode: "cors",
//     body: data,
//     headers: new Headers()
// }
// fetch(url, fetchData)
// .then((res) => {
//     console.log("this is res", res)
//   }).catch((err) => {
//     console.log(err)
//   })
//    headers: new Headers()
let parms= { 
    method: 'POST', 
    mode: "cors",
    body: JSON.stringify({
        sexo: "masculino"
    }),
    headers: new Headers()
}
// var data2 = new FormData();
//     data2.append("sexo", "masculino");
// fetch(url,parms)
// .then(response=> response.json())
// .then(data => {
//     console.log(data)
// })
// .catch( err =>  {
//     console.log(err)
// })


// var data = new FormData();
// data.append("sexo", "masculino\n");
// let d2=  JSON.stringify({sexo: "masculino"});
// let d3 =   {sexo: "masculino"};

// var options = { 
//     method: 'POST',
//     body: data,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept':'application/json; charset=utf-8',
// //         'Accept': "application/json",
// //         'cache-control': 'no-cache',
// //         'Content-Type': 'application/json',
//         // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//         // 'Content-Type': 'application/json',
//     },
//     // body: d3,
// };

//   fetch(url,options)
//   .then(response=> response.json())
//   .then(data => {
//       console.log("Ex 1 :")
//       console.log(data)
//     })
//     .catch( err =>  {
//         console.log("Ex 2 :")
//       console.log(err)
//   })




fetch("http://127.0.0.1/send",{
    method: 'POST',
    headers: new Headers({'Access-Control-Allow-Origin':'*'}),
    mode: "cors",
    body: JSON.stringify({ "ola ": "Mundo" })
}).then(response=> response.json())
.then(data => {
    console.log("Ex 1 :")
    console.log(data)
})
.catch( err =>  {
    console.log("Ex 2 :")
    console.log(err)
})

// fetch(
//     url,
//     {   method: 'POST',
//         mode: 'cors',
//         headers: new Headers(
//            {"Content-Type": "application/json",
//             "Accept":"application/json"}
//         ),
//         body: JSON.stringify(
//            {'name': 'Tom', 'password': 'Soyer'}
//         )
//      }
//    ).then( response => { console.log(response);})
//     .catch(err => console.log(err))