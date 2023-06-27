import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: 'api.page.html',
  styleUrls: ['api.page.scss'],
})
export class ApiPage {
  randomUser: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadRandomUser();
  }

  loadRandomUser() {
    this.userService.getRandomUser().subscribe(
      (data) => {
        this.randomUser = data.results[0];
        console.log(this.randomUser);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
