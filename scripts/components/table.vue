<template>
  <table class="table table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First <i class="fas fa-cat"></i></th>
        <th scope="col">Last <i class="fas fa-sort"></i></th>
        <th scope="col">Handle <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in lista">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  module.exports = {

  }
</script>

<style scoped></style>
