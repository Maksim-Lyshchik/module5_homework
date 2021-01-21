let newMap = new Map();
newMap.set('Вася', 'программист');
newMap.set('Миша', 'строитель');
newMap.set('Ваня', 'экономист');
newMap.set('Лёша', 'механик');
for (let name of newMap.keys()){
  console.log('Ключ-'+name);
}
for (let prof of newMap.values()){
  console.log('Значение-'+prof);
}