const user = {
  name: "John",
  surname: "Play",
  userPhoto: "my_photo.jpg",
  qrQode: "qr-code.png",
  dreams: [
    { src: "pentest.png", alt: "Стати видатним пентестером" },
    { src: "money.jpg", alt: "Створити стартап та заробити на ньому" },
    { src: "home_and_car.jpg", alt: "Купити велику віллу та електрокар Tesla" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  800,
  1200,
  1700,
  2600,
  3200,
  3900,
  4800,
  5600,
  7300,
  8900,
  10100,
  12000,
];

const necessaryExpenses = 600;

const todo = [
  { month: "Червень", skill: "Java" },
  { month: "Липень", skill: "Linux" },
  { month: "Серпень", skill: "Time management" },
  { month: "Вересень", skill: "Social skills" },
  { month: "Жовтень", skill: "Self-organization" },
  { month: "Листопад", skill: "English" },
  { month: "Грудень", skill: "Coding skills" },
  { month: "Січень", skill: "Leader skills" },
  { month: "Лютий", skill: "Public speaking skills" },
  { month: "Березень", skill: "Python" },
  { month: "Квітень", skill: "Frontend" },
  { month: "Травень", skill: "System programming" },
];

export { user, arr, necessaryExpenses, todo };
