const IPFS = require("ipfs-core");

const folder = "/ancients_photos/";
const fs = require("fs");

// Kind of confusing, but hopefully just works now?
// might need create flag when there is a new thing?
// add more metadata

(async () => {
    const ipfs = await IPFS.create();
    const files = await fs.readdirSync("." + folder);
    let uploaded_files = [];        
    
    try {
     await ipfs.files.mkdir("/ancients_photos", {parent:true})
    } catch(e) {
        console.log("directory already exists")
    }
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const readFile = await fs.readFileSync("." + folder + file);
        await ipfs.files.write(folder + file, readFile, {create:true});
        uploaded_files.push(file);
    }
    const buffer = Buffer.from(JSON.stringify(uploaded_files));
    await ipfs.files.write(folder + "files.json", buffer);
    const { cid } = await ipfs.files.stat("/ancients_photos");
    console.log(cid, " <-- folder cid");
})();
