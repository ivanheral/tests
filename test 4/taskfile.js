var bs = require('browser-sync')
var historyApiFallback = require('connect-history-api-fallback')
var env = 'development'
var fw = 'no_fw'
var out = '_site'

bs({
    server: `${out}`,
    middleware: [historyApiFallback()]
})

export default async function (task) {
    await task.parallel(['js', 'html'])
    await task.watch('src/js/**/*.*', 'js')
    await task.watch('src/html/index.html', 'html')
    await task.watch(`${out}/**/*.*`, 'changes')
}

export async function html(task) {
    await task.source('src/html/index.html').target(`${out}`)
}

export async function changes(task) {
    bs.reload()
}

export async function js(task) {
    await task.source('src/js/main.js').build({
        fw: `${fw}`,
        env: `${env}`
    }).target(`${out}`)
}
