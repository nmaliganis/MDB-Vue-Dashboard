<template>
  <div class="fullscreen">
    <mdb-navbar
      position="top"
      color="mdb"
      dark
      scrolling
      transparent
    >
      <mdb-navbar-brand href="#"><strong>MDB</strong></mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed active>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Link</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Profile</mdb-nav-item>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input
            type="text"
            class="text-white"
            placeholder="Search"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>

    <!-- Intro Section -->
    <div
      class="view"
      style="background-image: url(https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg); height: 60vh; background-repeat: no-repeat; background-size: cover; background-position: center center;"
    >
      <div class="mask rgba-black-light">
        <div
          class="container h-100 d-flex justify-content-center align-items-center"
        >
          <div class="row pt-5 mt-3">
            <div class="col-md-12">
              <div class="text-center">
                <h1
                  class="h1-reponsive white-text text-uppercase font-weight-bold mb-3 wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <strong>welcome to my blog</strong>
                </h1>
                <hr
                  class="hr-light mt-4 wow fadeInDown"
                  data-wow-delay="0.4s"
                />
                <h5
                  class="text-uppercase mb-5 white-text wow fadeInDown"
                  data-wow-delay="0.4s"
                >
                  <strong>Photography & design</strong>
                </h5>
                <a
                  class="btn btn-outline-white wow fadeInDown"
                  data-wow-delay="0.4s"
                  >portfolio</a
                >
                <a
                  class="btn btn-outline-white wow fadeInDown"
                  data-wow-delay="0.4s"
                  >About me</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!--Section: Blog v.3-->
      <section
        class="section extra-margins my-5 text-center text-lg-left wow fadeIn"
        data-wow-delay="0.3s"
      >
        <!--Section heading-->
        <h2 class="text-center my-5 h1">Recent posts</h2>
        <!--Section description-->
        <p class="text-center mb-5 w-responsive mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/img (38).jpg"
                class="img-fluid"
                alt="First sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-7 mb-4">
            <!--Excerpt-->
            <a href="" class="teal-text"
              ><h6 class="pb-1">
                <i class="fas fa-heart"></i><strong> Lifestyle </strong>
              </h6></a
            >
            <h4 class="mb-4"><strong>This is title of the news</strong></h4>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor.
            </p>
            <p>
              by <a><strong>Jessica Clark</strong></a
              >, 26/08/2016
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <hr class="mb-5" />

        <!--Grid row-->
        <div class="row mt-3">
          <!--Grid column-->
          <div class="col-lg-4 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                class="img-fluid"
                alt="Second sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-7 mb-4">
            <!--Excerpt-->
            <a href="" class="cyan-text"
              ><h6 class="pb-1">
                <i class="fas fa-plane"></i><strong> Travels</strong>
              </h6></a
            >
            <h4 class="mb-4"><strong>This is title of the news</strong></h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>
            <p>
              by <a><strong>Jessica Clark</strong></a
              >, 24/08/2016
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <hr class="mb-5" />

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/img (35).jpg"
                class="img-fluid"
                alt="Third sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-7 mb-4">
            <!--Excerpt-->
            <a href="" class="brown-text"
              ><h6 class="pb-1">
                <i class="fas fa-camera"></i><strong> Photography</strong>
              </h6></a
            >
            <h4 class="mb-4"><strong>This is title of the news</strong></h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p>
              by <a><strong>Jessica Clark</strong></a
              >, 21/08/2016
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <hr class="mb-5" />

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/img (39).jpg"
                class="img-fluid"
                alt="Third sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-7 mb-4">
            <!--Excerpt-->
            <a href="" class="red-text"
              ><h6 class="pb-1">
                <i class="fas fa-heart"></i><strong> Lifestyle</strong>
              </h6></a
            >
            <h4 class="mb-4"><strong>This is title of the news</strong></h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p>
              by <a><strong>Jessica Clark</strong></a
              >, 21/08/2016
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Pagination dark-->
        <nav
          class="wow fadeIn mb-4 mt-5"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-delay: 0.4s; animation-name: fadeIn;"
        >
          <ul class="pagination pg-dark flex-center">
            <!--Arrow left-->
            <li class="page-item">
              <a
                class="page-link waves-effect waves-effect"
                aria-label="Previous"
              >
                <span aria-hidden="true">??</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>

            <!--Numbers-->
            <li class="page-item active">
              <a class="page-link waves-effect waves-effect">1</a>
            </li>
            <li class="page-item">
              <a class="page-link waves-effect waves-effect">2</a>
            </li>
            <li class="page-item">
              <a class="page-link waves-effect waves-effect">3</a>
            </li>
            <li class="page-item">
              <a class="page-link waves-effect waves-effect">4</a>
            </li>
            <li class="page-item">
              <a class="page-link waves-effect waves-effect">5</a>
            </li>

            <!--Arrow right-->
            <li class="page-item">
              <a class="page-link waves-effect waves-effect" aria-label="Next">
                <span aria-hidden="true">??</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <!--/Pagination dark-->
      </section>
      <!--Section: Blog v.3-->

      <hr class="mb-5" />

      <!--Section: Blog v.2-->
      <section
        class="section extra-margins text-center my-5 wow fadeIn"
        data-wow-delay="0.3s"
      >
        <!--Section heading-->
        <h2 class="text-center my-5 h1">Older posts</h2>
        <!--Section description-->
        <p class="text-center mb-5 w-responsive mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 col-md-12 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1 mb-2">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
                class="img-fluid"
                alt="First sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Excerpt-->
            <a href="" class="pink-text"
              ><h6 class="mb-3 mt-3">
                <i class="fas fa-map "></i><strong> Environment</strong>
              </h6></a
            >
            <h4 class="font-weight-bold mb-3">This is title of the news</h4>
            <p>
              by <a><strong>Billy Forester</strong></a
              >, 15/07/2016
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
              voluptas.
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1 mb-2">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                class="img-fluid"
                alt="Second sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Excerpt-->
            <a href="" class="indigo-text"
              ><h6 class="mb-3 mt-3">
                <i class="fas fa-plane"></i><strong> Travels</strong>
              </h6></a
            >
            <h4 class="font-weight-bold mb-3">This is title of the news</h4>
            <p>
              by <a><strong>Billy Forester</strong></a
              >, 12/07/2016
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Featured image-->
            <div class="view overlay z-depth-1 mb-2">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg"
                class="img-fluid"
                alt="Thrid sample image"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Excerpt-->
            <a href="" class="cyan-text"
              ><h6 class="mb-3 mt-3">
                <i class="fas fa-leaf "></i><strong> Animals</strong>
              </h6></a
            >
            <h4 class="font-weight-bold mb-3">This is title of the news</h4>
            <p>
              by <a><strong>Billy Forester</strong></a
              >, 10/07/2016
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, quia consequuntur magni dolores eos qui ratione
              voluptatem.
            </p>
            <a class="btn btn-primary">Read more</a>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </section>
      <!--Section: Blog v.2-->
    </div>

    <!--Footer-->
    <footer class="page-footer pt-4 mt-4 text-center text-md-left">
      <!--Footer Links-->
      <div class="container">
        <div class="row mt-3">
          <!--First column-->
          <div class="col-md-3 col-lg-4 col-xl-3 offset-xl-1 col-12 mb-4">
            <h6 class="text-uppercase font-weight-bold mb-4">Company name</h6>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!--/.First column-->

          <hr class="w-100 clearfix d-md-none" />

          <!--Second column-->
          <div class="col-md-2 offset-xl-1 col-12 mb-4">
            <h6 class="text-uppercase font-weight-bold mb-4">Products</h6>
            <p><a href="#!">MDBootstrap</a></p>
            <p><a href="#!">MDWordPress</a></p>
            <p><a href="#!">BrandFlow</a></p>
            <p><a href="#!">Bootstrap Angular</a></p>
          </div>
          <!--/.Second column-->

          <hr class="w-100 clearfix d-md-none" />

          <!--Third column-->
          <div class="col-md-3 col-lg-2 col-12 mb-4">
            <h6 class="text-uppercase font-weight-bold mb-4">Useful links</h6>
            <p><a href="#!">Your Account</a></p>
            <p><a href="#!">Become an Affiliate</a></p>
            <p><a href="#!">Shipping Rates</a></p>
            <p><a href="#!">Help</a></p>
          </div>
          <!--/.Third column-->

          <hr class="w-100 clearfix d-md-none" />

          <!--Fourth column-->
          <div class="col-md-4 col-lg-3 col-12">
            <h6 class="text-uppercase font-weight-bold mb-4">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          <!--/.Fourth column-->
        </div>

        <!--/.Footer Links-->

        <hr />

        <!--Footer Links-->
        <div class="row mt-3 d-flex align-items-center">
          <!--Grid column-->
          <div class="col-md-6 col-12">
            <!--Copyright-->
            <p class="text-left grey-text">
              ?? 2018 Copyright:
              <a href="https://mdbootstrap.com/bootstrap-tutorial/"
                ><strong> MDBootstrap.com</strong></a
              >
            </p>
            <!--/.Copyright-->
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-6 col-12">
            <!--Social buttons-->
            <div class="social-section">
              <ul class="list-unstyled list-inline d-flex justify-content-end">
                <li class="list-inline-item">
                  <a class="btn-floating btn-small rgba-white-slight"
                    ><i class="fab fa-facebook-f"> </i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-small rgba-white-slight"
                    ><i class="fab fa-twitter"> </i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-small rgba-white-slight"
                    ><i class="fas fa-google-plus"> </i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-small rgba-white-slight"
                    ><i class="fab fa-linkedin-in"> </i
                  ></a>
                </li>
              </ul>
            </div>
            <!--/.Social buttons-->
          </div>
          <!--Grid column-->
        </div>
      </div>
    </footer>
    <!--/.Footer-->
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbInput,
  mdbNavbarBrand,
} from "mdbvue";

export default {
  name: "Post",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar {
  background: transparent;
}
</style>
