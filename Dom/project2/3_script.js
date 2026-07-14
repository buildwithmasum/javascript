const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();//Stops the browser's normal action for that event 
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == " " || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight == " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} - You are underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} - Your weight is in normal range</span>`;
    } else {
      results.innerHTML = `<span>${bmi} - You are overweight</span>`;
    }
  }
});
