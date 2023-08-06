import { BlogModel, Blogs } from './blog.model';

export const initialBlogState: Blogs = {
  blogList: [
    {
      id: 1,
      title: 'Angular',
      description: 'Anglar is UI - frontend framework',
    },
    // {
    //   id: 2,
    //   title: 'React',
    //   description: 'React is UI - frontend framework',
    // },
    // {
    //   id: 3,
    //   title: '.NET',
    //   description: '.NET is UI - backend framework',
    // },
  ],
};
