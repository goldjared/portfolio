class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="header-container">
        <a href="/">
          <h1 id="about">Jared Gold</h1>
        </a>
        <div class="link-container">
          <div class="link-box">
            <a href="http://www.github.com/goldjared">
              <img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github logo"
              />
              </a
            >
          </div>

          <div class="link-box">
            <a href="http://www.linkedin.com/in/goldjared">
              <img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="linkedin logo"
              />
              </a
            >
          </div>
        </div>
      </div>
      <div class="page-link">
        <a href="https://goldrj.com">Home</a>
        <a href="/projects">Projects</a>
        <a href="/posts">Posts</a>
      </div>
    `;
  }
}

customElements.define('header-component', Header);

