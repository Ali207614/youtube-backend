const path = require("path")
const render = (htmlFile) => {
    return path.join(process.cwd(),'src' , 'assets' , 'pages' , htmlFile)
}

module.exports = render

