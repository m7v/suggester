import { Model, many, ORM } from 'redux-orm';

export class Post extends Model {
    static get fields() {
        return {
            // Define a many-sided relation - one Post can have many Comments,
            // at a field named "comments"
            comments: many('Comment')
        };
    }

    static reducer(action, post) {
        switch (action.type) {
            case 'CREATE_POST' : {
                // Queue up the creation of a post instance
                post.create(action.payload);
                break;
            }
            case 'ADD_COMMENT' : {
                const {payload} = action;
                const {postId, commentId} = payload;
                // Queue up the addition of a relation between this Comment ID
                // and this post instance
                post.withId(postId).comments.add(commentId);
                break;
            }
        }
    }
}

Post.modelName = 'Post';

export class Comment extends Model {
    static get fields() {
        return {};
    }

    static reducer(action, comment) {
        switch (action.type) {
            case 'ADD_COMMENT' : {
                const {payload} = action;
                const {commentId, commentText} = payload;

                // Queue up the creation of a comment instance
                comment.create({id: commentId, text: commentText});
                break;
            }
        }
    }
}

Comment.modelName = 'Comment';

// Create a Schema instance, and hook up the Post and Comment models
export const schema = new ORM();
schema.register(Post, Comment);
