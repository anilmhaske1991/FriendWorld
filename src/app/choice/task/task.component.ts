import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //myName = 'Anil';
  
  friends = ['Anil'];
  partyFriendName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.friends.push(value.name);
  }

  removeFriend(friend) {
    for( var i = 0; i < this.friends.length; i++)
    {
      if ( this.friends[i] == friend) 
      { 
        this.friends.splice(i, 1); 
      }
    } 
  }

  removeAllFriend()
  {
    this.friends = [];
    this.partyFriendName = '';
  }

  partyFriend()
  {
    this.partyFriendName = this.friends[Math.floor(Math.random() * this.friends.length)];
  }
}
