// function scope

let subject = 'createvideo'
function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))