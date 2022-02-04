import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockAngularV2';
  data: any;
  getAllUserData: any;
  usernameInput: string = '';
  deleteId: any = '';

  constructor() {
    axios.get('http://localhost:4200/images').then((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }

  handleGetAllUser() {
    axios.get('http://localhost:4200/users').then((res: any) => {
      console.log(res);
      this.getAllUserData = JSON.parse(res.data.data)
    });
  }

  handleAddUser() {
    if(this.usernameInput) {
      axios.post('http://localhost:4200/user', { username: this.usernameInput }).then((res: any) => {
        console.log(res);
        this.usernameInput = '';
      })
    }
  }

  handleDeleteUser() {
    if(this.deleteId) {
      axios.delete(`http://localhost:4200/user/${this.deleteId}`).then((res: any) => {
        console.log(res);
        alert(res.data.message);
        this.deleteId = '';
      })
    } else {
      alert("Please enter id");
    }
  }

  handleUserInput(e: any) {
    this.usernameInput = e.target.value;
  }
  handleDeleteIdInput(e: any) {
    this.deleteId = e.target.value;
  }
}
