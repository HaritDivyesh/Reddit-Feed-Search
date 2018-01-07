import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
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
  private id: number;
  public all_records: any = []; //to hold all response posts
  public record: any = []; //holds single post, repopulated with each post in response
  private raw_created: number;
  private created_at_date: any;
  private raw_edited: number;
  private edited_at_date: any;
  public is_error: Boolean = false;
  public isClicked: Boolean = false;
  private chosen_numposts: number;
  private chosen_srname: string;
  private thumbnails: any[] = ["", "default", "self", "spoiler", "nsfw"];
  private random_numposts: any[] = [5,10,15,20]
  private random_srname: string[] = ['funny', 'news', 'pics', 'soccer', 'music', 'movies', 'videos', 'aww', 'food', 'askreddit',
                                     'science', 'todayilearned'];

  constructor(
  	private http: Http,
  	private redditService:RedditSearchServiceService) {
  }

  public searchsubreddit(numposts, srname){
  	this.subreddit = srname;

    //Call service for this subreddit
  	this.redditService.searchSubreddit(numposts, this.subreddit).subscribe(data => {
      this.response = data.json();
      this.is_error = false;
      this.handleResponse(this.response, false);
    }, error => {(
    	this.is_error = this.redditService.handleError(error, this.is_error),
    	this.handleError(this.response)
    )});

}

  public handleError(temp_response){
    //Deal with errors
    this.redditService.errorAsynCall(this.subreddit).subscribe(data => {
      this.response = data.json();
      this.handleResponse(this.response, true);
    });
  }

  public searchrandom(){
    //Get random number of posts and subreddit, and send to the service
    this.chosen_numposts = this.random_numposts[Math.floor(Math.random() * this.random_numposts.length)];
    this.chosen_srname = this.random_srname[Math.floor(Math.random() * this.random_srname.length)];
    this.isClicked = true;
    this.searchsubreddit(this.chosen_numposts, this.chosen_srname);
  }


	public handleResponse(temp_response, temp_is_error){
    this.all_records = [];
    this.record = [];
  	if (temp_is_error){ //error returned
      return;
  	}
		for (this.id = 0; this.id < temp_response.data.children.length; this.id++){ //for each post received
			this.record = temp_response.data.children[this.id].data;
      if (this.thumbnails.includes(this.record.thumbnail)){ //if no thumbnail, use default reddit logo
        this.record.thumbnail = "../assets/reddit_thumbnail_2.png"
      }
      //convert raw numbered dates to date format
      this.raw_created = this.record.created;
      this.created_at_date = new Date(0);
      this.created_at_date.setUTCSeconds(this.raw_created);
      this.raw_edited = this.record.edited;
      this.edited_at_date = new Date(0);
      this.edited_at_date.setUTCSeconds(this.raw_edited);

      //populate each post with these details
      this.record = {'title':this.record.title,
          'url': this.record.url,
          'author': this.record.author,
          'created_at': this.created_at_date.toDateString(),
          'edited_at':this.edited_at_date.toDateString(),
          'thumbnail': this.record.thumbnail,
          'score': this.record.score,
          'comments': this.record.num_comments,
          'permalink': this.record.permalink
      };

      //update total records with each post
      this.all_records.push(this.record);
	  }
	}
}