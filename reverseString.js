function reverseString(string){
   let result="";
   let reverse=[];
for(let i=string.length -1; i>=0; i--){
 reverse.push(string[i]);
}
result=reverse.join("");
return result;
}
module.exports =reverseString;
