let arr = [1,2,37,45,1456,77,74,1];

for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
    let b = 0;
        if(arr[j] > arr[i]) {
            b = arr[i];
            arr[i] = arr[j];
            arr[j] = b;
        }
       
    }    
   
}
console.log(arr);
//bulbSort******************************************************
/*
let arr = [5,7,9,9,1,1,0,14,878,5,4];
let a = 0;
let b = 0;
for (let i = 0; i <= arr.length; i++) {
    b = i;
    for (let j = i; j <= arr.length; j++) {
        
        if(arr[i] > arr[j]) {
           arr.splice(j+1,0,arr[i]);
           arr.splice(i,1);
           
           i = j+1;
           a = 1;
        }
    } 
    if (a == 1) {
        i = b-1;
        a = 0;
    } else {
        i = b;
        a = 0;
    }   
}
console.log(arr);*/