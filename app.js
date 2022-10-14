const btns = document.querySelectorAll(".numbers .span");
const submit = document.querySelector(".submit");
const container = document.querySelector(".container");
const thankyou = document.querySelector(".thankyou");
const selected = document.querySelector(".selected");
const rate = document.querySelector(".rate");
const oops = document.querySelector(".oops");

let btnvalue = 0;

btns.forEach((element) => {
  element.addEventListener("click", function () {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      this.classList.add("active");
    });

    btnvalue = this.innerHTML;
    rate.innerHTML = btnvalue;
  });
});

submit.addEventListener("click", () => {
  container.style.display = "none";
  thankyou.style.display = "block";

  if (btnvalue === 0) {
    selected.innerHTML = "Please select before you click submit";
    oops.innerHTML = "Oops";
  }
});
