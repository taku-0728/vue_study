<template>
  <div>{{ animal }}</div>
</template>

<script>
export default {
  computed: {
    animal: function() {
      return this.$store.state.animal
    }
  }
}
</script>