// 10 Number Variable 

var myAge = 21;
var myPhoneNum = 82725989134;
var keyboardPrice = 2650;
var height = 5.9;
var scaleSize = 12;
var totalBottle = 8;
var totalBooks = 20;
var totalKeyboardButton = 104;
var totalTissue = 100;
var tableSize = 6;


// 10 String Variable

var myName = 'Mohammad Shahadad Hossain'
var myHeight = '5 fit 9 inch'
var gotHigestMark = 'False'
var laptopProcessor = "AMD"
var casingBrand = 'NZXT'
var myAddress = 'Chittagong'
var collegeName = "Gachhbaria gov't college"
var favouriteSubject = "Physics"
var recentlyReadBook = 'Atomic habit bangla version'
var phoneBrand = 'Xioami'

// 10 Boolean Variable 

var isFoodReady = true;
var gotResult = false;
var toadyWorkComplete = false;
var isLaptopWorking = true;
var getJob = false;
var isCollegeOpen = false;
var preparingForAdmission = true;
var haveLinkedIn = false;
var completeWebCourse = false;
var is_Your_Age21 = true;

// 5 Addition math

var milkPrice = 65;
milkPrice = milkPrice - 10;
milkPrice += 20;
milkPrice--;
console.log(milkPrice)

var iceCreamPrice = 140;
var soapPrice = 39;
var biryaniMasallaPrice = 50;
var honeyPrice = 250;

// Num 1 way addition
var sum = iceCreamPrice + soapPrice + biryaniMasallaPrice + honeyPrice
console.log(sum)

// Num 2 way addition 
console.log(iceCreamPrice + soapPrice + biryaniMasallaPrice + honeyPrice)

// Subtraction 
var myMoney = 500;
var subtraction = myMoney - sum;
console.log(subtraction)


var myBudget = 500;
var milkPrice = 74;
var milkQuantity = 4;

// Multiplication 
var milkPriceMultiplication = milkPrice * milkQuantity;
var priceInFloat = parseFloat(milkPriceMultiplication)
console.log(priceInFloat)

// Dividing
var totalMilkInLitter = myBudget / milkPrice;

// Integer 
// var priceInt = parseInt(totalMilkInLitter)
var priceInt = parseInt(totalMilkInLitter)
console.log(priceInt)


var firstName = 'Mohammad'
var secondName = 'Shahadad'
var fullName = firstName + ' ' + secondName;
console.log(fullName)

//--------- Parse Float ------------

var singaraPrice = '5.5';
var chaPrice = '8.3';
var totalPrice = singaraPrice + chaPrice;
console.log(totalPrice)

var newPrice = parseInt(totalPrice);
console.log(newPrice)

var newPrice2 = parseFloat(totalPrice)
console.log(newPrice2)


var singaraPrice = '5.5';
var chaPrice = '8.3';
var newSingaraPrice = parseInt(singaraPrice)
var newChaPrice = parseInt(chaPrice)
var totalPrice = newSingaraPrice + newChaPrice;
console.log(totalPrice)

var singaraPrice = '5.5';
var chaPrice = '8.3';
var newSingaraPrice = parseFloat(singaraPrice)
var newChaPrice = parseFloat(chaPrice)
var totalPrice = newSingaraPrice + newChaPrice;
console.log(totalPrice)
console.log(typeof totalPrice)

// Float Fixed 

var first = 0.1;
var second = 0.2;
var total = first + second;
total = total.toFixed(2)
total = parseFloat(total)
console.log(total)