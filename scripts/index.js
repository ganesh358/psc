var arr = JSON.parse(localStorage.getItem("student")) ||[] ;

  
arr.map(function(el,index){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = el.name;

    var td2 = document.createElement("td");
    td2.innerText = el.course;

    var td3 = document.createElement("td");
    td3.innerText = el.unit;
     
    var td4 = document.createElement("td");
    
    var td44 = document.createElement("img");
    td44.src = el.img1;

    td4.append(td44);

    var td5 = document.createElement("td");
    td5.innerText = el.batch;

     var td6 = document.createElement("td");
     var  btn = document.createElement("button");
     btn.innerText = "Remove";
     btn.setAttribute("id","remove")
     btn.addEventListener("click",function (){
          Removebtn(el,index);
     })

     td6.append(btn);

    tr.append(td4,td1,td2,td3,td5,td6);

    document.querySelector("#body").append(tr);

    
});
 var trash = JSON.parse(localStorage.getItem("trash")) || [];

function Removebtn(el,index){

    arr.splice(index, 1);
    trash.push(el);
    localStorage.setItem("trash",JSON.stringify(trash));
    
    localStorage.setItem("student",JSON.stringify(arr));

    window.location.reload();
}



function dash2(){
    window.location.href = "home.html"
}