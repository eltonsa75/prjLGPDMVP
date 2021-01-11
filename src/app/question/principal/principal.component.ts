import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],

})
export class PrincipalComponent implements OnInit {

  private token: string

  title = "Menu Principal";

  constructor(private router: Router) {}

  ngOnInit() {
  }

  public logout():void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/question')
}

  

}
