import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: Replace this with your own data model type
export interface MoviesTableItem {
  title: string;
  description: string;
  release_date: string;
  votes: number;
  num_of_actors: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MoviesTableItem[] = [
  {title: "Demo1", description: 'Demo1', release_date: 'Demo1', votes: 1, num_of_actors: 1},
  {title: "Demo1", description: 'Demo1', release_date: 'Demo1', votes: 1, num_of_actors: 1},
  {title: "Demo1", description: 'Demo1', release_date: 'Demo1', votes: 1, num_of_actors: 1},
  {title: "Demo1", description: 'Demo1', release_date: 'Demo1', votes: 1, num_of_actors: 1},
];

/**
 * Data source for the MoviesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable()
export class MoviesTableDataSource extends DataSource<MoviesTableItem> {
  data: MoviesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private http: HttpClient) {
    super();
    this.http.get('http://localhost:8000/api/movies/')
        .subscribe(result => console.log(result));
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MoviesTableItem[]> {

    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MoviesTableItem[]): MoviesTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MoviesTableItem[]): MoviesTableItem[] {
    // if (!this.sort || !this.sort.active || this.sort.direction === '') {
    //   return data;
    // }

    // return data.sort((a, b) => {
    //   const isAsc = this.sort?.direction === 'asc';
    //   switch (this.sort?.active) {
    //     case 'name': return compare(a.name, b.name, isAsc);
    //     case 'id': return compare(+a.id, +b.id, isAsc);
    //     default: return 0;
    //   }
    // });
    return data;
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
