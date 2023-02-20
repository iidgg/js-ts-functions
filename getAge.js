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
