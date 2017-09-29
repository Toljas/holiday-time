function timeToNewYear() {
  const now = new Date();
  const newYear = new Date(2018, 1, 1);
  const diff = newYear.getTime() - now.getTime();
  console.log(`There are ${diff/1000} s to New Year`);
}
const intervalid = setInterval(timeToNewYear, 1000);
setTimeout(() => clearInterval(intervalid), 10000);
