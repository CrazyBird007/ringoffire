import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  currentCard: string = '';
  pickCardAnimation = false;
  game: Game;
  pickCardAllowd = false;

  constructor(public dialog: MatDialog) {

  }

  
  ngOnInit(): void {
    this.newGame();
  }


  pickCard() {
    if (this.pickCardAllowd && !this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        console.log('New Card:' + this.currentCard);
        console.log('Game is:', this.game);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }


  newGame() {
    this.game = new Game();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        console.log('The dialog was closed', name, this.game.players);
        this.game.players.push(name);
        this.pickCardAllowd = true;
      }
    });
  }
}
