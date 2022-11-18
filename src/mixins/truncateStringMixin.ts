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