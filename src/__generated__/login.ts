/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "LoginResult";
  isSuccess: boolean;
  token: string | null;
  error: string | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  nickname: string;
  password: string;
}
