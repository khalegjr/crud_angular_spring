import { NgModule } from "@angular/core";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class AppMaterialModule {}
