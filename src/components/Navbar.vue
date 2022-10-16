<template>
  <mdb-navbar class="flexible-navbar white" position="top" double scrolling>
    <mdb-navbar-brand @click.native="toggleSideNav" class="button-collapse"><mdb-icon icon="bars"/></mdb-navbar-brand>
    <mdb-navbar-nav left>
      <mdb-breadcrumb>{{computedPage.activePage}}</mdb-breadcrumb>
    </mdb-navbar-nav>
    <mdb-navbar-toggler/>
    <mdb-navbar-nav class="right-nav" right>
      <mdb-dropdown class="nav-item notifications-nav" tag="li">
        <mdb-dropdown-toggle slot="toggle" tag="li" outline="none" class="btn-transparent">
          <mdb-badge color="red">3</mdb-badge> <mdb-icon icon="bell" /> <span class="d-none d-md-inline-block">Notifications</span>
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>
            <mdb-icon icon="money-bill" class="mr-2" aria-hidden="true" />
            <span>New order received</span>
            <span class="float-right"><mdb-icon icon="clock-o" arfaa-hidden="true"/> 13 min</span>
          </mdb-dropdown-item>
          <mdb-dropdown-item>
            <mdb-icon icon="money-bill" class="mr-2" aria-hidden="true" />
            <span>New order received</span>
            <span class="float-right"><mdb-icon icon="clock-o" arfaa-hidden="true"/> 33 min</span>
          </mdb-dropdown-item>
          <mdb-dropdown-item>
            <mdb-icon icon="chart-line" class="mr-2" aria-hidden="true" />
            <span>Your campaign is about to end</span>
            <span class="float-right"><mdb-icon icon="clock-o" arfaa-hidden="true"/> 53 min</span>
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-nav-item>
        <mdb-icon icon="envelope" /><span class="clearfix d-none d-sm-inline-block">Contact</span>
      </mdb-nav-item>
      <mdb-nav-item>
        <mdb-icon far icon="comments" /><span class="clearfix d-none d-sm-inline-block">Support</span>
      </mdb-nav-item>
      <mdb-dropdown class="nav-item" tag="li">
        <mdb-dropdown-toggle slot="toggle" tag="li" outline="none" class="btn-transparent">
          <mdb-icon icon="user"/> <span class="clearfix d-none d-sm-inline-block">Profile</span>
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu left>
          <mdb-dropdown-item>Log Out</mdb-dropdown-item>
          <mdb-dropdown-item>My account</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBreadcrumb, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon, mdbBadge } from 'mdbvue'

import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  props: {
    page: {
      type: String
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBreadcrumb,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon,
    mdbBadge
  },
  data () {
    return {
      activePage: this.page,
      toggle: false
    }
  },
  methods: mapActions(['toggleSideNav']),
  computed: {
    computedPage () {
      return {
        activePage: this.page
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar .nav-item {
  line-height: 24px;
  font-size: 16px;
}
.navbar .dropdown-toggle {
  padding: 0 10px;
  font-size: 16px;
}

.navbar ul {
  padding: 5px 0;
}

.navbar .btn {
  font-weight: 300;
}

.navbar-collapse {
  order: 0 !important;
}

.navbar .notifications-nav .dropdown-menu {
  width: 23rem; }

.navbar-expand-lg .navbar-nav {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}

.btn-transparent {
  background-color: transparent !important;
  color: #000;
  text-transform: none;
  box-shadow: none !important;
}

.btn-transparent:hover, .btn-transparent:active {
  box-shadow: none !important;
}

</style>
