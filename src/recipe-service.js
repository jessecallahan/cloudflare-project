export class Recipe {
  async getRecipe() {
    try {
      let response = await fetch(`https://cfw-takehome.developers.workers.dev/api/variants`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (e) {
      return false;
    }
  }
}