export type ProjectTech =
    | 'firebase'
    | 'react'
    | 'typescript'
    | 'postgresql'
    | 'node.js'
    | 'express.js'
    | 'redis'
    | 'redux'
    | 'aws'
    | 'javascript'
    | 'webpack'
    | 'html'
    | 'css'
    | 'chakraui'

export interface Project {
    projectName: string
    projectSubtitle: string
    projectDescription: string
    projectImg: string
    projectTechUsed: ProjectTech[]
    links: {
        github: string
        live: string
    }
}
