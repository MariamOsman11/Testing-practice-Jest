function stringLength(string){
if(string.length <1){
   throw new Error("The String Length is short");
}else if(string.length >10){
   throw new Error("The String Length is long");
}else{
   return string.length;
}

}
module.exports =stringLength;
