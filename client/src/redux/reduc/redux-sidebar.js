export const sidebar = (state = false, action) => {
    switch (action.type) {
        case "DISP_SIDEBAR":
            return true;
        case "HIDE_SIDEBAR":
            return false;
        default:
            return state;
    }
}