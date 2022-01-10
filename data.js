
let i=0;
let correctCount=0;
// data(i);
response(0);

fetch('data.json')

   .then(response => response.json())
   .then(data => {
       console.log(data);
       document.getElementById("question").innerHTML= data[i].q
       document.getElementById("opt1").innerHTML = data[i].opt1
       document.getElementById("opt2").innerHTML = data[i].opt2
       document.getElementById("opt3").innerHTML = data[i].opt3

       
      
   });

  


 
     function checkAnswer() {
         
      if( document.getElementById("optt1").checked && data[i].opt1 ==data[i].answer){
       correctCount++;
    }
    if( document.getElementById("optt2").checked && data[i].opt2 ==data[i].answer){
        correctCount++;
     }
     if( document.getElementById("optt3").checked && data[i].opt3 ==data[i].answer){
        correctCount++;

     }
     i++;
     data(i);



    }
   
    
     
   
