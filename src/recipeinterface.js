import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Recipe } from './recipe-service.js';



$(document).ready(function () {
  var scoreboard = { score1: 0, score2: 0, total: 0 };


  $('#ABButton').click(function () {

    (async () => {
      let newRecipe = new Recipe();
      const recipeResponse = await newRecipe.getRecipe();
      getElements(recipeResponse);
    })();


    function getElements(recipeResponse) {
      const website1 = recipeResponse.variants[0];
      const website2 = recipeResponse.variants[1];

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
      $("#percentage1").text(Math.ceil(percentage1) + "%"); // 95.0
      var percentage2 = scoreboard.score2 * 100 / scoreboard.total;
      $("#percentage2").text(Math.ceil(percentage2) + "%"); // 95.0
      $("#total").text(scoreboard.total);



    }


  });
});