/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFeeds
// ====================================================

export interface getFeeds_getFeeds_user {
  __typename: "User";
  nickname: string;
  avatar: string | null;
}

export interface getFeeds_getFeeds_comments_user {
  __typename: "User";
  nickname: string;
  avatar: string | null;
}

export interface getFeeds_getFeeds_comments {
  __typename: "Comment";
  id: number;
  user: getFeeds_getFeeds_comments_user;
  comment: string;
  isMine: boolean;
  createdAt: string;
}

export interface getFeeds_getFeeds {
  __typename: "Photo";
  id: number;
  user: getFeeds_getFeeds_user;
  photoUrl: string;
  caption: string | null;
  numberOfLikes: number;
  numberOfComments: number;
  comments: (getFeeds_getFeeds_comments | null)[] | null;
  isMine: boolean;
  isLiked: boolean;
  createdAt: string;
}

export interface getFeeds {
  getFeeds: (getFeeds_getFeeds | null)[] | null;
}
