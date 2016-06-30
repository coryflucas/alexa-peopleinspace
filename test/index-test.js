import test from 'ava';
import { handler as Skill } from '..';
import { Request } from 'alexa-annotations';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'PeopleInSpace launched!' }
      }
    });
  });
});

/*test('NumberOfPeopleInSpace intent', t => {
  const event = Request.intent('NumberOfPeopleInSpace').build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'There are 3 people in space' }
      }
    });
  });
});

test('WhoIsInSpace intent', t => {
  const event = Request.intent('WhoIsInSpace').build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Steve' },
        card: { type: 'Simple', title: 'People In Space', content: 'Steve' }
      }
    });
  });
});*/
