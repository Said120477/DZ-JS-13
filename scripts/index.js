// Напишите функцию party, которая принимает число, после
// чего с интервалом в 0.3 секунды создаёт на странице круги
// разных случайных цветов. Итоговое количество
// сгенерированных кругов должно равняться переданному в
// функцию числу.

function party(numCircles) {
  let totalTime = 0;
  let interval = 300; // Интервал в миллисекундах (0.3 секунды)

  for (let i = 0; i < numCircles; i++) {
      totalTime += interval;

      setTimeout(() => {
          let color = '#' + Math.floor(Math.random()*16777215).toString(16);
          let circle = document.createElement('div');
          circle.style.width = '50px';
          circle.style.height = '50px';
          circle.style.borderRadius = '50%';
          circle.style.backgroundColor = color;
          circle.style.margin = '10px';

          document.body.appendChild(circle);
      }, totalTime);
  }
}


party(5);

