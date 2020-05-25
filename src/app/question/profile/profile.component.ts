import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from './../../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  details: UserDetails

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    const current = this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

}
