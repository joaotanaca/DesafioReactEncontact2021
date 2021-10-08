const aliases = (prefix = `src`) => ({
    "@components": `${prefix}/components/*`,
    "@atoms": `${prefix}/components/atoms/*`,
    "@molecules": `${prefix}/components/molecules/*`,
    "@organismos": `${prefix}/components/organismos/*`,
    "@context": `${prefix}/context/*`,
    "@hooks": `${prefix}/hooks/*`,
    "@interfaces": `${prefix}/interfaces/*`,
    "@lib": `${prefix}/lib/*`,
    "@styles": `${prefix}/styles/*`,
});

module.exports = aliases;
