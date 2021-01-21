let x = [];
if (typeof x === 'number'){
  console.log('X-число');
} else if (typeof x === 'string'){
  console.log('X-строка');
} else if (typeof x ==='boolean'){
  console.log('X-логический тип');
} else {
  consol.log('Тип x не определён');
}