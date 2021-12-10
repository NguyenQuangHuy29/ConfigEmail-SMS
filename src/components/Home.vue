<template>
  <div class="main">
    <div class="button-bar">
      <Button class="btn" text="Thêm" icon="fas fa-plus" />
      <Button class="btn" text="Export" icon="fas fa-download" />
    </div>
    <div class="input-label-h m-b-30">
      <div class="label-h">Tên group</div>
      <input class="input-box-h" type="text" />
    </div>
    <div>
      <div class="form-row">
        <div class="col">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected1"
          />
          <span class="span-text">Email</span><br />
          <div v-if="isCheck1">
            <input class="input-text-1" />
            <div>
              <div>
                <select>
                  <option value="">Small Text</option>
                  <option value="" selected>Normal Text</option>
                  <option value="">LargerText</option>
                </select>
                <div>
                  <button class="btn"><b>Bold</b></button>
                  <button class="btn"><i>Italic</i></button>
                  <button class="btn"><u>Underline</u></button>
                </div>

                <div>
                  <button class="btn"><i class="fas fa-align-justify"></i></button>
                  <button class="btn"><i class="fas fa-align-justify"></i></button>
                  <button class="btn"><i class="fas fa-align-justify"></i></button>
                  <button class="btn"><i class="fas fa-align-justify"></i></button>
                </div>
                <div>
                  <button class="btn"><i class="fas fa-share-square"></i></button>
                </div>
                <div>
                  <button class="btn"><i class="fas fa-image"></i></button>
                </div>
              </div>
            </div>
            <input class="input-text"/>
          </div>
        </div>
        <div class="col">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected2"
          />
          <span class="span-text">SMS</span><br />
          <input class="input-text" v-if="isCheck2" />
        </div>
      </div>
      <div class="form-row">
        <div class="col" style="max-width: 50%">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected3"
          />
          <span class="span-text">Hồ chứa</span><br />
          <div class="grid">
            <Table v-if="isCheck3" />
          </div>
        </div>
        <div class="col" style="max-width: 50%">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected4"
          />
          <span class="span-text">Thông tin trạm quan trắc</span><br />
          <div class="grid">
            <Table v-if="isCheck4" />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col" style="max-width: 50%">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected5"
          />
          <span class="span-text">Dữ liệu trạm đo/hồ chứa được chia sẻ</span
          ><br />
          <div class="grid">
            <Table v-if="isCheck5" />
          </div>
        </div>
        <div class="col" style="max-width: 50%">
          <input
            class="input-check"
            type="checkbox"
            id="checkbox"
            v-model="isSelected6"
          />
          <span class="span-text"
            >Dữ liệu được chia sẻ(chọn các loại báo cáo)</span
          ><br />
          <div class="grid">
            <Table v-if="isCheck6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
      isSelected4: false,
      isSelected5: false,
      isSelected6: false,
    };
  },
  watch: {
    isSelected1() {
      this.isCheck1 = this.isSelected1;
    },
    isSelected2() {
      this.isCheck2 = this.isSelected2;
    },
    isSelected3() {
      this.isCheck3 = this.isSelected3;
    },
    isSelected4() {
      this.isCheck4 = this.isSelected4;
    },
    isSelected5() {
      this.isCheck5 = this.isSelected5;
    },
    isSelected6() {
      this.isCheck6 = this.isSelected6;
    },
  },
};
</script>

<style>
.main {
  margin: 10px 50px 0px 50px;
}
.input-box-h {
  width: 30%;
  margin-left: 0px;
  height: 30px;
  border: 2px solid #ced4da;
  outline: none;
  border-radius: 0.25rem;
  padding-left: 10px;
}
.label-h {
  margin: 20px 0px 5px 0px;
}
.check-box-bar {
  margin: 20px 20px 20px 0px;
}
.input-text {
  height: 100px;
  width: 100%;
  border: 2px solid #ced4da;
  outline: none;
  border-radius: 0.25rem;
}
.input-text-1 {
  width: 100%;
  border: 2px solid #ced4da;
  outline: none;
  border-radius: 0.25rem;
}
.input-check {
  width: 20px;
  height: 20px;
}
.span-text {
  margin-left: 10px;
}
.button-bar {
  display: flex;
  height: 40px;
  align-items: center;
}
.grid-container {
  padding: 16px 16px 0 16px;
  height: calc(100% - 90px);
}
.grid-header {
  margin-bottom: 16px;
}
.grid-header input {
  height: 25px;
  width: 50px;
}
.grid {
  overflow: auto;
  height: calc(100% - 41px);
  max-width: 100%;
}
.paging-bar {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.button-bar {
  display: flex;
  height: 30px;
  align-items: center;
}
.btn{
  float: left;
}
</style>
