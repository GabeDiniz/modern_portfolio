// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { sanityClient } from '../../lib/sanity';
import { Project } from "../../typings";

// preview is a file asset, so resolve its URL for the <video> tag
const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->,
    preview { asset->{ url } }
  }
`

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects: Project[] = await sanityClient.fetch(query)

    res.status(200).json({ projects })
  }