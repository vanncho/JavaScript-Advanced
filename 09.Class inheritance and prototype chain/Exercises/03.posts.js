function solve() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {

            let str = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                str += '\nComments:\n';

                for (let i = 0; i < this.comments.length; i++) {

                    if (i < this.comments.length - 1) {
                        str += ` * ${this.comments[i]}\n`;
                    } else {
                        str += ` * ${this.comments[i]}`;
                    }
                }
            }

            return str;
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

//let post = new Post("Post", "Content");
// console.log(post.toString());
//
// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
//
// console.log(scm.toString());

let classes = solve();
let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();