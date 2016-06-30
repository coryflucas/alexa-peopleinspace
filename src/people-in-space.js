import { Skill, Launch, Intent } from 'alexa-annotations';
import { say } from 'alexa-response';
import fetch from 'isomorphic-fetch';

@Skill
export default class PeopleInSpace {
  @Launch
  launch() {
    return say('PeopleInSpace launched!');
  }

  @Intent('NumberOfPeopleInSpace')
  numberOfPeopleInSpace() {
    const url = 'http://www.howmanypeopleareinspacerightnow.com/peopleinspace.json';
    return fetch(url).then(response => response.json()).then(({ number }) => {
      return say(`There are ${number} people in space`);
    });
  }

  @Intent('WhoIsInSpace')
  whoIsInSpace() {
      const url = 'http://www.howmanypeopleareinspacerightnow.com/peopleinspace.json';
      return fetch(url).then(response => response.json()).then(({ people }) => {
        let names = people.map(person => person.name);
        return say(`${names.join(', ')} are in space`)
            .card({ title:'People In Space', content:`${names.join('\n')}` });
      });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return say('You can ask how many people are in space or who is in space.');
  }
}
