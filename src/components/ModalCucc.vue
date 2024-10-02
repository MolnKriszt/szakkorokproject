<template>
  <!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-between">
        <div><h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1></div>
        <div>
            <i class="bi close-icon bi-x-lg" data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:['szakkorok', 'gyerekek']
}
</script>

<style scoped>
.modal-content{
    background: var(--bg-black-100);
}

.modal-header{
    border-bottom: 1px solid var(--text-color);
}

.close-icon{
    color: var(--text-color) !important;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>