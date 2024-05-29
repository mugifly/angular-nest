import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { ApiService } from 'src/.api-client/services/api.service';
import { Article } from 'src/.api-client/models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, DatePipe, MaterialModule],
})
export class AppComponent {
  $exampleText!: Observable<string>;
  $exampleArticle!: Observable<Article>;

  constructor(private api: ApiService) {}

  getExampleText() {
    this.$exampleText = this.api.appControllerGetExampleText();
  }

  getExampleArticle() {
    this.$exampleArticle = this.api.appControllerGetExampleArticle();
  }
}
