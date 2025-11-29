const express = require('express');
const router = express.Router();
const fs = require('graceful-fs')
const path = require('path')

const localizeFile = path.resolve('./static/lang/en.json')
let localizerawdata = fs.readFileSync(localizeFile)
let localize = JSON.parse(localizerawdata)

const localizeREFile = path.resolve('./static/lang/re-en.json')
let localize_rerawdata = fs.readFileSync(localizeREFile)
let localize_re = JSON.parse(localize_rerawdata)

// console.log(localize)

const bestiary1Folder = path.resolve('./packs/pathfinder-bestiary')
const bestiary2Folder = path.resolve('./packs/pathfinder-bestiary-2')
const bestiary3Folder = path.resolve('./packs/pathfinder-bestiary-3')

let bestiary1 = {count:0, results:[]}
let bestiary2 = {count:0, results:[]}
let bestiary3 = {count:0, results:[]}

const abomination_vaults_bestiaryFolder = path.resolve('./packs/abomination-vaults-bestiary')
const age_of_ashes_bestiaryFolder = path.resolve('./packs/age-of-ashes-bestiary')
const agents_of_edgewatch_bestiaryFolder = path.resolve('./packs/agents-of-edgewatch-bestiary')
const battlecry_bestiaryFolder = path.resolve('./packs/battlecry-bestiary')
const blog_bestiaryFolder = path.resolve('./packs/blog-bestiary')
const blood_lords_bestiaryFolder = path.resolve('./packs/blood-lords-bestiary')
const book_of_the_dead_bestiaryFolder = path.resolve('./packs/book-of-the-dead-bestiary')
const claws_of_the_tyrant_bestiaryFolder = path.resolve('./packs/claws-of-the-tyrant-bestiary')
const crown_of_the_kobold_king_bestiaryFolder = path.resolve('./packs/crown-of-the-kobold-king-bestiary')
const curtain_call_bestiaryFolder = path.resolve('./packs/curtain-call-bestiary')
const extinction_curse_bestiaryFolder = path.resolve('./packs/extinction-curse-bestiary')
const fall_of_plaguestoneFolder = path.resolve('./packs/fall-of-plaguestone')
const fists_of_the_ruby_phoenix_bestiaryFolder = path.resolve('./packs/fists-of-the-ruby-phoenix-bestiary')
const gatewalkers_bestiaryFolder = path.resolve('./packs/gatewalkers-bestiary')
const hazards_bestiaryFolder = path.resolve('./packs/hazards')
const howl_of_the_wild_bestiaryFolder = path.resolve('./packs/howl-of-the-wild-bestiary')
const iconicsFolder = path.resolve('./packs/iconics')
const kingmaker_bestiaryFolder = path.resolve('./packs/kingmaker-bestiary')
const lost_omens_bestiaryFolder = path.resolve('./packs/lost-omens-bestiary')
const malevolence_bestiaryFolder = path.resolve('./packs/malevolence-bestiary')
const menace_under_otari_bestiaryFolder = path.resolve('./packs/menace-under-otari-bestiary')
const myth_speaker_bestiaryFolder = path.resolve('./packs/myth-speaker-bestiary')
const night_of_the_gray_death_bestiaryFolder = path.resolve('./packs/night-of-the-gray-death-bestiary')
const npc_galleryFolder = path.resolve('./packs/npc-gallery')
const one_shot_bestiaryFolder = path.resolve('./packs/one-shot-bestiary')
const outlaws_of_alkenstar_bestiaryFolder = path.resolve('./packs/outlaws-of-alkenstar-bestiary')
const pathfinder_dark_archiveFolder = path.resolve('./packs/pathfinder-dark-archive')
const pathfinder_monster_coreFolder = path.resolve('./packs/pathfinder-monster-core')
const pathfinder_monster_core_2Folder = path.resolve('./packs/pathfinder-monster-core-2')
const pathfinder_npc_coreFolder = path.resolve('./packs/pathfinder-npc-core')
const pfs_introductions_bestiaryFolder = path.resolve('./packs/pfs-introductions-bestiary')
const pfs_season_1_bestiaryFolder = path.resolve('./packs/pfs-season-1-bestiary')
const pfs_season_2_bestiaryFolder = path.resolve('./packs/pfs-season-2-bestiary')
const pfs_season_3_bestiaryFolder = path.resolve('./packs/pfs-season-3-bestiary')
const pfs_season_4_bestiaryFolder = path.resolve('./packs/pfs-season-4-bestiary')
const pfs_season_5_bestiaryFolder = path.resolve('./packs/pfs-season-5-bestiary')
const pfs_season_6_bestiaryFolder = path.resolve('./packs/pfs-season-6-bestiary')
const pfs_season_7_bestiaryFolder = path.resolve('./packs/pfs-season-7-bestiary')
const prey_for_death_bestiaryFolder = path.resolve('./packs/prey-for-death-bestiary')
const quest_for_the_frozen_flame_bestiaryFolder = path.resolve('./packs/quest-for-the-frozen-flame-bestiary')
const rage_of_elements_bestiaryFolder = path.resolve('./packs/rage-of-elements-bestiary')
const revenge_of_the_runelords_bestiaryFolder = path.resolve('./packs/revenge-of-the-runelords-bestiary')
const rusthenge_bestiaryFolder = path.resolve('./packs/rusthenge-bestiary')
const season_of_ghosts_bestiaryFolder = path.resolve('./packs/season-of-ghosts-bestiary')
const seven_dooms_for_sandpoint_bestiaryFolder = path.resolve('./packs/seven-dooms-for-sandpoint-bestiary')
const shades_of_blood_bestiaryFolder = path.resolve('./packs/shades-of-blood-bestiary')
const shadows_at_sundown_bestiaryFolder = path.resolve('./packs/shadows-at-sundown-bestiary')
const sky_kings_tomb_bestiaryFolder = path.resolve('./packs/sky-kings-tomb-bestiary')
const stolen_fate_bestiaryFolder = path.resolve('./packs/stolen-fate-bestiary')
const spore_war_bestiaryFolder = path.resolve('./packs/spore-war-bestiary')
const strength_of_thousands_bestiaryFolder = path.resolve('./packs/strength-of-thousands-bestiary')
const the_enmity_cycle_bestiaryFolder = path.resolve('./packs/the-enmity-cycle-bestiary')
const the_slithering_bestiaryFolder = path.resolve('./packs/the-slithering-bestiary')
const triumph_of_the_tusk_bestiaryFolder = path.resolve('./packs/triumph-of-the-tusk-bestiary')
const troubles_in_otari_bestiaryFolder = path.resolve('./packs/troubles-in-otari-bestiary')
const war_of_immortals_bestiaryFolder = path.resolve('./packs/war-of-immortals-bestiary')
const wardens_of_wildwood_bestiaryFolder = path.resolve('./packs/wardens-of-wildwood-bestiary')

