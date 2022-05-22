
function Student(name ,course, unit, img1 , batch){
    this.name = name;
    this.course = course;
    this.unit = unit;
    this.img1 = img1;
    this.batch = batch;
    
}
 var arr = JSON.parse(localStorage.getItem("student")) || [];
// var arr1 = JSON.parse(localStorage.getItem("student1")) || [];
// var arr2 = JSON.parse(localStorage.getItem("student2")) || [];

// let batch1 = arr1.length;
// let batch2 = arr2.length;
// console.log("ba",batch1)
// document.querySelector("#counter1").innerText = `Batch01 : ${batch1}`;
// document.querySelector("#counter2").innerText = `Batch02 : ${batch2}`;
// console.log("bs",batch2)
function form1(e){
      e.preventDefault();
      let form = document.getElementById("masai");
      let name = form.name.value;
      let course = form.course.value;
      let unit = form.unit.value;
      let img1 = form.img1.value;
      let batch = form.batch.value;
      
       let p = new Student(name, course,unit, img1,batch);
        
       arr.push(p);
       localStorage.setItem("student", JSON.stringify(arr));
       window.location.reload();
       
       //console.log(arr)
    //    if(batch == "batch01"){
    //     arr1.push(p);
    //          localStorage.setItem("student1", JSON.stringify(arr1));
    //          window.location.reload();
    //    }
    //    else if(batch == "batch02"){
    //     arr2.push(p)
      
    //     localStorage.setItem("student2", JSON.stringify(arr2));
    //     window.location.reload();
    //    }

      
       
}



function dash(){
    window.location.href = "index.html"
}

function calculate(){
    var arr = JSON.parse(localStorage.getItem("student"))|| [];
    var arr2 = [];
    var obj = {};

    for(var i=0;i<arr.length;i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch] = 0;
        }

    }

     for(var i=0;i<arr.length;i++){
          obj[arr[i].batch]++;
     }  

    // console.log(obj);
      //arr2.push(obj);
    // console.log(arr2)
    const value = Object.values(obj);
   
    const key = Object.keys(obj)
     arr2.push([key,value])
     const arr3 = new Map([[key,value]]);

     let text = "";
     arr3.forEach (function(value,key) {
   
      
          text += key.join(" ")+"="+value.join(" ")

     });
     
      
       

  
     
      document.getElementById("counter").innerHTML = text;

    
     //  console.log(arr2)
    //console.log(key)

  //  console.log(value)  
      // let text = "";
      // let text2 = "";
      // arr2.forEach (function(key,value) {
      //   var div = document.createElement("div");

      //   var p1 = document.createElement("p");
      //   p1.innerHTML = key;

      //   div.append(p1);

      //   document.querySelector("#counter").append(div);
      
      // })
      // console.log(text)
  //  document.getElementById("counter").innerHTML = text;
    //document.getElementById("counter").innerHTML = text2;
     
}

calculate()

