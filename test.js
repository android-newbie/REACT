// import { log } from "console"
let numberAllowed=true
let charAllowed=false
let length=8

let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (numberAllowed) str += "0123456789"
if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length +1 )
  console.log(char);
  pass += str.charAt(char)
  
}