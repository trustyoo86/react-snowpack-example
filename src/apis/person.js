function getPerson(name) {
  return new Promise((resolve) => {
    const person = { name, age: name.length * 10 };
    setTimeout(() => resolve(person), 500);
  });
}

export default getPerson;
