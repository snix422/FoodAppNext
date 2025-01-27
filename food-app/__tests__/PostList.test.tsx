import PostsList from "@/components/Blog/PostsList";
import { Post } from "@prisma/client";
import { render,screen } from "@testing-library/react";

const mockPosts: Post[] = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content for Post 1',
        dataPublikacji: new Date('2024-01-01'),
        authorId: 101,
        imageUrl: 'https://example.com/image1.jpg',
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content for Post 2',
        dataPublikacji: new Date('2024-02-01'),
        authorId: 102,
        imageUrl: 'https://example.com/image2.jpg',
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Content for Post 3',
        dataPublikacji: new Date('2024-03-01'),
        authorId: 103,
        imageUrl: 'https://example.com/image3.jpg',
    },
];

jest.mock('../components/PostItem', () => {
    return ({ data }: { data: Post }) => <div data-testid="post-item">{data.title}</div>;
});

describe('PostsList Component', () => {
    it('renders all posts correctly', () => {
        render(<PostsList posts={mockPosts} />);
        const postItems = screen.getAllByTestId("post-item")
        expect(postItems).toHaveLength(mockPosts.length);
        expect(postItems[0]).toHaveTextContent(mockPosts[0].title);
        expect(postItems[1]).toHaveTextContent(mockPosts[1].title);
    });

    it('renders an empty list when no posts are provided', () => {
        render(<PostsList posts={[]} />);
        const postItems = screen.queryAllByTestId('post-item');
        expect(postItems).toHaveLength(0);
    });
});