
let styles = {
    blue: {
        headerFooter: "#12146b",
        mainBg: "#191c94",
        text: "white",
        mandatory: "#ff4e00",
        dark: "#070f3d",
        note: "#070f3d",
        noteBgHover: "#00a0d5",
        tableSelected: "#1b62c2",
        tableSelectedHover: "#14478c",
        tableButtonBg: "#00a0d5",
        error: "#ff4e00"
    },
    green: {
        headerFooter: "#239311",
        mainBg: "#30cf16",
        text: "black",
        mandatory: "#bd0000",
        dark: "#0f3d07",
        note: "#053007",
        noteBgHover: "#46ee4e",
        tableSelected: "#108d16",
        tableSelectedHover: "#0b5b0e",
        tableButtonBg: "#46ee4e",
        error: "#bd0000"
    }
};

function setStyle(styleName) {
    let root = document.documentElement;
    let style = styles[styleName];
    root.style.setProperty("--header-footer-color", style.headerFooter);
    root.style.setProperty("--main-bg-color", style.mainBg);
    root.style.setProperty("--text-color", style.text);
    root.style.setProperty("--mandatory-color", style.mandatory);
    root.style.setProperty("--dark-color", style.dark);
    root.style.setProperty("--note-color", style.note);
    root.style.setProperty("--note-bg-color-hover", style.noteBgHover);
    root.style.setProperty("--table-selected-color", style.tableSelected);
    root.style.setProperty("--table-selected-hover-color", style.tableSelectedHover);
    root.style.setProperty("--table-button-bg-color", style.tableButtonBg);
    root.style.setProperty("--error-color", style.error);
}

export { setStyle };