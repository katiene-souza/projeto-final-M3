import { UserModule } from "../userModule";
import * as bcrypt from "bcrypt";

const repository = UserModule.build().userRepository;

  
  it('should create a user', async () => {
    
    const mock = {
        email: 'email@',
        password: '123',
        nickname: "string",
        photo: "photo"
    }


    const expected = {
      data: mock,
      message: 'User Created',
      status: 200,
    };
  
   //expect().toStrictEqual(expected);
  });