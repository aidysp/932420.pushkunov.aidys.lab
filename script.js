let userName = prompt("Введите ваше имя:");

if (!userName || userName.trim() === "") {
    userName = "Гость";
}

alert(`Привет, ${userName}! Добро пожаловать на сайт историка-реконструктора.`);

const artifactAges = [150, 250, 1200, 1500, 2500, 3200, 4100];

function findMax(ages) {
    return Math.max(...ages);
}

function filterAncientArtifacts(ages) {
    return ages.filter(age => age > 1000);
}

function calculateSum(ages) {
    return ages.reduce((sum, age) => sum + age, 0);
}

function analyzeYoungArtifacts(ages) {
    let count = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] <= 300) {
            count++;
        }
    }
    const share = (count / ages.length) * 100;
    return { count, share };
}

const maxAge = findMax(artifactAges);
const ancientArtifacts = filterAncientArtifacts(artifactAges);
const totalAge = calculateSum(artifactAges);
const averageAge = totalAge / artifactAges.length;
const youngResults = analyzeYoungArtifacts(artifactAges);

alert(`Средний возраст – ${averageAge.toFixed(1)} лет, ${ancientArtifacts.length} артефактов – древние.`);

console.log("Исходный массив возрастов артефактов:", artifactAges);
console.log("Древние артефакты (старше 1000 лет):", ancientArtifacts);
console.log("Суммарный возраст всех находок:", totalAge);
console.log("Максимальный возраст артефакта:", maxAge);
console.log("Количество молодых артефактов (≤ 300 лет):", youngResults.count);
console.log("Доля молодых артефактов от общего числа:", youngResults.share.toFixed(1) + "%");

if (maxAge > 3000) {
    console.log("Среди находок есть по-настоящему древние артефакты!");
}

