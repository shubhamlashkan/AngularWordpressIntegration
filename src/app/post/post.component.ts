import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WordPressAPIService } from '../word-press-api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any;
  constructor(private service:WordPressAPIService,private route: ActivatedRoute,) { }
  id:string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getPostbyId(this.id);
  }

  getPostbyId(id:String)
  {

    this.service.getPostById(id).subscribe((result)=>{
      console.log(result);
      this.post = result;
    })
  }

}