let abomination_vaults_bestiary = {count:0, results:[]}
let age_of_ashes_bestiary = {count:0, results:[]}
let agents_of_edgewatch_bestiary = {count:0, results:[]}
let battlecry_bestiary = {count:0, results:[]}
let blog_bestiary = {count:0, results:[]}
let blood_lords_bestiary = {count:0, results:[]}
let book_of_the_dead_bestiary = {count: 0, results: []}
let claws_of_the_tyrant_bestiary = {count: 0, results: []}
let crown_of_the_kobold_king_bestiary = {count: 0, results: []}
let curtain_call_bestiary = {count: 0, results: []}
let extinction_curse_bestiary = {count:0, results:[]}
let fall_of_plaguestone = {count:0, results:[]}
let fists_of_the_ruby_phoenix_bestiary = {count:0, results:[]}
let gatewalkers_bestiary = {count:0, results:[]}
let hazards_bestiary = {count: 0, results: []}
let howl_of_the_wild_bestiary = {count:0, results:[]}
let iconics = {count:0, results:[]}
let kingmaker_bestiary = {count:0, results:[]}
let lost_omens_bestiary = {count:0, results:[]}
let malevolence_bestiary = {count:0, results:[]}
let menace_under_otari_bestiary = {count:0, results:[]}
let myth_speaker_bestiary = {count:0, results:[]}
let night_of_the_gray_death_bestiary = {count:0, results:[]}
let npc_gallery = {count:0, results:[]}
let one_shot_bestiary = {count:0, results:[]}
let outlaws_of_alkenstar_bestiary = {count:0, results:[]}
let pathfinder_dark_archive = {count:0, results:[]}
let pathfinder_monster_core = {count:0, results:[]}
let pathfinder_monster_core_2 = {count:0, results:[]}
let pathfinder_npc_core = {count:0, results:[]}
let pfs_introductions_bestiary = {count:0, results:[]}
let pfs_season_1_bestiary = {count:0, results:[]}
let pfs_season_2_bestiary = {count:0, results:[]}
let pfs_season_3_bestiary = {count:0, results:[]}
let pfs_season_4_bestiary = {count:0, results:[]}
let pfs_season_5_bestiary = {count:0, results:[]}
let pfs_season_6_bestiary = {count:0, results:[]}
let pfs_season_7_bestiary = {count:0, results:[]}
let prey_for_death_bestiary = {count:0, results:[]}
let quest_for_the_frozen_flame_bestiary = {count:0, results:[]}
let rage_of_elements_bestiary = {count:0, results:[]}
let revenge_of_the_runelords_bestiary = {count:0, results:[]}
let rusthenge_bestiary = {count:0, results:[]}
let season_of_ghosts_bestiary = {count:0, results:[]}
let seven_dooms_for_sandpoint_bestiary = {count:0, results:[]}
let shades_of_blood_bestiary = {count:0, results:[]}
let shadows_at_sundown_bestiary = {count:0, results:[]}
let sky_kings_tomb_bestiary = {count:0, results:[]}
let spore_war_bestiary = {count:0, results:[]}
let stolen_fate_bestiary = {count:0, results:[]}
let strength_of_thousands_bestiary = {count:0, results:[]}
let the_enmity_cycle_bestiary = {count:0, results:[]}
let the_slithering_bestiary = {count:0, results:[]}
let triumph_of_the_tusk_bestiary = {count:0, results:[]}
let troubles_in_otari_bestiary = {count:0, results:[]}
let war_of_immortals_bestiary = {count:0, results:[]}
let wardens_of_wildwood_bestiary = {count:0, results:[]}

