import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    // const res = await fetch("https://f9uhdmkp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22social%22%5D");

    const data = await res.json()
    const socials: Social[] = data.socials;

    // console.log("fetching", skills)

    return socials;
}