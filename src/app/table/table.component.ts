import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: any;
  @Input() rows: Array<string>;
  @Input() columns: Array<string>;
  buckets: Array<any>;
  selectedRegion: string;
  constructor() {
    // this.columns.forEach(function (value) {
    //   console.log(value);
    // });

    const largestCluster = this.table.filter(item => item.Column === 'all' && item.Score > 60 && item.Score < 70).length;
    console.log(largestCluster);

  }

  colorTable(Score) {
    let color = null;
    switch (true) {
      case Score > 70: color = 'blue';
        break;
      case Score > 65: color = 'light-blue';
        break;
      case Score > 60: color = 'white';
        break;
      case Score > 55: color = 'light-red';
        break;
      default: color = 'red';
    }
    return color;
  }

  sortedTable(row, column) {
    return this.table.filter(item => item.Column === column && item.Row === row);
  }
  ngOnInit() {
  }

}
