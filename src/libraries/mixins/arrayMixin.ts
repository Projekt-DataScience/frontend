export const getIsLast = {
    methods: {
        getIsLast(item: any, array: any) {
            if (item === array[array.length - 1]) {
                return true;
            } else {
                return false;
            }
        }
    },
}