//TODO - look through some of these folders that don't actually say xxxbestiary
//     - there may be some content in some of them that are beasts
//       like packs/standalone-adventures

//TODO - MAYBE FIND A WAY TO DO THIS PRGRAMATICALLY
//       RATHER THAN HARD-CODED.  RIGHT NOW, THESE
//       HARD-CODED FOLDERS ARE NO LONGER CORRECT ANYWAY
//  BUT HAVE TO ACCOUNT FOR EXISTING FOLDERS NOT TO BE INCLUDED IN BESTIARY
//not included:
// action-macros
// actions
// adventure-specific-actions
// ancestries
// ancestryFeatures
// backgrounds
// bestiary-ability-glossary
// bestiary-effects
// bestiary-family-ability
// boons-and-curses
// campaign_effects
// classes
// classfeatures
// conditions
// criticaldeck
// deities
// equipment
// equipment-effects
// familiar-abilities
// feat-effects
// feats
// heritages
// journals
// kingmaker-features
// macros
// other-effects
// paizo-pregens
// pathfinder-society-boons
// spell-effects
// spells
// standalone-adventures
// vehicles

let ParseArray = [
    { folder: bestiary1Folder, array: bestiary1, name: "bestiary1" },
    { folder: bestiary2Folder, array: bestiary2, name: "bestiary2" },
    { folder: bestiary3Folder, array: bestiary3, name: "bestiary3" },
    { folder: abomination_vaults_bestiaryFolder, array: abomination_vaults_bestiary, name: "abomination_vaults_bestiary" },
    { folder: agents_of_edgewatch_bestiaryFolder, array: agents_of_edgewatch_bestiary, name: "agents_of_edgewatch_bestiary" },
    { folder: age_of_ashes_bestiaryFolder, array: age_of_ashes_bestiary, name: "age_of_ashes_bestiary" },
    { folder: battlecry_bestiaryFolder, array: battlecry_bestiary, name: 'battlecry_bestiary' },
    { folder: blog_bestiaryFolder, array: blog_bestiary, name: 'blog_bestiary' },
    { folder: blood_lords_bestiaryFolder, array: blood_lords_bestiary, name: 'blood_lords_bestiary' },
    { folder: book_of_the_dead_bestiaryFolder, array: book_of_the_dead_bestiary, name: 'book_of_the_dead_bestiary' },
    { folder: claws_of_the_tyrant_bestiaryFolder, array: claws_of_the_tyrant_bestiary, name: 'claws_of_the_tyrant_bestiary' },
    { folder: crown_of_the_kobold_king_bestiaryFolder, array: crown_of_the_kobold_king_bestiary, name: 'crown_of_the_kobold_king_bestiary' },
    { folder: curtain_call_bestiaryFolder, array: curtain_call_bestiary, name: 'curtain_call_bestiary' },
    { folder: extinction_curse_bestiaryFolder, array: extinction_curse_bestiary, name: 'extinction_curse_bestiary' },
    { folder: fall_of_plaguestoneFolder, array: fall_of_plaguestone, name: 'fall_of_plaguestone' },
    { folder: fists_of_the_ruby_phoenix_bestiaryFolder, array: fists_of_the_ruby_phoenix_bestiary, name: 'fists_of_the_ruby_phoenix_bestiary' },
    { folder: gatewalkers_bestiaryFolder, array: gatewalkers_bestiary, name: 'gatewalkers_bestiary' },
    { folder: hazards_bestiaryFolder, array: hazards_bestiary, name: 'hazards_bestiary' },
    { folder: howl_of_the_wild_bestiaryFolder, array: howl_of_the_wild_bestiary, name: 'howl_of_the_wild_bestiary' },
    { folder: iconicsFolder, array: iconics, name: 'iconics' },
    { folder: kingmaker_bestiaryFolder, array: kingmaker_bestiary, name: 'kingmaker_bestiary' },
    { folder: lost_omens_bestiaryFolder, array: lost_omens_bestiary, name: 'lost_omens_bestiary' },
    { folder: malevolence_bestiaryFolder, array: malevolence_bestiary, name: 'malevolence_bestiary' },
    { folder: menace_under_otari_bestiaryFolder, array: menace_under_otari_bestiary, name: 'menace_under_otari_bestiary' },
//TODO - too many problems with the below data
//    { folder: myth_speaker_bestiaryFolder, array: myth_speaker_bestiary, name: 'myth_speaker_bestiary' },
    { folder: night_of_the_gray_death_bestiaryFolder, array: night_of_the_gray_death_bestiary, name: 'night_of_the_gray_death_bestiary' },
    { folder: npc_galleryFolder, array: npc_gallery, name: 'npc_gallery' },
    { folder: one_shot_bestiaryFolder, array: one_shot_bestiary, name: 'one_shot_bestiary' },
    { folder: outlaws_of_alkenstar_bestiaryFolder, array: outlaws_of_alkenstar_bestiary, name: 'outlaws_of_alkenstar_bestiary' },
    { folder: pathfinder_dark_archiveFolder, array: pathfinder_dark_archive, name: 'pathfinder_dark_archive' },
    { folder: pathfinder_monster_coreFolder, array: pathfinder_monster_core, name: 'pathfinder-monster-core' },
    { folder: pathfinder_monster_core_2Folder, array: pathfinder_monster_core_2, name: 'pathfinder-monster-core-2' },
    { folder: pathfinder_npc_coreFolder, array: pathfinder_npc_core, name: 'pathfinder-npc-core' },
    { folder: pfs_introductions_bestiaryFolder, array: pfs_introductions_bestiary, name: 'pfs_introductions_bestiary' },
    { folder: pfs_season_1_bestiaryFolder, array: pfs_season_1_bestiary, name: 'pfs_season_1_bestiary' },
    { folder: pfs_season_2_bestiaryFolder, array: pfs_season_2_bestiary, name: 'pfs_season_2_bestiary' },
    { folder: pfs_season_3_bestiaryFolder, array: pfs_season_3_bestiary, name: 'pfs_season_3_bestiary' },
    { folder: pfs_season_4_bestiaryFolder, array: pfs_season_4_bestiary, name: 'pfs_season_4_bestiary' },
    { folder: pfs_season_5_bestiaryFolder, array: pfs_season_5_bestiary, name: 'pfs_season_5_bestiary' },
    { folder: pfs_season_6_bestiaryFolder, array: pfs_season_6_bestiary, name: 'pfs_season_6_bestiary' },
    { folder: pfs_season_7_bestiaryFolder, array: pfs_season_7_bestiary, name: 'pfs_season_7_bestiary' },
    { folder: prey_for_death_bestiaryFolder, array: prey_for_death_bestiary, name: 'prey_for_death_bestiary' },
    { folder: quest_for_the_frozen_flame_bestiaryFolder, array: quest_for_the_frozen_flame_bestiary, name: 'quest_for_the_frozen_flame_bestiary' },
    { folder: rage_of_elements_bestiaryFolder, array: rage_of_elements_bestiary, name: 'rage_of_elements_bestiary' },
    { folder: revenge_of_the_runelords_bestiaryFolder, array: revenge_of_the_runelords_bestiary, name: 'revenge_of_the_runelords_bestiary' },
    { folder: rusthenge_bestiaryFolder, array: rusthenge_bestiary, name: 'rusthenge_bestiary' },
    { folder: season_of_ghosts_bestiaryFolder, array: season_of_ghosts_bestiary, name: 'season_of_ghosts_bestiary' },
    { folder: seven_dooms_for_sandpoint_bestiaryFolder, array: seven_dooms_for_sandpoint_bestiary, name: 'seven_dooms_for_sandpoint_bestiary' },
    { folder: shades_of_blood_bestiaryFolder, array: shades_of_blood_bestiary, name: 'shades_of_blood_bestiary' },
    { folder: shadows_at_sundown_bestiaryFolder, array: shadows_at_sundown_bestiary, name: 'shadows_at_sundown_bestiary' },
    { folder: sky_kings_tomb_bestiaryFolder, array: sky_kings_tomb_bestiary, name: 'sky_kings_tomb_bestiary' },
    { folder: spore_war_bestiaryFolder, array: spore_war_bestiary, name: 'spore_war_bestiary' },
    { folder: stolen_fate_bestiaryFolder, array: stolen_fate_bestiary, name: 'stolen_fate_bestiary' },
    { folder: strength_of_thousands_bestiaryFolder, array: strength_of_thousands_bestiary, name: 'strength_of_thousands_bestiary' },
    { folder: the_enmity_cycle_bestiaryFolder, array: the_enmity_cycle_bestiary, name: 'the_enmity_cycle_bestiary' },
    { folder: the_slithering_bestiaryFolder, array: the_slithering_bestiary, name: 'the_slithering_bestiary' },
    { folder: triumph_of_the_tusk_bestiaryFolder, array: triumph_of_the_tusk_bestiary, name: 'triumph_of_the_tusk_bestiary' },
    { folder: troubles_in_otari_bestiaryFolder, array: troubles_in_otari_bestiary, name: 'troubles_in_otari_bestiary' },
    { folder: war_of_immortals_bestiaryFolder, array: war_of_immortals_bestiary, name: 'war_of_immortals_bestiary' },
    { folder: wardens_of_wildwood_bestiaryFolder, array: wardens_of_wildwood_bestiary, name: 'wardens_of_wildwood_bestiary' },
]

