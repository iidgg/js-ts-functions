// stolen, i just stole it of stackoverflow

function daysInMonth(x) {
  var d = new Date(x);
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d.getDate();
}

/* For person born on birthDate, return their 
** age on datumDate.
**
** Don't modify original date objects
**
** tDate is used as adding and subtracting
** years, months and days from dates on 29 February 
** can affect the outcome, 
**
** e.g.
**
** 2000-02-29 + 1 year => 2001-03-01
** 2001-03-01 - 1 year => 2000-03-01 so not symetric
**
** Note: in some systems, a person born on 29-Feb
** will have an official birthday on 28-Feb, other 
** systems will have official birthday on 01-Mar.
*/

function getAge(birthDate, datumDate) {

  // Make sure birthDate is before datumDate
  if (birthDate - datumDate > 0) return null;

  let dob = new Date(+birthDate),
      now = new Date(+datumDate),
      tDate = new Date(+dob),
      dobY = dob.getFullYear(),
      nowY = now.getFullYear(),
      years, months, days;

  // Initial estimate of years
  years = nowY - dobY;
  dobY = (dobY + years);
  tDate.setYear(dobY);

  // Correct if too many
  if (now < tDate) {
    --years;
    --dobY;
  }
  dob.setYear(dobY);
  
  // Repair tDate
  tDate = new Date(+dob);

  // Initial month estimate
  months = now.getMonth() - tDate.getMonth();

  // Adjust if needed
  if (months < 0) {
    months = 12 + months;

  } else if (months == 0 && tDate.getDate() > now.getDate()) {
    months = 11;
  }
  tDate.setMonth(tDate.getMonth() + months);

  if (now < tDate) {
    --months;
    dob.setMonth(tDate.getMonth() - 1); 
  }

  // Repair tDate
  tDate = new Date(+dob);

  // Initial day estimate
  days = now.getDate() - tDate.getDate();

  // Adjust if needed 
  if (days < 0) {
    days = days + daysInMonth(tDate);
  }
  dob.setDate(dob.getDate() + days);

  if (now < dob) {
    --days;
  }

  return years + 'y ' + months + 'm ' + days + 'd';
}
