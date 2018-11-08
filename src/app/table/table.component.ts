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
  colorTable(column, cell) {
    const sortedTable = this.table
    .filter(item => item.Column === column)
    .sort((a, b) => a.Score - b.Score)
    .map(item => item.Score);
    let opacity = 0;
    if (cell.Score >= 70) {
      opacity = sortedTable.reverse().indexOf(cell.Score);
      return `blue-${opacity}`;
    } else if (cell.Score <= 60) {
      opacity = sortedTable.indexOf(cell.Score);
      return `red-${opacity}`;
    } else {
      return 'cell';
    }
  }
  sortedTable(row, column) {
    return this.table.filter(item => item.Column === column && item.Row === row);
  }
  ngOnInit() {
  }

}
