import {Component, Injectable} from '@angular/core';
import {
  IDatasource,
  IGetRowsParams,
} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

const pageSiz = 100;

interface Response<T> {
  totalPassengers: number;
  totalPages: number;
  data: T[];
}

export interface PassengerListModel {
  _id: string
  name: string
  trips: number
  __v: number
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PassengerDataSource implements IDatasource {

  page = 0;
  pageSize = 100;
  constructor(public http: HttpClient) {
  }

  getRows(params: IGetRowsParams): void {
    this.http
      .get<Response<PassengerListModel>>("https://api.instantwebtools.net/v1/passenger", {
        params: {
          page: this.page,
          size: this.pageSize
        }
      }).pipe(tap(res => {
      params.successCallback(res.data, res.totalPassengers);
      this.page++;
    }))
      .subscribe({
          next: res => console.log(res,params),

        }
      );
  }
}


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid-playground.component.html',
  styleUrls: ['./ag-grid-playground.component.scss']
})
export class AgGridPlaygroundComponent {


  columnDefs = [
    {field: 'name'},
    {field: 'trips'},
    {field: '_id'},
  ];

  constructor(public passengerDataSource: PassengerDataSource) {
  }

  protected readonly pageSize = pageSiz;
}
