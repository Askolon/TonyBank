import { observable, makeObservable } from 'mobx';
import Requests from '../../../../services/requests';

class ContactsStore {
    data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
    });
  }

  fetchData = async () => {
    try {
      // Make a network request using fetch or axios
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Update the MobX store with the received data
      this.data = result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
}

export default ContactsStore;
