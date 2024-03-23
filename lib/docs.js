import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
    const fileNames = fs.readdirSync(postDirectory);

    const allDocuments = fileNames.map(fileName => {
        const id = fileName.replace(".md", "");
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        }
    });

    return allDocuments.sort((a, b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
    });
}

export async function getDocumentContent(id) {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processContents = await remark().use(html).process(matterResult.content);
    const contentHtml = processContents.toString();

    // Replace Markdown links with Next.js Link components
    const contentWithNextLinks = contentHtml.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, href) => {
        return `<Link href="${href}"><a>${text}</a></Link>`;
    });

    return {
        id,
        ...matterResult.data,
        contentHtml: contentWithNextLinks,
    };
}
