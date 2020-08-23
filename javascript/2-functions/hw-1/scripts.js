// Your JS code is here

function myLife(num, name, location, job) {
  return (
    'you will be ' + job + ' in ' + location + ' and married to ' + name + ' with ' + num + ' kids.'
  );
};
var planA = myLife(3,'Jane','California','web developer');
var planB = myLife(6,'simon','brox','dnv');
var planC = myLife(2,'young','seul','sony');
var planD = myLife(1,'aigerim', 'bishkek', 'bar');

console.log(planA, planB, planC, planD)
