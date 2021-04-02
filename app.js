//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 17 to 20.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

//Q no 1
var arr1 = [
    [],
    []
]


//Q no 2
var arr2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
for (var i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].join(" ")
    document.write(arr2[i] + "<br>")
}


//Q no 3
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<br> <br> <br>")
for (i = 0; i < arr3.length; i++) {
    document.write(arr3[i] + "<br>")
}


//Q no 4
var tableNum = +prompt("Enter a number to show its multiplication table")
var tableLength = +prompt("Enter length of multiplication table")
document.write("<br> <br> <br>")
document.write("Multiplication table of " + tableNum)
document.write("<br> length is " + tableLength + "<br> <br>")
for (i = 1; i <= tableLength; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>")
}


//Q 5
var fruits = ["apple", "banana", "mango", "orange", "strawbery"]
document.write("<br> <br> <br>")
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}


//Q no 6
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
document.write("<br> <br> <br>")
document.write("<b> Counting: </b> <br> <br> " + num.slice(0, 15))
document.write("<br> <br> <b> Reverse counting: </b> <br> <br>" + num.slice(0, 10).reverse())
document.write("<br> <br> <b> Even: </b> <br> <br>")
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        document.write(num[i] + ",")
    }
}
document.write("<br> <br> <b> Odd: </b> <br> <br>")
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
        document.write(num[i] + ",")
    }
}
document.write("<br> <br> <b> Series: </b> <br> <br>")
for (i = 0; i < num.length; i += 2) {
    document.write(num[i] + "k,")
}


//Q no 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?")
var matchFound = false
for (i = 0; i < A.length; i++) {
    if (search === A[i]) {
        matchFound = true
        alert(search + " is available at index " + i + " in our bakery")
        break
    }
}
if (matchFound === false) {
    alert("We are sorry. " + search + " is not available in our bakery")
}


//Q no 8
A = [24, 53, 78, 91, 12]
document.write("<br> <br> <br>")
document.write("Array items: " + A)
for (i = 0; i < A.length; i++) {
    var found = 0
    for (j = 0; j < A.length; j++) {
        if (A[i] > A[j]) {
            found += 1
        }
        if (found === A.length - 1) {
            document.write("<br> The largest number is " + A[i])
            break
        }
    }
}


//Q no 9
A = [24, 53, 78, 91, 12]
document.write("<br> <br> <br>")
document.write("Array items: " + A)
for (i = 0; i < A.length; i++) {
    var found = 0
    for (j = 0; j < A.length; j++) {
        if (A[i] < A[j]) {
            found += 1
        }
        if (found === A.length - 1) {
            document.write("<br> The smallest number is " + A[i])
            break
        }
    }
}


//Q no 10
document.write("<br> <br> <br>")
for (i = 5; i <= 100; i += 5) {
    document.write(i + ", ")
}




//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 21 to 25.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//Q no 1
var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
fullName = firstName + " " + lastName
alert("Welcome " + fullName)


//Q no 2
var favPhone = prompt("Enter your favorite mobile phone")
document.write("My favorite phone is: " + favPhone)
document.write("<br> String length is: " + favPhone.length)


//Q no 3
var word = "Pakistani"
document.write("<br> <br> <br>")
document.write("String: " + word)
document.write("<br> Index of 'n': " + word.indexOf("n"))


//Q no 4 
var word1 = "Hello World"
document.write("<br> <br> <br>")
document.write("String: " + word1)
document.write("<br> Last index of 'l': " + word1.lastIndexOf("l"))


//Q no 5
var word2 = "Pakistani"
document.write("<br> <br> <br>")
document.write("String: " + word2)
document.write("<br> Character at index 3: " + word2.charAt(3))


//Q no 6
alert("Welcome " + firstName.concat(" " + lastName))


//Q no 7
var city = "Hyderabad"
var afterReplacement = city.slice(0, city.indexOf("Hyder")) + "Islam" + city.slice(city.indexOf("Hyder") + 5)
document.write("<br> <br> <br>")
document.write("City: " + city)
document.write("<br> After Replacement: " + afterReplacement)


//Q no 8
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br> <br> <br>")
document.write("Message: " + message + "<br>")
document.write("After Replacement: " + message.replace("and", "&"))


//Q no 9
var str = "472"
document.write("<br> <br> <br>")
document.write("Value: " + str + "<br> Type: " + typeof(str))
num = parseInt(str)
document.write("<br> Value: " + num + "<br> Type: " + typeof(num))


//Q no 10
var userInput = prompt("Enter String")
document.write("<br> <br> <br>")
document.write("User input: " + userInput)
document.write("<br> Upper case: " + userInput.toUpperCase())


//Q no 11
var userInput1 = prompt("Enter input")
var titleCase = userInput1.slice(0, 1)
titleCase = titleCase.toUpperCase()
document.write("<br> <br> <br>")
document.write("User Input: " + userInput1)
document.write("<br> Title case: " + titleCase + userInput1.slice(1))


//Q no 12
var num = 35.36
var str = num.toString()
document.write("<br> <br> <br>")
document.write("Number: " + num + "<br> Result: ")
for (var i = 0; i < str.length; i++) {

    if (str[i] === ".") {
        document.write(str.slice(0, i) + str.slice(i + 1))
    }
}


//Q no 13
var userName = prompt("Enter username")
var matchFound = 0
for (i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
        alert("Please enter a valid username")
        matchFound = 1
        break
    }
}

if (matchFound !== 1) {
    alert("Your username is valid")
}


//Q no 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Enter item to search")
var lowerCase = search.toLowerCase()
var matchFound = 0
for (var i = 0; i < A.length; i++) {
    if (lowerCase === A[i]) {
        alert(search + "is available at index " + i + " of the bakery")
        matchFound = 1
        break
    }
}
if (matchFound !== 1) {
    alert("We are sorry. " + search + " is available in our bakery")
}


//Q no 15
var pass = prompt("Enter password")
var matchFound = 0
if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
    alert("Password cannot begin with a number")
}
if (pass.length < 6) {
    alert("password must at least contain 6 characters")
}
for (var i = 0; i < pass.length; i++) {
    if (((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122))) {
        matchFound = 1
        break
    }
}
if (matchFound !== 1) {
    alert("Password must contain alphabets")
}
matchFound = 0
for (i = 0; i < pass.length; i++) {
    if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
        matchFound = 1
        break
    }
}
if (matchFound !== 1) {
    alert("Password must contain numbers")
}


//Q no 16
var university = "University of Karachi"
document.write("<br> <br> <br>")
uni = university.split("")
for (var i = 0; i < uni.length; i++) {
    document.write(uni[i] + "<br>")
}



//Q  no 17
var userInput = "Pakistan"
var lastChar = userInput.slice(userInput.length - 1)
document.write("<br> <br> <br>")
document.write("User Input: " + userInput)
document.write("<br> Last Character: " + lastChar)


//Q no 18
var text = "The quick brown fox jumps over the lazy dog"
var matchFound = 0
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 3) === "the") {
        matchFound++
    }
}
document.write("<br> <br> <br>")
document.write("Text:" + text)
document.write("<br> There are " + matchFound + " occurrence(s) of the word 'the'")