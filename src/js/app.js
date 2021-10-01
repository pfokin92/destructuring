export default function destructuring(obj) {
  const arrDestr = [];

  obj.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    const arr = {};
    arr.id = id;
    arr.name = name;
    arr.icon = icon;
    arr.description = description;
    arrDestr.push(arr);
  });
  return arrDestr;
}
