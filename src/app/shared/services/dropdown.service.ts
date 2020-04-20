import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cidade } from './../../models/cidade';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

}
