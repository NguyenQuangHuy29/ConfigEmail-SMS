<template>
  <div>
    <table class="table-Info">
      <thead>
        <th>#</th>
        <th>STT</th>
        <th>Thao tác</th>

        <!-- <th v-for="(field, key) in fields" :key="key">
          <input
            v-if="field.typeSearch === 'input'"
            type="text"
            :placeholder="field.text"
            v-model="inputSearch[field.name]"
            @keyup.enter="onPressEnter"
          />
          <select
            v-else-if="field.typeSearch === 'select'"
            name="--Không chọn--"
            v-model="inputSearch[field.name]"
            @change="onChangeSelect"
            style="width:160px; height:24px"
          >
            <option value="">--Không chọn--</option>
            <option
              v-for="(item, index) in field.items"
              :key="index"
              :value="item.value"
            >
              {{ item.text }}
            </option>
          </select>
          <div v-else>{{ field.text }}</div>
        </th> -->
        <th>Value1</th>
        <th>Value1</th>
        <th>Value1</th>
        <th>Value1</th>
        <th>Value1</th>
        <th>Value1</th>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>{{ index + 1 }}</td>
          <td>
            <button class="btn-icon">
              <i class="fas fa-edit"></i>
            </button>
          </td>
          <!-- <td v-for="(field, key) in fields" :key="key">
            {{ item[field.name] }}
          </td> -->
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
table {
  border-collapse: separate;
  width: 100%;
  border-spacing: 0;
}
.grid::-webkit-scrollbar-track {
  margin-top: 48px;
  width: 6px;
  background-color: rgb(131, 121, 121);
}
.grid::-webkit-scrollbar {
  width: 5px !important;
  height: 5px !important;
}
.grid::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #0a4b70;
}
th {
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid #bbb;
}
th,
td {
  height: 48px;
  padding: 0 16px;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid #bbb;
  border-right: 1px solid #bbb;
}

td:nth-child(1) {
  border-left: 1px solid #bbb;
}
th:nth-child(1) {
  border-left: 1px solid #bbb;
}
th input {
  height: 24px;
  padding: 0 16px;
  border-radius: 3px;
  border: 1px solid #bbb;
}

.btn-icon {
  border: none;
  outline: none;
  background: #fff;
}
</style>
