import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CatApiService } from 'src/services/cat-api.service';
import { ICatData } from 'src/model/catdata';
import { trigger, transition, style, animate } from '@angular/animations';


const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(200, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(200, style({ opacity: 0 }))
  ])
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut]
})


export class HomeComponent implements OnInit {

  imgUrl: string = '';
  catData: ICatData[] = [];
  imgLoading: boolean = false;

  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.refreshImage();
  }

  onClickNext(): void {
    this.refreshImage();
  }

  refreshImage(): void {
    this.imgLoading = true;
    this.catApiService.getNewCatData().subscribe((result) => {
      result.map((x) => (this.imgUrl = x.url));
      this.imgLoading = false;
    });
    console.log(this.imgUrl);
  }
}
