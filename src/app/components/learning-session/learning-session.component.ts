import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LearningSessionRequest} from "../../models/learningSessionRequest";
import {LearningSessionResponse} from "../../models/learningSessionResponse";
import {Word} from "../../models/word";
import {LearningSessionService} from "../../services/learning-session.service";

@Component({
  selector: 'app-learning-session',
  templateUrl: './learning-session.component.html',
  styleUrls: ['./learning-session.component.css']
})
export class LearningSessionComponent implements OnInit {

  word: Word = new Word();
  currentUser: User;
  wordList: Word [] = [];
  learningSessionRequest: LearningSessionRequest = new LearningSessionRequest();
  learningSessionResponse: LearningSessionResponse = new LearningSessionResponse();
  submitted = false;

  constructor(private learningSessionService: LearningSessionService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  save() {

    this.learningSessionRequest.wordList = this.wordList;
    this.learningSessionService.createLearningSession(this.learningSessionRequest)
      .subscribe(data => {
        console.log(data);
      this.learningSessionResponse = data;
      }, error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  addWordToList() {
    this.wordList.push(this.word);
    this.word = new Word();
  }

}
