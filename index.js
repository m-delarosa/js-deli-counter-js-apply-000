function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
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