// Write all your javascript code in this file
// const name = document.letterToSanta.name.value;
// const city = document.letterToSanta.city.value;
// const behavior = document.letterToSanta.goodVSnaughty.value;

function nameValidationError(value) {
  if (value === '') {
    return 'Name cannot be empty';
  } else if (value.length < 2) {
    return 'this field should be longer than 1 character';
  } else if (value.length > 250) {
    return 'This field cannot be longer than 250 characters';
  }

  return '';
}

// const onlyLetterss = /^[A-z]+$/.test(document.letterToSanta.name.value);
