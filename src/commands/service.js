let serviceCommand = __ServerBOT.registerCommand('service', (msg, args) => {
  return '**!help** service';
}, {
  description: 'Manages registered services',
  fullDescription: 'Use service list, start, stop and restart to manage services',
  usage: '<subcommand> <service>',
});

serviceCommand.registerSubcommand('list', (msg, args) => {
  let text = '';
  for (let service of __ServerBOT.config.services) {
    if (service.status === undefined) {
      text = text + `:question: ${service.name} (${service.id})\n`;
    } else {
      text = text + `${service.status ? ':white_check_mark:' : ':x:'} ${service.name} (${service.id})\n`;
    }
  }
  return text;
}, {
  description: 'Lists registered services',
  fullDescription: 'The bot will list the registered services followed by their ID.',
  usage: '',
});

__ServerBOT.registerCommandAlias('server', 'service'); // Alias !server to !service
