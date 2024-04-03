<template>
    <div class="tag-container">
        <h4 v-for="(tag, index) in tags" :key="index" :style="{ backgroundColor: getRandomColor() }">{{ tag }}</h4>
    </div>
</template>

<script>
import projectData from '../projects/projects.json'
export default {
    data() {
        return {
            tags: [],
            colors: ["#AEB1D9", "#A8D2B7", "#BE9D7F", "#C68868", "#924742"]
        }
    },
    mounted() {
        this.getAllTags();
        console.log("done")
    },
    methods: {
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        },
        getAllTags() {
            try {
                const tags = new Set();
                projectData.projects.forEach(project => {
                    project.header.tags.forEach(tag => {
                        console.log(tag)
                        this.tags.push(tag);
                    })
                });
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        }
    }
}
</script>

<style scoped>
h4 {
    text-align: center;
    border-radius: 10px;
    padding-left: 1vw;
    padding-right: 1vw;
    max-width: fit-content;
    max-height: fit-content;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: white;
    font-size: small;
    margin-right: 1vw;
    margin-left: 1vw;
}

.tag-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
}
</style>