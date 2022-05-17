<template>
    <div class="jumbotron">
        <div class="jumbo_icons">
          <div class="icon d_flex column_center">
            <font-awesome-icon :icon="['fas', 'folder']" id="folder" />
            <p>Demos</p>
          </div>
          <div class="icon">
            <div class="price">
              <p id="dollar">$</p>
              <p>39</p>
            </div>
            <p>On Sale</p>
          </div>
        </div>
        <div class="jumbo_text">
          <h2>
            Drive with Avada
          </h2>
          <p> We offer the finest tuition money can buy</p>
        </div>
      </div>
</template>

<script>
export default {
    name: "JumboComponent",
    data(){
      return{}
    }
}
</script>