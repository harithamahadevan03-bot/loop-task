
    // for(count=1;count<6;count++){
    //     console.log(count);
    //     console.log("haritha");
    // }
    console.log("FOR LOOP")
    //print numbers from 1 to 10
     console.log("\n1. Number from 1 to 10: ");
    for(j=1;j<=10;j++){
       
        console.log(j);
    }
     //print numbers from 10 to 1
    console.log("\n2. Number from 10 to 1: ");
    for(k=10;k>=1;k--){
        console.log( k);
    }
    //print even numbers from 1 to 20
    console.log("\n3. Even numbers from 1 to 20: ");
    for (j=2;j<=20;j+=2){
        console.log( j);
    }
    //print odd numbers from 1 to 20
    console.log("\n4. Odd numbers from 1 to 20: ");
    for (k=1;k<=20;k+=2){
        console.log(k);
    }
    //print sum of numbers from 1 to 10
    var sum=0;
    console.log("\n5. Sum of numbers from 1 to 10: ");
    for(i=1;i<=10;i++){
        sum=sum+i;
        
        
    }
    console.log(sum);
    //print product of numbers from 1 to 10
    var m=1;
    console.log("\n6. Product of numbers from 1 to 10: ");
    for(i=1;i<=10;i++){
        m*=i;
        console.log(m);
    }
    
    //print multiplication table of 5
    console.log("\n7. Multiplication table of 5: ");
    for (i = 1; i <= 10; i++) {
       console.log(i*5)
    } 
    //Multiplication table Using var
    var m=50;
     console.log("\n8. Multiplication table of 5 using var: ");
    for (i = 1; i <= 10; i++) {
       console.log(i*5)
    } 
    //count the number Between 1 to 50
    let n=0;
    for(i=1;i<=50;i++){
        n=n+1;
        
    }
    console.log("\n9. Count of numbers between 1 to 50: "+n);

    //Print all numbers divisible by 3 between 1 and 30
    console.log("\n10. Numbers divisible by 3 between 1 and 30: ");
    for(i=1;i<=30;i++){
        if(i%3==0){
            console.log(i);
        }
    }