import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class RedditSearchServiceService {

private response: any;
constructor(private http: Http) { }

public searchSubreddit(numposts, srname):Observable<any>{
      //call reddit's API for this subreddit and chosen name
      return this.http.get("https://www.reddit.com/r/"+srname+"/top/.json?limit="+numposts)
      .do(data=>{
        this.response = data.json();
      });
}

public errorAsynCall(srname):Observable<any>{
  /*called if error is received, try the search feature if it gives any results instead of
  looking for the actual subreddit. If we still don't get anything, show the error.*/
  return this.http.get("https://www.reddit.com/search.json?q="+srname+"&sort=top&limit=10")
      .do(data=>{
        this.response = data.json();
      });
 }

 public handleError(err, is_error) {
  /*when all else fails, return error to component, which breaks the execution
  and displays error*/
  console.error("Error is:", err);
  is_error = true;
  return is_error; 
}

}
