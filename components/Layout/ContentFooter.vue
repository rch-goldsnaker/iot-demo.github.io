<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="https://rch-goldsnaker.github.io/R006_Portafolio_NextJs/"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            IoT
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://rch-goldsnaker.github.io/R006_Portafolio_NextJs/"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://rch-goldsnaker.github.io/R006_Portafolio_NextJs/"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Blog
          </a>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}
        <a
          href="https://rch-goldsnaker.github.io/R006_Portafolio_NextJs/"
          target="_blank"
          rel="noopener"
          >GoldSnaker</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
