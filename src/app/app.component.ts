import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-airlines';
  version = VERSION.full;

  public someFunction(sampleParam: string) {
    let name = "some value";
    const constVar = 10;

    console.log(name, constVar, sampleParam);
    return sampleParam;
  }
}