const BESTIARY_VERSION = Number(process.env.BASE_VERSION) + Number(process.env.BESTIARY_VERSION)

let version = {version: BESTIARY_VERSION, count: 0, name: 'bestiary'}
router.get('/version', async(req, res) => {
    res.send(version)
})

// console.log("Start reading bestiary")
Object.keys(ParseArray).forEach((i) => {
    processBestiary(ParseArray[i].folder, ParseArray[i].array, ParseArray[i].name)

    router.get('/' + ParseArray[i].name, async(req,res)=>{
        // let bestiary = {...ParseArray[i].array}
        // let results = findByMatchingProperties(bestiary.results, req.query)

        // bestiary.results = results
        // bestiary.count = results.length

        res.send(ParseArray[i].array)
    })
})

const finalTimerThreshold = 5000
let finalTimer = null
let totalCount = 0
function processBestiary(folder, array, name) {
    // console.log(folder, array, name)
    let timer = null

    filesFromFolder(folder).then( files => {

        array['count'] = array['count'] + files.length
        totalCount += files.length
        version.count += files.length

        files.forEach(file => {

            fs.readFile(file, 'utf8', function(err2, data) {
                if (err2) throw err2;

                // console.log('data', data)
                const jsonData = JSON.parse(data)
                // console.log('jsonData', jsonData)
                const obj = parseBeast(jsonData)
                array['results'].push(obj)
                if (finalTimer) {
                    // console.log('Clear timer', file)
                    // console.log('Total Creatures: ', totalCount)
                    clearTimeout(finalTimer)
                }
                finalTimer = setTimeout(() => {
                    // console.log('Total Creatures: ', totalCount)
                    // ParseArray.forEach(pa => {
                    //     console.log(pa.name, pa.array.count)
                    // })

                    // createRoutes()
                }, finalTimerThreshold)
            })
        })
    }).catch(er => console.log('error' + er.message));
}

