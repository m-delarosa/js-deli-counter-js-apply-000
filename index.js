function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + x.splice(0,1) + ".";
  }
}

function currentLine (line) {
   if (line.length === 0) {
    return "The line is currently empty."
   }
   
   const numberName = []
   
   for (let i = 0; i < line.length; i++) {
     numberName.push(`${i+1}. ${line[i]}`)
   }
   
   return `The line is currently: ${numberName.join(', ')}`
   
}