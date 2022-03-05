const fs = require('fs');

module.exports = async function trainnlp(manager) {
  if (fs.existsSync('model.nlp')) {
    manager.load('model.nlp');
    return;
  }
  manager.addDocument('en', 'say about you', 'agent.whoami');
  manager.addDocument('en', 'why are you here', 'agent.whoami');
  manager.addDocument('en', 'what is your personality', 'agent.whoami');
  manager.addDocument('en', 'describe yourself', 'agent.whoami');
  manager.addDocument('en', 'tell me about yourself', 'agent.whoami');
  manager.addDocument('en', 'tell me about you', 'agent.whoami');
  manager.addDocument('en', 'what are you', 'agent.whoami');
  manager.addDocument('en', 'who are you', 'agent.whoami');
  manager.addDocument('en', 'i want help', 'agent.askhelp');
  manager.addDocument('en', 'help me please', 'agent.askhelp');
  manager.addDocument('en', 'sos', 'agent.askhelp');
  manager.addDocument('en', 'please i want urgent help', 'agent.askhelp');
  manager.addDocument('en', 'how can i', 'agent.guide');
  manager.addDocument('en', 'how to', 'agent.guide');
  manager.addDocument('en', 'how can i seek help', 'agent.guide');
  manager.addDocument('en', 'help guide', 'agent.guide');
  manager.addDocument('en', 'how to use help function', 'agent.guide');
  manager.addDocument('en', 'how to reach ngo', 'agent.guide');
  manager.addDocument('en', 'how to reach police', 'agent.guide');
  manager.addDocument('en', 'you have a bug', 'agent.foundbug');
  manager.addDocument('en', 'you are little buggy', 'agent.foundbug');
  manager.addDocument('en', 'you are not good', 'agent.foundbug');
  manager.addDocument('en', 'i have a problem with you', 'agent.foundbug');
  manager.addDocument('en', 'i found a bug', 'agent.foundbug');
  manager.addDocument('en', 'do you have any bugs', 'agent.foundbug');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  manager.addDocument('en', ' ', ' ');
  
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  console.log('Trained Successfully');

  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. How else may I help you with?");
  manager.addAnswer('en', 'agent.guide', "With Saathi, you can seek help anytime from anywhere, with full privacy and security. To get started, just type 'I want help' or a 'hello' and follow the prompts. We will generate a 16 digit code for you, save it because you will need it for all future correspondence related to your case. Open up your feelings, and if you want then allow for a human assistance through our partner NGOs or legal assistance through police. We will ask for your email to contact you later, but that's totally optional. How else may I help you with?");
  manager.addAnswer('en', 'agent.askhelp', "Saathi is here to support you at the time of your need.");
  manager.addAnswer('en', 'agent.foundbug', "It's really disappointing to hear this. But, thank you for figuring one out. Please fill in the details in the contact form. We'll be glad to get back to you. Some of our valuable users stand a chance to win cool gifts! How else may I help you with?");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  manager.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up their bad situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!");
  
  manager.save();
};