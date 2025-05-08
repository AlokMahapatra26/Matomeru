import { getDbConnection } from "./db";

export async function getResumes(userId: string){
    const sql = await getDbConnection();

    const resume = await sql`SELECT * from pdf_summaries where user_id = ${userId} ORDER BY created_at DESC`;
    return resume;

}


export async function getResumeById(id:string) {
    try{
        const sql = await getDbConnection();
        const [resume] = await sql`SELECT * FROM pdf_summaries where id=${id}`;

        return resume;
    }catch(error){
        console.error('Error fetching resume')
        return null
    }
}