import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RedditSearchServiceService {

private response: any;

  constructor(private http: Http) { }

  public searchSubreddit(srname):Observable<any>{
        return this.http.get("https://www.reddit.com/r/"+srname+"/top/.json?limit=10")
        .do(data=>{
          this.response = data.json();
          //console.log("In service:", this.response);
        });
  }

  public handleError(err, is_error) {
    console.error("Error is:", err);
    is_error = true;
    return is_error;
  }

}
