export const getStatus = {
    methods: {
        getStatus(item: any, array: any) {
            if (item === array[array.length - 1]) {
                return true;
            } else {
                return false;
            }
        }
    },
}