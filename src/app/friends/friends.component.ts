import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends$: Object;
  selectedFriend: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFriends().subscribe(
      data => this.friends$ = data 
    );
  }

  onSelect(friend: Object): void {
    this.selectedFriend = friend;
  }

}
