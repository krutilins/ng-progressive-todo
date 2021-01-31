import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() burgermenuClick: EventEmitter<void>;

  constructor() {
    this.burgermenuClick = new EventEmitter<void>();
  }

  ngOnInit(): void {

  }

  toggle(): void {
    this.burgermenuClick.emit();
  }

}
