import { Component } from '@angular/core';

@Component({
  selector: 'app-decomposition-friendly',
  imports: [],
  templateUrl: './decomposition-friendly.component.html',
  styleUrl: './decomposition-friendly.component.scss',
})
export class DecompositionFriendlyComponent {
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
    let sum = this.augend + this.addend;
    if (this.showAns) {
      this.answerStrings = [];
      let augendTens = Math.floor(this.augend / 10);
      let augendOnes = this.augend % 10;
      let addendTens = Math.floor(this.addend / 10);
      let addendOnes = this.addend % 10;
      // chatgpt find which number augendOnes or addendOnes is closer to a multiple of 10?

      const augendDistance = Math.min(augendOnes, 10 - augendOnes);
      const addendDistance = Math.min(addendOnes, 10 - addendOnes);

      if (augendDistance < addendDistance) {
        if (augendOnes < 5) {
          // augend is closer to 0
          if (augendOnes === 0) {
            // augend is 0
            // handle zero case
            this.answerStrings.push(`${this.augend} + ${this.addend} = ${sum}`);
          } else {
            // augend is 1 -4
            this.answerStrings.push(
              `${this.augend} - ${augendOnes} + ${this.addend} + ${augendOnes} = ${sum}`
            );
            this.answerStrings.push(
              `${this.augend - augendOnes} + ${
                this.addend + augendOnes
              } = ${sum}`
            );
          }
        } else {
          // augend is 5 - 9 closer to 10
          this.answerStrings.push(
            `${this.augend} + ${10 - augendOnes} + ${this.addend} - ${
              10 - augendOnes
            } = ${sum}`
          );
          this.answerStrings.push(
            `${this.augend + (10 - augendOnes)} + ${
              this.addend - (10 - augendOnes)
            } = ${sum}`
          );
        }
      } else {
        if (addendOnes < 5) {
          // addend is closer to 0
          if (addendOnes === 0) {
            // handle zero case
            this.answerStrings.push(`${this.augend} + ${this.addend} = ${sum}`);
          } else {
            // addend is 1 - 4
            this.answerStrings.push(
              `${this.augend} + ${addendOnes} + ${this.addend} - ${addendOnes} = ${sum}`
            );
            this.answerStrings.push(
              `${this.augend + addendOnes} + ${
                this.addend - addendOnes
              } = ${sum}`
            );
          }
        } else {
          // addend is 5 - 9 closer to 10
          this.answerStrings.push(
            `${this.augend} - ${10 - addendOnes} + ${this.addend} + ${
              10 - addendOnes
            } = ${sum}`
          );
          this.answerStrings.push(
            `${this.augend - (10 - addendOnes)} + ${
              this.addend + (10 - addendOnes)
            } = ${sum}`
          );
        }
      }
    }
  }
}
