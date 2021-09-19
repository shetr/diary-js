const fs = require('fs')

if(process.argv.length != 3) {
    console.log("usage: gen-project-info.js <out_file>");
} else {
    const outFile = process.argv[2];
    
    fs.readFile("package.json", 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        let date = new Date();

        const outContent = `
// WARNING: Don't make changes to this file. It will be generated automatically with each build.
const projectInfo = {
"buildDate": new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}),
"packageInfo": ${data}
};
export { projectInfo };
        `;

        fs.writeFile(outFile, outContent, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
        })
    })
}