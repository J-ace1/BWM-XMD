const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3k9zpE7atVULQIiIAqKN7bOQ4CAkasQZHDK/76FM1MzD3vOzr6lAul0uvvrV5AXuEYm6sDkFZQVvkKC+iXpSgQmYNpEEarAAISQQDABuuKNby2KO405E8qxAyEIL4Fii3Apc3xV8/tGS62Un+2tZ3AfgLLxUxz8AVAemtk4E3SjW89UwkFOPglJ5JiJwk0Xs6hDidhtjBFJWeoZ3HtEiCucx2p5QhmqYGqizoa4+h59ymgyPd4Sxc/tbnMMldFueVRlcaRrU83iacaYHmfagj7spO/RV32ySpC2sjirOHY1U06XCUUp9H56ZW8UC1chLdrn0ttI0hv9Gsc5CvUQ5QST7tu6M1NObApruhvHKNopG7eBgjE8y/tLmys+i+ta9HcbRblq2+8R3+N2cVm3ReRxSuqgo+te0roVzFAIBMnaqwipN6nmWObGfSVuVx9ZSf6P7vpsLTecNdZuBslMbmnHbLtNtAgnU06smvnpNHclmdHsQ/vN2DRmx+0PMh3UO4fMTzQMGuhxMWVcDadcrRQnZ9X06CRb55M+JE31J5ZnzVtSM/fQ6eXNm3NkwdKUv6BXXmup44W9ygMsB8NMz3maY+bi1GHXJb+emdvEO5R8xc7kazM3zo3pG5nrtpdielvg9vnxogR1eggm9H0AKhTjmlSQ4CLv97jxAMDwukFBhchDXXDdKcWwKqS1yRjYSjda5FCZOou6a0yNRgw3tQ/EghEVLvRnMABlVQSorlE4xzUpqs5CdQ1jVIPJ378GIEcv5M23/jaWHoAIVzXZ5k2ZFjD8MPXjIwyCosnJpssDuV+gCkyoz21ECM7jupexyWEVnPAVySdIajCJYFqj+wCE6IoD1OOBsI1fboJZuApe84Zedk8HZen0lE9F/vYLHUKfC6DwNBYF6onzefZpBGn6iYJjKHCI8n0egQHA7yPTn/mtg4vpJg1kkxrhl72UBPG8KJbdqbHFK/dw4U16VKEQTEjVoAHwYZA0pVskKP8D7m44DJizjH+0q5DKhUXozdjjYbbZDL/ivlkKJq+fNSUXYY/nLl1DUTgLDED2SCDuX87wnDhieX4s8NRE+Kv+2fY6wrL8mSPSw75r3h8IEYE4rfvoL2W1q2tVNW9dtmg1TVJjSY4l8OnRR9bfwiRBb8sF+jJKiCuNzvpLRTJG8tzgwpDWIDFNs94hFU4elTz/C0hfFovMQ21DmUs858dI7UTH2hVVXOJFHNcNG9rzqWz7I1VYdacgR5dZbSx9R6H3jbfwitF+Yw6Xgm35VznZaG4gp1Wg9IPxkZWvl10Ui9kXsFCd7nIZzumgZW19ZnT6sSyrTnWDyNZvFZWEmiuL8ZBN2cPZHimRNoOnYXQw3HBYrJ2VN7/kbDY/SD8qdhPHb1P4aIH0vX3xY0Be35MVYfQosxz2Dv2HN18zTt0HXyDe2/E3OZo6WrZbzWXlwC+2ra13FhQ9Emtb1iRVIPvHZRgyOx4V+9AA9/uvAShTSKKiysAEwDysChyCAUhhTaTPMXVxhmoCsxJMaJEVRtxYZOj7PwUTtObbBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

