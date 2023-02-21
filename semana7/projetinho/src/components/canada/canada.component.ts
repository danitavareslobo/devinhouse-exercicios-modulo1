import { Component } from '@angular/core';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.component.html',
  styleUrls: ['./canada.component.css']
})

export class CanadaComponent {

  public name = 'Canadá';
  public count = 0;
  public disabled = true;
  public imgSource = 'https://m2s5m8t8.rocketcdn.me/wp-content/uploads/lago-moraine-canada.jpg';

  public increment() {
    this.count++;
  }
}
