const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const ulEl = document.querySelector('#ingredients');

  const list = ingredients.map(item => 
 {const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add('item')
  return liEl})
  
  ulEl.append(...list);
  console.log(ulEl);

  
  