//alert("hello world")

var voterData = [];

// VOTE INCREMENT BUTTON HERE ------>

var voteIncrement = (index) => {

  voterData[index].vote = voterData[index].vote + 1
  console.log(voterData[index].vote)
  console.log(voterData, index)

  var showrenderVoting = document.querySelector('#renderVoting');

  showrenderVoting.innerHTML = voterData.map((element, index) => {
    return (

      `<div class="d-flex justify-content-around  bg-dark m-2 rounded">

<span  ><button  class="btn btn-outline-danger m-2"  >${index}</button></span>
<button  class="btn btn-outline-info m-1" onclick="voteIncrement(${index})" >Vote : ${element.vote}</button>
<h1   class="text-light"  key= ${index} >${element.name} </h1>
<button onclick="deleteVoterName(${index})" class="btn btn-outline-danger m-1 ">Delete</button>
</div>`
    )

  })
}
// EDIT BUTTON HERE-------> 





/*
var editButton=(index)=>{

  editNewVote = prompt("enter Your change Voter Name",voterData[index].name)
  voterData[index].name =   voterData.push([editNewVote])
  
   console.log(  voterData[index].name)  
   
//   voterName.value =   voterData[index].name 
  //voterName.value = voterName.value
      
   
} 
*/



// DISPLAY ADD BUTTON MAIN FUNCTION HERE ------->





function getSubmit() {
  var voterName = document.querySelector('#voterName')

  var personData = {
    name: voterName.value,
    vote: 0
  }
  

  voterData.push(personData)
  var showrenderVoting = document.querySelector('#renderVoting');

  showrenderVoting.innerHTML = voterData.map((element, index) => {
    return (

      `<div class="d-flex justify-content-around  bg-dark m-2 rounded">

<span  ><button  class="btn btn-outline-danger m-2"  >${ index}</button></span>
<button  class="btn btn-outline-info m-1" onclick="voteIncrement(${index})" >Vote : ${element.vote}</button>
<h1   class="text-light"  key= ${index} >${element.name} </h1> <button onclick="deleteVoterName(${index})" class="btn btn-outline-danger m-1 ">Delete</button>

${Swal.fire({
  title: "ADDED!",
  text: "You clicked the button!",
  icon: "success"
})};
</div>`

)

  })  


  //<button  class="btn btn-outline-light m-1" onclick="editButton(${index})" >Edit</button>
  voterName.value = "" 

 }
  





var deleteVoterName = (index) => {
  voterData.splice(index, 1)
 
  console.log(voterData)
  var showrenderVoting = document.querySelector('#renderVoting');

  showrenderVoting.innerHTML = voterData.map((element, index) => {
    return (

      `<div class="d-flex justify-content-around  bg-dark m-2 p-2 rounded">

            <span  ><button  class="btn btn-outline-danger m-2" onclick="voteIncrement(${index})" >${index}</button></span>
            <button  class="btn btn-outline-info m-1" onclick="voteIncrement(${index})" >Vote : ${element.vote}</button>
            <h1 class="text-light"     key= ${index} >${element.name} </h1>
            <button onclick="deleteVoterName(${index})" class="btn btn-outline-danger m-1 ">Delete</button>
</div>`
    )

  })

}


/*
if(voterName.value == voterData.name){
  for(i = 0; i < voterData.length; i++) {
    voterName.value == voterData.name
    alert("voter exist krta h")
    console.log(voterData)
    
  console.log("true chal rha h")
}
}else{
  alert("add krdo voter ko")
  console.log("else chal rha h")
}
  */
