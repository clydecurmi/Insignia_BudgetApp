import { Component, OnInit } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor(
    private storage: Storage,
    public dataService: DataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
