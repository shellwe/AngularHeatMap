import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Location';

  data: any;
  rows: any;
  columns: any;
  constructor(
    private http: HttpClient
  ) {
    http.get('http://localhost:3000/api').subscribe(res => {
      this.data = res;
      this.rows = new Set(this.data.sort((a, b) => a.Score - b.Score).reverse().map(table => table.Row));
      this.columns = new Set(this.data.map(table => table.Column));
      // console.log(this.data);
      // console.log(this.rows);
      // console.log(this.columns);
    });
  }

  ngOnInit() {
  }
}
