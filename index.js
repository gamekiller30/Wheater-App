const key = "3bfcb912e6944347bad180440232707";

const search_btn = document.querySelector(".search-btn");
const search = document.querySelector(".search-input-wrapper");

search_btn.addEventListener("click", () => {
  if (search.style.display == "none") {
    search.style.display = "flex";
  } else {
    search.style.display = "none";
  }
});

fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=london`, {
  mode: "cors",
  method: "GET",
})
  .then(
    (res) => res.json()
    //Convert fetched Data from json to executable code
  )
  .catch((err) => {
    console.error(err);
  })
  .then((resdata) => {
    console.log(resdata.current);
    console.log(resdata.location);
    console.log(resdata.location.name);
    console.log(resdata.location.region);
    console.log(resdata.location.country);
  });
