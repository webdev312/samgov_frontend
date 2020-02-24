import { Component } from '@angular/core';
import { DatamngService } from './datamng.service';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
  info: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'info', 'productcode']
  dataSource: any;

  constructor(private datamng: DatamngService){

  }

  ngOnInit(){
    this.datamng.getData().subscribe(data => {
      this.dataSource = data;
      // console.log(data);
    })
  }

  onDownload(){
    var link = document.createElement("a");
    link.download = "naics.xlsx";
    link.href = "http://localhost:8080/test.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("download")
  }
}
