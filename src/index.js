import css from "./css/styles.css";
// import libs from "./js/libs.js";

import asyncFetch from "./js/asyncFetch.js";

//import fetchObject from "./js/fetch.js";
// console.log(fetchObject);

import x from "./js/refs.js";
// console.log(x.form);

const { form, input, loadMoreBtn, gallery } = x;
// console.log(form, searchBtn, gallery);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  gallery.innerHTML = "";
  
  asyncFetch.resetPage();

  const inputValue = e.target.elements.query.value;
  
  asyncFetch.getFetch(inputValue, gallery);
  loadMoreBtn.classList.remove("isHiden");

  inputValue.value = "";  
});

loadMoreBtn.addEventListener("click", () => {
  console.log(`ok`);
  asyncFetch.setPage();
  asyncFetch.getFetch(undefined, gallery);
});
