import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

console.log("Loaded data", data);

/**

 * Starter code
 * Data visualization
 */

/* globals Vue, p5*/

window.addEventListener("load", function () {
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  // VUE!!!
  // Create a new vue interface

  new Vue({
    template: `<div id="app">
	    <div ref="canvasHolder"></div>		
		  <div v-if="true" class="overlay scroll">
        <div v-if= "false">
        <div v-for="color in colors" :style="{backgroundColor:color.hex }">{{color}}</div>
        </div>
	    </div>
  </div>`,

    mounted() {
      // Create P5 when we mount this element
      const s = (p0) => {
        p = p0;

        (p.preload = () => {
          // Any preloading
        }),
          (p.setup = () => {
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            p.colorMode(p.HSL, 360, 100, 100);
            p.ellipseMode(p.RADIUS);
          });

        p.draw = () => {
          let t = p.millis() * 0.001;
          // Draw something
          p.background(0,0,0)
          
          this.planets.forEach((c, index) => {
            let loop_time = 50 / c.vel;
            let pct = (t % loop_time) / loop_time;
            p.fill(c.color);
            let x = c.dist * Math.sin(pct * 2 * Math.PI) + CANVAS_WIDTH / 2 ;
            let y = c.dist * Math.cos(pct * 2 * Math.PI) + CANVAS_HEIGHT / 2;
            if (c.name != "Sun") {
              p.circle(x, y, (c.size / 1000));
            } else {
              p.circle(x, y, 40);
            }
            
            p.fill("gray")
            p.text(c.name, x, y);
          })

         
        };

        p.mouseClicked = () => {
          // Mouse interaction
        };
      };

      let p = undefined;
      const CANVAS_WIDTH = 1250;
      const CANVAS_HEIGHT = 600;
      
      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
    },

    // We will use your data object as the data for Vue
    data() {
      data.colorName = "purple";
      return data;
    },
    el: "#app",
  });
});
