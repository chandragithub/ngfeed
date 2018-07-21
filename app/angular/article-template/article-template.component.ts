import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-template',
  templateUrl: './article-template.component.html',
  styleUrls: ['./article-template.component.css']
})
export class ArticleTemplateComponent implements OnInit {

  articleList = []
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticleByTitle(location.pathname.split('/')[2]).subscribe(data => {
      this.articleList = data.json();
    },
      error => {
        throw error;
      }) 
  }
}
