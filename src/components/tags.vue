<template>
    <div class="tag-container">
        <h4 v-for="(count, tag) in tagCounts" :key="tag" :style="{ backgroundColor: getRandomColor() }"
            @click="openResults(tag)" class="tagButton">
            {{ tag }} ({{ count }}) </h4>
    </div>
    <div class="results-container" v-if="searchResults && searchResults.length > 0">
        <h1>Results</h1>
        <search-result v-for="searchResult in searchResults" :key="searchResult.display" :title="searchResult.Title"
            :author="searchResult.Author" :display="searchResult.display" />
    </div>
</template>

<script>
import { getProjects } from '../projects/projects-gatherer.js'
import SearchResult from './SearchResult.vue';

export default {
    components: {
        SearchResult
    },
    data() {
        return {
            tags: [],
            tagCounts: {},
            colors: ["#7473BF", "#6767A3", "#5A5A87", "#4D4E6B", "#46485D", "#434556", "#3F414E"],
            searchResults: null,
            searchTerm: '',
            projectData: []
        }
    },
    created() {
        this.projectData = getProjects()
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
                this.projectData.projects.forEach(project => {
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
            this.tagCounts = {};
            this.tags.forEach(tag => {
                this.tagCounts[tag] = (this.tagCounts[tag] || 0) + 1;
            });
        },
        openResults(tag) {
            console.log("clicked", tag);
            this.searchTerm = tag;
            if (!this.searchTerm) {
                return;
            }
            const query = this.searchTerm.toLowerCase();
            const matches = [];
            const cache = new Set();
            this.projectData.projects.forEach(project => {
                const tags = project.header.tags.map(tag => tag.toLowerCase());
                if (tags.includes(query)) {
                    const display = `${project.header.title}-${project.header.author}`;
                    if (!cache.has(display)) {
                        matches.push({
                            Title: project.header.title,
                            Author: project.header.author,
                            display
                        });
                        cache.add(display);
                    }
                }
            });
            matches.sort((a, b) => (a.display > b.display) ? 1 : -1);
            this.searchResults = matches;
        },
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
    flex-wrap: wrap;
}

.tagButton {
    margin: 1vh;
}

.tagButton:hover {
    transition: color 0.3s;
    color: rgb(28 29 33);
}
</style>../projects/projects-compiler.js../projects/projects-gatherer.js