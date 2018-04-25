// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page1);
        var logo = new Label({
           text:"Click To Mix your chill music",
           font:"courier",
        }).center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);
        // put intro screen
        var Tree = function(leaf, trunk, word) {
        var duo; if (duo = zob(Tree, arguments, null, this)) {return duo;}

        this.super_constructor();

        if (zot(leaf)) leaf = frame.green;
        if (zot(trunk)) trunk = "brown";

        var l1 = new Triangle(30,30,30,leaf)
          .addTo(this)
          .mov(0,-30);




        var l2 = new Triangle(50,50,50,leaf)
          .addTo(this)
          .mov(0,0);

        var l3 = new Triangle(70,70,70,leaf)
          .addTo(this)
          .mov(0,50);
          // .sca(.9)
          // .addTo(this);
        var t = new Rectangle(25,35,trunk)
          .addTo(this)
          .mov(-12,80);
          var label = new Label({text:word,color:"white"}).addTo(this)
          .mov(-36,-80);


        this.drag({dragCursor:"pointer", currentTarget:true})
            .centerReg();
        this.shadow = new createjs.Shadow("rgba(0,0,0,.1)", 5, 5, 10);
      }
extend(Tree, Container);
var t1 = v.tree1 = new Tree(model.lcolors[0], model.tcolors[0],"melody")
    .addTo(content).pos(0,100);

    v.tree1.music1 = frame.asset("melody.mp3");


    var t2 = v.tree2 = new Tree(model.lcolors[1], model.tcolors[1],"rain")
        .addTo(content).pos(250,100);

        v.tree2.music2 = frame.asset("rain.mp3");

        var t3 = v.tree3 = new Tree(model.lcolors[2], model.tcolors[0],"night")
            .addTo(content).pos(500,100);

        v.tree3.music3 = frame.asset("night.mp3");


            var t4 = v.tree4 = new Tree(model.lcolors[3], model.tcolors[2],"spring")
                .addTo(content).pos(0,400);

        v.tree4.music4 = frame.asset("spring.mp3");


                var t5 = v.tree5 = new Tree(model.lcolors[4], model.tcolors[0],"campfire")
                    .addTo(content).pos(250,400);

        v.tree5.music5 = frame.asset("campfire.mp3");


                    var t6 = v.tree6 = new Tree(model.lcolors[5],model.tcolors[0],"forest")
                        .addTo(content).pos(500,400);

        v.tree6.music6 = frame.asset("forest.mp3");

//music

var button =v.button=new Button({
   label:"Reset",
   width:100,
   height:70,
   color:model.colors[0],
   rollColor:"MediumOrchid",
   borderWidth:3,
   borderColor:"violet",
   gradient:.3,
   corner:20
});
button.center(content);


    // frame.loadAssets("img/001.png");
    //  frame.on("complete", function() {
    //
    //     // app code goes here if waiting for assets
    //     var image = frame.asset("img/001.png");
    //     image.center(content);
    //     stage.update();
    //
    //  });

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs1 = new Tabs({
            tabs:["Music", "Timer"]
        }).addTo(page1);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout1 = v.layout1 = new Layout(page1,[
            {object:header, marginTop:5, backgroundColor:frame.blue},
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.grey, null, new Shape(), stage);
        layoutManager.add(layout1);




        // PAGE 2

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page2);
        var logo = new Label({
   text:"Set timer to close music",
   font:"courier",
}).center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page2);
        var button2 =v.button2=new Button({
           label:"10min",
           width:200,
           height:100,
           color:model.colors[1],
           gradient:.3,
           corner:20
        });
        button2.center(content).mov(0,-190);
        var button3 =v.button3=new Button({
           label:"20min",
           width:200,
           height:100,
           color:model.colors[1],
           gradient:.3,
           corner:20
        });
        button3.center(content).mov(0,-80);
        var button4 =v.button4=new Button({
           label:"30min",
           width:200,
           height:100,
           color:model.colors[1],
           gradient:.3,
           corner:20
        });
        button4.center(content).mov(0,30);
        var button5 =v.button5=new Button({
           label:"1h",
           width:200,
           height:100,
           color:model.colors[1],
           gradient:.3,
           corner:20
        });
        button5.center(content).mov(0,140);











        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs2 = new Tabs({
            tabs:["Music", "Timer"]
        }).addTo(page2);
        footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout2 = v.layout2 = new Layout(page2,[
            {object:header, marginTop:5, backgroundColor:frame.blue},
            {object:content, marginTop:5,backgroundColor:frame.blue},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.grey, null, new Shape(), stage);
        layoutManager.add(layout2);


    }

    return app;
}(app || {});
