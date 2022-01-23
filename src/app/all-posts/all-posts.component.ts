import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordPressAPIService } from '../word-press-api.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private service:WordPressAPIService,private router:Router) { }
  allPosts:any;
  ngOnInit(): void {
    this.service.getAllPosts().subscribe((result)=>{
      //console.log(result);
      this.allPosts = result;
    })
  }

  getPostbyId(id:String)
  {
    this.router.navigate(['/post']);
   /* this.service.getPostById(id).subscribe((result)=>{
      console.log(result);
    })*/
  }

}
