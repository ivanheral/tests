var bs = require('browser-sync')
var historyApiFallback = require('connect-history-api-fallback')
var out = '_site'

bs({
    server: `${out}`,
    middleware: [historyApiFallback()]
})

export default async function (task) {
    await task.parallel(['html', 'css'])
    await task.watch('src/css/**/*.*', ['css', 'changes'])
    await task.watch('src/html/index.html', ['html', 'changes'])
    await task.watch(`${out}/**/*.js`, 'changes')
}

export async function html(task) {
    await task.source('src/html/index.html').target(`${out}`)
}

export async function changes(task) {
    bs.reload('*')
}

export async function css(task) {
    await task.source('src/css/app.sass').sass().autoprefixer().target(`${out}`)
}
