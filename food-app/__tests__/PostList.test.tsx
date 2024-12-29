import { Post } from "@prisma/client";

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