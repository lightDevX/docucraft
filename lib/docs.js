import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';


const postDirectory = path.join(process.cwd(), "docs")



export function getDocuments() {

    const fileNames = fs.readdirSync(postDirectory);

    const allDocuments = fileNames.map(fileName => {
        const id = fileName.replace(".md", "");  //Doc name as an ID

        const fullPath = path.join(postDirectory, fileName);  //getting full path of the docs folder

        const fileContents = fs.readFileSync(fullPath, "utf8");  //reading the file and converting utf8

        const matterResult = matter(fileContents);  //file contents created an object using the matter plugin
        console.log(matterResult);

        return {
            id,
            ...matterResult.data,
        }
    });

    return allDocuments.sort((a, b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
    })

}

export async function getDocumentContent(id) {
    const fullPath = path.join(postDirectory, `${id}.md`); // get document content
    const fileContents = fs.readFileSync(fullPath, "utf8");  //reading the file and converting utf8
    const matterResult = matter(fileContents);  //file contents created an object using the matter plugin

    const processContents = await remark().use(html).process(matterResult.content) // convert to html content and hold process aysnc operation
    const contentHtml = processContents.toString() // convert to string

    return {
        id,
        ...matterResult.data,
        contentHtml,
    }

}