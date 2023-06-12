
// let button = document.getElementsByClassName('btn');

// button.addEventListener('click', primefinder);

function primefinder(){
    let num = parseInt(document.getElementById("prime-num").value);
    console.log(num);
    console.log(typeof num);
    let count=0;

    if(num<=0){
        document.getElementById("result").value = "Invalid input ";
    }
    else{
        for(let i=1; i<=num; i++){
            if(num % i == 0){
                count++;
            }
        }
        if(count==2){
            document.getElementById("result").value = "Prime number";
        }
        else{
            document.getElementById("result").value = "Not a Prime number";
    
        }    

    }
    
}
function transform(){
    let num = parseInt(document.getElementById("prime-num").value);
    if(num==5){
        document.getElementById('btn').style.transform="translateX(2)";
    }
}
