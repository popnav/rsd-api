const express = require('express');
const fs = require('graceful-fs')
const path = require('path')

const FileHelper = require(path.resolve('./util/file'))

const smallTimerThreshold = 500

function readfiles(ar, name, parseFunction, postParse) {

    FileHelper.filesFromFolder(ar.singleFolder).then( files => {
//todo- go back to being able to handle error as old lambda didn't just return (files) but (err1,files)
//    fs.readdir(ar.singleFolder, (err1, files) => {
//    but I switched that fo FileHelper.filesFromFolder...
//        if (err1) throw err1;

        ar.single.count = files.length
        ar.version.count = files.length
        ar.version.name = name
        
        files.forEach(file => {
            fs.readFile(file, 'utf8', function(err2, data) {
                if (err2) throw new Error(`${ar.singleFolder + '///' + file}`);
                if (err2) throw err2;

                const obj = parseFunction(JSON.parse(data))
                ar.single.results.push(obj)

                if (ar.timer) {
                    clearTimeout(ar.timer)
                }
                ar.timer = setTimeout(() => {
                    console.log(`${name} loaded: `, ar.single.results.length, ar.single.count)
                    if (typeof postParse == 'function') {
                        postParse(ar)
                    }
                }, smallTimerThreshold)
            })
        })
    })
}


function AbstractRoute(singleName, version, parseFunction, postParse = null) {
    this.router = express.Router();

    this.singleFolder = `./packs/${singleName}`

    this.single = {count:0, results:[]}
    this.version = {version: version, count: 0}
    this.timer = null

    // console.log(`Start reading ${singleName}`)
    readfiles(this, singleName, parseFunction, postParse)

    this.router.get('/version', async(req, res) => {
        res.send(this.version)
    });
    
    this.router.get('/', async(req,res)=>{
        res.send(this.single)
    });

    return this
} 

module.exports = AbstractRoute;