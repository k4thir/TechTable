console.log("sdc")
const webdev = () => {
	fetch('json/sample.json')
  .then((res) => res.json())
  .then((data) => {
   let output = "<h2>USERS</h2>"


   let newArray = data.filter(function (x) {
    return x.title == "web designer";
});
   
   
   
   newArray.forEach(function(data){
   output += `<ul>
   <li>ID : ${data.company}</li>
   <li>TITLE : ${data.title}</li>
   <li>BODY : ${data.salary}</li>
   </ul>`;
   })
   document.getElementById("webdesigner").innerHTML = output;
  })
  .catch(() => console.log("error"));
}