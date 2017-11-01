function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  if (first == "" || first == null){
    return "There is nobody waiting to be served!"
  }
  katzDeliLine.shift();
  return "Currently serving " + first + ".";

}
