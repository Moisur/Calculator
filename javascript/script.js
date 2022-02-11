function calculator(newvalue){
  document.getElementById("textresult").value += newvalue;
}
function deletresult(){
  document.getElementById("textresult").value = "";
}
function totalresultfuncsion(){
  var a = eval(document.getElementById("textresult").value);
  document.getElementById("textresult").value = a;
}
