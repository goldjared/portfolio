const currentPage = (() => {
  let currentPathArr = window.location.pathname.split('/');
  let currentPage = currentPathArr[currentPathArr.length - 1].split('.')[0];
  return currentPage;
})();

const navBar = document.querySelectorAll('.page-link');

const navStyle = (() => {
  let navStyleIndex = 0;
  if (currentPage === 'projects') {
    navStyleIndex = 1;
  } else if (currentPage === 'configs') {
    navStyleIndex = 2;
  }

  const selectedNav = navBar[0].children[navStyleIndex];
  selectedNav.style.borderBottom = 'solid 5px #902639';
  selectedNav.style.borderRadius = '5px';
})();

// prevent content going under fixed header
let header = document.querySelector('header-component');
let content = document.querySelector('.content-container');
content.style.marginTop = header.offsetHeight + 'px';

const getData = async (link, filename) => {
  const url = link;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.text();
    navigator.clipboard.writeText(text);
    alert(filename + " copied to clipboard");
  } catch (error) {
    console.error(error.message);
  }
}

const wrapper = document.querySelector('.content-container');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  // targ id is arr indice
  const i = event.target.id;
  getData(configMap[i].link, configMap[i].filename);
});


const configContainer = (title, filename, link, indice) => {
  const projectBoxDiv = document.createElement("div");
  projectBoxDiv.classList.add("project-box");
  
  const h4Title = document.createElement("h4");
  h4Title.textContent = title;
  
  const h5 = document.createElement("h5");
  const projectSubDiv = document.createElement("div");
  projectSubDiv.classList.add("project-sub");
  projectSubDiv.textContent = filename;
  h5.appendChild(projectSubDiv);
  
  const button = document.createElement("button");
  button.textContent = "copy";
  button.setAttribute("id", indice);
  button.style.marginRight = "5px";

  const a = document.createElement("a");
  a.setAttribute("href", link);
  a.textContent = "link to raw"
  projectBoxDiv.append(h4Title, h5, button, a);

  return projectBoxDiv;
}

const configMap = [];

configMap[0] = {
  title: "neovim", 
  filename: "init.lua", 
  link: "https://raw.githubusercontent.com/goldjared/nvim-config/main/init.lua"
};
configMap[1] = {
  title: "intellij vimrc", 
  filename: ".ideavimrc", 
  link: ""
};
configMap[2] = {
  title: "intellij keymaps", 
  filename: "?", 
  link: ""
};
configMap[3] = {
  title: "intellij settings", 
  filename: "settings.json", 
  link: ""
};
configMap[4] = {
  title: "bash aliases", 
  filename: ".bash_aliases", 
  link: ""
};
configMap[5] = {
  title: "vscode vimrc", 
  filename: "?", 
  link: ""
};
configMap[6] = {
  title: "vscode keymaps", 
  filename: "?", 
  link: ""
};
configMap[7] = {
  title: "vscode settings", 
  filename: "?", 
  link: ""
};
configMap[8] = {
  title: "terminal", 
  filename: "?", 
  link: ""
};
configMap[9] = {
  title: "misc scripts", 
  filename: "?", 
  link: ""
};
configMap[10] = {
  title: "kb firmware", 
  filename: "?", 
  link: ""
};

const buildConfigs = () => {
  if(currentPage === 'configs') {
    for(let i = 0; i < configMap.length; i++) {
      content.appendChild(configContainer(configMap[i].title, configMap[i].filename, configMap[i].link, i.toString()));
    }
  }
}
buildConfigs();
