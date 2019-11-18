import { Post } from './post.entity';

describe('Post.Entity', () => {
  it('should be defined', () => {
    expect(new Post()).toBeDefined();
  });
});
