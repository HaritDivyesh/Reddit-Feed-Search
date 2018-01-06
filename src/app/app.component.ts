import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'; //for HTTP requests
import 'rxjs/add/operator/toPromise'; //for resolving responses
import 'rxjs/add/operator/map';
import {RedditSearchServiceService} from './reddit-search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private subreddit: string;
  private response: any[];
  private record: any[];

  constructor(
  	private http: Http,
  	private redditService:RedditSearchServiceService) {
  }

  public handleError(error) {
 	console.log(error);
}

  public searchsubreddit(srname){
  	this.subreddit = srname;
  	this.redditService.searchSubreddit(this.subreddit).subscribe(data => {
      this.response = data;
    }, error => console.log(error));

  console.log("MY RESPONSE:", this.response);

  	/* var search_url = "https://www.reddit.com/search.json?q="+this.subreddit+"&sort=top&limit=10";
  	 this.http.get(search_url)
  	  .map((data:any) => {
                console.log("IN MAP:",data.json());
                data.json();
            }).subscribe(
            (data: any) => {
            	this.response = data;
            },
            err => console.log(err)
            );

  	console.log("Response:"+this.response);
  	console.log("Data:"+this.response.data);
  	*/

  	/*console.log("Data:"+this.response.data.data.children)
  	
  	for (s in this.response.data.data.children){
  				this.record = this.response.data.data.children[s].data;
                console.log(this.record.title);
                console.log(this.record.created);
                console.log(this.record.edited);
                console.log(this.record.url);
                console.log(this.record.selftext);
                console.log(this.record.num_comments);
  }
  */
}
}
