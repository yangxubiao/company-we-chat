<template>
<div id="tree">
    <div class="feature">
        <div class='cancel' @click='onCancel($event)'>取消</div>
        <div class='title'>{{config.title}}</div>
        <div class='confirm' @click="PeopleConfirm($event)">确定</div>
     </div>
     <el-tree
     :data="data"
     show-checkbox
     node-key="id"
     ref="tree"
     @check-change="fn"
     highlight-current
     :props="defaultProps">
   </el-tree>
</div>
</template>
  
  <script>
   import { Tree } from 'element-ui'
  import parentMixin from '@/mixins/parentMixin'
  export default {
      components:{
          'elTree':  Tree
      },
    mixins: [parentMixin],
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      fn(A,B,C){
        console.log(this.$refs.tree.getCheckedNodes());
        console.log(this.$refs.tree.getCheckedKeys());
          console.log(A);
           console.log(B);
           console.log(C)
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      onConfirm(value) {
      
      this.value = value;
      this.showPicker = false;
    }
    },

    data() {
      return {
        value: '',
      showPicker: false,
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  }
  </script>
  
  <style lang="scss" scoped>
      #tree{
          width:100vh;
          height:100vh;
      }
      .feature{
          width:100vw;
         padding:0 10px;
         display: flex;
         font-size:1.2em;
         height:40px;
         justify-content: space-between;
         align-items: center;
         border-bottom:1px solid #e6e6e6;
       }
    
  </style>
