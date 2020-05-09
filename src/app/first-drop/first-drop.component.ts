import { Component, OnInit, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-first-drop',
  templateUrl: './first-drop.component.html',
  styleUrls: ['./first-drop.component.scss'],
})
export class FirstDropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

document.addEventListener('DOMContentLoaded', () => {
  let dropdown = document.querySelector('.dropdown');
  let dropSection = document.querySelector('.dropingSection');

  dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
    dropSection.classList.toggle('forMargin');
  });
});
