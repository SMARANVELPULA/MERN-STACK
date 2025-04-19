//1. numbers and currency formatting
function formatCurrency(amount, currencyCode) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    }).format(amount);
  }
  
  console.log(formatCurrency(1234567.89, 'INR')); 
  console.log(formatCurrency(1234567.89, 'USD')); 
  

  //2 . string 
  function findLongestPalindrome(str) {
    if (!str) return "";
  
    let start = 0, maxLength = 1;
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        if (right - left + 1 > maxLength) {
          start = left;
          maxLength = right - left + 1;
        }
        left--;
        right++;
      }
    }
  
    for (let i = 0; i < str.length; i++) {
      expandAroundCenter(i, i);     // Odd-length
      expandAroundCenter(i, i + 1); // Even-length
    }
  
    return str.substring(start, start + maxLength);
  }
  
  // Example:
  console.log(findLongestPalindrome("RACECAR")); 


//   4. variables

// Global Scope
var globalVar = "I'm global";

function testLocalScope() {
 
  var localVar = "I'm local";
  console.log(globalVar); 
  console.log(localVar);  
}

{
  
  let blockVar = "I'm block-scoped";
  const anotherBlockVar = "Another one";
  console.log(blockVar);
}


let x = 10;

function shadowExample() {
  let x = 5; 
  console.log(x); 
}
shadowExample();
console.log(x); 


// 5. boolean and if else statement

function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) {
      return "Eligible to drive";
    }
  
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }
  
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
      return "Access granted";
    }
  
    if (!obj.isBanned && obj.loginAttempts < 3) {
      return "Allowed to login";
    }
  
    if (obj.score >= 90 && obj.grade === "A" && !obj.isDisqualified) {
      return "Excellent performance";
    }
  
    if ((obj.device === "mobile" || obj.device === "tablet") && obj.connection === "wifi") {
      return "Optimal device and connection";
    }
  
    return "Conditions not met";
  }
  
  console.log(evaluateConditions({
    age: 36,
    hasLicense: true,
    temperature: 28,
    humidity: 65,
    role: "editor",
    isActive: true,
    isBanned: false,
    loginAttempts: 1,
    score: 91,
    grade: "A",
    isDisqualified: false,
    device: "mobile",
    connection: "wifi"
  }));
  
 
  // 6. functions :
  function createCalculator(a,b){
    return{
      add : function add(a ,b){
        return a + b;
      },
      sub : function sub(a ,b){
          return a - b;
        },
      mul : function mul(a ,b){
            return a * b;
        },
      div : function div(a ,b){
              return a / b;
        },
      };
    }
    const cal = createCalculator();
    console.log(cal.add(5, 3)); 
    console.log(cal.sub(5, 3)); 
    console.log(cal.mul(5, 3)); 
    console.log(cal.div(5, 3)); 
  
  
 