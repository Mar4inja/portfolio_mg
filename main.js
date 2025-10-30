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

// При клике меняем цвета труб и подсветки
document.body.addEventListener("click", () => {
  const colors = randomColors(3);
  const lightColors = randomColors(4);
  app.tubes.setColors(colors);
  app.tubes.setLightsColors(lightColors);
});

// Функция генерации случайных цветов
function randomColors(count) {
  return new Array(count)
    .fill()
    .map(() => '#' + Math.floor(Math.random() * 16777299).toString(16).padStart(6, '0'));
}

// Обеспечиваем адаптацию под размер окна
window.addEventListener("resize", () => {
  app.resize();
});
