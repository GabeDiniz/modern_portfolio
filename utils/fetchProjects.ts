import { Project } from "../typings";

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    
    // Temporary API to allow vercel to successfully build
    // const res = await fetch("https://f9uhdmkp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22project%22%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20technologies%5B%5D-%3E%0A%20%20%7D");

    const data = await res.json()
    const projects: Project[] = data.projects;

    // console.log("fetching", skills)

    return projects;
}