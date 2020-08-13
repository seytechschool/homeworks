// Your JS code is here
FIRST PART
var a=['ak','kok','tok kok','tok tok kok','jashil toje']
var x=1
for (var i of a ){ // create loop that iterates over array elements
  console.log('my #',x,' choice is ',i)
  x+=1
}

BONUS PART

var a=['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z']
var x=1
for (var i of a ){
  if(x<20){              // check if var x is smaller than 20, if true, jump into conditionals for printing 1st, 2nd, 3rd until 20th elemnt of array
    if(x==1){
      console.log('my',x,'st',' choice is ',i)
    }
    else if (x==2){
      console.log('my',x,'nd',' choice is ',i)
    }
     else if (x==3){
      console.log('my',x,'rd',' choice is ',i)
     }
     else{
      console.log('my',x,'th',' choice is ',i)
    }
    }
    else{             //if x is greater than 20, check last digits of integers to include st, nd, rd then keep regular counting       
    if(1==(x.toString().split('').slice(-1))){
          console.log('my',x,'st',' choice is ',i)}
    else if (2==(x.toString().split('').slice(-1))){
      console.log('my',x,'nd',' choice is ',i)
    }
     else if (3==(x.toString().split('').slice(-1))){
      console.log('my',x,'rd',' choice is ',i)

     }
     else{
      console.log('my',x,'th',' choice is ',i)
    }
    }
    x=x+1
}

my 1 st  choice is  a
my 2 nd  choice is  b
my 3 rd  choice is  c
my 4 th  choice is  d
my 5 th  choice is  e
my 6 th  choice is  f
my 7 th  choice is  g
my 8 th  choice is  h
my 9 th  choice is  i
my 10 th  choice is  k
my 11 th  choice is  l
my 12 th  choice is  m
my 13 th  choice is  n
my 14 th  choice is  o
my 15 th  choice is  p
my 16 th  choice is  r
my 17 th  choice is  s
my 18 th  choice is  t
my 19 th  choice is  u
my 20 th  choice is  v
my 21 st  choice is  w
my 22 nd  choice is  x
my 23 rd  choice is  y
my 24 th  choice is  z

