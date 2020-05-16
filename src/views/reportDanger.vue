<template>
  <div>



<!-- <div class="buttons">
  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div> -->


<van-field
  readonly
  clickable
  name="picker"
  :value="value"
  label="选择器"
  placeholder="点击选择城市"
  @click="showPicker = true"
/>


</div>

</template>
<script>
  export default {
  
  };
</script>