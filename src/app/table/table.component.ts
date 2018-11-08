import { Component, OnInit, Input } from '@angular/core';

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
  }
  colorTable(Score) {
    if (Score > 70) {
      return 'blue';
    }
    if (Score > 65) {
      return 'light-blue';
    }
    if (Score > 60) {
      return 'white';
    }
    if (Score > 55) {
      return 'light-red';
    }
    if (Score <= 50) {
      return 'red';
    }
    // Note: Explore why switch won't work
    // switch (Score) {
    //   case (Score => 71):
    //     return 'blue';
    //   case (Score => 61):
    //     return 'light-blue';
    //   case (Score => 51):
    //     return 'white';
    //   case (Score => 41):
    //     return 'light-red';
    //   default:
    //     return 'red';
    // }
  }
  sortedTable(row, column) {
    return this.table.filter(item => item.Column === column && item.Row === row);
  }
  ngOnInit() {
  }

}