async function filesFromFolder(folder) {
//
////todo - old code had a if (err1) throw (or similar)
    const entries = fs.readdirSync(folder, { withFileTypes: true });

    const files = await Promise.all(
        entries
            .filter(entry => entry.name !== '_folders.json')
            .map(async (entry) => {
                const fullPath = path.join(folder, entry.name);
                return entry.isDirectory() ? filesFromFolder(fullPath) : fullPath;
            })
    );

    return files.flat();
}
//
////todo - old code had a if (err1) throw (or similar)
//    let entries;
//        try {
//            entries = fs.readdirSync(folder);
////            , (err4, files) => {
////                if (err4) throw err4;
////            console.log('found entries: '+ files);
////                entries = files;
////            });
//        } catch (errr) {
//            console.log('errror reading '+ folder + '. '+ errr.message);
//            return [];
//        }
//    if (!entries) {
//        console.log('no entries found in ' + folder);
//        return [];
//    }
//    if (folder.includes('strength-of-thou')) {
//        console.log('sot: ' + entries);
//    }
//    const files = await Promise.all(
//         entries
//         .filter(entry => entry !== '_folders.json')
//         .map(async (entry) => {
//            if (entry == '_folders.json') console.log('found _folders.json');
//            const fullPath = path.join(folder, entry);
//            try {
//                const stat = await fs.stat(fullPath);
//                return stat.isDirectory() ? filesFromFolder(fullPath) : fullPath;
//            } catch (err3) {
//                return [];
//            }
//         })
//    );
//    if (folder.includes('strength-of-thou')) {
//        console.log('sot:' + files.flat());
//    }
//    return files.flat();
//}

