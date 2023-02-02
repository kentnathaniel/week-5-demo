export default class StudentScore {
  constructor(nameInput, scoreInput) {
    this.name = nameInput.value;
    this.score = parseInt(scoreInput.value);
    this.isValid = this.validateName() && this.validateScore();
  }

  validateName() {
    return !!this.name;
  }

  validateScore() {
    return this.score >= 0 && this.score <= 100;
  }
}
