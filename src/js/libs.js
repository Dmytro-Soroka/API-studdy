import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";

let key = "563492ad6f9170000100000133bd82dec4bf4b929ed8ab3a0122a4cb";

const client = createClient(key);
console.log(client);

// refs.gallery.append(img);

// получаем 1 объект
// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

// получаем объектов столько, сколько указали в per_page
// 1
let query = "lotus";

client.photos.search({ query, per_page: 10 }).then((result) => {
  console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});
// =======================
// 2
// client.photos
//   .search({ query, per_page: 10 })
//   .then((result) => {
//     console.log(result.photos);
//     const images = result.photos.map((el) => {
//       const img = document.createElement("img");
//       img.width = "300";
//       img.src = el.src.original;
//       return img;
//     });
//     console.log(images);
//     return images;
//   })
//   .then((images) => {
//     //
//     refs.gallery.append(...images);
//     return refs.gallery;
//   });
