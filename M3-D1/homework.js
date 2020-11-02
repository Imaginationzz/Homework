/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = function (x, y) {
  let res = 0;
  if (x === y) {
    res = (x + y) * 3;
  }
  return res;
};
console.log(sum(2, 2));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check = function (x, y) {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  }
};
console.log(check(2, 2));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const checkchar = function (x) {
  let removed = x.slice(1);
  return removed;
};
console.log(checkchar("dddd"));

/*
4)
 Create a function to find the largest of three given integers.
*/
const largest = function (x, y, z) {
  let bigger = 0;
  if (x > y) {
    bigger = x;
  } else {
    bigger = y;
  }
  if (z > bigger) {
    bigger = z;
  }
  return bigger;
};
console.log(largest(10, 12, 15));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const range = function (x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(range(2, 2));

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copies(str, n) {
  return str.repeat(n);
}
console.log(copies("abc", 3));

/*7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityname(str) {
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
    return str;
  }
  return 0;
}
console.log(cityname("Los"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function sumarray(myarray) {
  return myarray[0] + myarray[1] + myarray[2];
}

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function contains(myarray) {
  if (myarray.includes(1) || myarray.includes(3)) {
    return true;
  } else {
    return false;
  }
}
console.log(contains([1, 2]));

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/

function nocontains(myarray) {
  if (!myarray.includes(1) || !myarray.includes(3)) {
    return true;
  } else {
    return false;
  }
}
console.log(nocontains([1, 2]));
/*
11)
Create a function to find the longest string from a given array of strings.
*/
function longest(str) {
  let max = str[0].length;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > max) {
      max = str[i].length;
    }
  }

  return max;
}

console.log(longest(["a", "aa", "aaa", "aaaaa", "aaaa"]));

/*12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

function angleType(angle) {
  if (angle < 90) {
    return "Acute angle.";
  }
  if (angle === 90) {
    return "Right angle.";
  }
  if (angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}

console.log(angleType(100));

/*13)
Create a function to find the index of the greatest element of a given array of integers
*/
/*
14)
Create a function to get the largest even number from an array of integers.
*/
function maxeven(arra) {
  arra.sort((x, y) => y - x);

  for (let i = 0; i < arra.length; i++) {
    if (arra[i] % 2 === 0) return arra[i];
  }
}

console.log(maxeven([20, 400, 200]));

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check2 = function (x, y) {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  }
};
console.log(check2(2, 2));

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

function positivenegative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(positivenegative(-1, 2));

/*
17)
Create a function to create new string with first 3 characters are in lower case
 and the others in upper case. If the string length is less than 3 convert all the characters
  in upper case. 

*/

function upperlower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  first = str.substring(0, 3).toLowerCase();
  second = str.substring(3, str.length).toUpperCase();
  return first + second;
}
console.log(upperlower("Yazid"));

/*
18)
Create a function to calculate the sum of the two given integers, 
If the sum is in the range 50..80 return 65 other wise return 80.
*/
function givesum(x, y) {
  const sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}

console.log(givesum(100, 20));
