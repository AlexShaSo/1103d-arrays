// задача №1
const fill = (arraySize, value) => {
  const summaryArr = [];

  for (let i = 0; i < arraySize; i += 1) {
summaryArr.push(value); // решение здесь
};
return summaryArr
};

const dataValue = 3;
const valueToFill = 'a';
console.log(fill(dataValue, valueToFill))

// задача №2
const reverse = (array) => {
  const reversedArray =[];

  for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i])
};
return reversedArray
};

const dataArr = [1, 2, 3];
console.log(reverse(dataArr)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  const cleanedArray = array.filter((value) => {
    return ![false, undefined, '', 0, null].includes(value);
    }); 
return cleanedArray;   // решение здесь (Нагло созданно с помощью чата ЖПТ)
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
