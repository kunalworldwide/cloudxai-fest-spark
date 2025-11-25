<template>
  <div class=" hero-main-conatiner" style="position: relative; overflow: hidden; height:100svh">
    <NavBar socialLogoColor="black" />
    <div class="hero-background">
      <v-carousel

        height="100%"
        :show-arrows="false"
        hide-delimiters
        class="hero-carousel pa-0"
        style="z-index: 10;"
        crossfade
      >
        <v-container class="pa-0" fluid  style="height:100%">
          <div
            class="d-flex text-white justify-center ma-0 pa-0 hero-slide-container"
            style="height: 100%"
          >
            <div class="hero-slide-content-main">
              <div class="d-flex flex-column ga-4 hero-slide-content">
                <v-chip
                  variant="flat"
                  color="rgba(255,255,255,0.2)"
                  class="text-subtitle-1 align-self-start date-chip"
                >
                  <v-icon start size="20">mdi-calendar-blank-outline</v-icon>
                  March 14, 2026
                </v-chip>
                <h1 class=" ">
                  CloudxAI Conference Bengaluru 2026
                </h1>

                <div class="hero-slide-actions">
                  <v-btn
                    color="white"
                    variant="flat"
                    size="x-large"

                    class="text-none rounded-xl"
                    append-icon="mdi-arrow-top-right"
                    width="max-content"
                    to="/register"
                  >
                  Register
                  </v-btn>
                  <div class="hero-location d-flex align-center">
                    <v-icon size="20" class="mr-2"
                      >mdi-map-marker-outline</v-icon
                    >
                    <span class="text-body-1" >
                      <a target="_blank" href="https://maps.app.goo.gl/sKCE49noeMskaWmW7" style="color:white; text-decoration: none;">Nimhans Convention Center, Bengaluru
                        <v-icon size="20" class="ml-2">mdi-open-in-new</v-icon>
                      </a>
                    </span>
                  </div>
                </div>
                <div class="footer-content">
                  <p class="text-body-2 text-uppercase opacity-70 mb-2">
                    Powered by
                  </p>
                  <a href="https://cast.ai/" target="_blank" class="footer-value">
                    <v-img
                      src="/images/cast-ai.svg"
                      alt="Cast AI"
                      class="footer-value-image"
                      cover
                      width="120px"
                    ></v-img>
                  </a>
                  <!-- <h2 class="text-h4 footer-value">
                    Cast AI
                  </h2> -->
                </div>
              </div>
            </div>
            <div class="text-center pa-0 hero-image-conatiner">
              <v-img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="CloudxAI Conference 2026 Bengaluru"
                class="pa-0 hero-slide-image"
                cover
                height="100%"
                width="100%"
              ></v-img>
            </div>
          </div>
        </v-container>
      </v-carousel>
      <div class="d-flex align-end pa-0 background-svg" style="width: 320px; height:120%; background-color: #00E6FF; position:absolute; right:-100px; bottom:-40px">
       <svg width="572" height="962" viewBox="0 0 572 962" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M405.514 697.285C421.728 781.491 329.927 819.848 273.744 843.324C266.55 846.328 259.753 849.166 254.153 851.732C229.406 863.041 208.235 847.626 199.033 828.528C187.049 803.601 191.271 768.09 228.921 749.022C263.687 731.428 277.199 692.43 288.059 661.096C298.026 632.332 306.639 607.485 328.325 608.865C372.271 611.652 400.025 678.171 401.179 680.996L401.205 681.08C403.089 686.662 404.51 692.073 405.514 697.285ZM196.901 813.253C197.848 818.176 199.431 822.916 201.546 827.314C210.172 845.235 229.957 859.728 253.005 849.196C258.654 846.62 265.468 843.769 272.68 840.752C331.433 816.201 429.759 775.099 398.607 682.01C397.788 680.04 369.951 614.287 328.159 611.634C308.587 610.387 300.694 633.167 290.692 662.008C279.673 693.812 265.953 733.389 230.187 751.496C200.867 766.352 192.727 791.578 196.901 813.253Z" fill="white" fill-opacity="0.5"></path> <g opacity="0.9524"> <path d="M431.887 690.428C440.11 733.133 426.067 770.974 389.982 803.149C355.057 834.291 306.429 854.614 270.923 869.454C262.121 873.137 253.797 876.608 246.929 879.748C216.837 893.495 191.107 874.742 179.919 851.51C165.303 821.156 170.467 777.881 216.357 754.648C259.05 733.03 275.628 685.209 288.941 646.79C301.108 611.708 311.607 581.402 337.883 583.067C391.468 586.466 425.366 667.716 426.78 671.17L426.807 671.255C428.984 677.739 430.678 684.147 431.887 690.428ZM176.612 833.035C177.78 839.104 179.722 844.934 182.335 850.356C192.974 872.454 217.373 890.315 245.811 877.316C252.716 874.158 261.057 870.674 269.888 866.985C341.945 836.866 462.553 786.438 424.272 672.153C423.36 669.961 389.172 589.016 337.7 585.749C313.457 584.213 303.753 612.217 291.468 647.672C277.994 686.552 261.226 734.939 217.567 757.043C181.489 775.299 171.473 806.35 176.612 833.035Z" fill="white" fill-opacity="0.5"></path> </g> <g opacity="0.9048"> <path d="M458.385 684.057C468.096 734.488 451.515 779.182 408.899 817.18C367.613 853.993 310.098 878.025 268.102 895.583C257.671 899.939 247.823 904.053 239.697 907.766C204.278 923.947 173.97 901.859 160.798 874.494C143.561 838.679 149.653 787.663 203.772 760.268C254.395 734.636 274.029 677.994 289.812 632.475C304.16 591.079 316.555 555.313 347.423 557.272C410.647 561.283 451.95 660.34 452.362 661.339L452.389 661.424C454.962 669.081 456.957 676.639 458.385 684.057ZM156.322 852.807C157.71 860.013 160.025 866.95 163.12 873.377C175.761 899.646 204.787 920.882 238.626 905.425C246.79 901.695 256.665 897.565 267.105 893.207C352.468 857.528 462.553 786.438 424.272 672.153C423.36 669.961 389.172 589.016 337.7 585.749C313.457 584.213 303.753 612.217 291.468 647.672C277.994 686.552 261.226 734.939 217.567 757.043C181.489 775.299 171.473 806.35 176.612 833.035Z" fill="white" fill-opacity="0.5"></path> </g> <g opacity="0.8571"> <path d="M484.894 677.694C496.092 735.851 476.963 787.39 427.825 831.209C380.177 873.693 313.769 901.446 265.28 921.712C253.242 926.748 241.858 931.497 232.475 935.792C191.721 954.409 156.844 928.985 141.677 897.488C121.815 856.234 128.851 797.463 191.199 765.896C249.759 736.247 272.449 670.776 290.682 618.161C307.218 570.439 321.503 529.234 356.963 531.478C429.825 536.1 477.472 650.36 477.934 651.51L477.958 651.585C480.939 660.422 483.245 669.13 484.894 677.694ZM136.041 872.577C137.648 880.92 140.334 888.954 143.915 896.397C158.569 926.844 192.21 951.448 231.438 933.524C240.868 929.21 252.26 924.449 264.317 919.41C362.996 878.17 528.163 809.171 475.628 662.282C474.567 659.895 427.657 538.436 356.808 533.945C323.24 531.817 309.904 570.271 293.033 618.957C274.651 671.99 251.775 737.997 192.322 768.098C142.737 793.201 128.976 835.883 136.041 872.577Z" fill="white" fill-opacity="0.5"></path> </g> </svg>

      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue';

