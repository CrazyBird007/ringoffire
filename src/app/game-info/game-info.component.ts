import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  cardAction = [
    { title: 'Ace is waterfall', description: 'Similar to the initial Waterfall card, but everyone participates in a waterfall, not just the player who drew the card.' },
    { title: 'Two is for you', description: 'The player who drew this card chooses someone to take two drinks.' },
    { title: 'Three is for me', description: 'The player who drew this card takes three drinks.' },
    { title: 'Four is floor', description: 'Everyone must touch the floor, and the last person to do so takes a drink.' },
    { title: 'Five is guys', description: 'All male players take a drink.' },
    { title: 'Six is chicks', description: 'All female players take a drink.' },
    { title: 'Seven is heaven', description: 'The player who drew this card must point to the ceiling, and everyone must follow. The last person to do so takes a drink.' },
    { title: 'Eight is mate', description: 'The player who drew this card chooses a drinking buddy. Whenever they drink, the drinking buddy must also drink.' },
    { title: 'Nine is rhyme', description: 'The player who drew this card starts by saying a word, then the players continue going clockwise, each saying a word that rhymes with the previous word. The first player who fails to come up with a rhyming word takes a drink.' },
    { title: 'Ten is categories', description: 'The player who drew this card chooses a category (e.g., car brands, colors, movie titles), and each player must say something that falls within that category. The first player who fails to come up with something takes a drink.' },
    { title: 'Jack is thumb master', description: 'The player who drew this card becomes the thumb master. They can discreetly put their thumb on the table at any time, and the last player to notice and put their thumb on the table must take a drink. The thumb master remains in control until the next Jack is drawn.' },
    { title: 'Queen is questions', description: 'The player who drew this card starts by asking someone a question. That person must then ask another player a question, and so on. The first player to respond instead of asking a question takes a drink.' },
    { title: 'King is rule', description: 'The player who drew this card can create a rule that all players must follow. Any player who breaks the rule takes a drink. The rule remains in effect until the next King is drawn.' },
  ];

  title = '';
  description: string = '';
  @Input() card: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
    console.log('Current card is:', this.card);
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
