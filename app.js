// Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.
function ex1(x) {
  if (x <= 0) {
    return true;
  } else {
    return false;
  }
}
// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)
function ex2(x) {
  return x++;
}
// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers
function ex3(arr) {
  let newArr = [];
  const regexa = /[0-9]/;
  for (let i = 0; i < arr.length; i++) {
    if (regexa.test(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
ex3(["d", "n", "4f", "3e"]);
// Ex4: Develop a JS Code to check if a number is even or odd using recursion
function ex4(x) {
  if (x === 0) {
    console.log("even");
  } else if (x === 1) {
    console.log("odd");
  } else {
    return ex4(x - 2);
  }
}
// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")
function ex5(str, ch1, ch2) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch1) {
      newStr += ch2;
    } else if (str[i] == ch2) {
      newStr += ch1;
    } else {
      newStr = newStr + str[i];
    }
  }
  console.log(newStr);
}
ex5("aaddeee", "a", "d");
// Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
function ex6(arr) {
  newArr = [];
  //   let tt = newArr.length;
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
// Ex7: Use forEach to  Return all the names in the previous array
ex6(["Rawan", "Jafar", "Rawan", "Muhammad", "Muhammad", "Esraa", "Dareen"]);
function ex7(arr) {
  newArr = [];
  //   let tt = newArr.length;
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}
ex7(["Rawan", "Jafar", "Rawan", "Muhammad", "Muhammad", "Esraa", "Dareen"]);
// Ex8: Project an array of series into an array of {id, title} pairs using forEach()
function data() {
  return [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
}

function ex8(arr) {
  newArr = [];
  arr.forEach((ele) => {
    ell = { id: ele.id, title: ele.title };
    newArr.push(ell);
  });
  console.log(newArr);
}
ex8(data());

// Ex 9: Use map() now to implement the same previous functionality
function ex9(arr) {
  let newArr = arr.map((ele) => {
    return { id: ele.id, title: ele.title };
  });
  console.log(newArr);
}
ex9(data());

// Ex 10: Use filter() to return the series with a rating under 5
function ex10(arr) {
  let nnrr = arr.filter((ele) => {
    return ele.rating < 5;
  });
  console.log(nnrr);
}
ex10(data());

// Ex 11: Use reduce()  function to return the longest string in an array of strings.
function ex11(arr) {
  let nnrr = arr.reduce((prev, ele) => {
    return prev.length > ele.length ? prev : ele;
  });
  console.log(nnrr);
}
ex11(["Java", "JavaScript", "Python", "C++", "PHP"]);
// Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.
function dada() {
  return [
    {
      game_index: 76,
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "blue",
        url: "https://pokeapi.co/api/v2/version/2/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version/3/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "gold",
        url: "https://pokeapi.co/api/v2/version/4/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "silver",
        url: "https://pokeapi.co/api/v2/version/5/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version/6/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/version/7/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version/9/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/",
      },
    },
  ];
}
function displayName(arr) {
  let nnrr = arr.reduce((eq, ele) => {
    return eq.concat(ele.version.name);
  }, []);
  console.log(nnrr);
}
displayName(dada());
// Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.
function ex13(arr, email) {
  let newArr = arr.sort((a, b) => a.email.localeCompare(b.email));
  let start = 0;
  let end = newArr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (newArr[mid].email === email) {
      return newArr[mid];
    } else {
      return [];
    }
  }
  return -1;
}
console.log(
  ex13(
    [
      {
        name: "ude.Top",
        add: {
          street: " Felds",
          suie: "Ste 231",
          city: "Tinamuth",
          zcode: "07584-6653",
          geo: { lat: "75.023", lng: "-17.1824" },
        },
        phone: "795-827-5446 x18366",
        website: "nico.com",
        company: {
          name: "Champlin, Barrows and me",
          catchPhrase: "Object user-facing orchestration",
          bs: " integrated content",
        },
        firstN: "Mida",
        lastN: "Feey",
        email: "Taya.Kerluke53@gmail.com",
      },
    ],
    "Taya.Kerluke53@gmail.com"
  )
);
