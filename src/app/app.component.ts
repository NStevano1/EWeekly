import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private platform: Platform, private file: File, private router: Router) {
    this.platform.ready().then(() => {
      this.checkDataExists();
    });
  }

  checkDataExists() {

  console.log('Check file');
  
  this.file.checkDir(this.file.documentsDirectory, 'data').then(dir =>
    this.router.navigate(['/days'])
  ).catch(err =>
    this.router.navigate(['/home'])
  );
  
  }
}
