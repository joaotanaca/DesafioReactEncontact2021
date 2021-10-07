const schemas = {
    primary: {
        accentColor: "#6B2737",
        fontColor: "#FFFFFF",
    },
    secondary: {
        accentColor: "#0081A7",
        fontColor: "#FFF",
    },
    tertiary: {
        accentColor: "#E08E45",
        fontColor: "#FFF",
    },
    fourth: {
        accentColor: "#F8F4A6",
        fontColor: "#000",
    },
};

const theme = {
    ...schemas,
    background: "#FFFFFF",
    fontColor: "#362627",
    border: "#f7f5f6",
    iconColor: "#1d1d1d",
};

export type SchemasColors = keyof typeof schemas;

export type Theme = typeof theme;

export default theme;
