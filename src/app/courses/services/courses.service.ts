import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, first, tap } from "rxjs";

import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private readonly API = "/assets/courses.json";
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(3000),
      tap((courses) => console.log(courses))
    ); // apenas para debug
  }
}
