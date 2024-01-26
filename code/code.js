/*
1. 
Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"
*/
/*
const [...inputs] = document.querySelectorAll("input");

inputs.forEach(function (input) {
    input.addEventListener("blur", () => {
        document.getElementById("test").innerText = input.value
    })
})
*/
/*
2.
Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. 
Скільки символів має бути в інпуті, зазначається в атрибуті data-length. 
Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.
*/
/*
const [...inputs] = document.querySelectorAll("input");

inputs.forEach(function (input) {
    input.addEventListener("blur", () => {
        if(input.value.length === +input.dataset.length){
            input.className = "success"
        }else{
            input.className = "error"
        }
    })
})
*/
/* 3.
Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та підтягувати логотип оператора. 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅

Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 
*/
// Завдання № 3 початок -------------------------------------------------------------------------

/*import { data } from "../uacity.js";
const regName = /^[А-ЩЬЮЯЇІЄҐа-щьюяїіґ\sʼ-]+$/;
const regTel = /\+38\s\d{3}\s\d{3}\s\d{2}\s\d{2}/;
const regEmail = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userEmeil = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userCity = document.getElementById("Citys");
const btnSubmit = document.querySelector(".btn");

const inputsArr = [userName, userSurname, userEmeil, userPhone, userCity];
// console.log(inputsArr);

// Добавляю міста в поле select
data.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.city;
  option.textContent = item.city;
  userCity.append(option);
});
// Функція для валідації полів вводу імені та прізвища користувача
const nameANDsurnameValidation = (e) => {
  if (regName.test(e.target.value) === true) {
    e.target.classList.add("is-valid");
  } else {
    e.target.classList.add("is-invalid");
  }
};
// Функція для валідаціі введеня поштової адреси користувача
const emailValidation = () => {
  if (regEmail.test(userEmeil.value) === true) {
    userEmeil.classList.add("is-valid");
  } else {
    userEmeil.classList.add("is-invalid");
  }
};
// Функція для валідаціі номеру телофону користувача а також ідентифікаціі мобільного оператора і виводу його логотипу в залежності від введеного номеру
const userTelValidation = () => {
  if (regTel.test(userPhone.value) === true) {
    userPhone.classList.add("is-valid");
  } else {
    userPhone.classList.add("is-invalid");
  }
  const arrKyivstar = ["+38 096", "+38 097", "+38 098", "+38 067"];
  const arrVodafone = ["+38 095", "+38 099", "+38 066", "+38 050"];
  const arrLife = ["+38 063", "+38 073", "+38 093"];

  arrKyivstar.forEach((code) => {
    const kyivstar = document.querySelector("div > img");
    if (userPhone.value.includes(code)) {
      kyivstar.src = "/mobile-logo/kyivstar.png";
      kyivstar.setAttribute("class", "kyivstarVisible");
    }
  });

  arrVodafone.forEach((code) => {
    const vodafone = document.querySelector("div > img");
    if (userPhone.value.includes(code)) {
      vodafone.src = "/mobile-logo/vodafone.png";
      vodafone.setAttribute("class", "vodafoneVisible");
    }
  });

  arrLife.forEach((code) => {
    const life = document.querySelector("div > img");
    if (userPhone.value.includes(code)) {
      life.src = "/mobile-logo/life.png";
      life.setAttribute("class", "lifecellVisible");
    }
  });
};
// Функція для валідаціі вибору міста
const cityValidation = () => {
  if (userCity.value !== "defoult") {
    userCity.classList.add("is-valid");
  } else {
    userCity.classList.add("is-invalid");
  }
};
// Функція для підтвердження введених користувачем данних ❌ проверить логику функции
const submitData = () => {
    inputsArr.forEach((input) => {
        input.addEventListener('submit', nameANDsurnameValidation);
         input.addEventListener('submit', emailValidation);
          input.addEventListener('submit', userTelValidation);
           input.addEventListener('submit', cityValidation);
    })
};

btnSubmit.addEventListener("click", submitData);
userName.addEventListener("change", nameANDsurnameValidation);
userSurname.addEventListener("change", nameANDsurnameValidation);
userEmeil.addEventListener("change", emailValidation);
userPhone.addEventListener("change", userTelValidation);
userCity.addEventListener("change", cityValidation);
*/

// Завдання № 3 кінець -------------------------------------------------------------------------

/*
4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

// Завдання № 4 початок -------------------------------------------------------------------------

/* 
const input = document.querySelector("#price");
const span = document.createElement("span");
const p = document.createElement("p");
const btn = document.createElement("button");
const div = document.querySelector(".block");
const message = document.querySelector(".message");

input.addEventListener("focus", function () {
  input.classList.add("focus");
});
input.addEventListener("blur", function () {
  if (input.value <= "0") {
    input.className = "error";
    p.style.color = "red";
    p.textContent = "Please enter correct price";
    message.append(p);
  } else {
    p.textContent = "";
    input.setAttribute("class", "blur");
    span.textContent = `Введене значення: ${input.value}`;
    span.setAttribute("id", "span");
    btn.setAttribute("type", "button");
    btn.textContent = "X";
    div.append(span, btn);
  }
});

function clear() {
  btn.remove();
  span.remove();
}
btn.addEventListener("click", clear);
*/

// Завдання № 4 кінець -------------------------------------------------------------------------
