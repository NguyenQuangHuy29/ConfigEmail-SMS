<template>
  <div class="info-form">
    <div class="title">Add User</div>
    <div class="form-row">
      <div class="input-label m-b-30">
        <div class="label">Username <span>*</span></div>
        <Combobox />
      </div>
      <div class="input-label m-b-30">
        <div class="label">Đơn vị user <span>*</span></div>
        <input class="input-box" type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="input-label m-b-30">
        <div class="label">Email <span>*</span></div>
        <input class="input-box" type="text" />
      </div>
      <div class="input-label m-b-30">
        <div class="label">Số điện thoại<span>*</span></div>
        <input class="input-box" type="text" />
      </div>
      <div class="input-label m-b-30">
        <div class="label">Trạng thái<span>*</span></div>
        <input class="input-box" type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="input-label m-b-30">
        <div class="label">
          Dữ liệu trạm đo/ hồ chứa được chia sẻ<span>*</span>
        </div>
        <Combobox />
      </div>
      <div class="input-label m-b-30">
        <div class="label">Dữ liệu được chia sẻ<span>*</span></div>
        <Combobox />
      </div>
    </div>

    <div class="wrap-button">
      <Button class="btn" text="Thêm" icon="fas fa-plus" />
      <Button class="btn" text="Hủy" icon="fas fa-times" />
    </div>
  </div>
</template>

<script></script>

<style>
.info-form {
  margin: 15px 7.5px 0 7.5px;
  position: relative;
  border: 1px gray solid;
  padding: 10px;
  margin-top: 30px;
}
.info-form .title {
  position: absolute;
  top: -16px;
  left: 20px;
  background-color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.form-row {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
#station-title {
  margin: 16px;
}
#station-title span {
  color: #003eff;
}
.input-label {
  width: 50%;
  padding: 0 5px;
}
.label {
  margin-bottom: 8px;
  font-weight: 700;
}

.label span {
  color: red;
}
.input-box {
  width: 100%;
  height: 30px;
  border: 1px solid #ced4da;
  outline: none;
  border-radius: 0.25rem;
  padding-left: 10px;
}
.wrap-button {
  display: flex;
  justify-content: center;
}
.wrap-button .btn {
  margin: 0.5em 1em;
}
.input-acc {
  display: flex;

  align-items: center;
}
</style>
