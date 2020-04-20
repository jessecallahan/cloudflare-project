import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Variants } from './variant-service.js'

$(document).ready(function () {
  var scoreboard = { score1: 0, score2: 0, total: 0 };


  $('#ABButton').click(function () {

    (async () => {
      let newResponse = new Variants();
      const Response = await newResponse.getVariants();
      getElements(Response);
    })();


    function getElements(Response) {
      const website1 = Response.variants[0];
      const website2 = Response.variants[1];

      var ABTest = Math.random() >= 0.5;
      if (ABTest) {
        scoreboard.total++;
        scoreboard.score1++;
        $("#result1").show();
        $("#result1").html(website1);
        $("#result2").hide();

      }
      else {
        scoreboard.total++;
        scoreboard.score2++;
        $("#result2").show();
        $("#result2").html(website2);
        $("#result1").hide();
      }
      $("#score1").text(scoreboard.score1);
      $("#score2").text(scoreboard.score2);
      var percentage1 = scoreboard.score1 * 100 / scoreboard.total;
      $("#percentage1").text(Math.ceil(percentage1) + "%");
      var percentage2 = scoreboard.score2 * 100 / scoreboard.total;
      $("#percentage2").text(Math.ceil(percentage2) + "%");
      $("#total").text(scoreboard.total);



    }


  });
});