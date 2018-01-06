import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RedditSearchServiceService {

private response: any[];

  constructor(private http: Http) { }

  public searchSubreddit(srname):Observable<any[]>{
        return this.http.get("https://www.reddit.com/search.json?q="+srname+"&sort=top&limit=10")
        .do(data=>{
          this.response = data;
          console.log(data);
        })
        .catch(console.log("ERROR!!!"));
  }

}