function parseBeast(beast) {
    if (beast.flags) { delete beast.flags }
    if (beast.img) { delete beast.img }
    if (beast.token) { delete beast.token }

    if (beast.items && Object.keys(beast.items).length > 0) {
        Object.values(beast.items).forEach((item, i) => {
            beast.items[i] = parseItem(item)
        });
    }

    let adjusted = adjustedBeast(beast);
    if (adjusted) { beast = adjusted };

    return beast
}

// TODO: Compendium regex for items & description

const localizeRegex = /\@Localize\[([a-zA-Z0-9\.]+)\]/g

function parseItem(item) {

    if (item.system && item.system.description && item.system.description.value && item.system.description.value.length > 0) {
        if (item.system.description.value.includes('@Localize')) {
            const localizeArray = item.system.description.value.matchAll(localizeRegex)

            let nextLocalize = localizeArray.next()
            while (!nextLocalize.done) {
                
                let localizeKeyArray = nextLocalize.value[1].split('.')
                let newLocalString = null
                newLocalString = getLocalizedChild(localize, localizeKeyArray) || getLocalizedChild(localize_re, localizeKeyArray)

                item.system.description.value = item.system.description.value.replace(nextLocalize.value[0], newLocalString)

                nextLocalize = localizeArray.next()
            }
        }

        item.system.foundryDescription = {value: item.system.description.value}
        item.system.description.value = regexRemove(item.system.description.value)
    }

    let adjusted = adjustedItem(item)
    if (adjusted) { item = adjusted }

    return item
}

