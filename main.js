// Импортируем библиотеку для курсора
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

// Создаем эффект курсора на весь экран
const app = TubesCursor(document.getElementById("canvas"), {
  camera: { fov: 75 }, // угол обзора камеры
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"], // начальные цвета труб
    count: 50, // количество "трубок" на экране
    length: 2, // длина каждой
    radius: 0.01, // толщина
    lights: {
      intensity: 250,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
    },
  },
});

// Функция генерации случайных цветов
function randomColors(count) {
  return new Array(count)
    .fill()
    .map(() => '#' + Math.floor(Math.random() * 16777299).toString(16).padStart(6, '0'));
}

// Изменение цветов при клике или касании
function changeColors() {
  const colors = randomColors(3);
  const lightColors = randomColors(4);
  app.tubes.setColors(colors);
  app.tubes.setLightsColors(lightColors);
}

// События клика и тач для смены цветов
document.body.addEventListener("click", changeColors);
document.body.addEventListener("touchstart", changeColors);

// Функция для обновления позиции курсора (мышь или touch)
function updateCursor(x, y) {
  if(app && app.tubes && typeof app.tubes.setTarget === "function") {
    app.tubes.setTarget({ x, y });
  }
}

// Отслеживаем движение мыши
document.addEventListener("mousemove", (e) => {
  updateCursor(e.clientX, e.clientY);
});

// Отслеживаем движение пальца
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateCursor(touch.clientX, touch.clientY);
});

// Обеспечиваем адаптацию под размер окна
window.addEventListener("resize", () => {
  app.resize();
});
