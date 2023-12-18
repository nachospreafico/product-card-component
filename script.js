const addToCartBtn = document.querySelector("#add-to-cart");

const overlay = document.querySelector("#overlay");
const successMsg = document.querySelector("#success-msg");

addToCartBtn.addEventListener("click", () => {
  setTimeout(() => {
    overlay.classList.remove("hidden");
    successMsg.style.display = "flex";
    successMsg.classList.remove("hidden");
  }, 2000);
});
