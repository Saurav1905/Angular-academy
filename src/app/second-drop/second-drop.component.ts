import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-drop',
  templateUrl: './second-drop.component.html',
  styleUrls: ['./second-drop.component.scss'],
})
export class SecondDropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

document.addEventListener('DOMContentLoaded', () => {
  let dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
  });
});
