document.addEventListener("DOMContentLoaded", () => {
    const text = "NEW COLLECTION"; // Текст, який буде друкуватися
    const target = document.querySelector(".col"); // Знаходимо елемент
    let index = 0; // Лічильник символів

    target.innerHTML = ""; // Очищаємо текст перед друкуванням

    function typeText() {
        if (index < text.length) {
            target.innerHTML += text[index]; // Додаємо одну букву
            index++;
            setTimeout(typeText, 200); // Затримка між символами
        }
    }

    typeText(); // Запускаємо друкування
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hidden");
      document.body.classList.add("loaded");
    }, 1000); // 3 секунди завантаження
  });

  AOS.init({
    duration: 800, // Час анімації в мс
  });

  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`В кошику ${cart.length} товарів`);
  }

  document.querySelectorAll(".buy-now").forEach(button => {
      button.addEventListener("click", function () {
          const id = this.getAttribute("data-id");
          const name = this.getAttribute("data-name");
          const price = this.getAttribute("data-price");

          const item = { id, name, price };
          cart.push(item);
          updateCart();
      });
  });

  document.getElementById("view-cart").addEventListener("click", function () {
      alert(cart.map(item => `${item.name} - ${item.price}$`).join("\n") || "Кошик порожній");
  });
});

