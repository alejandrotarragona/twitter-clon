export interface Tweet extends TweetBody {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'tweet'
  _updatedAt: string
  blockTweet: boolean
}

export type TweetBody = {
  text: string
  username: string
  profileImg: string
  image?: string
}

export interface Comment extends CommentBody {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'comment'
  _updatedAt: string
  tweet: {
    _ref: string
    _type: 'reference'
  }
}

export type CommentBody = {
  comment: string
  tweetId: string
  username: string
  profileImg: string
}
