import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../service/report.service";
import {Report} from "../../model/Report";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report: Report = new Report();

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reportService.getStatistic()
      .subscribe(resp => {
        this.report = resp;
      })
  }

  generateCsv() {
    this.reportService.generateCsv(this.report.operators)
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'operators.csv';
        link.click();

        window.URL.revokeObjectURL(url);
      }, error => {
        console.error('Помилка при генерації CSV:', error);
      });
  }
}
