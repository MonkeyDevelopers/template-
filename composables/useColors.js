import { computed } from "vue";
export function useColor(color) {
    const colors = {
        primary: "#c51b1b",
        secondary: "#F28C28",
        success: "#11ff9c",
        warning: "#ff8811",
        danger: "#ff1111",
        info: "#0048ff",
        disabled: "#202020",
    };

    const myColor = color || colors.disabled;
    
    const setColor = (color) => {

        if (!color) {
            return colors.disabled;
        }

        if (color.startsWith("#")) {
            return color;
        }

        switch (color) {
            case "primary":
                return colors.primary;
            case "secondary":
                return colors.secondary;
            case "success":
                return colors.success;
            case "danger":
                return colors.danger;
            case "warning":
                return colors.warning;
            case "info":
                return colors.info;
            default:
                return color;
        }
    };

    return {
        colors,
        setColor,
    }
}