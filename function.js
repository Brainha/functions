let techs = ["html", "css", "js"]
console.log(techs.push("nodejs"))
techs.unshift("sql")
techs.pop()
techs.shift()
//console.log(techs.slice(1, 3))
//techs.splice(1, 3)
let index = techs.indexOf('css')
techs.splice(2)


console.log(techs)