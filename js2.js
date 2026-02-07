const arr = [];

for(let i=0;i<10;i++){
    let val = prompt("Enter " + i + "Number");
    arr.push(parseInt(val));

}

console.log(arr);

    let s = 0;

    function sum(ele,index){
        s = s + ele;
    }
    arr.forEach(sum);

    alert("sum is " + s);
