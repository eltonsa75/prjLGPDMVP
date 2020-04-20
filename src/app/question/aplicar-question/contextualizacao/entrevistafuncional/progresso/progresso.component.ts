import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnChanges  {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.progresso)
    this.progressox = parseInt(changes.progresso.currentValue)
  }

  @Input()  progresso: number = 20

  progressox = 20

  constructor() { }

}
