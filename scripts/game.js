class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.timer = 60;

    this.player = new Player(this);

    this.scoreboard = new Scoreboard(this);

    this.timebar = new Timebar(this);
  }

  runLogic() {
    this.player.runLogic();
    this.scoreboard.runLogic();
    this.timebar.runLogic();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
    this.scoreboard.paint();
    this.timebar.paint();
  }

  loop() {
    // Run logic
    this.runLogic();

    // Clean
    this.clean();

    // Paint
    this.paint();

    //   setTimeout(() => {
    //     this.loop();
    //   }, 600);
  }
}