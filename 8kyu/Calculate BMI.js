/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
    const calculate = weight / height ** 2;
    if (calculate <= 18.5) {
        return "Underweight";
    } else if (calculate <= 25.0) {
        return "Normal";
    } else if (calculate <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// alternative way to do this:
const bmi = (w, h, bmi = w / h ** 2) => {
    return bmi <= 18.5
        ? "Underweight"
        : bmi <= 25.0
        ? "Normal"
        : bmi <= 30.0
        ? "Overweight"
        : "Obese";
};
