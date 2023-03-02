const { ButtonBuilder } = require('discord.js');

module.exports = {
  disableButtons(components) {
    for (let x = 0; x < components.length; x++) {
      for (let y = 0; y < components[x].components.length; y++) {
        components[x].components[y] = ButtonBuilder.from(components[x].components[y]);
        components[x].components[y].setDisabled(true);
      }
    }
    return components;
  }
}