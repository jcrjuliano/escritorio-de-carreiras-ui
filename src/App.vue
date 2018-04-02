<template>
  <div id="app">

    <!-- START NAV -->
    <nav class="navbar is-black">

      <div  class="navbar-menu">
        <div class="navbar-start">

          <router-link class="navbar-item" :to="{name: 'home'}">Home</router-link>

          <router-link class="navbar-item" :to="{name:'vagas'}">Vagas</router-link>

        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">Usuário</span>
            <div class="navbar-dropdown is-boxed">
              <router-link class="navbar-item" :to="'/'">Configurações</router-link>
              <a href="/logout" class="navbar-item">Sair</a>
            </div>
          </div>
        </div>
      </div>


    </nav>
    <!-- END NAV -->

    <div class="section" id="content-admim">
      <router-view></router-view>
    </div>
  </div>
</template>