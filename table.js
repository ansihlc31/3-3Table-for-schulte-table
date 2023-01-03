var numbers = [];
for(x=0;x<9;x++){
  
  let nums=Math.floor(Math.random() * 9)+1;
  
  if(numbers.includes(nums)){
    nums=Math.floor(Math.random() * 9)+1;
    x--;
    
  }else{
    var maintable=document.createElement('button')
    maintable.className = "maintable3";
        document.getElementById('mainpart').appendChild(maintable);
    maintable.innerHTML=nums;
    numbers.push(nums)
}

}