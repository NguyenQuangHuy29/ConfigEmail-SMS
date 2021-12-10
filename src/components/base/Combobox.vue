<template>
    <div
    class="combobox"
   
  >
    <input
      class="combobox-text"
      type="text"
      
    />
    <button>
      <div class="icon-button" :class="{ reverse: isShow }">
        <i class="fas fa-chevron-down"></i>
      </div>
    </button>
    <div v-if="isShow" class="combobox-list">
      <div
        class="combobox-item"
        
      >
        {{ cbxItem.text }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
}
</script>

<style scoped>
.combobox {
  display: flex;
  position: relative;
  border: 1px solid #3385ff;
  border-radius: 4px;
  width: 100%;
  height: 32px;
}

.combobox button {
  height: 100%;
  width: 32px;
  border: none;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  position: relative;
}
.combobox button:hover {
  background-color: #e9ebee;
}

.combobox .icon-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  transition: transform 0.3s linear;
}
.combobox .combobox-text {
  height: 100%;
  width: calc(100% - 32px);
  padding: 0 10px;
  outline: none;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.combobox .reverse {
  transform: translateX(-50%) translateY(-50%) rotate(180deg);
  transition: transform 0.3s linear;
}
.combobox .combobox-list {
  position: absolute;
  top: calc(100% + 2px);
  left: -1px;
  right: -1px;
  z-index: 100;
  background-color: #fff;
  border: 1px solid #babec5;
  border-radius: 2px;
  padding: 2px 0;
}

.combobox .combobox-list .combobox-item {
  padding: 8px 16px;
}
.combobox .combobox-list .combobox-item:hover {
  background-color: #ebedf0;
  color: #2ca01c;
  cursor: pointer;
}
.combobox .selected {
  background-color: #2ca01c !important;
  color: #fff !important;
  position: relative;
  align-items: center;
}

.focus-item {
  background-color: #ebedf0;
}


</style>