function getLocalizedChild(obj, children) {
    if (children.length > 0) {
        let nextNode = children.splice(0,1)
        if (!!obj[nextNode[0]]) {
            return getLocalizedChild(obj[nextNode[0]], children)
        } else {
            return null
        }
    } else {
        return obj
    }
}


function findByMatchingProperties(set, properties) {
    return set.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            
            let ksplit = key.split('.')
            let value = null
            ksplit.forEach((ks,i) => {
                if (i === 0)
                    value = entry[ks]
                else
                    value = value[ks]
            })
            return value.toString() === properties[key];
        });
    });
}

function regexRemove(description) {
    if (!!description.includes('@Template')) {
        description = removeTemplateString(description)
    }
    if (!!description.includes('@Check')) {
        description = removeCheckString(description)
    }
    description = removeDamageString(description)
    description = removeTimeString(description)

    return description
}

// Template
function removeTemplateString(description) {
    let templateRegex = /@Template\[([^\]]+)\](\{[^\}]+\})?/g;

    let matches = description.matchAll(templateRegex);
    let iterator = matches.next();

    while(!iterator.done) {
        let info = iterator.value[1].split('|');
        let newInfo = {};
        info.forEach(i => {
            if (i.includes('type')) {
                newInfo.type = i.split(':')[1];
            } else if (i.includes('distance')) {
                newInfo.distance = i.split(':')[1];
            }
        })

        let replacementText = `${newInfo.distance}-foot ${newInfo.type}`;

        let replaceIndex = description.indexOf(iterator.value[0]);

        description = description.substr(0, replaceIndex) + replacementText + description.substr(replaceIndex + iterator.value[0].length, description.length - (iterator.value.index + iterator.value[0].length));
        iterator = matches.next();
    }

    return description
}

