function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  if (first === ""){
    return "The line is currently empty."
  }
  katzDeliLine.shift();
  return "Currently serving " + first;

}
