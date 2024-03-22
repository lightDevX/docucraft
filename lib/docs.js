import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


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