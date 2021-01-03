import template from "../templates/item.hbs";

export default {
  query: "",
  page: 1,
  perPage: 3,
  baseUrl: `https://api.pexels.com/v1`,

  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },

  getFetch(val = this.query, z) {
    let key = "563492ad6f9170000100000133bd82dec4bf4b929ed8ab3a0122a4cb";
    this.queryValue = val;
    let params = `/search?query=${this.query}&per_page=${this.parPage}&page=${this.page}`;
    let url = this.baseUrl + params;
    
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };

    return fetch(url, options)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.photos;
      })
      .then((result) => {
        const items = template(result);        
        z.insertAdjacentHTML("beforeend", items);
        setTimeout(() => {
          window.scrollTo({
            top: z.scrollHeight,
            behavior: "smooth",
          });
        }, 0);
        return z;
      });
  },

  setPage() {
    this.page += 1;
    console.log("page: ", this.page);
    return this.page;
  };

  resetPage() {
    this.page = 1;
    console.log("reset page", this.page);
    return this.page;
  },
};