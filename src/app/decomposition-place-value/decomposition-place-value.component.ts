import { Component } from '@angular/core';

@Component({
  selector: 'app-decomposition-place-value',
  imports: [],
  templateUrl: './decomposition-place-value.component.html',
  styleUrl: './decomposition-place-value.component.scss',
})
export class DecompositionPlaceValueComponent {
  augend = Math.round(Math.random() * 100);
  addend = Math.round(Math.random() * 100);

  showAns = false;

  answerStrings: string[] = [];

  regen() {
    this.augend = Math.round(Math.random() * 100);
    this.addend = Math.round(Math.random() * 100);
    this.showAns = false;
  }

  toggleAnswer() {
    this.showAns = !this.showAns;
    if (this.showAns) {
      let augendTens = Math.floor(this.augend / 10);
      let augendOnes = this.augend % 10;
      let addendTens = Math.floor(this.addend / 10);
      let addendOnes = this.addend % 10;
      let sum = this.augend + this.addend;
      this.answerStrings.push(`${augendTens > 0 ? augendTens + '0 + ' : ''} ${
        addendTens > 0 ? addendTens + '0 + ' : ''
      } ${augendOnes > 0 ? augendOnes + ' + ' : ''} ${
        addendOnes > 0 ? addendOnes + ' + ' : ''
      } = \n
      ${sum}`);
    }
  }
}
