import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    public dataService: DataService,
    private modalCtrl: ModalController,) { }

  friends: any = [];

  async ngOnInit() {
    await this.storage.create();

    
  }

  async close(){
    await this.modalCtrl.dismiss();
    
  }

  ngAfterViewInit(){
    this.http.get('https://demo8634050.mockable.io')
    .subscribe(data =>{
      console.log();
      this.friends = data;
    })
  }

}
