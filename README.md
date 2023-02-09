## TRELLO LINK : 
https://trello.com/invite/thp90/ATTI42989d1d6f8af10835eaee8a8bc19a8cB816F44E



https://mui.com/

## My backEnd

https://bbc-4lw2.onrender.com/



### API REFERENCES !


## [GET:   --   topics /api/topics](#topics)

## [GET:   --   article/api/articles](#articles)
## [GET:   --   article_id/api/articles/:article_id](#article_id)
## [GET:   --   article_id_comments/api/articles/:article_id/comments](#article_id_comments)

## [POST:  --   post_article_id_comments/api/articles/:article_id/comments](#post_article_id_comments)
## [PATCH: --   patch_article_id_comments/api/articles/:article_id/comments](#patch_article_id_comments)

## [GET:   --   users/api/users](#users)



---
## Endpoint : `/api/topics` <a id='topics'></a>

### Table DB : 
| Field         | Type                 | Description           |
| ------------  | ------------------- | --------------------- |
| slug          | VARCHAR (Primary Key)| Unique identifier     |
| description   | VARCHAR             | Description of topic  |

### Réponse : 
```javascript
{
  "topics": [
    {
      "slug": "coding",
      "description": "Code is love, code is life"
    },
    {
      "slug": "football",
      "description": "FOOTIE!"
    },
    {
      "slug": "cooking",
      "description": "Hey good looking, what you got cooking?"
    }
  ]
}
```
---
## GET:   --   [topics] /api/topics <a id="topics"> </a>

## GET:   --   [articles]/api/articles <a id="articles"> </a>
## GET:   --   [article_id]/api/articles/:article_id <a id="article_id"> </a>
## GET:   --   [article_id_comments]/api/articles/:article_id/comments <a id="article_id_comments"> </a>

## POST:  --   [post_article_id_comments]/api/articles/:article_id/comments <a id="post_article_id_comments"> </a>
## PTACH: --   [patch_article_id_comments]/api/articles/:article_id/comments <a id="patch_article_id_comments"> </a>

## GET:   --   [users]/api/users <a id="users"> </a>
