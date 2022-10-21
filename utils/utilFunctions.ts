export const calcDateDiff = () => {
  const dobDate = new Date(2002, 10, 3);
  var todayDate = new Date();
  var ageyear = todayDate.getFullYear() - dobDate.getFullYear();
  var agemonth = todayDate.getMonth() - dobDate.getMonth();
  var ageday = todayDate.getDate() - dobDate.getDate();

  if (agemonth <= 0) {
    ageyear--;
    agemonth = 12 + agemonth;
  }
  if (todayDate < dobDate) {
    agemonth--;
    ageday = 30 + ageday;
  }
  if (agemonth == 12) {
    ageyear = ageyear + 1;
    agemonth = 0;
  }

  return ageyear + " years " + agemonth + " months " + ageday + " days ";
};