// Check
function removeCheckString(description) {
    let checkRegex = /@Check\[([^\]]+)\](\{[^\}]+\})?/g;

    let matches = description.matchAll(checkRegex);
    let iterator = matches.next();

    while(!iterator.done) {
        let info = iterator.value[1].split('|');
        let newInfo = {};
        info.forEach(i => {
            if (i.includes('type')) {
                newInfo.type = i.split(':')[1];
            } else if (i.includes('dc')) {
                newInfo.dc = i.split(':')[1];
            } else if (i.includes('name')) {
                newInfo.name = i.split(':')[1];
            } else if (i.includes('basic')) {
                newInfo.basic = true
            } else if (i.includes('traits')) {
                newInfo.traits = i.split(':')[1];
            }
        })

        let replacementText = `<span class="skill-check">DC <span class="skill-DC" data-dc="${newInfo.dc}" data-save="${newInfo.type}">${newInfo.dc}</span> ${capitalize(newInfo.type)}</span>`;
        if (!!newInfo.basic) {
            replacementText = `<span class="skill-check">DC <span class="skill-DC" data-dc="${newInfo.dc}" data-save="${newInfo.type}" data-basic="true">${newInfo.dc}</span> basic ${capitalize(newInfo.type)}</span>`;
        }
        if (newInfo.type == 'flat') {
            replacementText = `<span class="skill-check">DC <span class="skill-DC" data-dc="${newInfo.dc}" data-save="${newInfo.type}">${newInfo.dc}</span> ${capitalize(newInfo.type)}</span>`;
        }

        let replaceIndex = description.indexOf(iterator.value[0]);

        description = description.substr(0, replaceIndex) + replacementText + description.substr(replaceIndex + iterator.value[0].length, description.length - (iterator.value.index + iterator.value[0].length));
        iterator = matches.next();
    }
    
    return description
}

function removeDamageString(description) {
    const damageRegex = /\[\[\/r+[^\]\]]+\]{1,}\{([^\}]+)\}/g

    return description.replace(damageRegex, '<b>$1</b>')
}

function removeTimeString(description) {
    const timeRegex = /\[\[\/br+[^\]\]]+\]{1,}\{([^\}]+)\}/g

    return description.replace(timeRegex, '<i>$1</i>')
}

function capitalize(item) {
    return !!item ? item.charAt(0).toUpperCase() + item.slice(1) : ""
}

function adjustedItem(item) {
    //any items to be fixed because they have bad data- that would happen here.
    //see adjustedBeast()
    return null;
}

function adjustedBeast(beast) {

    let unsure_if_these_all_need_adjustments = '5imM4MxfarwFFMYC..dEoy71LWNM5rSQu1..3gYuRYb1sBkkx041..h6IULKC8AS4cYxTP..VIhf46k8XKQfP2KB..dMKDSmwSOuHwGUBL..Ahd1AbUZ36MLnrXu..lI5vqwD8QKmoSjuD..vh6qX5Sz3fVxSC3N..fx9PYNPRSpNpybyl';
    if (unsure_if_these_all_need_adjustments.includes(beast._id)) {
        if (beast && beast.system && beast.system.attributes && beast.system.attributes.ac && !beast.system.attributes.ac.value) {
            console.log('Adjusting - ' + beast._id)
            beast.system.attributes.ac = {value:20};
            return beast;
        }
    }

    ///dMKDSmwSOuHwGUBL
    if ('dMKDSmwSOuHwGUBL' === beast._id) {
        if (beast && beast.system && beast.system.attributes && beast.system.attributes.stealth && !beast.system.attributes.stealth.value) {
            console.log('Adjusting - ' + beast._id)
            beast.system.attributes.stealth = {value:20};
            return beast;
        }
    }


    //bad data fix: Disembodied Voices ac is null
    if (beast && beast._id && beast._id === 'VQqdG5PKdCFHXquy') {
        if (beast && beast.system && beast.system.attributes && beast.system.attributes.ac && !beast.system.attributes.ac.value) {
            console.log('Adjusting Disembodied Voices - (beast)Whisper - VQqdG5PKdCFHXquy')
            //todo- 20 from below -- totally arbitrary- look up the right value
            beast.system.attributes.ac = {value:20};
            return beast;
        }
    }

    return null;
}

const getParsedArray = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(ParseArray)
    }, 20000);
});

module.exports = {
    router: router,
    BestiaryArray: getParsedArray,
    pass: true,
}