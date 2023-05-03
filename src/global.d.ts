declare global {
  type ModifyType<T, R> = Omit<T, keyof R> & R;

  interface IMenuItem {
    name: string;
    icon: IconType;
    route: string;
  }

  interface IUserInfo {
    id: number;
    name: string;
    email: string;
    modified: string;
  }
}

export {};
