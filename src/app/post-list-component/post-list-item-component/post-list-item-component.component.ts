import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
     
  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postLoveIt: number;
  @Input() postDate:string;
  constructor() { }

  ngOnInit() {
  }

  incLoveIt(){
    return ++this.postLoveIt;
  }
  decLoveIt(){
    return --this.postLoveIt;
  }

}
