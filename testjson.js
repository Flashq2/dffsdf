//  fetch("task.json")
//  .then(response=>response.json)
//  .then(task=>{
//     task.forEach(element => {
//         console.log(element);
//     });
// })
fetch('task.json')
    .then((response) => response.json())
    .then(json =>{
      json.forEach(tast => {
        console.log(tast.name)
      });
    
     });