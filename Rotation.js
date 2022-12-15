//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.3;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.3;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent('plane-rotation-reader', {
  schema:{
    speedOfRotation: {type:'number', default: 0},
    speedOfAscent: {type:'number', default: 0}
  },
  init: function(){
    window.addEventListener('keydown', (e)=>{
      this.data.speedOfRotation = this.el.getAttribute('rotation');
      this.data.speedOfAscent = this.el.getAttribute('position');
      var plane_rotation = this.data.speedOfRotation;
      var plane_position = this.data.speedOfAscent;

      if(e.key === 'ArrowRight')
      {
        if(plane_rotation.z < 50)
        {
          plane_rotation.z += 7
          this.el.setAttribute("rotation", plane_rotation);
        }
      }

      if(e.key === 'ArrowLeft')
      {
        if(plane_rotation.z > -50)
        {
          plane_rotation.z -= 7;
          this.el.setAttribute("rotation", plane_rotation);
        }
      }

      if(e.key === 'ArrowUp')
      {
        if(plane_rotation.x > -30)
        {
          plane_rotation.x -= 0.7;
          this.el.setAttribute("rotation", plane_rotation);
        }
      }

      if(e.key === 'ArrowDown')
      {
        if(plane_rotation.x < 30)
        {
          plane_rotation.x += 0.7;
          this.el.setAttribute("rotation", plane_rotation);
        }
      }
    })
  }
});