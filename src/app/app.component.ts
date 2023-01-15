import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'littlefashion';
 
  images = [
    {
      imageSrc:
        './assets/medium-shot-business-women-high-five.jpeg',
      imageAlt: 'slide1',
    },
    {
      imageSrc:
      './assets/team-meeting-renewable-energy-project.jpeg',
      imageAlt: 'slide1',
    },
    {
      imageSrc:
      './assets/two-business-partners-working-together-office-computer.jpeg',
    imageAlt: 'slide1',
    },
  ]

  slides = [
    {
      slideSrc:
        './assets/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg',
      button:
      'New Arrrival',
      price:
        '25$',
      title:
        'Tree pot',
      comment:
        'Original package design from house'
    },
    {
      slideSrc:
      './assets/jordan-nix-CkCUvwMXAac-unsplash.jpeg',
      button:
      'New Arrrival',
      price:
      '35$',
      title:
      'Fashion Set',
      comment:
      'Costume Package'
    },
    {
      slideSrc:
      './assets/nature-zen-3Dn1BZZv3m8-unsplash.jpeg',
      button:
      'New Arrival',
      price:
      '45$',
      title:
      'Juice Drinks',
      comment:
      'Original package design from house'
    },
  ]

}
