export type ProjectCategory = 
    | 'Full Stack' 
    | 'Security' 
    | 'ML/AI' 
    | 'Systems' 
    | 'Database' 
    | 'Mobile App';

export interface Project {
    id: string; // slug (url readble name ex. animal-drawing-app or bake-build)
    title: string;
    shortDescription: string;
    longDescription: string;
    featured: boolean; // featured projects show up on the home page
    category: ProjectCategory[];
    tags: string[]; // list of skills
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string; // if I have a link associated with the project
    highlights: string[];
}