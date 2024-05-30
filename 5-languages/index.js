const language = prompt("Введите язык"); // en, ru, de...

switch (language) {
  case "ru":
    console.log("Добрый день!");
    break;
  case "en":
    console.log("Good afternoon!");
    break;
  case "es":
    console.log("Buenas tardes!");
    break;
  case "be":
    console.log("Добры дзень!");
    break;
  case "ja":
    console.log("こんにちは");
    break;
  default:
    console.log("Я такой не знаю");
}
