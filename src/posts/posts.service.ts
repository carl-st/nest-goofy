import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Post } from './post.entity';


@Injectable()
export class PostsService extends TypeOrmCrudService<Post> {
    constructor(@InjectRepository(Post) repo) {
        super(repo);
    }

    async findAll(): Promise<Post[]> {
        return await this.repo.find();
    }
}