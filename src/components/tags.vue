<template>
    <div class="tag-container">
        <h4 v-for="(count, tag) in tagCounts" :key="tag" :style="{ backgroundColor: getRandomColor() }">
            {{ tag }} ({{ count }}) </h4>
    </div>
</template>

<script>
import projectData from '../projects/projects.json'
export default {
    data() {
        return {
            tags: [],
            tagCounts: {}, // Object to store tag counts
            colors: ["#AEB1D9", "#A8D2B7", "#BE9D7F", "#C68868", "#924742"]
        }
    },
    mounted() {
        this.getAllTags();
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
                        this.tags.push(tag);
                    })
                    this.countTagOccurrences();
                });
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        },
        countTagOccurrences() {
            // Reset tagCounts
            this.tagCounts = {};
            // Count occurrences of each tag
            this.tags.forEach(tag => {
                this.tagCounts[tag] = (this.tagCounts[tag] || 0) + 1;
            });
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