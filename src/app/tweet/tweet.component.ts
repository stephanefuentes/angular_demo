import { Component, Input } from '@angular/core';


@Component({
  selector: "app-tweet",
  template: `
    <div>
      <h2>{{ author }}</h2>
      <p>
        <ng-content select=".content"></ng-content>
      </p>
      <small>Date : <ng-content select=".date"></ng-content></small>
      <br>
      <a>j'aime</a> | <a>Je retweet</a>
    </div>
  `,
  styles: []
})
export class TweetComponent {

  @Input('tweet-author')
  author = "Lior Chamla";

  @Input()
  content = "Présentation de Angular";

 
} 