
function Student(name ,course, unit, img1 , batch){
    this.name = name;
    this.course = course;
    this.unit = unit;
    this.img1 = img1;
    this.batch = batch;
    
}
 var arr = JSON.parse(localStorage.getItem("student")) || [];

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
       
       console.log(arr)
}



function dash(){
    window.location.href = "index.html"
}


function calculate(){
    var arr = JSON.parse(localStorage.getItem("student"))|| [];
    var arr2 = [];
    console.log(arr)
    
    var obj = {};

    for(var i=0;i<arr.length;i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch] = 0;
        }

    }

     for(var i=0;i<arr.length;i++){
          obj[arr[i].batch]++;
     }  

     let div1 = document.getElementById("count");

     for(key in obj){
         let p1 = document.createElement("div");
         p1.innerText = `${key} : ${obj[key]}`

         div1.append(p1);

     }
  
    


}


calculate()
