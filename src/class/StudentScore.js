export default class StudentScore {
  constructor(nameInput, scoreInput) {
    this.name = nameInput.value;
    this.score = parseInt(scoreInput.value);

    this.isScoreValid = this.validateScore();
    this.isNameValid = this.validateName();
    this.isValid = this.isScoreValid && this.isNameValid;
  }

  validateName() {
    return !!this.name;
  }

  validateScore() {
    return this.score >= 0 && this.score <= 100;
  }
}
