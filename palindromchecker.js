function palindrome(str) {
  var nw = /[\W_]/g;
  var lowercasestr = str.toLowerCase().replace(nw, '');
  var reversestr = lowercasestr.split('').reverse().join(''); 
  return reversestr === lowercasestr;
}

palindrome("eye");
