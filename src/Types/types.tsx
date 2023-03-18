export type ProjectTech =
    | 'firebase'
    | 'react'
    | 'typescript'
    | 'postgresql'
    | 'node.js'
    | 'express.js'

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
