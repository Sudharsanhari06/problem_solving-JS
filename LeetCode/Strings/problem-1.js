
// problem Link: https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
        let str=address;
    let ans="";
  for(let i=0;i<=str.length-1;i++){
      if(str[i]=='.'){
          ans+=`[${str[i]}]`
      }else{
          ans+=str[i];
      }
  }
      return ans
};