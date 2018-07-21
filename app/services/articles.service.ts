import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = 'assets/data/';
  constructor(private http: Http) { }

  public getArticleList(): Observable<any> {
      return this.http.get(this.url + 'articles_list.json');
  }

  public getArticleByTitle(url): Observable<any> {
    return this.http.get(this.url + url + '.json');
  }
  
}
