//Part 1

for(i=1; i<=100; i++){
 if(i%3===0 && i%5===0){
        console.log("Fizz Buzz")
    }else if(i%3===0){
    console.log("Fizz")
    }else if(i%5===0){
        console.log("Buzz")
}else{
    console.log(i)
}
}
console.log("END")

//Part 2: Prime Time
for (i = 2; i <= 20; i++) {
    if(i === 3 || i === 2) {
      console.log(`${i} is a prime number`);
    }else if(i % 2 !== 0 && i % 3 !== 0 && i % i === 0 && i % 1 === 0)  {
      console.log(`${i} is a prime number`);
    }
  }

