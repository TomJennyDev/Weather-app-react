export function getDayOfWeek(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[new Date(date).getDay()];
}

export function getUniqueItem(arr) {
  const arrItem = [...arr];

  const arrUniqueItem = new Set();
  const arrUnique = arrItem.filter((item) => {
    const dayOfWeek = getDayOfWeek(item.dt_txt.split(" ")[0]);
    if (!arrUniqueItem.has(dayOfWeek)) {
      item["dayOfWeek"] = dayOfWeek;
      arrUniqueItem.add(dayOfWeek);
      return true;
    } else {
      return false;
    }
  });
  return arrUnique;
}
