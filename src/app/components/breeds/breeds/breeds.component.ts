import { Component, OnInit } from '@angular/core';
import { CatApiService } from 'src/services/cat-api.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  breedList: any[] = [];
  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.loadBreedList();
    //this.loadImage('pers');
  }

  loadBreedList(): void {
    this.catApiService.getBreeds().subscribe((result) => {
      this.breedList = [];
      result.map((x) => {
        //x.url = this.loadImage(x.id);
        // this.breedList.push(x);
        this.loadImage(x);
      });
      console.log(this.breedList);
    });
  }

  loadImage(breed: any): void {
    this.catApiService.getBreedImage(breed.id).subscribe((result) => {
      breed.url = result[0].url;
      this.breedList.push(breed);
    });
  }
}
