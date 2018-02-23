module.exports = function solveEquation(equation) {
  strinn=equation.toLowerCase();
  str="";
  var a,b,c,D,x1,x2;
  for (i=0; i<strinn.length; i++){
    if (strinn[i]==' ') continue;
    str=str+strinn[i];                          //  remove all spaces
  }
  a=Number( str.split('*x^2')[0]);
  str=str.split('*x^2')[1];  
  b=Number( str.split('*x')[0]);
  str=str.split('*x')[1];
  c=Number( str );
  D=Math.sqrt(b*b-4*a*c);
  x1=((-b+D)/(2*a));  
  x2=((-b-D)/(2*a)); 
  x1.toFixed();
  x2.toFixed();
  if (x1<x2)   return [Math.round(x1),Math.round(x2)];
  return [Math.round(x2),Math.round(x1)]
  
  
  // your implementation
}
/*
equation="485 * x^2 + 1080338955 * x + 514155874862470";
strinn=equation.toLowerCase();
  str="";
  var a,b,c,D,x1,x2;
  for (i=0; i<strinn.length; i++){
    if (strinn[i]==' ') continue;
    str=str+strinn[i];                          //  remove all spaces
  }
  a=Number( str.split('*x^2')[0]);
  str=str.split('*x^2')[1];  
  b=Number( str.split('*x')[0]);
  str=str.split('*x')[1];
  c=Number( str );
  D=Math.sqrt(b*b-4*a*c);
  x1=((-b+D)/(2*a));  
  x2=((-b-D)/(2*a)); 
  Math.round(x1);
  Math.round(x2)
    //if (x1<x2)   return [Math.round(x1),x2];
  //return [x2,Math.round(x1)]


    console.log(Math.round(x1));
    console.log(x2);

    */