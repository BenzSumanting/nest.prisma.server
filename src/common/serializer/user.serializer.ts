import { Exclude, Expose } from 'class-transformer';

export class UserSerializer {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserSerializer>) {
    Object.assign(this, partial);
  }
}
