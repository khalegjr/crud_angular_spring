import { Component, OnInit } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { CoursesService } from "./../services/courses.service";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Course } from "./../model/course";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  displayedColumns = ["name", "category", "actions"];

  constructor(
    private coursesService: CoursesService,
    public snackBar: MatSnackBar
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.log(error);
        this.onError("Erro ao carregar cursos.");
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.snackBar.open(errorMsg, "Fechar");
  }

  ngOnInit(): void {}
}
