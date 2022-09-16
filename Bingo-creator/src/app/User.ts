export interface User
{
  id?: number,
  userName: string | null,
  email: string | null,
  password: string | null,
  checkPassword?: string

}
