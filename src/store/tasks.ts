export interface Tasks {
    icon: string,
    app_name: string,
    title: string,
    parameter: string,
    date: Date,
    action: string
}

import { defineStore } from "pinia";
import axios from "axios";

export const useTasks = defineStore('Tasks', {
    state: () => ({
        tasks: [] as Tasks[],
    }),
    getters: {
        getTasks(state) {
            return state.tasks
        },

    },
    actions: {
        async fetchTasks() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataTasks"
                );
                this.tasks = data.data.data.tasks;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setTasks(tasks: any) {
            this.tasks = this.tasks;
        },

    }
}
)
