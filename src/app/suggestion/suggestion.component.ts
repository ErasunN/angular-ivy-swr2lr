import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setSuggestion();
  }

  setSuggestion(): void {
    const suggest = Math.floor(Math.random() * (10 - 1))+1;
    if (suggest > 4){
      document.querySelector('#suggesTitle').innerHTML = 'YES';
      document.querySelector('#suggesTitle').classList.remove('text-danger');
      document.querySelector('#suggesTitle').classList.add('text-success');

    }else{
      document.querySelector('#suggesTitle').innerHTML = 'NO';
      document.querySelector('#suggesTitle').classList.remove('text-success');
      document.querySelector('#suggesTitle').classList.add('text-danger');
    }
  }

}
