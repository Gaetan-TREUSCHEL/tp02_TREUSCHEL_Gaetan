import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './model/article';
import { MonserviceService } from './monservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'tp03';

  constructor(private monservice: MonserviceService) {}

  count: number = 0;
  catalogue$: Observable<Article[]> | undefined;

  ngOnInit(): void {
    this.catalogue$ = this.monservice.getCatalogue();
  }
}