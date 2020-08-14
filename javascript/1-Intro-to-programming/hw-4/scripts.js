// Your JS code is here
    var celsius = Math.random();
    var farenheit = celsius*9/5+32;
    var farenheit = farenheit.toFixed(1) +" \u00B0F"
    var temprature ="It is "+farenheit +" today. That's "+celsius.toFixed(1)+" \u00B0C";
    console.log(temprature)

    var farenheit = Math.random();
    var celsius = (farenheit-32)*5/9;
    var celsius = celsius.toFixed(1) +" \u00B0C";
    var temprature ="It is "+celsius +" today. That's "+farenheit.toFixed(1)+" \u00B0F";
    console.log(temprature)