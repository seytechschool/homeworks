// Your JS code is here
// # JavaScript Homeworks from Class 5

// ### Create these functions

    // Create a function which returns number of even numbers from a given array of numbers
    var arrayList1 = [1,7,8,2,3,9,11,12];

    function evenNumbersInArray(arr_par){
        var newArray = [];
        for (var i=0;i<arr_par.length;i++){
            if(arr_par[i] % 2 === 0){
                newArray.push(arr_par[i]);
            }
        }
        return newArray;
    }

    console.log(evenNumbersInArray(arrayList1));
    // Create a function to find how many even numbers between given 2 numbers
    function evenNumsInBetween(num1,num2){
        var counter = 0;
        for(var i=num1;i<num2;i++){
            if (i % 2 === 0){
                counter++;
            }
        }
        return counter;
    }

    console.log('There are ' + evenNumsInBetween(3,15) + ' even numbers in between');
    // Create a function to find the highest value in an array
    var arrayList2 = [33,4,56,17,2,90,19,1];

    function highestValueInArray(arr_par){
        var highestVal = arr_par[0];
        for(var i=1;i<arr_par.length;i++){
            if(highestVal < arr_par[i]){
                highestVal = arr_par[i]
            }
        }
        return highestVal;
    }

    console.log(highestValueInArray(arrayList2));
    // Create a function to find the lowest value in an array
    var arrayList3 = [33,4,56,17,2,90,19,1];

    function lowestValueInArray(arr_par){
        var lowestVal = arr_par[0];
        for(var i=1;i<arr_par.length;i++){
            if(lowestVal > arr_par[i]){
                lowestVal = arr_par[i]
            }
        }
        return lowestVal;
    }

    console.log(lowestValueInArray(arrayList3));

    // Create a function to calculate sum all numbers from a given array

    var arrayList4 = [33,4,56,17,2,90,19,1];

    function sumOfNumbersInArray(arr_par){
        var total = 0;
        for (var i=0; i<arr_par.length;i++){
            total = total + arr_par[i];
        }
        return total;
    }

    console.log(sumOfNumbersInArray(arrayList4));
    // Create a function to calculate power of a number power(2, 3)
    function getPowerOfNum(num1, num2){
        return num1**num2;
    }

    console.log(getPowerOfNum(2,3));

    // Create a function to check if all values in an array are same types

    var arrayList5 = [33,4,56,17,2,90,19,1];
    // var arrayList5 = [33,4,null,17,{},90,19,'hi',undefined];
    // var arrayList5 = [33,4,17,90,19,undefined];


    function isArrayValuesSameType(arr_par){
        var firstArrItem = arr_par[0];
        for(var i=1;i<arr_par.length;i++){
            if(typeof firstArrItem !== typeof arr_par[i]){
                return false;
            }
        }
        return true
    }

    console.log(isArrayValuesSameType(arrayList5))
    // Create a function to get the greatest common divisor (gcd) of two integers gcd(12, 8) // 4
    
    function greatCommonDivisor(num1,num2){
        var min = num1;
        if(num1 > num2){
            min = num2;
        }
        for(var i = min; i>0; i--){
            if(num1 % i == 0 && num2 % i == 0){
                return i
            }
        }
    }

    console.log(greatCommonDivisor(60,24))
// #### If you stuck please reach out to mentors/instructors
