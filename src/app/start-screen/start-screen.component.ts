import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent extends AppComponent {

  constructor(private router: Router, public override translate: TranslateService) {
    super(translate);
  }

  newGame() {
    this.router.navigateByUrl('/game');
  }
}

