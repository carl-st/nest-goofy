import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo) {
        super(repo);
    }

    async findAll(): Promise<User[]> {
        return await this.repo.find();
      }

    async findUser(username: string): Promise<User | undefined> {
        const findOneOptions = {
            username,
            // password: crypto.createHmac('sha256', loginUserDto.password).digest('hex'),
          };
        return await this.repo.findOne(findOneOptions);
    }
}