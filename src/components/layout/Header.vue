<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">Cấu hình chia sẻ dữ liệu</a>
        </div>
      </nav>
    </div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <router-link
                tag="li"
                class="nav-item"
                to="/"
                active-class="active"
                ><a class="nav-link">Cấu hình</a></router-link
              >

              <router-link
                tag="li"
                class="nav-item"
                to="/user"
                active-class="active"
                ><a class="nav-link">AddUser</a></router-link
              >
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script></script>
<style scoped></style>
