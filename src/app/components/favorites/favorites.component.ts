import { Component, OnInit } from '@angular/core';
import { ICatDataSaved } from 'src/model/catdataapi';
import { CatApiService } from 'src/services/cat-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  catDataList: ICatDataSaved[] = [];
  test = [
    { id: 'cnq', url: 'https://cdn2.thecatapi.com/images/cnq.jpg' },
    { id: 'brh', url: 'https://cdn2.thecatapi.com/images/brh.jpg' },
    { id: 'AHdGWAPcF', url: 'https://cdn2.thecatapi.com/images/AHdGWAPcF.jpg' },
    { id: 'b08', url: 'https://cdn2.thecatapi.com/images/b08.jpg' },
    { id: 'byQhFO7iV', url: 'https://cdn2.thecatapi.com/images/byQhFO7iV.jpg' },
    
  ];
  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.loadCatDataList();
    console.log(this.test);
    console.log(this.catDataList);
  }

  loadCatDataList(): void {
    this.catApiService.getSavedCatData().subscribe((result) => {
      this.catDataList = result;
    });
  }

}
