import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    
    // Temporary API to allow vercel to successfully build
    // const res = await fetch("https://f9uhdmkp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22pageInfo%22%5D%5B0%5D");

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", skills)

    return pageInfo;
}