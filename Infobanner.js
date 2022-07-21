AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        BATMAN: {
          banner_url: "./assets/posters/batmancomicsbanner.png",
          title: "Batman",
          released_year: "1983",
          
          description: "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 in 1939.",
        },
        CAPTAINMARVEL: {
          banner_url: "./assets/posters/captainmarvelbanner.png",
          title: "CaptainMarvel",
          released_year: "1962",
          description:
            "Captain Marvel is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Bill Mantlo and artist Ananda Ray, the character first appeared in Captain Marvel #1 (March, 1962).",
        },
        HALLOWEEN: {
          banner_url: "./assets/posters/Halloweencomicsbanner.png",
          title: "Halloween",
          released_year: "1978",
          released_date: "October 31, 1978",
          description:
            "The story follows a group of friends who are visiting a haunted house when they suddenly find themselves in the midst of a terrifying event. for more information you can visit this website this is the link https://halloweenmovie.fandom.com/wiki/Halloween_(1978)#:~:text=%20Halloween%20%281978%29%20%201%20Plot.%20Judith%20Myers,additional%20%2423%20million%20internationally%2C%20making%20the...%20More%20",
        },
        SPIDERMAN: {
          banner_url: "./assets/posters/spidermancomicsbanner.png",
          title: "Spiderman No way Home",
          released_year: "2022",
          released_date: "March 1",
          description:
            "Spider-Man: No Way Home. Is directed by Jon Watts and written by Chris McKenna, Erik Sommers and Stan Lee and Stars are Tom Holland, Zendaya and Benedict Cumberbatch"
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });