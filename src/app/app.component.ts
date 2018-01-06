import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'; //for HTTP requests
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
  private response: Response[];
  private id: int;
  private record: any = [];
  private raw_created: any;
  private created_at_date: any;
  private raw_edited: any;
  private edited_at_date: any;

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
      this.response = data.json();
      //console.log("In searchsubreddit:", this.response);
      this.handleResponse(this.response.data);
    }, error => console.log("ERROR:",error));

}

	public handleResponse(this.response.data){
		for (this.id = 0; this.id < this.response.data.children.length; this.id++){
				this.record = this.response.data.children[this.id].data;
                this.raw_created = this.record.created;
                this.created_at_date = new Date(0);
                this.created_at_date.setUTCSeconds(this.raw_created);

                this.raw_edited = this.record.edited;
                this.edited_at_date = new Date(0);
                this.edited_at_date.setUTCSeconds(this.raw_edited);

                this.record = {'title':this.record.title,
                    'url': this.record.url,
                    'author': this.record.author,
                    'date_created': this.created_at_date.toDateString(),
                    'last_edited':this.edited_at_date.toDateString(),
                    'thumbnail': this.record.thumbnail,
                    'score': this.record.score,
                    'num_comments': this.record.num_comments
                };
                console.log("Record #",this.id+1,":",this.record);
	}
}
}
