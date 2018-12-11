import {delay} from "redux-saga";

export default {
    async getNotifications() {
        console.warn("REAL NOTIFICATION YOU FOOL");
        await delay(1000);
        return {count: 43};
    }
}