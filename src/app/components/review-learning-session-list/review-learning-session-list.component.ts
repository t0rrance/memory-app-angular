import { Component, OnInit } from '@angular/core';
import {LearningSessionService} from "../../services/learning-session.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {WordReviewSessionResponse} from "../../models/wordReviewSessionResponse";

@Component({
  selector: 'app-review-learning-session-list',
  templateUrl: './review-learning-session-list.component.html',
  styleUrls: ['./review-learning-session-list.component.css']
})
export class ReviewLearningSessionListComponent implements OnInit {

  currentUser: User;
  wordReviewSessionResponseList : Array<WordReviewSessionResponse>
  index: number;

  constructor(private learningSessionService: LearningSessionService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.findListReview()
  }

  findListReview(){
    this.learningSessionService.getListReview().subscribe(data => {
      this.wordReviewSessionResponseList = data;
    });
  }

  review(id: number) {
    this.router.navigate(['/review', id]);
  }

}


