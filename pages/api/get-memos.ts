import type { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

const handler: NextApiHandler = async (req, res) => {
    try {
        const todos = await prisma.memo.findMany();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export default handler;