let arr = [1,2,35,45,1456,77,74,1];


function base(arr){
    return arr[ Math.floor(arr.length / 2)];;
}

function sort(arr) {

    let arrR = [];
    let arrL = [];

//sort left and right
    for (let i = 0; i < arr.length;i++) {
        if (arr[i] < base(arr)) {
            arrL.push(arr[i])
        } else if (arr[i] > base(arr)) {
            arrR.push(arr[i])
        } 
    }

//base location put
    if (arrL.length < arrR.length) {
        arrL.push(base(arr))
    } else {
        arrR.push(base(arr));
    };
     
// sort arr 2 items

    if (arrL.lenght == 2 && arrL[0] > arrL[1] ) {
            arrL[2] = arrL[0];
            arrL.splice(0,1);
    }

    if (arrR.length == 2 && arrR[0] > arrR[1] ) {
            arrR[2] = arrR[0];
            arrR.splice(0,1);
    };

        if(arrL.length <= 2 && arrR.length <= 2) {
            return arr = arrL.concat(arrR);
        } ;
        
        if ( arrL.length > 2 && arrR.length <=2) {
             return sort(arrL).concat(arrR) ;
        };


        if( arrR.length > 2 && arrL.length <=2) {
            return arrL.concat(sort(arrR));
        }

        if (arrL.length > 2 && arrR.length > 2) {
            return sort(arrL).concat(sort(arrR));
        }
}
sort(arr);

console.log(sort(arr));
