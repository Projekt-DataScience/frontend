export const truncateStringMixin = {
    methods: {
        truncateString(str: String, n: number) {
            if (str.length > n) {
                return str.substring(0, n) + "...";
            } else {
                return str;
            }
        },
    },
}

export const concateStringMixin = {
    methods: {
        concateStrings(...args: string[]) {
            var tmp = "";
            for (var i = 0; i < args.length; i++) {
                tmp = tmp + args[i] + " ";
            }
            return tmp;
        },
    },
}

export const stringToDateMixin = {
    methods: {
        stringToDateLongWeekday(str: string) {
            return new Date(str).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: "long",
            });
        },
        stringToDate(str: string) {
            return new Date(str).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: "long",
            });
        },
    },
}

export const changeAppName= {
    methods: {
        shortAppNameToLong(str: string) {
            if (str === "lpa") {
                return "Layered Process Audit"
            }
        }

    }
}