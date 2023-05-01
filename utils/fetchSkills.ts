import { Skill } from "../typings";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    
    // Temporary API to allow vercel to successfully build
    // const res = await fetch("https://f9uhdmkp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22skill%22%5D");

    const data = await res.json()
    const skills: Skill[] = data.skills;

    // console.log("fetching", skills)

    return skills;
}