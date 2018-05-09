function anagram(str){
//var result=[]
if(!str){
   // return result
   return []
}
//result.push(str);
//return result
if(str.length===1){
  return [str]
}
if(str.length===2)
{
  return [str[0]+str[1],str[1]+str[0]]
}
var result=[]

result.push()
return result

}
module.exports=anagram
