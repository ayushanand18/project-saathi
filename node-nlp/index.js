const { ConsoleConnector } = require('@nlpjs/console-connector');
const { Nlp } = require('@nlpjs/nlp');
const { LangEn } = require('@nlpjs/lang-en-min');
const { fs } = require('@nlpjs/request');
const trainnlp = function(manager){
  manager.load('model.nlp')
  return;
}
const nlp = new Nlp({ languages: ['en'], threshold: 0.3 });
nlp.container.register('fs', fs);
nlp.use(LangEn);

const connector = new ConsoleConnector();
connector.onHear = async (parent, line) => {
  if (line.toLowerCase() === 'quit') {
    connector.destroy();
    process.exit();
  } else {
    const result = await nlp.process(line);
    if (result.answer){
      connector.say(result.answer);
    }
    else{
      connector.say('Could you please rephrase?')
    }
  }
};

(async () => {
  await trainnlp(nlp);
  connector.say('Say something!');
})();