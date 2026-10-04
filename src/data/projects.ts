import type { Project } from '../types/project';

export const projectsData: Project[] = [
    // add projects here
    {
        id: 'random-animal-drawing-website',
        title: 'Random Animal Drawing Website',
        shortDescription: 'Full-stack creative drawing board capturing user sketches inspired by dynamic animal API prompts.',
        longDescription:
            'A full-stack web application featuring an interactive Canvas API drawing board with customizable brushes, color selectors, and layer support. Built with a responsive React frontend and a Node.js/MongoDB backend to let users create, save, and browse community drawings.',
        featured: true,
        category: ['Full Stack', 'Database'],
        tags: ['JavaScript', 'HTML5 Canvas', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary', 'REST API'],
        imageUrl: '',
        githubUrl: 'https://github.com/Fadeela3/Random-Animal-Drawing-App',
        liveUrl: 'https://random-animal-drawing-app.onrender.com',
        highlights: [
            'Developed a full-stack creative application using the Canvas API to capture user-generated drawings based on dynamic prompts from an external animal API, deployed via Render',
            'Implemented a redundant storage system using Cloudinary for image hosting with a Base64 fallback stored via Mongoose',
            'Architected a RESTful backend with Express Router and Mongoose to manage drawing metadata, artist forms, and gallery retrieval',
            'Designed a responsive frontend gallery to dynamically render stored drawings and associated metadata from the database'
        ]
    },
    {
        id: 'sql-injection-web-attacks',
        title: 'SQL Injection & Web Attacks Lab',
        shortDescription: 'Hands-on security exploit lab demonstrating SQLi, XSS, and CSRF vulnerabilities in isolated environments.',
        longDescription:
            'A cybersecurity analysis project conducted within Dockerized container environments to demonstrate real-world web application vulnerabilities. Included auditing PHP source code, crafting custom malicious HTTP payloads for SQL injection, and executing cross-site scripting (XSS) and request forgery (CSRF) exploits.',
        featured: true,
        category: ['Security'],
        tags: ['SQL', 'PHP', 'Docker', 'JavaScript', 'Web Exploitation', 'HTTP Analysis'],
        imageUrl: '',
        highlights: [
            'Executed SQL injection, XSS, and CSRF attacks to demonstrate critical application security risks',
            'Identified and exploited PHP source code vulnerabilities within isolated Docker environments',
            'Analyzed and crafted specialized HTTP requests to extract sensitive database information'
        ]
    },
    {
        id: 'reinforcement-learning-gridworld',
        title: 'Reinforcement Learning Agent for Gridworld Navigation',
        shortDescription: 'Stochastic Markov Decision Process (MDP) solver evaluating optimal navigation policies under environmental uncertainty.',
        longDescription:
            'A reinforcement learning system built in Python to model stochastic gridworld environments where environmental uncertainty, such as wind pushing the agent off-course, affects movement outcome. Evaluates agent behavior across sparse, dense, and custom reward structures using dynamic programming techniques to calculate value functions and extract optimal state-action policies.',
        featured: true,
        category: ['ML/AI'],
        tags: ['Python', 'Reinforcement Learning', 'MDP', 'Dynamic Programming', 'Algorithms'],
        imageUrl: '',
        highlights: [
            'Engineered a stochastic gridworld MDP with customizable reward functions (sparse/dense/custom) to influence agent learning',
            'Modeled environmental uncertainty (e.g., wind forces knocking the agent off its intended path) through probabilistic state transitions',
            'Computed optimal policies via dynamic programming, demonstrating agent adaptability across varying reward structures'
        ]
    },
    {
        id: 'buffer-overflow-exploit',
        title: 'Buffer Overflow & ASLR Bypass',
        shortDescription: 'C and Assembly memory exploitation project bypassing ASLR via stack overread and offset calculations in GDB.',
        longDescription:
            'A low-level security research project demonstrating stack-based memory corruption on a containerized binary target. Bypassed Address Space Layout Randomization (ASLR) by leveraging an information-disclosure overread to leak a stack pointer, calculating buffer-to-return-address offsets in GDB, and deriving relative jump targets for execution control.',
        featured: true,
        category: ['Security', 'Systems'],
        tags: ['C', 'Assembly', 'GDB', 'ASLR', 'Memory Safety', 'Buffer Overflow', 'Linux'],
        imageUrl: '',
        highlights: [
            'Exploited a containerized mock target with ASLR through an overread and stack overflow',
            'Calculated buffer and return offsets in GDB, leveraging relative addressing from stack addresses leaked via overreads to gain execution control'
        ]
    },
    {
        id: 'atm-security-pentest',
        title: 'ATM Security & Penetration Testing',
        shortDescription: 'Two-phase C-based systems security project focusing on cryptographic protocol defense and peer offensive penetration testing.',
        longDescription:
            'A comprehensive defense-and-exploit systems security project in C simulating an ATM-Bank router network. In Phase 1, engineered custom OpenSSL encrypted protocols with multi-factor token authentication to defend against packet tampering and replay attacks. In Phase 2, conducted black-box vulnerability analysis on peer systems, intercepting sockets and executing request tampering exploits.',
        featured: true,
        category: ['Security', 'Systems'],
        tags: ['C', 'OpenSSL', 'Network Security', 'Cryptography', 'Sockets', 'Penetration Testing', 'Multi-Factor Auth'],
        imageUrl: '',
        highlights: [
            // Phase 1: Defensive Engineering & Protocol Design
            'Phase 1 (Defense): Authored a threat model analysis and engineered a secure C network protocol using OpenSSL and sockets to defend an ATM-Bank architecture against message forgery and buffer overflows',
            'Phase 1 (Defense): Implemented multi-factor authentication enforcing file-based token verification (.card files) alongside PIN credentials, documenting defensive controls and architectural safeguards',
            // Phase 2: Offensive Analysis & Exploitation
            'Phase 2 (Offense): Conducted security audits on peer software implementations to identify architectural weaknesses in network message handling',
            'Phase 2 (Offense): Intercepted and modified socket data in C to execute plaintext eavesdropping, request tampering (unauthorized withdrawals), and packet replay attacks, publishing proof-of-concept exploit documentation'
        ]
    },
    {
        id: 'nim-game-ai',
        title: 'Nim Game with AI',
        shortDescription: 'Interactive command-line execution of Nim featuring an AI agent utilizing Alpha-Beta Pruning for optimal decision-making.',
        longDescription:
            'A Python implementation of the mathematical game of strategy Nim. Designed with customizable initial board configurations and flexible match setups across human players, random-move agents, and an intelligent agent powered by Minimax with Alpha-Beta Pruning to calculate optimal move decisions.',
        featured: false,
        category: ['ML/AI'],
        tags: ['Python', 'AI', 'Alpha-Beta Pruning', 'Minimax', 'Game Theory', 'Algorithms'],
        imageUrl: '',
        highlights: [
            'Engineered customizable initial game configurations and player types (human vs. human, random agent, or Alpha-Beta AI agent)',
            'Implemented Minimax with Alpha-Beta Pruning to evaluate state trees and choose optimal moves',
            'Parsed user and file-based input data to represent and dynamically update the active game state in real-time'
        ]
    },
    {
        id: 'pretty-chill-todo-app',
        title: 'Pretty Chill Todo App',
        shortDescription: 'Clean React task management application with real-time filtering, localStorage persistence, and custom utility styling.',
        longDescription:
            'A responsive web application designed for seamless personal task tracking. Built with React to handle interactive add, complete, delete, and filter state transitions, paired with browser localStorage persistence and custom styling via FantaCSS.',
        featured: false,
        category: ['Full Stack'],
        tags: ['React', 'JavaScript', 'CSS', 'FantaCSS', 'localStorage', 'Netlify'],
        imageUrl: '',
        liveUrl: 'https://pretty-chill-todo-app.netlify.app',
        highlights: [
            'Developed a React-based todo application featuring interactive task creation, completion toggles, deletion, and status filtering',
            'Implemented persistent state across browser sessions using localStorage',
            'Styled interface with FantaCSS utility classes and deployed live on Netlify for public access'
        ]
    },

]