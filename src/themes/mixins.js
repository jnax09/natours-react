export default {
    clearFix: () =>
        `&::after {
        content: "";
        display: table;
        clear: both;
    }`,
    absCenter: () =>
        `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `
}

