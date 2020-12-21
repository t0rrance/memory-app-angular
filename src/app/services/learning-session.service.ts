import { Injectable } from '@angular/core';
import {LearningSessionRequest} from "../models/learningSessionRequest";
import {BehaviorSubject, Observable} from "rxjs";
import {LearningSessionResponse} from "../models/learningSessionResponse";
import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

let API_URL = "https://memory-spring-boot.herokuapp.com/api/add/words";

@Injectable({
  providedIn: 'root'
})

export class LearningSessionService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  createLearningSession(learningSessionRequest: LearningSessionRequest):Observable<any> {
    return this.http.post(API_URL, learningSessionRequest,{headers: this.headers});
  }

  getListReview(): Observable<any> {
    return this.http.get("https://memory-spring-boot.herokuapp.com/api/review",{headers: this.headers});
  }

  getReview(id: number) : Observable<any> {
    return this.http.get("https://memory-spring-boot.herokuapp.com/api/review/"+id,{headers: this.headers});
  }

}
