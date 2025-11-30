//const fs = require('fs').promises;
const fs = require('graceful-fs').promises;
const path = require('path');

module.exports.filesFromFolder = async function filesFromFolder(folder) {
////todo - maybe add     if (err1) throw (or similar)
    const entries = await fs.readdir(folder, { withFileTypes: true });

    const files = await Promise.all(
        entries
            .filter(entry => entry.name !== '_folders.json')
            .map(async (entry) => {
                const fullPath = path.join(folder, entry.name);
                return entry.isDirectory() ? filesFromFolder(fullPath) : fullPath;
            })
    );

    return files.flat();
};
