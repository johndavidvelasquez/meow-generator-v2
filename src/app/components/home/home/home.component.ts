import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CatApiService } from 'src/services/cat-api.service';
import { ICatData } from 'src/model/catdata';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(200, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(200, style({ opacity: 0 }))]),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut],
})
export class HomeComponent implements OnInit {
  catData: ICatData = { url: '', id: '' };
  imgLoading: boolean = false;

  constructor(
    private catApiService: CatApiService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refreshImage();
  }

  onClickNext(): void {
    this.refreshImage();
  }

  onClickAddToFavorites(): void {
    console.log("yes");
    this.catApiService.postSaveCatData(this.catData).subscribe((result) => {
      if (result != null) {
        this._snackBar.open('Added to Favorites', 'OK');
      }
    });
  }

  refreshImage(): void {
    this.imgLoading = true;
    this.catApiService.getNewCatData().subscribe((result) => {
      result.map((x) => (this.catData = x));
      this.imgLoading = false;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
