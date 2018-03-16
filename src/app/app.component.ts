import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts : Array<object> =[

      {
        title : "mon premier post",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. +
        Suscipit accusantium laudantium ea iure! Earum vel dolores veritatis non, ex asperiores.
        `,
        loveIt : 0,
        created_at : new Date("03-01-2018 18:20")
      },
      {
        title : "mon deuxième post",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. +
        Suscipit accusantium laudantium ea iure! Earum vel dolores veritatis non, ex asperiores.
        `,
        loveIt : 0,
        created_at : new Date("02-18-2018 00:20")
      },
      {
        title : "mon troisième post",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. +
        Suscipit accusantium laudantium ea iure! Earum vel dolores veritatis non, ex asperiores.
        `,
        loveIt : 0,
        created_at : new Date("02-12-2018 10:20")
      }
    ]
}
