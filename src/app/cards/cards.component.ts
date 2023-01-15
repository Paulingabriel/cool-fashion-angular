import { Component, Input, OnInit  } from '@angular/core';

interface cardsImage {
  slideSrc: string;
  button: string;
  price: string;
  comment: string;
  title: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() slides: cardsImage[] = []

  selectedIndex = 0;

  ngOnInit(): void {

  }
}
