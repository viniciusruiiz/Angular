import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Gráfico de processamento
    var html = <HTMLCanvasElement>document.getElementById('myChart');
    var ctx = html.getContext('2d')
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '00:01', '00:02', '00:03', '00:04'],
            datasets: [{
                label: "Uso de CPU (%)",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            // elements: {
            //     line: {
            //         tension : 0
            //     }
            // },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var html2 = <HTMLCanvasElement>document.getElementById('myChart2');
    var ctx2 = html2.getContext('2d')
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['00:00', '00:01', '00:02', '00:03', '00:04'],
            datasets: [{
                label: "Uso de CPU (%)",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var html3 = <HTMLCanvasElement>document.getElementById('myChart3');
    var ctx3 = html3.getContext('2d')
    var myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['00:00', '00:01', '00:02', '00:03', '00:04'],
            datasets: [{
                label: "Dados (Kbps/s)",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

    var html4 = <HTMLCanvasElement>document.getElementById('myChart4');
    var ctx4 = html4.getContext('2d')
    var myChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Disponível (GB)', 'Usado(GB)'],
            datasets: [{
                label: null,
                data: [12, 19],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI
        }
    });

    var html5 = <HTMLCanvasElement>document.getElementById('myChart5');
    var ctx5 = html5.getContext('2d')
    var myChart5 = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ['00:00', '00:01', '00:02', '00:03', '00:04'],
            datasets: [{
                label: "Temperatura (ºC)",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });
  }

}
