<template>
  <div>
  <input v-model="id" placeholder="channel id">

  {
  "memo1": "",
  "title": "",
  "items": [
  <div v-for="(item, i) in items" :key="i">
    {"text": "{{item.snippet.title}}", 
    "content": "{{item.snippet.resourceId.videoId}}"}
    <!-- https://stackoverflow.com/questions/42740105/vue-check-if-you-are-on-the-last-prop-of-a-v-for-loop -->
    <span v-if="i < items.length -1">,</span>
  </div>
    ]
  }
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    id: "",
    items: ""
  }),
  methods: {
    getPlayListItems: async function(id){
      console.log("key",this.$apiKey)
      const result = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
      params: {
        part: 'id,snippet',
        maxResults: 50,
        id: id,
        key: this.$apiKey
      }
    });
    console.log(result.data)
    this.items = result.data.items
    }
  },
  mounted: function(){
    this.getPlayListItems()
  },
  watch: {
    id: function(newPlaylistId){
      this.getPlayListItems(newPlaylistId)
    }
  }
}
</script>
