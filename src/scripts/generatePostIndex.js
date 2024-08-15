import { readdirSync, writeFileSync } from "fs";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { default as matter } from "gray-matter";

const blogDir = path.join(
	dirname(fileURLToPath(import.meta.url)),
	"../data/blog"
);
const postDir = path.join(blogDir, "/posts");
const indexedPosts = [];

readdirSync(postDir).forEach((file) => {
	if (path.extname(file) === ".md") {
		indexedPosts.push(matter.read(path.join(postDir, file)).data);
	}
});

writeFileSync(
	path.join(blogDir + "/post-indexes.json"),
	JSON.stringify(indexedPosts, null, 2)
);
