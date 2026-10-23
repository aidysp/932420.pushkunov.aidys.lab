const studentName = prompt("Введите ваше имя: ");

if (studentName && studentName.trim() !== "") {
  alert(`Привет,  ${studentName}! Добро пожаловать на сайт историка-реконструктора.`); 
}

const artifactAges = [150, 450, 1200, 2500, 3200, 800, 5000];

function findMax(ages) {
  return Math.max(...ages);
}

function filterAncientArtifacts(ages) {
  return ages.filter(age => age > 1000);
}

function calculateSum(ages) {
  return ages.reduce((sum, age) => sum + age, 0);
}

const ancientArtifacts = filterAncientArtifacts(artifactAges);
const totalAge = calculateSum(artifactAges);
const averageAge = totalAge / artifactAges.length;
const maxAge = findMax(artifactAges);

let youngCount = 0;

for (let i = 0; i < artifactAges.length; i++) {
  if (artifactAges[i] <= 300) {
    youngCount++;
  }
}


const youngPercentage = (youngCount / artifactAges.length) * 100;


alert(
  `Средний возраст артефактов - ${averageAge.toFixed(1)} лет. \n` +
  `Количество древних артефактов - ${ancientArtifacts.length}.`
);

console.log("Возраст артефактов:", artifactAges);
console.log("Древние артефакты старше 1000 лет:", ancientArtifacts);
console.log("Сумма возрастов:", totalAge);
console.log("Максимальный возраст:", maxAge);
console.log("Количество молодых артефактов:", youngCount);
console.log("Доля молодых артефактов:", youngPercentage.toFixed(1) + "%");


if (maxAge > 300) {
  console.log("Среди находок есть по-настоящему древние артефакты!");
}


