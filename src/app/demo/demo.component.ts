import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { updateCountry } from "./../store/action"



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {
  countryId: any = 0
  countryList: any = [
    {
      id: 1,
      name: 'India',
      states: [
        {
          id: 101,
          name: 'India A'
        },
        {
          id: 102,
          name: 'India B'
        }
      ]

    },
    {
      id: 2,
      name: 'China',
      states: [
        {
          id: 201,
          name: 'China A'
        },
        {
          id: 202,
          name: 'China B'
        }
      ]

    }
  ];



  constructor(private store: Store<any>) {

  }
  ngOnInit(): void {
    //Setting countryId from data coming from store
    this.store.select('country').subscribe((data: any) => {
      this.countryId = data?.id
    });
  }

  selectChange() {
    let country = this.countryList.find((ele: any) => ele.id == this.countryId);
    this.store.dispatch(updateCountry({ country }));
  }

}
