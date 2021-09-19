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
const buildDate = new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()});

const packageInfo = ${data};
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