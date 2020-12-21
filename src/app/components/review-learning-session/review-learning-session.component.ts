import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LearningSessionResponse} from "../../models/learningSessionResponse";
import {LearningSessionService} from "../../services/learning-session.service";

@Component({
  selector: 'app-review-learning-session',
  templateUrl: './review-learning-session.component.html',
  styleUrls: ['./review-learning-session.component.css']
})
export class ReviewLearningSessionComponent implements OnInit {

  sessionId: string;
  learningSessionResponse: LearningSessionResponse =  new LearningSessionResponse();
  isFront: boolean;
  index: number;
  wordListSize: number;

  constructor(private router: Router, private route: ActivatedRoute, private learningService: LearningSessionService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.sessionId = params.get('id');
      }
    });

    this.learningService.getReview(parseInt(this.sessionId)).subscribe( data => {
      this.learningSessionResponse = data;
      this.wordListSize = this.learningSessionResponse.wordList.length;
    })

    this.init()

  }

  init() {
    this.isFront = true;
    this.index = 0;

  }

  incrementation() {
    this.isFront = true;
    this.index = (this.index + 1)%this.wordListSize;
  }

  decrementation() {
    this.isFront = true;
    if(this.index == 0)
      this.index = this.wordListSize - 1;
    else
      this.index = (this.index - 1)%this.wordListSize;
  }

  flip() {
    this.isFront = !this.isFront;
  }

  finishReview() {
    this.router.navigate(['/reviewList']);
  }

}
