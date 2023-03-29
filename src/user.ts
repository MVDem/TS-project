export class User {
  userName: string;
  userAvatarUrl: string;

  constructor(userName: string, userAvatarUrl: string) {
    this.userAvatarUrl = userAvatarUrl;
    this.userName = userName;
  }
}