</script>

<style scoped lang="scss">

.hero-main-conatiner {
  background-image: url("../../assets/images/home.jpg");
  background-size: cover;
  background-position: center;
}
.hero-background {
  height: calc(100svh - 64px);
  padding:60px;
  padding-top: 0px;
}

.hero-slide-container {
  .hero-slide-content-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-right: none;
    height: 100%;
    width: 45%;
    padding: 16px;
    padding-left:85px;

    .hero-slide-content {
      // padding-left: calc(100% - 650px);
      .date-chip {
        margin-bottom: 16px;
      }

      .footer-content {
        margin-top: 40px;
      }

      .hero-slide-actions {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 32px;
      }

      & > h1 {
        margin: 0;
        // margin-right: -300px;
        z-index: 1;
        font-size: 6rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.015625em;
        font-family: "Roboto", sans-serif;
        text-transform: none;
        font-weight: 500;
      }
    }
  }

  .hero-image-conatiner {
    width: 55%;
    height: 100%;
  }
}

@media (max-width: 1080px) {
  .hero-slide-container {
    flex-direction: column;
    align-items: center;

    .hero-slide-content-main {
      border-right: 1px solid white;
      justify-content: flex-start;

      border-bottom: none;
      width: 100%;
      height: 50%;
      padding: 24px;

      .hero-slide-content {
        padding-left: 0;
        .date-chip {
          margin-bottom: 0px;
        }
        .hero-slide-actions {
          margin-top: 10px;
        }

        .footer-content {
          margin-top: 0px;
        }

        & > h1 {
          margin-right: 0px;
          z-index: 1;
          font-size: 4rem;
        }
      }
    }
    .hero-image-conatiner {
      width: 100%;
      height: 50%;
    }
  }
}


@media (max-width: 768px) {
  .background-svg{
display: none !important;
  }
  .hero-background {
    padding:16px;
    padding-top: 0px;
  }

  .hero-slide-content{
    &>h1{
      font-size: 2.5rem !important;
    }

    .footer-value{
      font-size: 1.5rem !important;
    }
  }

}

@media (max-width: 480px) {
  .hero-slide-content{
    &>h1{
      font-size: 2.25rem !important;
    }

    .footer-value{
      font-size: 1.25rem !important;
    }
  }
}

@media(max-height: 852px) {
  .hero-background {
    height: 820px;
  }
}

.hero-location {
  color: rgba(255, 255, 255, 0.9);
}

.hero-carousel .v-carousel__controls {
  bottom: 24px;
}
</style>