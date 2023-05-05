import { Component } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css'],
})
export class PlusComponent {
  disabledButton: boolean = true;
  firstNumber = '';
  secondNumber = '';
  resultNumber = '';
  resultDiv: boolean = false;
  stringResult = '';

  //this is a function that sums the numbers of the input fields and displays the result in the result div disabling the input field
  plusSolve() {
    this.resultDiv = true;
    this.resultNumber = this.plusOperation(this.firstNumber, this.secondNumber);
    this.disabledButton = true;
    this.stringResult =
      this.firstNumber + '+' + this.secondNumber + '=' + this.resultNumber;
  }

  //this is a function that verifies that the data is valid to activate the plus button
  validateData(event: Event): void {
    this.disabledButton =
      !Boolean(this.firstNumber) || !Boolean(this.secondNumber);
  }

  //this is a function that resets the plus button and input fields
  resetPlus(): void {
    this.firstNumber = '';
    this.secondNumber = '';
    this.disabledButton = true;
    this.resultDiv = false;
  }

  //this is a function that calculates the sum of two numbers in strings with return values on strings
  plusOperation(firstNumber: string, secondNumber: string): string {
    return (
      parseFloat(this.firstNumber) + parseFloat(this.secondNumber)
    ).toString();
  }
}
