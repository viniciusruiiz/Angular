import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard - JScan';
  funcionario = "Juquinha";
  nomePC = "PC do Juquinha";
  processador = "Intel Core i7 7700"
}
