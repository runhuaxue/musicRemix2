// controller
var app = function(app) {

    app.makeController = function(m, v, p) {





      v.tree1.on("click", function() {

          v.tree1.animate({
             obj:{scale:1.3},
             time:1000,
             loop:false,
             rewind:true,
             from:true,
             sequence:200
          });
          // zog("tree1");
          // music1.play();
          v.tree1.music1.play();
          stage.update();
      });
      v.tree2.on("click", function() {

          v.tree2.animate({
              obj:{scale:1.3},
              time:1000,
              loop:false,
              rewind:true,
              from:true,
              sequence:200
          });
          v.tree2.music2.play();
          stage.update();
      });
      v.tree3.on("click", function() {

          v.tree3.animate({
   obj:{scale:1.3},
   time:1000,
   loop:false,
   rewind:true,
   from:true,
   sequence:200
});
          v.tree3.music3.play();
          stage.update();
      });
      v.tree4.on("click", function() {

          v.tree4.animate({
   obj:{scale:1.3},
   time:1000,
   loop:false,
   rewind:true,
   from:true,
   sequence:200
});
          v.tree4.music4.play();
          stage.update();
      });
      v.tree5.on("click", function() {

          v.tree5.animate({
   obj:{scale:1.3},
   time:1000,
   loop:false,
   rewind:true,
   from:true,
   sequence:200
});v.tree5.music5.play();
          stage.update();
      });
      
      v.tree6.on("click", function() {

          v.tree6.animate({
   obj:{scale:1.3},
   time:1000,
   loop:false,
   rewind:true,
   from:true,
   sequence:200
});
          v.tree6.music6.play();
          stage.update();
      });
      v.button.on("click", function() {
          location.reload();
          stage.update();
      });


      v.button2.on("click", function() {
        timeout(600000, function(){
          console.log("stop");
// 10分钟后停止所有音乐
location.reload();
});
          stage.update();
      });

      v.button3.on("click", function() {
        timeout(1200000, function(){
          console.log("stop");
// 20分钟后停止所有音乐
location.reload();
});
          stage.update();
      });
      v.button4.on("click", function() {
        timeout(1800000, function(){
          console.log("stop");
// 30分钟后停止所有音乐
location.reload();
});
          stage.update();
      });
      v.button5.on("click", function() {
        timeout(3600000, function(){
          console.log("stop");
// 60分钟后停止所有音乐
location.reload();
});
          stage.update();
      });







        // v.circle.on("click", function() {
        //     v.circle.color = m.nextColor();
        //     stage.update();
        // });

        v.tabs1.on("change", function() {
            p.go(v.page2);
            v.tabs1.selectedIndex = 0;
        });

        v.tabs2.on("change", function() {
            p.go(v.page1);
            v.tabs2.selectedIndex = 1;
        });

    }

    return app;
}(app || {});
