import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'; //for HTTP requests
import 'rxjs/add/operator/toPromise'; //for resolving responses
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private subreddit: string;
  private response: any;
  private record: any[];

  constructor(
  	private http: Http) {
  }

  public handleError(error) {
 	console.log(error);
}

  public searchsubreddit(srname){
  	this.subreddit = srname;
  	var search_url = "https://www.reddit.com/search.json?q="+this.subreddit+"&sort=top&limit=10";

  	this.response = this.http.get(search_url)
  	  .map((response:Response) => {
                console.log(response.json());
                response.json();
            }).subscribe();

  	console.log("Response:"+this.response);
  	console.log("Data:"+this.response.data)
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
