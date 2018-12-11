let count = 5;

export default {
    __setCount(_count) {
        count = _count;
    },

    async getNotifications() {
        console.warn("USING MOCK SERVICE!")
        return {count};
    }
}