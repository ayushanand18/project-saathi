// a sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// Declaring all required elements
$root = document.querySelector('.root');
$chatSend = document.querySelector('.chatSend');
$userSaying = document.querySelector('.userSaying');
$suggestionArea = document.querySelector('.suggestionArea');
$otherArea = document.querySelector('.otherArea');$botAvatar = document.createElement('img');
$botAvatar.setAttribute('src','https://cdn.iconscout.com/icon/premium/png-512-thumb/chatbot-2552857-2138474.png');
$botAvatar.setAttribute('class','botAvatar');
$userAvatar = document.createElement('img');
$userAvatar.setAttribute('src','https://cdn.iconscout.com/icon/free/png-512/woman-1285-879839.png');
$userAvatar.setAttribute('class','userAvatar');

Context = 'attack.ask';
digcode16 = '1111198198928298';
function enterkey(e){ // enter key is send and clear the field
    if (e.keyCode==13){
        $chatSend.click()
    }
}

const { containerBootstrap, Nlp, LangEn, fs } = window.nlpjs;

(async () => {
    const container = await containerBootstrap();
    container.register('fs',fs)
    container.use(Nlp);
    container.use(LangEn);
    const nlp = container.get('nlp');
    nlp.settings.autoSave = false;
    nlp.addLanguage('en');

    nlp.addDocument('en', 'say about you', 'agent.whoami');
    nlp.addDocument('en', 'why are you here', 'agent.whoami');
    nlp.addDocument('en', 'what is your personality', 'agent.whoami');
    nlp.addDocument('en', 'describe yourself', 'agent.whoami');
    nlp.addDocument('en', 'tell me about yourself', 'agent.whoami');
    nlp.addDocument('en', 'tell me about you', 'agent.whoami');
    nlp.addDocument('en', 'what are you', 'agent.whoami');
    nlp.addDocument('en', 'who are you', 'agent.whoami');
  nlp.addDocument('en', 'i was abused', 'agent.askhelp');
  nlp.addDocument('en', 'i was raped', 'agent.askhelp');
  nlp.addDocument('en', 'i am feeling bad', 'agent.askhelp');
  nlp.addDocument('en', 'i want help', 'agent.askhelp');
  nlp.addDocument('en', 'help me please', 'agent.askhelp');
  nlp.addDocument('en', 'sos', 'agent.askhelp');
  nlp.addDocument('en', 'please i want urgent help', 'agent.askhelp');
  nlp.addDocument('en', 'how can i', 'agent.guide');
  nlp.addDocument('en', 'how to', 'agent.guide');
  nlp.addDocument('en', 'how can i seek help', 'agent.guide');
  nlp.addDocument('en', 'help guide', 'agent.guide');
  nlp.addDocument('en', 'how to use help function', 'agent.guide');
  nlp.addDocument('en', 'how to reach ngo', 'agent.guide');
  nlp.addDocument('en', 'how to reach police', 'agent.guide');
  nlp.addDocument('en', 'you have a bug', 'agent.foundbug');
  nlp.addDocument('en', 'you are little buggy', 'agent.foundbug');
  nlp.addDocument('en', 'you are not good', 'agent.foundbug');
  nlp.addDocument('en', 'i have a problem with you', 'agent.foundbug');
  nlp.addDocument('en', 'i found a bug', 'agent.foundbug');
  nlp.addDocument('en', 'do you have any bugs', 'agent.foundbug');
  nlp.addDocument('en', 'ha ha ha', 'agent.emotionshaha');
  nlp.addDocument('en', 'lol', 'agent.emotionshaha');
  nlp.addDocument('en', 'omg', 'agent.emotionshaha');
  nlp.addDocument('en', 'wow thats amazing', 'agent.emotionshaha');
  nlp.addDocument('en', 'incredible ha ha laugh wow', 'agent.emotionshaha');
  nlp.addDocument('en', 'wow', 'agent.emotionshaha');
  nlp.addDocument('en', 'thanks a lot', 'agent.thanks');
  nlp.addDocument('en', 'thank you so much', 'agent.thanks');
  nlp.addDocument('en', 'how may i thank you', 'agent.thanks');
  nlp.addDocument('en', 'you are thank you', 'agent.thanks');
  nlp.addDocument('en', 'what is abuse', 'agent.whatisabuse');
  nlp.addDocument('en', 'is abuse criminal', 'agent.whatisabuse');
  nlp.addDocument('en', 'what is rape', 'agent.whatisabuse');
  nlp.addDocument('en', 'what is torture', 'agent.whatisabuse');
  nlp.addDocument('en', 'why am i tortured', 'agent.whatisabuse');
  nlp.addDocument('en', 'why was i abused', 'agent.whatisabuse');
  nlp.addDocument('en', 'how are you', 'agent.howru');
  nlp.addDocument('en', 'are you fine', 'agent.howru');
  nlp.addDocument('en', 'are you doing good', 'agent.howru');
  nlp.addDocument('en', 'good morning', 'agent.howru');
  nlp.addDocument('en', 'what your mood', 'agent.howru');
  nlp.addDocument('en', 'something new', 'agent.whatsnew');
  nlp.addDocument('en', 'latest update', 'agent.whatsnew');
  nlp.addDocument('en', 'what is in the latest update', 'agent.whatsnew');
  nlp.addDocument('en', 'what new in this update', 'agent.whatsnew');
  nlp.addDocument('en', 'can you give me some tips', 'agent.tips');
  nlp.addDocument('en', 'what if i am abused', 'agent.tips');
  nlp.addDocument('en', 'how to seek help', 'agent.tips');
  nlp.addDocument('en', 'how can i fight', 'agent.tips'); 
  nlp.addDocument('en', 'how to delete my data','agent.deleteData');
  nlp.addDocument('en', 'delete my data whatever you have','agent.deleteData');
  nlp.addDocument('en' , 'who created you', 'agent.creator');
  nlp.addDocument('en' , 'who made you', 'agent.creator');
  nlp.addDocument('en' , 'who developed you who are the developers', 'agent.creator');
  nlp.addDocument('en' , 'tell me about your owner', 'agent.creator');

  nlp.addAnswer('en', 'agent.whoami', "Hi, I am Saathi! I want to empower every person to open up about their unpleasant situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. How else may I help you with?");
  nlp.addAnswer('en', 'agent.guide', "With Saathi, you can seek help anytime from anywhere, with full privacy and security. To get started, just type 'I want help' or a 'hello' and follow the prompts. We will generate a 16 digit code for you, save it because you will need it for all future correspondence related to your case. Open up your feelings, and if you want then allow for a human assistance through our partner NGOs or legal assistance through police. We will ask for your email to contact you later, but that's totally optional. How else may I help you with?");
  nlp.addAnswer('en', 'agent.askhelp', "Saathi is here to support you at the time of your need.");
  nlp.addAnswer('en', 'agent.foundbug', "It's really disappointing to hear this. But, thank you for figuring one out. Please fill in the details in the contact form. We'll be glad to get back to you. Some of our valuable users stand a chance to win cool gifts! How else may I help you with?");
  nlp.addAnswer('en', 'agent.emotionshaha', "It is great when I see you happy... What else can i help you with?");
  nlp.addAnswer('en', 'agent.thanks', "You are always welcome... Well, What next you want to know?");
  nlp.addAnswer('en', 'agent.whatisabuse', "We are on a mission to stop unreported abuses! Abuse is the violation of a being, unfair and unjust. Abuse can come in many forms, such as: physical or verbal maltreatment, injury, assault, violation, or any type of aggression. Its a criminal offence, and we strictly encourage everyone to report it. In case you want to seek help from us, please feel free - I am your Saathi.");
  nlp.addAnswer('en', 'agent.howru', "I am doing great ! and hope you too... How may I help you today?");
  nlp.addAnswer('en', 'agent.whatsnew', "Hey, I'm really glad to hear your voice! We continue to serve you better with every release. With this release we bring you some new voice design updates and updated varied responses. We've added some additional help options and our algorithm are more accurate. How may I help you today?");
  nlp.addAnswer('en', 'agent.tips', "We are on a mission to deliver justice to every victim! We dont want bad things to happen with you, but unfortunately if it happens, we strongly encourage you to report it immediately. If its a workplace, report your HR. If its a school, talk to the incharge or if in a public place, get to police. Save evidences if you have. But keep in mind even when nobody hears you, we are always there to help you out. We can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. If you wish to report now, please type a 'hello' or SOS. How may I help you today?");
  nlp.addAnswer('en','agent.deleteData', "We appreciate your request for deleting your data, but we want to make sure that we never collect any personally identifiabile data anytime you talk to us but only your email when you provide us for partner assistance. If you want to use delete any of your data we have, please fill out the form available on our homepage. How may I help you next?")
  nlp.addAnswer('en','agent.creator', "Two noble people on Earth created me with the goal of stopping unreported abuses. Thank you for asking about me! I'm Saathi Bot - always there to help you out. How may I help you? ")
  
  await nlp.train();

    
// now starts the document
console.log('Please do not change anything here! If you are asked to by anybody please do not do so. You are not required to change anything here in order to register your complaint!')

// The Welcome Event
var $newBot = document.createElement('div');
$newBot.id = 'newBot'
var botT = 'Hello! This is Saathi, your helping hand in need! I know you might not be feeling well at the moment, but please feel free to talk to me. If you are offended, or witnessed any harassment, please nod a yes for my help. Or if you had contacted us previously and have a 16 digit code, please say "I have already".'
suggestionChips=['Yes','No',"I Have Already", "Skip"]
$newBot.textContent = botT;
$root.appendChild($botAvatar);
$root.appendChild($newBot);
function doItHere(e){
    $userSaying.value=e.target.getAttribute('val');
    $chatSend.click()
}
if (suggestionChips.length==0){
    $suggestionArea.innerHTML=''
    $userSaying.disabled=false
    $otherArea.style.display='block';
}
else if (suggestionChips.length>0){
    $suggestionArea.innerHTML=''
    $userSaying.disabled=true
    $otherArea.style.display='none'
    // $chatSend.disabled=true
for (var i in suggestionChips){
    $suggestChip = document.createElement('div');
    $suggestChip.className='suggestChips';
    $suggestChip.setAttribute('val',suggestionChips[i]);
    $suggestChip.textContent = suggestionChips[i];
    $suggestionArea.appendChild($suggestChip);
    $suggestChip.addEventListener('click', function(e){
        doItHere(e)
    })
}}
// After every hit
$chatSend.addEventListener('click',async function(){
    if ($userSaying.value!=''){
        $botAvatar = document.createElement('img');
        $botAvatar.setAttribute('src','https://cdn.iconscout.com/icon/premium/png-512-thumb/chatbot-2552857-2138474.png');
        $botAvatar.setAttribute('class','botAvatar');
        $userAvatar = document.createElement('img');
        $userAvatar.setAttribute('src','https://cdn.iconscout.com/icon/free/png-512/woman-1285-879839.png');
        $userAvatar.setAttribute('class','userAvatar');

    $newUser = document.createElement('div');
    $newUser.id = 'newUser'
    userT = $userSaying.value
    $newUser.textContent = userT;
    $root.appendChild($userAvatar);
    $root.appendChild($newUser);
    suggestionChips =[]
    lis = await chatProcess(Context,userT,digcode16);
    Context= lis[0];
    botT = lis[1];
    suggestionChips = lis[2];
    digcode16 = lis[3];    
    $root.appendChild($botAvatar);
    for (var k in botT){
        $newBot = document.createElement('div');
        $newBot.id = 'newBot'
        if (botT[k]){
            if(botT[k]=='Saathi is here to support you at the time of your need.'){
                botT[k]='Hello! This is Saathi, your helping hand in need! I know you might not be feeling well at the moment, but please feel free to talk to me. If you are offended, or witnessed any harassment, please nod a yes for my help. Or if you had contacted us previously and have a 16 digit code, please say "I have already".'
                suggestionChips = ["Yes","No","I Have Already","Skip"]
                Context = 'attack.ask'
            }
            $newBot.innerHTML = botT[k];
        }
        else{
            $newBot.innerHTML = "Sorry, I couldn't get you. Could you please rephrase?";
            updateFallback(userT,now);
        }
        $root.appendChild($newBot);
    }
    $userSaying.value=''
    $root.scrollTop = $root.scrollHeight;
    if (Context =='exit'){
        $userSaying.placeholder ='Thank you for interacting with us!'
        $userSaying.disabled=true
        $otherArea.style.display='none'
        $suggestionArea.innerHTML=''
    }
    else if (suggestionChips.length==0){
        $suggestionArea.innerHTML=''
        $userSaying.disabled=false
        $otherArea.style.display='block'
    }
    else if (suggestionChips.length>0){
        $suggestionArea.innerHTML=''
        $userSaying.disabled=true
        $otherArea.style.display='none'
    for (var i in suggestionChips){
        $suggestChip = document.createElement('div');
        $suggestChip.className='suggestChips';
        $suggestChip.setAttribute('val',suggestionChips[i]);
        $suggestChip.textContent = suggestionChips[i];
        $suggestionArea.appendChild($suggestChip);
        $suggestChip.addEventListener('click', function(e){
            doItHere(e)
        })
    }}   
} 
});

// Training phrases
helloPhrases = ['hello','hi','hey','heya','hii','namaste','heyy','hell']
yesPhrases = ['yes','ya','y','yo']
noPhrases = ['no','na','none','n']
byePhrases = ['bye', 'ba bye','goodbye','nothing']
var userEmail;

async function chatProcess(Context,userT,digcode16){
    if (Context == 'start' && helloPhrases.includes(userT.toLowerCase())==true){
        botT = ['Hello! This is Saathi, your helping hand in need. I know you might not be feeling well at the moment, but please feel free to talk to me. If you are offended, or witnessed any harassment, please nod a yes for my help. Or if you had contacted us previously and have a 16 digit code, please say "I have already".']
        suggestionChips = ["Yes","No","I Have Already", "Skip"]
        Context = 'attack.ask'
    }
    else if (Context == 'attack.ask' && userT == "Skip"){
        botT = ["We are on a mission to stop unreported abuses! With Saathi, you can report abuse instances and we will help you out in every possible way. You can also enquire us about tips to fight abuse or can lodge a complaint. How may I help you today?"]
        suggestionChips=[]
        Context='start'
    }
    else if (Context == 'attack.ask' && yesPhrases.includes(userT.toLowerCase())==true) {
        botT = ['I totally understand your state of mind right now. And I am ready to help you out in the matter. But before we move, I would like to ask, <b>are you reporting for self or this happened to someone else?</b> We encourage self reporting to provide the best support.']
        suggestionChips = ['For Myself', 'For Someone else']
        Context = 'attack.cnfy'
    }
    else if (Context == 'attack.ask' && noPhrases.includes(userT.toLowerCase())==true) {
        botT = ['Thank you for reaching us! Team Saathi wants to empower every person to open up about about their unpleasant situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but we can also connect you with our partner NGOs for human assistance and can also help reporting it to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!']
        suggestionChips = []
        Context = 'exit'
    }
    else if (Context == 'attack.ask' && userT.toLowerCase()=='i have already') {
        botT = ['Alright. We are hope that you are feeling better than the last time we had you. <b>Please input the 16 digit code.</b>']
        Context = 'havealready16dig'
        suggestionChips=[]
    }
    else if (Context =='havealready16dig'){
        suggestionChips=[]
        digcode16 = userT
        botT = ['Thank you for providing your 16 digit code. Please feel free to add any other detail you remember to your previous statement.']
        Context = 'existingAddDesc'
    }
    else if (Context =='existingAddDesc'){
        botT = ['Thank you for showing this much courage. I am your friend, none of your information will be public without your consent. We never ask for your personal data neither will we in future.<br/>',
        '<b>If you still want to add details, please say yes. If you do not wish to, reply with a no.</b>']
        Context = 'attack.cnf.tellask'
        suggestionChips = ['No','Yes']
    }
    else if (Context =='attack.cnfy' && ['For Myself', 'For Someone else'].includes(userT)==true){
        botT = ['We are holding your hand tightly at this time of your need. We would like to contact you back with a follow-up human or legal assistance for this we will be generating a 16 digit code which will popup after you confirm. This will help us connect with you without any personally identifiable information. Privacy is at the core of our app. <b>Please say yes to proceed.</b>']
        suggestionChips = ['Yes','No']
        Context = 'attack.cnf.16dg'
    }
    else if (Context =='attack.cnf.16dg' && yesPhrases.includes(userT.toLowerCase())==true){
        digcode16 = new Date().getTime();
        digcode16 = digcode16.toString()+'234';
        botT = ['Here is your 16 digit code. <br/><strong><center>'+ digcode16+'</center></strong>This code has been copied to your clipboard by default. If you are done saving it, please say yes.']
        navigator.clipboard.writeText(digcode16);
        suggestionChips = ['Yes']
        Context = 'attack.cnf.16dgy'
    }
    else if (Context =='attack.cnf.16dg' && noPhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you so much for getting to us. We are sad that you did not want to create a 16 digit code we wont be able to provide follow up support to you but never the less, take a long deep breath and build up same courage. Open up whatever you want to say, we will hear you. Please tell us.']
        Context = 'attack.cnf.tell1'
        suggestionChips=[]
    }
    else if (Context =='attack.cnf.16dgy' && yesPhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you once again for holding down. Now take a long deep breath and build the courage! Open up whatever you have to speak about what happened to you. Do not hesitate, to add everything you want us to know. We have held your hand tightly, we are with you at every step! <b>Please tell us.</b>']
        Context = 'attack.cnf.tell1'
        suggestionChips=[]
    }
    else if (Context =='attack.cnf.tell1'){
        botT = ['Thank you for showing this much courage. I am your friend, none of your information will be public in any case I promise. We do not ask for your personal data neither will we in future.',
        'If you still want to add details please say yes. If you do not wish so, reply with a no.']
        now = new Date().getTime()
        updateDesc(userT,now)
        suggestionChips = ['No','Yes']
        Context = 'attack.cnf.tellask'
    }
    else if (Context =='attack.cnf.tellask' && noPhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you for trusting us! We support you during your tough time, but we want you to get calm. Now that you have told all that you know, the ball is in our court and we will try everything possible to get you justice. We may report this to a nearby NGO for human assistance but only if you allow us to. <b>If you want human assistance, please tap a yes. If no, then tap no.</b>']
        suggestionChips=['Yes','No']
        Context = 'attack.cnf.comp'
    }
    else if (Context == 'attack.cnf.tellask' && yesPhrases.includes(userT.toLowerCase())==true){
        botT = ['Please move forward and speak up.']
        Context = 'attack.cnf.tell2'
        suggestionChips=[]
    }
    else if (Context == 'attack.cnf.tell2'){
        botT=['Thank you for your details! We support you during your tough time, but we want you to get calm. Now that you have told all that you know, the ball is in our court and we will try everything possible to get you justice. We may report this to a nearby NGO for human assistance but only if you allow us to. <b>If you want human assistance, please tap a yes. If no, then type no.</b>']
        now = new Date().getTime()
        updateDesc(userT,now)
        suggestionChips=['Yes','No']
        Context = 'attack.cnf.comp'
    }
    else if (Context == 'attack.cnf.comp' && yesPhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you for providing your consent, your information will not be shared with the NGO now, but in order for it to contact you we request you to <b>please share your Email ID where out partner NGO might contact you</b>. Your information will not be shared by us to the NGO until you allow us to, but the NGO will ask for your 16 digit code in its email. Only when you provide the code they will be able to access hear your ordeal.']
        Context = 'attack.email.ngo'
        suggestionChips=[]
    }
    else if(Context == 'attack.email.ngo'){
        botT = ['Thank you so much! Any harassment or bullying is a criminal act. <b>If you want us to report the matter to the legal authorities, please say yes</b>. Again, your information will not be shared until you share your 16 digit code with them. <b>If you do not want this, tap no.</b>']
        userEmail = userT
        ngoUpdate(digcode16,'yes',userEmail);
        suggestionChips = ['Yes','No']
        Context = 'attack.police.ask'
    }
    else if (Context == 'attack.cnf.comp' && noPhrases.includes(userT.toLowerCase())==true){
        botT = ['We acknowledge your displeasure and accept it. Human assistance from our partner organization is safe and private. Your information will not be shared until you agree to. But if it has been denied, then we respect your opinion.',
        'Harassment or bullying of any kind is a criminal act. If you want us to provide you legal assistance through police, <b>please say yes or else say no.</b>']
        ngoUpdate(digcode16,'no');
        suggestionChips = ['Yes','No']
        Context = 'attack.police.ask'
        $userSaying.disabled=true
    }
    else if (Context == 'attack.police.ask' && yesPhrases.includes(userT.toLowerCase())==true && userEmail!=null){
        botT = ['Thank you for your ascent. We support you in all your decisions and situations, please remain strong while lend a human help to you, in case you have agreed to.',
        'If you wish to seek any other help from us, please let us know. We\' be glad to help you! If nothing else, please say "I have nothing" and we will close this session for you.']
        policeUpdate(digcode16,'yes',userEmail);
        suggestionChips=[]
        Context =  'start'
    }
    else if(Context == 'attack.police.ask' && yesPhrases.includes(userT.toLowerCase())==true && userEmail==null){
        botT = ['Thank you for your ascent. We support you in all your decisions and situations, please remain strong while lend a human help to you in case you have agreed to. Please also provide your email so that legal authorities can contact you.']
        suggestionChips=[]
        Context =  'police.email.ask'
    }
    else if(Context == 'police.email.ask'){
        botT = ['If you wish to seek any other help from us, please let us know. We\' be glad to help you! If nothing else, please say "I have nothing" and we will close this session for you.']
        userEmail = userT
        policeUpdate(digcode16,'yes',userEmail);
        suggestionChips=[]
        Context='start'
    }
    else if (Context == 'attack.police.ask' && noPhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you for your response. We acknowledge that you do not want legal assistance through the police and we respect it. But when police tries to help you through us, we always make sure that there is no intimidation. Strong judicial oversight is always maintained through partner organizations. But never mind, in case you want to know anything else. Please let us know.']
        policeUpdate(digcode16,'no');
        Context =  'start'
        suggestionChips=[]
    }
    else if (Context == 'start' && userT.toLowerCase() == 'i have nothing'){
        botT = ['Thank you for reaching us! Team Saathi wants to empower every person to open up about their unpleasant situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!']
        Context = 'exit'
        suggestionChips=[]
    }
    else if (Context == "start" && byePhrases.includes(userT.toLowerCase())==true){
        botT = ['Thank you for reaching us! Team Saathi wants to empower every person to open up about their unpleasant situations that occur whether at workplace or in public. We not only provide you support during the time you need us the most, but can also connect you with our partner NGO for human assistance and can also help report to legal authorities. If you have a friend in need, do spread the word about us. Thanks, Team Saathi!']
        suggestionChips = []
        Context = 'exit'
    }
    else {
        boT = 'Couldn\'t get you please rephrase.'
        botTT = await nlp.process(userT);
        botT=[await botTT.answer]
        console.log(botT)
        now  = new Date().getTime()
        suggestionChips=[]
    }
    return [Context, botT, suggestionChips,digcode16]
};
function ngoUpdate(digcode16,status,email){
    db.collection("ngo").add({
        status: status=='yes'?true:false,
        time: new Date().getTime(),
        email:email==null?false:email,
        dgcode16:digcode16
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};
function policeUpdate(digcode16,status,email){
    db.collection("police").add({
        status: status=='yes'?true:false,
        time: new Date().getTime(),
        email:email==null?false:email,
        dgcode16:digcode16
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};
})();